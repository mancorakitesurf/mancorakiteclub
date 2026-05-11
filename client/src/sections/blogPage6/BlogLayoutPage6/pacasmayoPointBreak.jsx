import { useI18n } from '../../../app/providers/i18nContext'

function PacasmayoPointBreak() {
  const { t } = useI18n()
  return (
    <section className="bg-[#0b1f1e] py-16 text-white sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold leading-tight text-cyan-400 sm:text-3xl md:text-4xl lg:text-5xl">
            {t('blogPacasmayo.pointbreak.title')}
          </h2>
        </div>
        <div className="space-y-6 text-sm leading-relaxed text-gray-300 sm:text-base">
          <p>✔ {t('blogPacasmayo.pointbreak.item1')}</p>
          <p>✔ {t('blogPacasmayo.pointbreak.item2')}</p>
          <p>✔ {t('blogPacasmayo.pointbreak.item3')}</p>
          <p>✔ {t('blogPacasmayo.pointbreak.item4')}</p>
          <p>✔ {t('blogPacasmayo.pointbreak.item5')}</p>
          <p className="pt-6 text-base font-semibold text-white sm:text-lg">
            {t('blogPacasmayo.pointbreak.footer1')} <br /> {t('blogPacasmayo.pointbreak.footer2')}
          </p>
        </div>
      </div>
    </section>
  )
}
export default PacasmayoPointBreak