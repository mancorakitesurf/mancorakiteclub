function PacasmayoBridge() {
  return (
    <section className="bg-black px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Pacasmayo is an experience.
          <br />
          <span className="text-cyan-400">Mancora is where you progress.</span>
        </h2>

        <p className="mt-8 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
          Pacasmayo gives you long rides.
          <br />
          But not always wind. Not always consistency.
        </p>

        <p className="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          In Mancora, everything aligns:
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl bg-[#111] p-4 sm:p-6">
            <p className="text-cyan-400 font-semibold">Wind</p>
            <p className="text-sm text-gray-400 mt-2">
              Reliable, daily thermal wind.
            </p>
          </div>

          <div className="rounded-2xl bg-[#111] p-4 sm:p-6">
            <p className="text-cyan-400 font-semibold">Water</p>
            <p className="text-sm text-gray-400 mt-2">
              Warm, tropical conditions year-round.
            </p>
          </div>

          <div className="rounded-2xl bg-[#111] p-4 sm:p-6">
            <p className="text-cyan-400 font-semibold">Progression</p>
            <p className="text-sm text-gray-400 mt-2">
              Faster learning, safer conditions, better coaching.
            </p>
          </div>

        </div>

        <p className="mt-12 text-base font-semibold text-white sm:text-lg md:text-xl">
          That’s why most riders don’t stay in Pacasmayo.
          <br />
          They finish their trip in Mancora.
        </p>

      </div>

    </section>
  )
}

export default PacasmayoBridge
