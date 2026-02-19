# Arquitectura Backend (Máncora Kite Club)

## 1) Resumen

- Stack: Node.js + Express 5 (CommonJS).
- Ubicación: `server/`.
- Rol: exponer endpoints básicos (`/api/*`), redirección trailing slash SEO-safe y generación de `sitemap.xml`.

## 2) Cómo correr el backend

- Desde monorepo:
  - `npm run dev` (client + server)
  - `npm run start` (solo server en modo start)
- Solo backend:
  - `npm run dev --prefix server`
  - `npm run start --prefix server`
- Scripts reales en `server/package.json`:
  - `dev`: `node --watch index.js`
  - `start`: `node index.js`

## 3) Estructura de carpetas

```text
server/
  index.js
  package.json
  config/
    env.js
  middleware/
    trailingSlash.js
  routes/
    health.js
    saludo.js
    sitemap.js
    chatbot.js
```

- `index.js`: entrypoint Express, registro de middleware y rutas.
- `config/env.js`: carga variables de entorno vía `dotenv`.
- `middleware/trailingSlash.js`: normaliza URLs con redirect 301 sin slash final.
- `routes/*`: módulos de rutas HTTP.

## 4) Rutas/API

- Montaje en `server/index.js`:
  - `app.use('/api', healthRoutes)`
  - `app.use('/api', saludoRoutes)`
  - `app.use(sitemapRoutes)`
- Endpoints activos:
  - `GET /api/health` -> `{ ok: true }` (`server/routes/health.js`)
  - `GET /api/saludo` -> `{ msg: 'hola Sergio' }` (`server/routes/saludo.js`)
  - `GET /sitemap.xml` -> XML dinámico (`server/routes/sitemap.js`)
- `server/routes/chatbot.js` existe como placeholder y **no está montado**.

## 5) Middleware y seguridad

- Middleware globales en `server/index.js`:
  - `cors()` (abierto por defecto, sin whitelist explícita)
  - `express.json()`
  - `trailingSlashRedirect` (301 permanente)
- Seguridad avanzada (headers hardening, rate limit, auth) no está implementada en el estado actual.

## 6) Configuración y env vars

- Carga de entorno: `server/config/env.js` (`dotenv`).
- Variables utilizadas:
  - `PORT` (default `5000`)
  - `SITE_URL` (default `''`)
- No hay `.env.example` versionado en el repo actualmente.

## 7) Integración con frontend

- En desarrollo, Vite proxy en `client/vite.config.js`:
  - `'/api' -> 'http://localhost:5000'`
  - `'/sitemap.xml' -> 'http://localhost:5000'`
- Backend no sirve build estático del frontend en este repo; actúa como API + sitemap.
- `sitemap.xml` usa `SITE_URL` si existe; si no, construye URL desde request host/protocol.

## 8) Logging/errores

- Logging mínimo:
  - mensaje de arranque en `server/index.js`.
- No hay capa centralizada de manejo de errores (`error middleware`) en el estado actual.
- No hay estructura de logs por nivel (info/warn/error) ni observabilidad integrada.

## 9) Checklist para contribuir

- Para agregar un endpoint:
  - Crear módulo en `server/routes/`.
  - Montarlo explícitamente en `server/index.js`.
  - Mantener prefijo `/api` si es endpoint de aplicación.
- Para cambios SEO/rutas:
  - Si cambia slug público, sincronizar `server/routes/sitemap.js` con frontend:
    - `client/src/app/router.jsx`
    - `client/src/lib/routes.js`
- Para entorno:
  - Definir `PORT` y `SITE_URL` según ambiente.
- Validar que `trailingSlash` no rompa rutas de terceros antes de introducir nuevas superficies.

## 10) FAQ corta

- ¿Dónde está el entrypoint del backend?
  - `server/index.js`.
- ¿Dónde se configuran variables de entorno?
  - `server/config/env.js`.
- ¿Dónde se genera el sitemap?
  - `server/routes/sitemap.js` (`GET /sitemap.xml`).
- ¿Cómo se agregan rutas nuevas?
  - Nuevo archivo en `server/routes/` + `app.use(...)` en `server/index.js`.
- ¿Existe módulo chatbot activo?
  - No. `server/routes/chatbot.js` está como placeholder sin montaje.

## Zonas sensibles

- `server/middleware/trailingSlash.js` emite redirects 301:
  - Impacta SEO/caché; no modificar sin validar canonical strategy completa.
- `server/routes/sitemap.js` contiene lista manual de slugs:
  - Debe permanecer sincronizada con frontend para evitar URLs huérfanas o 404 SEO.
- CORS está abierto por defecto (`cors()` sin opciones):
  - válido para dev, pero sensible para producción.
- No hay manejo global de errores:
  - cualquier excepción no controlada puede devolver respuestas inconsistentes.
