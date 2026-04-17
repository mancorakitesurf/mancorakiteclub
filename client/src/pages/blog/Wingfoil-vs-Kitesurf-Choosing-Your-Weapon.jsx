import SEO from "../../components/SEO";
import HeroChoiceKite from "../../sections/blogPage14/HeroChoiceKite";
import TechnicalBreakdownKite from "../../sections/blogPage14/TechnicalBreakdownKite";
import ProgressionAnalysisKite from "../../sections/blogPage14/ProgressionAnalysisKite";

function BlogPage14() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069]/30 selection:text-[#ff9069]">
            <SEO
                title="Blog | Wingfoil vs Kitesurf in Peru: Choosing Your Weapon"
                description="A technical analysis of wind intensity, wave dynamics, and rider progression in the Humboldt Current of Peru."
                canonicalPath="/blog/Wingfoil-vs-Kitesurf-Choosing-Your-Weapon"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroChoiceKite />
            
            <section className="py-24 px-6 md:px-24 bg-[#031015]">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase italic">
                        The Kinetic Duality of the Humboldt Current
                    </h2>
                    <div className="space-y-6 text-[#9eaeb4] text-lg font-light leading-relaxed italic">
                        <p>Peru's coastline offers a mechanical perfection rarely seen elsewhere. Driven by the cold, relentless push of the Humboldt Current, the thermal winds and endless pointbreaks present a unique laboratory for wind-driven water sports.</p>
                        <p>We analyze the 'kinetic duality' of these disciplines. While kitesurfing harnesses vertical power, wingfoiling taps into surface energy to surf rolling swells with minimal drag.</p>
                    </div>
                </div>
            </section>

            <TechnicalBreakdownKite />
            <ProgressionAnalysisKite />
        </div>
    );
}

export default BlogPage14;