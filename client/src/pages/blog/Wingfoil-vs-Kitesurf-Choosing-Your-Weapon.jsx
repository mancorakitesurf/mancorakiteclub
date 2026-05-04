import SEO from "../../components/SEO";
import HeroChoiceKite from "../../sections/blogPage14/HeroChoiceKite";
import TechnicalBreakdownKite from "../../sections/blogPage14/TechnicalBreakdownKite";
import ProgressionAnalysisKite from "../../sections/blogPage14/ProgressionAnalysisKite";

function BlogPage14() {
    return (
        <div className="bg-[#031015] min-h-screen selection:bg-[#ff9069]/30 selection:text-[#ff9069]">
            <SEO
                title="Blog | Wingfoil vs Kitesurf in Peru: Choosing Your Weapon"
                description="Wingfoil vs kitesurf in Peru: technical analysis of wind intensity, wave dynamics, and rider progression under the Humboldt Current. Choose your weapon wisely."
                canonicalPath="/blog/Wingfoil-vs-Kitesurf-Choosing-Your-Weapon"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroChoiceKite />
            
            <section className="bg-[#031015] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter uppercase italic">
                        The Kinetic Duality of the Humboldt Current
                    </h2>
                    <div className="space-y-6 text-sm sm:text-base md:text-lg text-[#9eaeb4] font-light leading-relaxed italic">
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