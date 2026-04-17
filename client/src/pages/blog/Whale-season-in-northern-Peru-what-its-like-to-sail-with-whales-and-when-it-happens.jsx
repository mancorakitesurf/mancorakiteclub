import SEO from "../../components/SEO";
import HeroWhaleKite from "../../sections/blogPage11/HeroWhaleKite";
import IntroWhaleKite from "../../sections/blogPage11/IntroWhaleKite";
import ExperienceWhaleKite from "../../sections/blogPage11/ExperienceWhaleKite";
import ProtocolWhaleKite from "../../sections/blogPage11/ProtocolWhaleKite";

function BlogPage11() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069] selection:text-white">
            <SEO
                title="Blog | Whale Season in Northern Peru - THE KINETIC TIDE"
                description="A technical and spiritual journey through the humpback whale migration path in Piura, Peru."
                canonicalPath="/blog/Whale-Season-in-Northern-Peru"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroWhaleKite />
            <IntroWhaleKite />
            <ExperienceWhaleKite />
            <ProtocolWhaleKite />
        </div>
    );
}

export default BlogPage11;