import { SPOTS } from "../comparisonData"

function ComparisonCards() {
  return (
    <section className="py-24 bg-[#0b1f1e] text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {SPOTS.map((spot, i) => (
          <div
            key={i}
            className={`rounded-3xl overflow-hidden shadow-xl transition hover:scale-105 ${
              spot.highlight ? "ring-2 ring-cyan-400" : ""
            }`}
          >

            <img src={spot.image} className="h-64 w-full object-cover" />

            <div className="p-6">

              <h3 className="text-2xl font-bold">{spot.name}</h3>

              <p className="text-cyan-400 mt-2">
                ★ {spot.rating} / 5
              </p>

              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <p><strong>Wind:</strong> {spot.wind}</p>
                <p><strong>Waves:</strong> {spot.waves}</p>
                <p><strong>Level:</strong> {spot.level}</p>
                <p><strong>Vibe:</strong> {spot.vibe}</p>
              </div>

              <p className="mt-4 text-gray-400 text-sm">
                {spot.description}
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default ComparisonCards