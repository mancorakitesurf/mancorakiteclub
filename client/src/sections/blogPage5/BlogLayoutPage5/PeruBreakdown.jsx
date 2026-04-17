function PeruComparison() {
  return (
    <section className="py-24 bg-[#0b1f1e] text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* NORTH */}
        <div className="p-10 rounded-3xl bg-black/40 backdrop-blur">

          <h3 className="text-3xl font-bold text-cyan-400">Northern Peru</h3>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Warm water</li>
            <li>✔ Consistent wind</li>
            <li>✔ Friendly waves</li>
            <li>✔ Lifestyle & comfort</li>
            <li>✔ Perfect for progression</li>
          </ul>

        </div>

        {/* SOUTH */}
        <div className="p-10 rounded-3xl bg-black/40 backdrop-blur">

          <h3 className="text-3xl font-bold">Southern Peru</h3>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Stronger winds</li>
            <li>✔ Colder water</li>
            <li>✔ Bigger, more technical waves</li>
            <li>✔ More raw & less developed</li>
            <li>✔ Advanced riders focus</li>
          </ul>

        </div>

      </div>

    </section>
  )
}

export default PeruComparison