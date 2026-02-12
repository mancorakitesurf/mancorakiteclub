const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors()); // Permite que tu React (puerto 5173) hable con Node (puerto 5000)
app.use(express.json());

// Ruta de prueba
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: "¡Hola desde el backend de Node.js!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});