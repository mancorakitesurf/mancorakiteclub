function PacasmayoBridge() {
  return (
    <section className="py-32 bg-black text-white text-center">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold leading-tight">
          Pacasmayo is an experience.
          <br />
          <span className="text-cyan-400">Mancora is where you progress.</span>
        </h2>

        <p className="mt-8 text-gray-400 text-lg">
          Pacasmayo gives you long rides.
          <br />
          But not always wind. Not always consistency.
        </p>

        <p className="mt-6 text-gray-300 text-lg">
          In Mancora, everything aligns:
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-[#111] p-6 rounded-xl">
            <p className="text-cyan-400 font-semibold">Wind</p>
            <p className="text-sm text-gray-400 mt-2">
              Reliable, daily thermal wind.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <p className="text-cyan-400 font-semibold">Water</p>
            <p className="text-sm text-gray-400 mt-2">
              Warm, tropical conditions year-round.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <p className="text-cyan-400 font-semibold">Progression</p>
            <p className="text-sm text-gray-400 mt-2">
              Faster learning, safer conditions, better coaching.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xl text-white font-semibold">
          That’s why most riders don’t stay in Pacasmayo.
          <br />
          They finish their trip in Mancora.
        </p>

      </div>

    </section>
  )
}

export default PacasmayoBridge