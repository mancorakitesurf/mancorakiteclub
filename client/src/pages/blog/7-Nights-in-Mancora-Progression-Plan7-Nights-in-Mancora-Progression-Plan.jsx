import SEO from "../../components/SEO";
import HeroProgressionKite from "../../sections/blogPage13/HeroProgressionKite";
import TechnicalBentoKite from "../../sections/blogPage13/TechnicalBentoKite";
import ItineraryDriftKite from "../../sections/blogPage13/ItineraryDriftKite";
import TacticalLoadoutKite from "../../sections/blogPage13/TacticalLoadoutKite";

function BlogPage13() {
    return (
        <main className="bg-[#031015] min-h-screen selection:bg-[#ff9069]/30 selection:text-white">
            <SEO
                title="7 Nights in Máncora: Progression Plan | The Kinetic Tide"
                description="A high-intensity, 7-day itinerary for intermediate riders. Shatter plateaus and master the waves of Northern Peru."
                canonicalPath="/blog/7-Nights-in-Mancora-Progression-Plan"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroProgressionKite />
            <TechnicalBentoKite />
            <ItineraryDriftKite />
            <TacticalLoadoutKite />
        </main>
    );
}

export default BlogPage13;