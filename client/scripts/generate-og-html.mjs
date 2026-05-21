import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEFAULT_SEO, SEO_ROUTES, toSiteUrl } from '../src/config/seoMeta.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientRoot = path.resolve(__dirname, '..')
const distRoot = path.join(clientRoot, 'dist')
const indexPath = path.join(distRoot, 'index.html')

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function removeManagedTags(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '')
    .replace(/\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, '')
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/\s*<link\s+rel=["']alternate["'][^>]*>/gi, '')
}

function buildMetaTags(routePath, meta) {
  const url = toSiteUrl(routePath)
  const image = toSiteUrl(meta.image || DEFAULT_SEO.image)
  const description = meta.description || DEFAULT_SEO.description
  const title = meta.title || DEFAULT_SEO.title
  const hreflang = meta.hreflang || DEFAULT_SEO.hreflang

  const alternateTags = Object.entries({
    en: hreflang.en,
    es: hreflang.es,
    fr: hreflang.fr,
    'x-default': hreflang.default,
  })
    .filter(([, href]) => Boolean(href))
    .map(
      ([lang, href]) =>
        `  <link rel="alternate" hreflang="${escapeHtml(lang)}" href="${escapeHtml(toSiteUrl(href))}" />`,
    )
    .join('\n')

  return [
    `  <title>${escapeHtml(title)}</title>`,
    `  <meta name="description" content="${escapeHtml(description)}" />`,
    `  <link rel="canonical" href="${escapeHtml(url)}" />`,
    alternateTags,
    `  <meta property="og:type" content="website" />`,
    `  <meta property="og:title" content="${escapeHtml(title)}" />`,
    `  <meta property="og:description" content="${escapeHtml(description)}" />`,
    `  <meta property="og:image" content="${escapeHtml(image)}" />`,
    `  <meta property="og:image:secure_url" content="${escapeHtml(image)}" />`,
    `  <meta property="og:image:type" content="image/webp" />`,
    `  <meta property="og:url" content="${escapeHtml(url)}" />`,
    `  <meta property="og:site_name" content="Mancora Kite Club" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `  <meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `  <meta name="twitter:image" content="${escapeHtml(image)}" />`,
  ]
    .filter(Boolean)
    .join('\n')
}

function injectMeta(html, routePath, meta) {
  const cleaned = removeManagedTags(html)
  const metaTags = buildMetaTags(routePath, meta)
  return cleaned.replace('</head>', `${metaTags}\n</head>`)
}

function toOutputIndex(routePath) {
  if (routePath === '/') return indexPath
  return path.join(distRoot, routePath.replace(/^\/+/, ''), 'index.html')
}

async function writeRouteHtml(baseHtml, routePath, meta) {
  const outputPath = toOutputIndex(routePath)
  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, injectMeta(baseHtml, routePath, meta), 'utf8')
}

const baseHtml = await readFile(indexPath, 'utf8')

await writeRouteHtml(baseHtml, '/', DEFAULT_SEO)

for (const { path: routePath, meta } of SEO_ROUTES) {
  await writeRouteHtml(baseHtml, routePath, meta)
}

console.log(`Generated Open Graph HTML for ${SEO_ROUTES.length + 1} routes.`)
