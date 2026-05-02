import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"
import imageOne from "../../../assets/imagenes-kitesurfing/posicionkt2.jpg"
import supportOne from "../../../assets/imagenes-home/posicion5.jpg"
import imageTwo from "../../../assets/imagenes-wingfoil/posicionw8.jpg"
import supportTwo from "../../../assets/imagenes-wingfoil/posicionw7.jpg"
import imageThree from "../../../assets/imagenes-home/posicion24.jpg"
import supportThree from "../../../assets/imagenes-home/posicion14y27.jpg"

const PERU_KITESURF_SECTIONS = [
  {
    eyebrow: "South Peru",
    title: "Power, consistency, and a cleaner mission brief",
    paragraphs: [
      "The south appeals to riders who want a direct answer to the question of wind. Destinations there often feel purposeful and highly efficient, which is ideal if your main goal is to maximize time on the water and keep the trip tightly focused.",
      "The tradeoff is that the experience can feel narrower over a full week, especially for mixed-level groups or travelers who want more comfort and variety between sessions.",
    ],
    bullets: [
      "Stronger fit for short mission trips",
      "Colder feel and more technical atmosphere",
      "Great when wind certainty matters more than broader lifestyle",
    ],
    facts: [
      { label: "Best for", value: "Riders prioritizing sessions and clean logistics." },
      { label: "Watch for", value: "Less flexibility for mixed-interest travel groups." },
    ],
    image: imageOne,
    imageAlt: "Strong kitesurf session with committed riding",
    caption: "Southern Peru tends to compress the trip around wind performance, which can be excellent if that is exactly what you want.",
    supportImage: supportOne,
    supportAlt: "Windy coast with open Pacific texture",
    supportCaption: "The south wins plenty of metrics. It just does not always win the longer emotional memory of the trip.",
  },
  {
    eyebrow: "North Peru",
    title: "Warmth, versatility, and better travel elasticity",
    paragraphs: [
      "Northern Peru feels more open. The water is warmer, the atmosphere is easier, and the trip can breathe. That makes a big difference when you are traveling with a partner, learning, or simply hoping to enjoy the entire day rather than only the session itself.",
      "The north also handles mixed disciplines better. Surf, kite, coaching, and easy beach living can exist in the same week without the itinerary feeling forced.",
    ],
    bullets: [
      "Warmer and friendlier for multi-day progression",
      "Better for groups with mixed goals",
      "Stronger fit when you may want to stay longer",
    ],
    facts: [
      { label: "Experience", value: "More complete as a holiday, not only a sports mission." },
      { label: "Travel fit", value: "Excellent when flexibility matters as much as forecast." },
    ],
    image: imageTwo,
    imageAlt: "Warmer northern Peru water and broader coastal mood",
    caption: "The north keeps more doors open, which is often the difference between a good trip and a truly premium one.",
    supportImage: supportTwo,
    supportAlt: "Open water and easy wind texture in a warmer setting",
    supportCaption: "That broader feeling is one of the main reasons readers eventually funnel toward Mancora.",
  },
  {
    eyebrow: "The Strategic Base",
    title: "Why Mancora often becomes the final answer",
    paragraphs: [
      "Mancora resolves more travel anxieties than the alternatives. It feels easier to imagine, easier to recommend, and easier to extend. That is incredibly important when a reader is moving from inspiration into booking logic.",
      "You still get a credible ocean destination, but you also get recovery, warmth, flexible days, and a destination that supports lessons, progression, and longer stays without feeling narrow.",
    ],
    bullets: [
      "Best conversion point for a premium Peru kitesurf trip",
      "Balances wind credibility with real comfort",
      "Supports both shorter visits and longer progression stays",
    ],
    facts: [
      { label: "Base value", value: "High for couples, intermediates, and mixed-discipline travelers." },
      { label: "Closing logic", value: "It is the easiest Peru destination to picture yourself actually booking." },
    ],
    image: imageThree,
    imageAlt: "Sunlit Mancora atmosphere with strong destination feel",
    caption: "Mancora works because it turns regional comparison into a clear final move instead of leaving the traveler suspended.",
    supportImage: supportThree,
    supportAlt: "Beach and route image suggesting northbound continuation",
    supportCaption: "The reader may start by asking north or south, but the booking instinct often ends up pointing to the warm north.",
  },
]

function PeruKitesurfScroller() {
  return (
    <ArticleScrollerBase
      eyebrow="Guide Breakdown"
      title="The practical difference between Peru’s two kitesurf personalities"
      description="Once you look beyond raw wind data, the choice becomes clearer: where will you ride well, recover well, and still want to stay longer?"
      sections={PERU_KITESURF_SECTIONS}
    />
  )
}

export default PeruKitesurfScroller
