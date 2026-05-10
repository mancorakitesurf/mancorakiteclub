import { componentImages } from '../../../config/images.js'
import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"

const { imageOne, supportOne, imageTwo, supportTwo, imageThree, supportThree } = componentImages["sections/blogPage6/BlogLayoutPage6/PacasmayoScroller.jsx"]
const PACASMAYO_SECTIONS = [
  {
    eyebrow: "Conditions",
    title: "When Pacasmayo works best",
    paragraphs: [
      "Pacasmayo is strongest when south swells line up with cleaner morning conditions. Like many long left point breaks, it rewards those who surf early and respect how the wind can change the tone of the wave later in the day.",
      "If you are expecting every session to feel heroic, the spot may frustrate you. If you show up ready to read sections, manage speed, and accept that the best waves are built on patience, it becomes deeply rewarding.",
    ],
    bullets: [
      "Best months: May to October",
      "Morning sessions usually offer the cleanest faces",
      "Board choice matters more than style points here",
    ],
    facts: [
      { label: "Wave style", value: "Long left point break with space to think and adjust." },
      { label: "Best level", value: "Intermediate surfers upward, especially those who enjoy process." },
    ],
    image: imageOne,
    imageAlt: "Long clean wave face during a morning session",
    caption: "The best Pacasmayo sessions are less about drama and more about keeping the line alive across a long canvas.",
    supportImage: supportOne,
    supportAlt: "Calm shoreline and subtle wave texture",
    supportCaption: "A little extra glide in your equipment often makes a bigger difference here than a trendier setup.",
  },
  {
    eyebrow: "Trip Rhythm",
    title: "Treat it as a compact mission, not a place that must do everything",
    paragraphs: [
      "Pacasmayo works beautifully in a focused block of a few days. It gives you enough repetition to understand the point without overstretching the emotional energy of the trip.",
      "That matters because demanding wave destinations become much better when they are allowed to stay precise. You do not need them to carry your nightlife, your recovery, and your entire travel story at the same time.",
    ],
    bullets: [
      "Three to four days often feels cleaner than a long stay",
      "Protect arrival and departure days from swell expectations",
      "Use the destination for wave education, not total lifestyle range",
    ],
    facts: [
      { label: "Ideal role", value: "Focused surf stop inside a broader northern Peru route." },
      { label: "Best planning move", value: "Keep logistics light and your best sessions protected." },
    ],
    image: imageTwo,
    imageAlt: "Road-trip style coastal scene with surf atmosphere",
    caption: "A premium Pacasmayo plan is defined by pacing more than by overstuffed ambition.",
    supportImage: supportTwo,
    supportAlt: "Travel coastline and premium surf trip mood",
    supportCaption: "When the route breathes, the sessions feel more valuable and the destination retains its edge.",
  },
  {
    eyebrow: "Best Finish",
    title: "Why the route often gets better again in Mancora",
    paragraphs: [
      "After repeated point-break sessions, Mancora offers exactly the kind of contrast that makes a surf trip feel intelligently designed: warm water, easier living, better recovery, and room for kitesurf or lighter mixed days if the body needs a reset.",
      "That transition does not weaken the trip. It completes it. Pacasmayo gives you long-wave texture. Mancora gives you the place where you can absorb the trip and still want more ocean time instead of a direct flight home.",
    ],
    bullets: [
      "Warm-water recovery after a denser point-break block",
      "More flexible final days for surf, kite, and comfort",
      "Stronger conversion point for a travel reader who is ready to act",
    ],
    facts: [
      { label: "Best pairing", value: "Pacasmayo for focus, Mancora for finish." },
      { label: "Booking logic", value: "The route ends in the place most travelers want to extend." },
    ],
    image: imageThree,
    imageAlt: "Inviting coastal scene with warmer premium destination feel",
    caption: "A good route does not peak once. It changes texture and becomes easier to enjoy at the end.",
    supportImage: supportThree,
    supportAlt: "Bright northern coast with warm inviting mood",
    supportCaption: "That final ease is exactly what makes Mancora such a compelling closing destination in Peru.",
  },
]

function PacasmayoScroller() {
  return (
    <ArticleScrollerBase
      eyebrow="Useful Guide"
      title="The conditions, pacing, and route logic that make Pacasmayo feel worth the effort"
      description="Pacasmayo delivers when you understand what it wants from your surfing and how to place it inside a broader premium trip instead of asking it to do every job at once."
      sections={PACASMAYO_SECTIONS}
    />
  )
}

export default PacasmayoScroller
