import { useI18n } from '../../../app/providers/i18nContext'

function BlogClosing() {
  const { t } = useI18n()
  return (
    <section className="py-28 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-600 leading-relaxed">
          {t('blogTop20.closing.line1')}
        </p>
        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          {t('blogTop20.closing.line2')}
        </p>
        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          {t('blogTop20.closing.line3')}
        </p>
        <div className="mt-16 border-t pt-10 text-slate-500 text-sm">
          <p>
            {t('blogTop20.closing.collab')}
          </p>
        </div>
      </div>
    </section>
  )
}
export default BlogClosing