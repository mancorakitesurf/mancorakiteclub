import ArticleIntroBase from "../../blogShared/ArticleIntroBase.jsx"
import imageOne from "../../../assets/imagenes-kitsurfing-lessons/posicionk6.jpg"
import imageTwo from "../../../assets/imagenes-home/posicion3.jpg"

function IntroPeruKitesurf() {
  return (
    <ArticleIntroBase
      eyebrow="North vs South"
      title="Peru makes more sense when you stop asking only where the wind blows and start asking what kind of week you want."
      paragraphs={[
        "Southern Peru is efficient, colder, and often more mission-driven. Northern Peru is warmer, more flexible, and easier to enjoy as a full travel experience rather than a session-count exercise. Neither is automatically better. The difference is in the kind of rider and traveler each coast serves.",
        "That is why the best Peru guide cannot just list spots. It has to explain atmosphere, recovery, mixed-group appeal, and where a stay is most likely to extend naturally. When those factors matter, Mancora starts to look less like one option among many and more like the strongest final base.",
      ]}
      quote="The best region is not the one with the loudest reputation. It is the one that matches the trip you are actually trying to build."
      images={[
        {
          src: imageOne,
          alt: "Beginner-friendly kitesurf setup and instruction zone",
          caption: "For progression blocks, the environment around the session matters almost as much as the wind itself.",
        },
        {
          src: imageTwo,
          alt: "Wide travel landscape and Peru coast atmosphere",
          caption: "Peru feels like two different kitesurf countries depending on whether you head south for efficiency or north for range.",
        },
      ]}
    />
  )
}

export default IntroPeruKitesurf
