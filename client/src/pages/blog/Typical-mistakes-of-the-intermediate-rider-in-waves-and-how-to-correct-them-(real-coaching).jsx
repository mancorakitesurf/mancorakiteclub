import SEO from "../../components/SEO";
import HeroMistakesKite from "../../sections/blogPage9/HeroMistakesKite";
import IntroMistakesKite from "../../sections/blogPage9/IntroMistakesKite";
import CoachingContent9 from "../../sections/blogPage9/CoachingContent9";
import WarningBox9 from "../../sections/blogPage9/WarningBox9";

function BlogPage9() {
    return (
        <div className="bg-[#031015] min-h-screen">
            <SEO
                title="Blog | Typical mistakes of the intermediate rider in waves and how to correct them (real coaching)"
                description="Real coaching for kitesurfing: learn to avoid common mistakes and master wave riding."
                canonicalPath="/blog/Typical-mistakes-of-the-intermediate-rider-in-waves-and-how-to-correct-them-(real-coaching)"
                hreflang={{ en: '/', es: '/esp', default: '/' }}
            />

            <HeroMistakesKite />
            <IntroMistakesKite />
            <CoachingContent9 />
            <WarningBox9 />
        </div>
    );
}

export default BlogPage9;