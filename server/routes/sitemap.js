const express = require('express');
const env = require('../config/env');

const router = express.Router();

const ROUTE_PATHS = [
  '/',
  '/learn/kitesurf',
  '/learn/wingfoil',
  '/kitesurfing',
  '/wingfoil',
  '/sup',
  '/equipment-rental',
  '/solo-surf',
  '/hostel',
  '/kite-club-hotel',
  '/4-stars-hotel',
  '/faq',
  '/blog',
  '/esp',
  '/aprende/kitesurf/esp',
  '/aprende/wingfoil/esp',
  '/kitesurfing/esp',
  '/wingfoil/esp',
  '/sup/esp',
  '/equipment/esp',
  '/solo-surf/esp',
  '/acommodation/hostal/esp',
  '/acommodation/hotel-kite/esp',
  '/acommodation/4-estrellas/esp',
  '/faq/esp',
  '/blog/esp',
];

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function buildBaseUrl(req) {
  if (env.siteUrl) {
    return env.siteUrl.replace(/\/+$/, '');
  }

  return `${req.protocol}://${req.get('host')}`;
}

router.get('/sitemap.xml', (req, res) => {
  const baseUrl = buildBaseUrl(req);
  const urls = ROUTE_PATHS.map((routePath) => {
    const absoluteUrl = `${baseUrl}${routePath}`;
    return `  <url><loc>${escapeXml(absoluteUrl)}</loc></url>`;
  }).join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
  ].join('\n');

  res.type('application/xml').send(xml);
});

module.exports = router;
