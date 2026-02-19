# Arquitectura Frontend (Máncora Kite Club)

## 1) Resumen

- Stack: React 19 + Vite 7 + React Router 7 + Tailwind CSS v4.
- Ubicación: `client/`.
- Rol: renderizado SPA, navegación SEO-safe por rutas limpias, composición de secciones Home y páginas EN/ES.

## 2) Cómo correr el frontend

- Desde monorepo:
  - `npm run dev` (levanta client + server en paralelo)
  - `npm run build` (build de frontend)
  - `npm run lint` (lint de frontend)
- Solo frontend:
  - `npm run dev --prefix client`
  - `npm run build --prefix client`
  - `npm run preview --prefix client`
- Scripts reales en `client/package.json`:
  - `dev`: `vite`
  - `build`: `vite build`
  - `lint`: `eslint .`
  - `preview`: `vite preview`

## 3) Estructura de carpetas

```text
client/
  index.html
  vite.config.js
  tailwind.config.js
  postcss.config.js
  eslint.config.js
  src/
    main.jsx
    App.jsx
    index.css
    styles/index.css
    app/
      App.jsx
      router.jsx
      layouts/MainLayout.jsx
      providers/I18nProvider.jsx
      providers/i18nContext.js
    pages/
      HomePage.jsx
      StandardPage.jsx
      NotFound.jsx
      ... páginas EN
      es/
        HomeEsPage.jsx
        ... páginas ES
    sections/
      common/
        Header.jsx
        Footer.jsx
        LanguageSwitch.jsx
      home/
        Hero.jsx
        Trips.jsx
        Stay.jsx
        ... bloques home
    components/
      SEO.jsx
      FloatingWhatsApp.jsx
      ui/
        Button.jsx
        Card.jsx
        Container.jsx
    lib/
      routes.js
      seo.js
    assets/
      Logo/
        LOGO-kite-new.png
        the-club-logo.png
      imagenes-home/
      imagenes-kitesurfing/
      imagenes-kitsurfing-lessons/
      imagenes-wingfoil/
```

- `src/app/*`: bootstrap de app, router y layout base.
- `src/pages/*`: composición por ruta.
- `src/sections/*`: bloques de página reutilizables por dominio (home/common).
- `src/components/*`: componentes globales y utilitarios UI/SEO.
- `src/lib/*`: utilidades de rutas y SEO.

## 4) Enrutamiento

- Definición central: `client/src/app/router.jsx` con `createBrowserRouter`.
- Layout principal para todas las rutas: `client/src/app/layouts/MainLayout.jsx`.
- Rutas EN + ES definidas explícitamente (ejemplo):
  - EN: `/`, `/learn/kitesurf`, `/equipment-rental`, `/kite-club-hotel`, etc.
  - ES: `/esp`, `/aprende/kitesurf/esp`, `/equipment/esp`, `/acommodation/hotel-kite/esp`, etc.
- Utilidades de idioma/paths: `client/src/lib/routes.js`.
- `LanguageSwitch` usa ese map para navegar EN<->ES: `client/src/sections/common/LanguageSwitch.jsx`.

**NO tocar rutas SEO-safe sin autorización**:

- `client/src/app/router.jsx`
- `client/src/lib/routes.js`
- Correspondencia de `hreflang/canonical` en páginas (`client/src/pages/**/*.jsx`)

## 5) Layout y theming

- Layout base: `client/src/app/layouts/MainLayout.jsx`.
- Dark mode por clase (`dark`) aplicada en el contenedor principal del layout.
- Tailwind config:
  - `darkMode: 'class'` en `client/tailwind.config.js`.
  - Tokens de color/fuentes (Playfair Display + Inter) definidos en config.
- CSS global:
  - `client/src/main.jsx` importa `client/src/styles/index.css`.
  - `client/src/styles/index.css` define `@theme`, `@custom-variant dark`, scrollbar y base styles.

## 6) UI Architecture

- Patrón principal:
  - `pages/*` orquesta bloques.
  - `sections/home/*` implementa contenido/bloques de Home.
  - `sections/common/*` contiene navegación/footer compartidos.
  - `components/ui/*` contiene primitives (`Button`, `Card`, `Container`).
- SEO por página:
  - `client/src/components/SEO.jsx` + `client/src/lib/seo.js`.
  - Cada página inyecta `title`, `description`, `canonicalPath`, `hreflang`.

## 7) Assets y estáticos

- Assets locales: `client/src/assets/**`.
- Logo solicitado:
  - `client/src/assets/Logo/LOGO-kite-new.png`
- Íconos:
  - `react-icons` (sin CDN).
- Público estático:
  - `client/public/` (ej. `vite.svg`).

## 8) Convenciones de código

- Extensiones activas reales: `.jsx` y `.js`.
- Router y layout dentro de `src/app/`.
- Páginas en `src/pages/` (subcarpeta `es/` para español).
- Secciones por dominio en `src/sections/`.
- Utilidades puras en `src/lib/`.
- Lint: `client/eslint.config.js` (reglas base + hooks + refresh).
- No hay `tsconfig.json` en `client/` actualmente.

## 9) Checklist para contribuir

- Antes de tocar rutas:
  - Verificar `client/src/app/router.jsx`.
  - Verificar maps EN/ES en `client/src/lib/routes.js`.
  - Verificar `canonicalPath` + `hreflang` en la página afectada.
- Para agregar nueva sección Home:
  - Crear componente en `client/src/sections/home/`.
  - Montarlo en `client/src/pages/HomePage.jsx` o `client/src/pages/es/HomeEsPage.jsx`.
  - Evitar cambios en `MainLayout.jsx` salvo que sea global y aprobado.
- Para componentes compartidos:
  - Usar `client/src/components/` o `client/src/components/ui/`.
- No romper consistencia de idioma:
  - Si se agrega ruta EN, definir su contraparte ES (y viceversa) en `client/src/lib/routes.js`.

## 10) FAQ corta

- ¿Dónde agrego un componente reutilizable?
  - `client/src/components/` o `client/src/components/ui/`.
- ¿Dónde está el hero de Home EN?
  - `client/src/sections/home/Hero.jsx`, montado en `client/src/pages/HomePage.jsx`.
- ¿Dónde están las rutas?
  - `client/src/app/router.jsx`.
- ¿Dónde se maneja EN/ES?
  - `client/src/lib/routes.js`, `client/src/app/providers/I18nProvider.jsx`, `client/src/sections/common/LanguageSwitch.jsx`.
- ¿Dónde está el layout global?
  - `client/src/app/layouts/MainLayout.jsx`.

## Zonas sensibles

- SEO-safe routes duplicadas en varias capas:
  - Router SPA: `client/src/app/router.jsx`
  - Map idioma EN/ES: `client/src/lib/routes.js`
  - Sitemap backend: `server/routes/sitemap.js`
  - Cualquier cambio de slug debe sincronizar las 3.
- Canonical/hreflang se setean manualmente por página; riesgo de inconsistencias si se olvida actualizar.
- `description` aún contiene placeholders (`TODO: contenido real`) en varias páginas; importante para SEO real.
- El import de estilos efectivo sale de `client/src/main.jsx` hacia `client/src/styles/index.css`; cambios paralelos en `client/src/index.css` pueden generar confusión si se asume que ese archivo gobierna todo.
