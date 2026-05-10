import { componentImages } from '../../../config/images.js'
import ArticleFinalCallToActionBase from "../../blogShared/ArticleFinalCallToActionBase.jsx"

const { ctaImage } = componentImages["sections/blogPage5/BlogLayoutPage5/PeruKitesurfFinalCallToAction.jsx"]
function PeruKitesurfFinalCallToAction() {
  return (
    <ArticleFinalCallToActionBase
      eyebrow="Where It Leads"
      title="Use the map to compare Peru. Use Mancora when it is time to commit."
      description="North vs south is the right question for planning. Mancora is often the right answer for staying, progressing, and turning a strong research journey into a premium trip."
      image={ctaImage}
      imageAlt="Ocean-facing premium travel scene in Mancora"
      buttonLabel="Ir a Máncora Kite Club"
    />
  )
}

export default PeruKitesurfFinalCallToAction
