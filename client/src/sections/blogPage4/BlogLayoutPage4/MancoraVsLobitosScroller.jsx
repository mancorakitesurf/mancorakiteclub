import { componentImages } from '../../../config/images.js'
import ArticleScrollerBase from "../../blogShared/ArticleScrollerBase.jsx"

const { imageOne, supportOne, imageTwo, supportTwo, imageThree, supportThree } = componentImages["sections/blogPage4/BlogLayoutPage4/MancoraVsLobitosScroller.jsx"]
const COMPARISON_SECTIONS = [
  {
    eyebrow: "Lobitos",
    title: "Raw character and specialist energy",
    paragraphs: [
      "Lobitos attracts riders who like a mission feel. The coastline has personality, the setup feels more elemental, and the sessions often come with a sense that you are earning every good one.",
      "That can be a big part of its appeal. But it also means the destination asks more from the traveler in terms of flexibility, comfort tolerance, and day-to-day simplicity.",
    ],
    bullets: [
      "Great for riders who like a rougher, more surf-driven atmosphere",
      "Better suited to people already comfortable in wave environments",
      "Less naturally broad as a lifestyle base for longer stays",
    ],
    facts: [
      { label: "Vibe", value: "Sparse, raw, committed." },
      { label: "Best for", value: "Focused riders who do not need much outside the session." },
    ],
    image: imageOne,
    imageAlt: "Kitesurfer navigating a stronger wave section",
    caption: "Lobitos can be magnetic precisely because it refuses to feel polished.",
    supportImage: supportOne,
    supportAlt: "Wave rider and open water under stronger wind",
    supportCaption: "The destination gives back plenty, but it expects experience and a certain appetite for friction.",
  },
  {
    eyebrow: "Cabo Blanco",
    title: "Symbolic power, but not the easiest base",
    paragraphs: [
      "Cabo Blanco belongs in the conversation because of what it represents in Peru. It has weight, mythology, and specialist appeal. But that does not automatically make it the most practical answer for a longer premium trip.",
      "It is better understood as a benchmark and a reference point, not the default destination for every visiting rider who wants a clean, modular stay with room for progression and comfort.",
    ],
    bullets: [
      "Strong identity and prestige",
      "Better as a targeted stop than a broad base for most travelers",
      "Useful in the comparison because it clarifies what travelers really need",
    ],
    facts: [
      { label: "Role", value: "Specialty stop, not the easiest all-around base." },
      { label: "Takeaway", value: "Myth matters, but trip design matters more." },
    ],
    image: imageTwo,
    imageAlt: "Premium coastline and travel mood in northern Peru",
    caption: "Cabo Blanco sharpens the conversation, but it does not remove the need for a more livable base.",
    supportImage: supportTwo,
    supportAlt: "Wave-focused detail image with coastal luxury tone",
    supportCaption: "For many readers, the best destination is not the most legendary one. It is the one they can confidently book and enjoy for real.",
  },
  {
    eyebrow: "Mancora",
    title: "The most complete answer for progression, comfort, and conversion",
    paragraphs: [
      "Mancora wins more real-world decisions because it removes more hesitation. The weather is friendlier, the stay is easier, and the town supports the ocean experience instead of simply surrounding it.",
      "For intermediate riders, couples, or travelers who may extend their stay, Mancora keeps the whole trip working. It offers warmth, accessibility, and enough range to feel like a full premium destination instead of just a harder-core outpost.",
    ],
    bullets: [
      "Warm-water advantage for repeated sessions",
      "Stronger fit for mixed groups and progression-focused stays",
      "Best conversion point when the reader is ready to move from research to booking",
    ],
    facts: [
      { label: "Edge", value: "Versatility, comfort, and easier long-stay appeal." },
      { label: "Best role", value: "Final base for a premium northern Peru trip." },
    ],
    image: imageThree,
    imageAlt: "Bright coastline and destination feel in Mancora",
    caption: "Mancora feels like the place where riding and staying finally align instead of competing with each other.",
    supportImage: supportThree,
    supportAlt: "Warm ocean texture with clean premium styling",
    supportCaption: "That alignment is what makes it the easiest destination to imagine, recommend, and ultimately book.",
  },
]

function MancoraVsLobitosScroller() {
  return (
    <ArticleScrollerBase
      eyebrow="Spot By Spot"
      title="How these northern Peru names actually behave in a real trip"
      description="The comparison only becomes useful when it goes beyond mythology and starts answering practical questions about progression, comfort, and where a traveler truly wants to stay."
      sections={COMPARISON_SECTIONS}
    />
  )
}

export default MancoraVsLobitosScroller
