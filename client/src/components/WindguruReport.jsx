import React from 'react';

const WindguruReport = () => {
  // ID 209105 = Mancora Point (el que usa la comunidad local)
  const spotId = "209105";
  // Usamos el widget v3 oficial de Windguru
  const widgetUrl = `https://www.windguru.cz/widget/v3/index.php?id_spot=${spotId}&sty=m_spot&m_units=kts&m_wind=1&m_gusts=1&m_direction=1&m_temp=1&m_precip=1&m_cloud=1&m_waves=1&m_tide=1`;

  return (
    <section className="bg-background-light py-16 transition-colors duration-300 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            ESTADO DEL VIENTO Y OLAS
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Reporte técnico en tiempo real para Kitesurfistas en Máncora
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all dark:border-white/10 dark:bg-slate-900/50">
          {/* Contenedor con scroll horizontal para móviles */}
          <div className="overflow-x-auto overflow-y-hidden [WebkitOverflowScrolling:touch]">
            <div className="min-w-[800px]">
              <iframe 
                title="Windguru Mancora Forecast"
                src={widgetUrl}
                className="w-full"
                style={{ 
                  height: '450px', 
                  border: 'none' 
                }} 
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            Unidades en <strong className="text-primary">Nudos (kts)</strong> • Datos actualizados automáticamente por Windguru • Spot: Máncora Point
          </p>
        </div>
      </div>
    </section>
  );
};

export default WindguruReport;
