import { GALLERY_IMAGES } from "../galleyData"

function MancoraCollage() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0b1f1d] to-black text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          RAW ADVENTURE MANIFESTO
        </h2>

        <p className="text-gray-400 mb-20">
          Real Stories. Real Adrenaline. Your Tribe Awaits.
        </p>

        {/* COLLAGE */}
        <div className="relative h-[500px]">

          {/* IZQUIERDA */}
          <img
            src={GALLERY_IMAGES[0]}
            className="absolute left-0 top-10 w-48 rotate-[-8deg] rounded-xl shadow-2xl"
          />

          <img
            src={GALLERY_IMAGES[1]}
            className="absolute left-20 bottom-10 w-52 rotate-[6deg] rounded-xl shadow-2xl"
          />

          {/* CENTRO */}
          <img
            src={GALLERY_IMAGES[2]}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-72 rounded-2xl shadow-2xl z-10"
          />

          {/* DERECHA */}
          <img
            src={GALLERY_IMAGES[3]}
            className="absolute right-10 top-20 w-48 rotate-[10deg] rounded-xl shadow-2xl"
          />

          <img
            src={GALLERY_IMAGES[4]}
            className="absolute right-0 bottom-0 w-56 rotate-[-6deg] rounded-xl shadow-2xl"
          />

        </div>

        {/* CTA */}
        <button className="mt-20 px-10 py-4 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
          JOIN THE TRIBE
        </button>

      </div>
    </section>
  )
}

export default MancoraCollage