import SEO from "../../components/SEO";
import HeroSafetyProgression from "../../sections/blogPage15/HeroSafetyProgression";
import DataStripSafety from "../../sections/blogPage15/DataStripSafety";
import TechnicalContent15 from "../../sections/blogPage15/TechnicalContent15";

function BlogPage15() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069]/30 selection:text-white font-body">
            <SEO
                title="Blog | Safety & Progression: The Technical Edge | KINETIC TIDE"
                description="Rapid advancement in wave riding through mathematical precision, bar mechanics, and video feedback analysis."
                canonicalPath="/blog/Safety-and-Progression-The-Technical-Edge"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroSafetyProgression />
            <DataStripSafety />
            <TechnicalContent15 />
        </div>
    );
}

export default BlogPage15;