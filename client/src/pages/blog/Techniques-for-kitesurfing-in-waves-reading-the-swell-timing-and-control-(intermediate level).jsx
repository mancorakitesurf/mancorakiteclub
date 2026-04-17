import SEO from "../../components/SEO";
import HeroTechniquesKite from "../../sections/blogPage8/HeroTechniquesKite";
import IntroTechniquestKite from "../../sections/blogPage8/IntroTechniquestKite";
import TechniquesContent8 from "../../sections/blogPage8/TechniquesContent8";
import KiteControlSection from "../../sections/blogPage8/KiteControlSection";
import ProTipsSection from "../../sections/blogPage8/ProTipsSection";

function BlogPage8() {
    return (
        <>
            <SEO
                title="Blog | Techniques for kitesurfing in waves: reading the swell, timing and control (intermediate level)"
                description="Techniques for kitesurfing in waves: reading the swell, timing and control (intermediate level)"
                canonicalPath="/blog/Techniques-for-kitesurfing-in-waves-reading-the-swell-timing-and-control-(intermediate level)"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroTechniquesKite />
            <IntroTechniquestKite />
            <TechniquesContent8 />
            <KiteControlSection />
            <ProTipsSection />
        </>
    );
}

export default BlogPage8;