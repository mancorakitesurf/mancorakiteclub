import SEO from "../../components/SEO";
import HeroChoiceKite from "../../sections/blogPage14/HeroChoiceKite";
import TechnicalBreakdownKite from "../../sections/blogPage14/TechnicalBreakdownKite";
import ProgressionAnalysisKite from "../../sections/blogPage14/ProgressionAnalysisKite";
import { useI18n } from "../../app/providers/i18nContext.jsx";

function BlogPage14() {
    const { t } = useI18n();

    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069]/30 selection:text-[#ff9069]">
            <SEO
                titleKey="seo.blogWingfoilVsKitesurfTitle"
                descKey="seo.blogWingfoilVsKitesurfDesc"
                titleFallback="Blog | Wingfoil vs Kitesurf in Peru: Choosing Your Weapon"
                descFallback="Wingfoil vs kitesurf in Peru: technical analysis of wind intensity, wave dynamics, and rider progression under the Humboldt Current. Choose your weapon wisely."
            />

            <HeroChoiceKite />
            
            <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter uppercase italic">
                        {t('blog.wingfoilVsKitesurf.sectionTitle')}
                    </h2>
                    <div className="space-y-6 text-sm sm:text-base md:text-lg text-[#9eaeb4] font-light leading-relaxed italic">
                        <p>{t('blog.wingfoilVsKitesurf.p1')}</p>
                        <p>{t('blog.wingfoilVsKitesurf.p2')}</p>
                    </div>
                </div>
            </section>

            <TechnicalBreakdownKite />
            <ProgressionAnalysisKite />
        </div>
    );
}

export default BlogPage14;