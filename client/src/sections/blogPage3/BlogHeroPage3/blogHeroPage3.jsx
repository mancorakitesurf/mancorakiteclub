import heroImg from '../../../assets/imagenes-home/posicion2.jpg'

function BlogHeroPage3() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center">

      <img
        src={heroImg}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl px-6">

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Chicama, Peru:
          <span className="block text-cyan-400">
            The Longest Wave in the World
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          And how to turn this into the ultimate surf & wind experience
          by combining it with Mancora.
        </p>

      </div>
    </section>
  )
}

export default BlogHeroPage3