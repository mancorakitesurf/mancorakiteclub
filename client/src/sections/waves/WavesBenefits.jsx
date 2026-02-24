import { FaCheck } from 'react-icons/fa'
import { BENEFITS } from './wavesContent.js'

function WavesBenefits() {
  return (
    <section className="bg-background-dark py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Benefits</h2>
        </div>

        <ul className="space-y-8">
          {BENEFITS.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-5">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-gray-300">
                <FaCheck className="text-xl" />
              </span>
              <div>
                <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
                <p className="mt-1 text-gray-400">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WavesBenefits
