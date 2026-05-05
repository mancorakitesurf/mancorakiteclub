import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.VITE_SERPAPI_KEY; 
const QUERY = "Mancora Kite Club";
const API_URL = `https://serpapi.com/search.json?engine=google_maps&q=${encodeURIComponent(QUERY)}&hl=es&api_key=${API_KEY}`;

// Función inteligente para convertir "Hace X meses" en días numéricos para poder ordenarlos
function parseRelativeDate(dateStr) {
  const str = dateStr.toLowerCase();
  if (str.includes("hora") || str.includes("minuto") || str.includes("recientemente")) return 0;
  if (str.includes("día") || str.includes("dia")) {
    let match = str.match(/\d+/);
    return match ? parseInt(match[0]) : 1;
  }
  if (str.includes("semana")) {
    let match = str.match(/\d+/);
    return match ? parseInt(match[0]) * 7 : 7;
  }
  if (str.includes("mes")) {
    let match = str.match(/\d+/);
    return match ? parseInt(match[0]) * 30 : 30;
  }
  if (str.includes("año") || str.includes("ano")) {
    let match = str.match(/\d+/);
    return match ? parseInt(match[0]) * 365 : 365;
  }
  return 9999; // Si no lo reconoce, lo manda al final
}

async function fetchReviews() {
  if (!API_KEY) {
    console.error('❌ ERROR: No has configurado VITE_SERPAPI_KEY en tu .env');
    process.exit(1);
  }

  try {
    console.log(`⏳ Extrayendo y ordenando las reseñas más recientes...`);
    
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!data.place_results || !data.place_results.user_reviews || !data.place_results.user_reviews.most_relevant) {
      throw new Error('No se encontraron reseñas relevantes.');
    }

    const rawReviews = data.place_results.user_reviews.most_relevant;

    const formattedReviews = rawReviews
      .map((review, index) => {
        const author = review.username || review.name || review.user?.name || "Usuario de la Tribu";
        
        // Avatar con fondo verde oscuro y letras crema (como en tus capturas)
        const photo = review.avatar || review.thumbnail || review.user?.thumbnail || `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=1A2421&color=F3F1E7`;
        
        const reviewText = review.description || review.snippet || review.summary || review.text || "";

        return {
          id: index + 1,
          author_name: author,
          profile_photo_url: photo,
          rating: review.rating || 5,
          text: reviewText,
          relative_time_description: review.date || "Recientemente"
        };
      })
      .filter(review => review.text.trim() !== "")
      // ORDENAMOS DE MÁS RECIENTE A MÁS ANTIGUO usando nuestra función
      .sort((a, b) => parseRelativeDate(a.relative_time_description) - parseRelativeDate(b.relative_time_description));

    const filePath = path.join(__dirname, 'src', 'data', 'reviews.json');
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(formattedReviews, null, 2));
    console.log(`✅ ¡Éxito! Se guardaron ${formattedReviews.length} reseñas frescas en src/data/reviews.json`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

fetchReviews();