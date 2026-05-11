import SEO from "../../components/SEO";
import HeroSafetyProgression from "../../sections/blogPage15/HeroSafetyProgression";
import DataStripSafety from "../../sections/blogPage15/DataStripSafety";
import TechnicalContent15 from "../../sections/blogPage15/TechnicalContent15";
import { useI18n } from "../../app/providers/i18nContext";

function BlogPage15() {
    const { t } = useI18n();

    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069]/30 selection:text-white font-body">
            <SEO
                titleKey="seo.blogDataStripSafetyTitle"
                descKey="seo.blogDataStripSafetyDesc"
                titleFallback="Blog | Safety & Progression: The Technical Edge | KINETIC TIDE"
                descFallback="Rapid advancement in wave riding through mathematical precision, bar mechanics, and video feedback analysis. Improve your technique with coaching in Máncora."
            />

            <HeroSafetyProgression />
            <DataStripSafety />
            <TechnicalContent15 />
        </div>
    );
}

export default BlogPage15;