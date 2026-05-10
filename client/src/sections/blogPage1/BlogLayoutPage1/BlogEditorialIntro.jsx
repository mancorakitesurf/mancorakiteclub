import { useI18n } from '../../../app/providers/i18nContext'

function BlogEditorialIntro() {
  const { t } = useI18n()
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.4em] text-slate-400 uppercase">
          {t('blogTop20.intro.gazette')}
        </p>
        <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-[0.35em] text-cyan-600">
          {t('blogTop20.intro.title1')}
        </h2>
        <h3 className="mt-4 text-2xl md:text-3xl font-light tracking-[0.4em] text-cyan-600">
          {t('blogTop20.intro.title2')}
        </h3>
        <h4 className="mt-4 text-xl tracking-[0.5em] text-cyan-600">
          {t('blogTop20.intro.title3')}
        </h4>
        <div className="mt-14 border border-slate-200 p-10 text-left text-sm text-slate-600 leading-relaxed">
          <p className="mb-6">
            <strong>{t('blogTop20.intro.note1Title')}:</strong> {t('blogTop20.intro.note1Desc')}
          </p>
          <p>
            <strong>{t('blogTop20.intro.note2Title')}:</strong> {t('blogTop20.intro.note2Desc')}
          </p>
        </div>
      </div>
    </section>
  )
}
export default BlogEditorialIntro