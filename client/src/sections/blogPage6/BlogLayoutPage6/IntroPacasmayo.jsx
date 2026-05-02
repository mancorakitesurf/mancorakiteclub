import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"
import imageOne from "../../../assets/imagenes-home/posicion13.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion15.jpg"

function IntroPacasmayo() {
  return (
    <ArticleIntroBase
      eyebrow="Point-Break Mood"
      title="Pacasmayo is not memorable because it is easy. It is memorable because it teaches patience over distance."
      paragraphs={[
        "At first glance, Pacasmayo looks like a dream of endless lefts. In practice, what makes it special is the way it forces you to stay engaged through long sections, subtle speed changes, and positioning decisions that keep mattering after the first turn.",
        "That kind of wave works beautifully inside a longer Peru surf trip. It gives you a serious, process-driven chapter. Then, if the route is well designed, you move north to somewhere warmer and more flexible like Mancora, where the body recovers faster and the trip opens up again.",
      ]}
      quote="Pacasmayo is less about showing off and more about learning how to keep a point break alive under your feet."
      images={[
        {
          src: imageOne,
          alt: "Long wave wall bending across the Peruvian coast",
          caption: "Pacasmayo feels at its best when you treat the wave as a sequence rather than a single moment.",
        },
        {
          src: imageTwo,
          alt: "Travel boards and calm premium surf mood",
          caption: "The strongest sessions usually come to travelers who plan for rhythm, not just for a headline.",
        },
      ]}
    />
  )
}

export default IntroPacasmayo
