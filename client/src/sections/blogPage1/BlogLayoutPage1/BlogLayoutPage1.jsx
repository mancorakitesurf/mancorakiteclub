import { componentImages } from '../../../config/images.js'
import DestinationCard from '../BlogLayoutPage1/DestinationCard.jsx'

const { mancoraImg, hawaiiImg, tarifaImg, capeTownImg, dakhlaImg, sectionBg } = componentImages["sections/blogPage1/BlogLayoutPage1/BlogLayoutPage1.jsx"]
function BlogLayoutPage1() {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={sectionBg}
          alt="Kitesurf background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* TOP 1 DESTACADO */}
        <div className="mb-24">
          <DestinationCard
            rank="01"
            title="Máncora Kite Club – Perú"
            description="Olas izquierdas perfectas, agua cálida, viento constante y lineups sin multitudes. El destino #1 para wave riding en Sudamérica."
            image={mancoraImg}
            featured
          />
        </div>

        {/* RESTO GRID */}
        <div className="grid gap-16 md:grid-cols-2">
          <DestinationCard
            rank="02"
            title="Maui & Oahu – Hawaii"
            description="Arrecifes legendarios, olas potentes del Pacífico y sesiones míticas de wave riding."
            image={hawaiiImg}
          />
          <DestinationCard
            rank="03"
            title="Tarifa – España"
            description="Capital del viento en Europa, mezcla de swell atlántico y el famoso Levante."
            image={tarifaImg}
          />
          <DestinationCard
            rank="04"
            title="Cape Town – Sudáfrica"
            description="Big air, olas atlánticas pesadas y un ambiente vibrante para riders avanzados."
            image={capeTownImg}
          />
          <DestinationCard
            rank="05"
            title="Dakhla – Marruecos"
            description="Laguna con viento perfecto y olas limpias, un spot único en el desierto."
            image={dakhlaImg}
          />
        </div>

        {/* Cierre editorial */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-6">
            Una guía viva para wave riders
          </h3>
          <p className="text-black leading-relaxed">
            Este ranking no es solo una lista: es una invitación a descubrir los destinos que combinan olas perfectas y viento constante. 
            Aunque cada spot tiene su magia, Máncora se lleva el primer puesto por ofrecer lo que pocos lugares logran: calidad, constancia y autenticidad.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogLayoutPage1
