import { componentImages } from '../../../config/images.js'
import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"

const { imageOne, imageTwo } = componentImages["sections/blogPage3/BlogLayoutPage3/IntroChicama.jsx"]
function IntroChicama() {
  return (
    <ArticleIntroBase
      eyebrow="The Narrative Hook"
      title="You do not come to Chicama for a quick thrill. You come for repetition, distance, and perspective."
      paragraphs={[
        "The first surprise in Chicama is not the beauty of the wave from the hill. It is how long the ride keeps asking questions after the takeoff. You trim, adjust, recover speed, and realize this wave is less about one explosive turn and more about understanding flow over a long stretch of coast.",
        "That is why Chicama works best inside a bigger Peru itinerary. A few days here sharpen your surfing and your patience. Then the smartest move is to keep the trip moving north toward warm water, easier recovery, and a destination like Mancora where surfing and kitesurfing can live inside the same premium travel rhythm.",
      ]}
      quote="The longest wave in the world becomes even more memorable when the rest of the trip is built around contrast."
      images={[
        {
          src: imageOne,
          alt: "Morning light over a long Peruvian lineup",
          caption: "Early sessions matter here. Chicama usually feels at its best when the day is still quiet and the wall stays clean enough to connect multiple sections.",
        },
        {
          src: imageTwo,
          alt: "Coastal road and desert tones in northern Peru",
          caption: "The route is part of the story. Chicama should feel like the serious opening chapter before the warmer, more flexible finish farther north.",
        },
      ]}
    />
  )
}

export default IntroChicama
