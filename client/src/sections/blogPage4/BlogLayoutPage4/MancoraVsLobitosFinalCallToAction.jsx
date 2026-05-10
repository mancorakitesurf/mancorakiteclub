import { componentImages } from '../../../config/images.js'
import ArticleFinalCallToActionBase from "../../blogShared/ArticleFinalCallToActionBase.jsx"

const { ctaImage } = componentImages["sections/blogPage4/BlogLayoutPage4/MancoraVsLobitosFinalCallToAction.jsx"]
function MancoraVsLobitosFinalCallToAction() {
  return (
    <ArticleFinalCallToActionBase
      eyebrow="Best Base"
      title="When the comparison ends, the most bookable answer still points to Mancora"
      description="Lobitos and Cabo Blanco give the article its tension, but Mancora is the destination that closes the decision with warmth, versatility, and a much stronger long-stay feel."
      image={ctaImage}
      imageAlt="Premium beach destination atmosphere in northern Peru"
      buttonLabel="Ir a Máncora Kite Club"
    />
  )
}

export default MancoraVsLobitosFinalCallToAction
