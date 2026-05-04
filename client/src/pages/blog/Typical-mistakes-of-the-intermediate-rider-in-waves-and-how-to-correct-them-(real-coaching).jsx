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
                description="Real coaching for intermediate kitesurfers: avoid common wave riding mistakes, master timing and kite control. Practical tips to progress faster in Máncora."
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