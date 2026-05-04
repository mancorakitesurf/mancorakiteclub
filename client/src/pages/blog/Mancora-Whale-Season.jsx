import SEO from "../../components/SEO";
import HeroWhaleSeason from "../../sections/blogPage12/HeroWhaleSeason";
import TechnicalRibbon from "../../sections/blogPage12/TechnicalRibbon";
import EditorialWhaleSeason from "../../sections/blogPage12/EditorialWhaleSeason";

function BlogPage12() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069] selection:text-white font-body">
            <SEO
                title="Blog | Mancora Whale Season - The Kinetic Tide"
                description="The annual migration brings humpbacks to the northern swells. A rare convergence of marine life and perfect thermal winds. Kitesurf with whales in Máncora."
                canonicalPath="/blog/Mancora-Whale-Season"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroWhaleSeason />
            <TechnicalRibbon />
            <EditorialWhaleSeason />
        </div>
    );
}

export default BlogPage12;