function ChicamaExperience() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-16 text-center">
          What makes Chicama legendary
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">The experience</h3>

            <ul className="space-y-4 text-gray-600">
              <li>🌊 Longest left-hand wave in the world</li>
              <li>🏄 Rides up to 2 km</li>
              <li>🧭 Multiple connected sections</li>
              <li>🌬️ Offshore winds</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Reality check</h3>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Cold water (wetsuit required)</li>
              <li>✔ Quiet, minimal town</li>
              <li>✔ Long paddles or boat needed</li>
              <li>✔ Not ideal for progression beginners</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ChicamaExperience