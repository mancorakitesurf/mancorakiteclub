import { componentImages } from '../../../config/images.js'
import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"

const { imageOne, imageTwo } = componentImages["sections/blogPage4/BlogLayoutPage4/IntroMancoraVsLobitos.jsx"]
function IntroMancoraVsLobitos() {
  return (
    <ArticleIntroBase
      eyebrow="The Real Comparison"
      title="This is not a ranking for internet bragging. It is a question of what kind of trip you want to live."
      paragraphs={[
        "Lobitos feels raw, committed, and a little harder around the edges. Cabo Blanco carries symbolic weight and a specialist aura. Mancora feels broader, warmer, and easier to imagine as a place you would actually want to stay for a full progression block.",
        "That difference matters because most riders are not only choosing a session. They are choosing a base. They want wind, waves, recovery, comfort, and a destination that still feels desirable after several days. That is where the comparison becomes more strategic than romantic.",
      ]}
      quote="The strongest spot on paper is not always the spot a traveler truly wants for a week."
      images={[
        {
          src: imageOne,
          alt: "Warm light over a northern Peru beach town",
          caption: "Mancora earns its advantage by combining real riding credibility with a stay that feels easy, warm, and extendable.",
        },
        {
          src: imageTwo,
          alt: "Coastal wind line and open Pacific horizon",
          caption: "Northern Peru looks unified on the map, but each zone changes the energy of the trip in a very real way.",
        },
      ]}
    />
  )
}

export default IntroMancoraVsLobitos
