import React from 'react';

const WindWidget = () => {
  // URL generada con coordenadas de Máncora, forzando unidades en nudos (kt) y modelo ECMWF
  const windyUrl = "https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=kt&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=-4.108&lon=-81.061&detailLat=-4.108&detailLon=-81.061&detail=true";

  return (
    <section className="bg-white py-12 transition-colors duration-300 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Estado del Viento en Máncora (Tiempo Real)
        </h2>
        
        {/* Contenedor del Iframe con Tailwind para hacerlo Responsive */}
        <div className="relative mx-auto h-[500px] max-w-5xl overflow-hidden rounded-2xl bg-slate-100 shadow-lg dark:bg-slate-800">
          <iframe
            title="Pronóstico de Viento Máncora Kite Club"
            className="absolute left-0 top-0 h-full w-full border-0"
            src={windyUrl}
            sandbox="allow-scripts allow-same-origin allow-popups"
            loading="lazy"
          ></iframe>
        </div>
        
        {/* Nota legal y técnica */}
        <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
          Pronóstico proporcionado por Windy.com | Unidades expresadas en Nudos (Knots)
        </p>
      </div>
    </section>
  );
};

export default WindWidget;
