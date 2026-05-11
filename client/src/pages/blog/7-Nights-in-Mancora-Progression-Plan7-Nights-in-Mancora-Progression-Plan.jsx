import SEO from "../../components/SEO";
import HeroProgressionKite from "../../sections/blogPage13/HeroProgressionKite";
import TechnicalBentoKite from "../../sections/blogPage13/TechnicalBentoKite";
import ItineraryDriftKite from "../../sections/blogPage13/ItineraryDriftKite";
import TacticalLoadoutKite from "../../sections/blogPage13/TacticalLoadoutKite";

function BlogPage13() {
    return (
        <main className="bg-[#031015] min-h-screen selection:bg-[#ff9069]/30 selection:text-white">
            <SEO
                titleKey="seo.blog7NightsTitle"
                descKey="seo.blog7NightsDesc"
                titleFallback="7 Nights in Máncora: Progression Plan | The Kinetic Tide"
                descFallback="A high-intensity, 7-day itinerary for intermediate riders in Máncora. Shatter plateaus and master Northern Peru waves with daily coaching and video analysis."
            />

            <HeroProgressionKite />
            <TechnicalBentoKite />
            <ItineraryDriftKite />
            <TacticalLoadoutKite />
        </main>
    );
}

export default BlogPage13;