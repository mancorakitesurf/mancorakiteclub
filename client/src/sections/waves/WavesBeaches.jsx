import { BEACHES } from './wavesContent.js'
import { useI18n } from '../../app/providers/i18nContext'

function WavesBeaches() {
  const { t } = useI18n()
  // Split beaches into layout groups
  const mancora = BEACHES.find((b) => b.name === 'Mancora')
  const losOrganos = BEACHES.find((b) => b.name === 'Los Organos')
  const caboBlanco = BEACHES.find((b) => b.name === 'Cabo Blanco')
  const lobitos = BEACHES.find((b) => b.name === 'Lobitos')
  const negritos = BEACHES.find((b) => b.name === 'Negritos')

  return (
    <section className="bg-background-dark py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {t('sections.waves.featuredBeaches')}
          </h2>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Row 1: Mancora (large left) + Los Organos & Cabo Blanco (stacked right) */}
          {mancora && (
            <div className="group relative h-80 overflow-hidden rounded-3xl md:col-span-7 md:row-span-2 md:h-full">
              <img
                src={mancora.image}
                alt={mancora.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{mancora.name}</h3>
                <p className="mt-2 max-w-md text-sm text-gray-200">{mancora.description}</p>
              </div>
            </div>
          )}

          {losOrganos && (
            <div className="group relative h-64 overflow-hidden rounded-3xl md:col-span-5 md:h-full">
              <img
                src={losOrganos.image}
                alt={losOrganos.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-xl font-bold text-white">{losOrganos.name}</h3>
                <p className="mt-1 text-sm text-gray-200">{losOrganos.description}</p>
              </div>
            </div>
          )}

          {caboBlanco && (
            <div className="group relative h-64 overflow-hidden rounded-3xl md:col-span-5 md:h-full">
              <img
                src={caboBlanco.image}
                alt={caboBlanco.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-xl font-bold text-white">{caboBlanco.name}</h3>
                <p className="mt-1 text-sm text-gray-200">{caboBlanco.description}</p>
              </div>
            </div>
          )}

          {/* Row 2: Lobitos (wide) */}
          {lobitos && (
            <div className="group relative h-72 overflow-hidden rounded-3xl md:col-span-12">
              <img
                src={lobitos.image}
                alt={lobitos.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{lobitos.name}</h3>
                <p className="mt-2 text-sm text-gray-200">{lobitos.description}</p>
              </div>
            </div>
          )}

          {/* Row 3: Negritos (large) */}
          {negritos && (
            <div className="group relative h-80 overflow-hidden rounded-3xl md:col-span-12 md:h-96">
              <img
                src={negritos.image}
                alt={negritos.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{negritos.name}</h3>
                <p className="mt-2 max-w-lg text-sm text-gray-200">{negritos.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WavesBeaches
