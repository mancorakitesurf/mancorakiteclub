import { QUOTE } from './wavesContent.js'

function WavesQuote({ text = QUOTE }) {
  return (
    <section className="bg-surface-dark/80 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-2xl font-bold leading-relaxed tracking-wide text-primary md:text-3xl lg:text-4xl">
          {text}
        </p>
      </div>
    </section>
  )
}

export default WavesQuote
