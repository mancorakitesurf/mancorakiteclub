import SEO from "../../components/SEO";
import HeroSafariKite from "../../sections/blogPage10/HeroSafariKite";
import RequirementsKite from "../../sections/blogPage10/RequirementsKite";
import DayInLifeKite from "../../sections/blogPage10/DayInLifeKite";
import FeaturedSpotsKite from "../../sections/blogPage10/FeaturedSpotsKite";

function BlogPage10() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069] selection:text-white">
            <SEO
                title="Blog | Kite Safari Northern Peru - Expedition Series"
                description="Experience the ultimate kite safari in Northern Peru. Discover the windiest spots and longest waves. Guided trips to Máncora, Lobitos, and Cabo Blanco."
                canonicalPath="/blog/Kite-Safari-Northern-Peru"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroSafariKite />
            <RequirementsKite />
            <DayInLifeKite />
            <FeaturedSpotsKite />
        </div>
    );
}

export default BlogPage10;