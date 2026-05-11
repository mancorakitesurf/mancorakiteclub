import SEO from "../../components/SEO";
import HeroWhaleKite from "../../sections/blogPage11/HeroWhaleKite";
import IntroWhaleKite from "../../sections/blogPage11/IntroWhaleKite";
import ExperienceWhaleKite from "../../sections/blogPage11/ExperienceWhaleKite";
import ProtocolWhaleKite from "../../sections/blogPage11/ProtocolWhaleKite";

function BlogPage11() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069] selection:text-white">
            <SEO
                titleKey="seo.blogWhaleSeasonPremiumTitle"
                descKey="seo.blogWhaleSeasonPremiumDesc"
                titleFallback="Blog | Whale Season in Northern Peru - THE KINETIC TIDE"
                descFallback="Whale season in Northern Peru: technical and spiritual journey through humpback migration. Kitesurf alongside whales in Máncora. Best time and ethical protocols."
            />

            <HeroWhaleKite />
            <IntroWhaleKite />
            <ExperienceWhaleKite />
            <ProtocolWhaleKite />
        </div>
    );
}

export default BlogPage11;