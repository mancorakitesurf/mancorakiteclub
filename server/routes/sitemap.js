const express = require('express');
const env = require('../config/env');

const router = express.Router();

const ROUTE_PATHS = [
  // CORE PAGES
  '/home',
  '/services',
  '/services/kitesurf-lessons',
  '/services/wingfoil-lessons',
  '/services/wave-riding-coaching',
  '/services/trips-downwinds',
  '/services/rent-gear',
  '/services/surf-sup',
  '/trips',
  '/trips/solo-surf',
  '/stay',
  '/build',
  '/faq',
  '/blog',
  '/contact',
  '/reviews',
  '/waves',
  '/beginners',

  // BLOG POSTS
  '/blog/chicama-peru-surf-trip',
  '/blog/pacasmayo-peru-the-ultimate-point-break-surf-guide',
  '/blog/north-surf-trip-peru',
  '/blog/paracas-vs-mancora-kitesurf-guide',
  '/blog/peru-kitesurf-north-vs-south',
  '/blog/mancora-vs-lobitos-kitesurf-comparison',
  '/blog/learn-kitesurfing-in-peru-mancora-beginner-guide',
  '/blog/kitesurf-vs-wingfoil-which-watersport-should-you-learn',
  '/blog/iko-certified-kitesurfing-school-why-it-matters'
];

// Generate localized paths
const LOCALIZED_PATHS = [];
ROUTE_PATHS.forEach(path => {
  LOCALIZED_PATHS.push(path); // en
  LOCALIZED_PATHS.push(`/esp${path}`); // es
  LOCALIZED_PATHS.push(`/fr${path}`); // fr
});

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
  const urls = LOCALIZED_PATHS.map((routePath) => {
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

router.get('/robots.txt', (req, res) => {
  const baseUrl = buildBaseUrl(req);
  const robots = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${baseUrl}/sitemap.xml`
  ].join('\n');

  res.type('text/plain').send(robots);
});

module.exports = router;
