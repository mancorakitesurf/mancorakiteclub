import SEO from "../../components/SEO";
import HeroTechniquesKite from "../../sections/blogPage8/HeroTechniquesKite";
import IntroTechniquestKite from "../../sections/blogPage8/IntroTechniquestKite";
import TechniquesContent8 from "../../sections/blogPage8/TechniquesContent8";
import KiteControlSection from "../../sections/blogPage8/KiteControlSection";
import ProTipsSection from "../../sections/blogPage8/ProTipsSection";

function BlogPage8() {
    return (
        <div className="bg-[#031015] min-h-screen">
            <SEO
                titleKey="seo.blogTechniquesTitle"
                descKey="seo.blogTechniquesDesc"
                titleFallback="Blog | Techniques for kitesurfing in waves: reading the swell, timing and control (intermediate level)"
                descFallback="Intermediate kitesurfing techniques: reading waves, timing, and kite control. Improve your technique on the waves of Máncora, Peru. Training tips for progress."
            />

            <HeroTechniquesKite />
            <IntroTechniquestKite />
            <TechniquesContent8 />
            <KiteControlSection />
            <ProTipsSection />
        </div>
    );
}

export default BlogPage8;