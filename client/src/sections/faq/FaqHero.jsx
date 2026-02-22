import { FaChevronDown, FaWhatsapp } from 'react-icons/fa'
import { FAQ_HERO_IMAGE } from './faqContent.js'

function FaqHero() {
  return (
    <section className="relative flex h-[40vh] items-center justify-center bg-black text-white">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-wide">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-300">
          Everything you need to know before starting your adventure.
        </p>
      </div>

    </section>
  )
}

export default FaqHero