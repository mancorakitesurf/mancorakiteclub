require('dotenv').config();

const env = {
  port: Number(process.env.PORT) || 5000,
  siteUrl: process.env.SITE_URL || '',
};

module.exports = env;
