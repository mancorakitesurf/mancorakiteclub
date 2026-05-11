import { useI18n } from '../../../app/providers/i18nContext'

function PacasmayoBridge() {
  const { t } = useI18n()

  return (
    <section className="bg-black px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          {t('blogPacasmayo.bridge.title1')}
          <br />
          <span className="text-cyan-400">{t('blogPacasmayo.bridge.title2')}</span>
        </h2>
        <p className="mt-8 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
          {t('blogPacasmayo.bridge.desc1')}
          <br />
          {t('blogPacasmayo.bridge.desc2')}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          {t('blogPacasmayo.bridge.desc3')}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-[#111] p-4 sm:p-6">
            <p className="text-cyan-400 font-semibold">{t('blogPacasmayo.bridge.box1Title')}</p>
            <p className="text-sm text-gray-400 mt-2">{t('blogPacasmayo.bridge.box1Desc')}</p>
          </div>
          <div className="rounded-2xl bg-[#111] p-4 sm:p-6">
            <p className="text-cyan-400 font-semibold">{t('blogPacasmayo.bridge.box2Title')}</p>
            <p className="text-sm text-gray-400 mt-2">{t('blogPacasmayo.bridge.box2Desc')}</p>
          </div>
          <div className="rounded-2xl bg-[#111] p-4 sm:p-6">
            <p className="text-cyan-400 font-semibold">{t('blogPacasmayo.bridge.box3Title')}</p>
            <p className="text-sm text-gray-400 mt-2">{t('blogPacasmayo.bridge.box3Desc')}</p>
          </div>
        </div>

        <p className="mt-12 text-base font-semibold text-white sm:text-lg md:text-xl">
          {t('blogPacasmayo.bridge.footer1')}
          <br />
          {t('blogPacasmayo.bridge.footer2')}
        </p>
      </div>
    </section>
  )
}
export default PacasmayoBridge