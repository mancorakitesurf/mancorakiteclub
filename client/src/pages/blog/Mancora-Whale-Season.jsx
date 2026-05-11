import SEO from "../../components/SEO";
import HeroWhaleSeason from "../../sections/blogPage12/HeroWhaleSeason";
import TechnicalRibbon from "../../sections/blogPage12/TechnicalRibbon";
import EditorialWhaleSeason from "../../sections/blogPage12/EditorialWhaleSeason";

function BlogPage12() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069] selection:text-white font-body">
            <SEO
                titleKey="seo.blogWhaleSeasonTitle"
                descKey="seo.blogWhaleSeasonDesc"
                titleFallback="Blog | Mancora Whale Season - The Kinetic Tide"
                descFallback="The annual migration brings humpbacks to the northern swells. A rare convergence of marine life and perfect thermal winds. Kitesurf with whales in Máncora."
            />

            <HeroWhaleSeason />
            <TechnicalRibbon />
            <EditorialWhaleSeason />
        </div>
    );
}

export default BlogPage12;