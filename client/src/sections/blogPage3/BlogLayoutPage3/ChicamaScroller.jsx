import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"
import imageOne from "../../../assets/imagenes-home/posicion16.jpg"
import supportOne from "../../../assets/imagenes-home/posicion17.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion18.jpg"
import supportTwo from "../../../assets/imagenes-home/posicion19.jpg"
import imageThree from "../../../assets/imagenes-home/posicion20.jpg"
import supportThree from "../../../assets/imagenes-home/posicion21.jpg"

const CHICAMA_SECTIONS = [
  {
    eyebrow: "Wave Reality",
    title: "What Chicama actually rewards",
    paragraphs: [
      "Chicama rewards surfers who stay calm and efficient. It is a place for trim, line choice, and board speed, not only for dramatic maneuvers. The longer the ride gets, the more your positioning matters.",
      "Intermediate and advanced surfers get the most from it when they arrive prepared for long paddles, colder water, and repeated sessions that quietly tax the body.",
    ],
    bullets: [
      "Best months: April to October",
      "Best sessions: early, before the wind adds texture",
      "Board call: keep enough glide for the flatter sections",
    ],
    facts: [
      { label: "Water", value: "Cool enough to make a proper wetsuit part of the plan." },
      { label: "Wind", value: "Usually lighter in the morning and more textured later." },
    ],
    image: imageOne,
    imageAlt: "Surfer drawing a long line on a clean wave",
    caption: "The best rides in Chicama feel less like a single move and more like a sequence of smart decisions.",
    supportImage: supportOne,
    supportAlt: "Traveler checking the coastline from above",
    supportCaption: "Checking the point from land before paddling out helps you understand where the wave bends, softens, and reconnects.",
  },
  {
    eyebrow: "Trip Design",
    title: "Build Chicama as the focused chapter, not the whole novel",
    paragraphs: [
      "Three to five days is usually the sweet spot. It gives you time to score at least one memorable session, adapt to the point-break rhythm, and still leave wanting more instead of flattening the experience.",
      "The premium move is to avoid overloading the itinerary. Protect the best swell days, keep your transfers clean, and let Chicama do one job very well: sharpen your surfing.",
    ],
    bullets: [
      "Arrive with energy instead of after multiple road jumps",
      "Leave space for recovery between longer sessions",
      "Do not force too many destinations before or after it",
    ],
    facts: [
      { label: "Ideal stay", value: "3 to 5 days for strong repetition without fatigue overload." },
      { label: "Trip role", value: "Use it as the high-focus opening block of a wider Peru route." },
    ],
    image: imageTwo,
    imageAlt: "Two surfboards resting against a bright coastal setup",
    caption: "A smart Chicama trip is built around timing, equipment, and the willingness to keep the route simple.",
    supportImage: supportTwo,
    supportAlt: "Quiet coastline and textured sea",
    supportCaption: "Even average days in Chicama teach a lot if you treat the destination like a workshop rather than a miracle machine.",
  },
  {
    eyebrow: "The Finish",
    title: "Why Mancora makes the whole surf trip feel premium",
    paragraphs: [
      "After the colder, more serious rhythm of Chicama, Mancora feels like the release valve. The water is warmer, the town is easier to enjoy, and the trip suddenly opens up to kitesurf, coaching, better recovery, and a softer daily pace.",
      "That contrast is exactly what elevates the journey. Chicama gives you the iconic story. Mancora gives you the place where you can stay longer, keep progressing, and turn a great surf mission into a fuller ocean holiday.",
    ],
    bullets: [
      "Warm-water reset after a demanding point-break block",
      "Easy transition into kitesurf or mixed surf-and-stay days",
      "Better final conversion for readers who are ready to book",
    ],
    facts: [
      { label: "Best combo", value: "Chicama first, Mancora second for balance and comfort." },
      { label: "Conversion logic", value: "The article begins with legend and ends with the most bookable destination." },
    ],
    image: imageThree,
    imageAlt: "Warm beach light and inviting northern Peru atmosphere",
    caption: "Mancora works as the emotional finish because it keeps the ocean energy high while removing much of the friction.",
    supportImage: supportThree,
    supportAlt: "Relaxed beach scene during golden hour",
    supportCaption: "For most travelers, the place they want to extend is not the harshest stop. It is the one that feels good for several more days.",
  },
]

function ChicamaScroller() {
  return (
    <ArticleScrollerBase
      eyebrow="Useful Breakdown"
      title="From the wave itself to the route that makes it feel complete"
      description="These blocks translate the Chicama myth into practical decisions: when to go, how long to stay, and why the strongest ending still points toward Mancora."
      sections={CHICAMA_SECTIONS}
    />
  )
}

export default ChicamaScroller
