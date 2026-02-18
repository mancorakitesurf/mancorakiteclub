const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const trailingSlashRedirect = require('./middleware/trailingSlash');
const healthRoutes = require('./routes/health');
const saludoRoutes = require('./routes/saludo');
const sitemapRoutes = require('./routes/sitemap');

const app = express();

app.use(cors());
app.use(express.json());
app.use(trailingSlashRedirect);

app.use('/api', healthRoutes);
app.use('/api', saludoRoutes);
app.use(sitemapRoutes);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
