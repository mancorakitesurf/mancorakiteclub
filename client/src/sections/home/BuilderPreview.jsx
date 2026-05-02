function BuilderPreview() {
  return (
    <section id="packages" className="relative overflow-hidden bg-surface-dark py-16 text-white sm:py-20 lg:py-28">
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Build Your Custom Package
          </h2>
          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">Create the perfect holiday tailored to your needs.</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-surface-dark p-4 shadow-2xl backdrop-blur-sm sm:p-6 lg:p-10">
          <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-xs">
                  1
                </span>
                Duration
              </div>
              <label className="block text-sm font-medium text-gray-300">Stay Length</label>
              <select
                defaultValue="7 Nights"
                className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-primary focus:ring-primary"
              >
                <option>3 Nights</option>
                <option>5 Nights</option>
                <option>7 Nights</option>
                <option>10 Nights</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-xs">
                  2
                </span>
                Instruction
              </div>
              <label className="block text-sm font-medium text-gray-300">Kite Level</label>
              <select className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-primary focus:ring-primary">
                <option>Complete Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Equipment Only</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-xs">
                  3
                </span>
                Extras
              </div>
              <label className="block text-sm font-medium text-gray-300">Guests</label>
              <div className="flex items-center rounded-lg border border-white/20 bg-black/40 p-1">
                <button type="button" className="px-4 py-2 text-white transition-colors hover:text-primary">
                  -
                </button>
                <input
                  type="text"
                  defaultValue="2"
                  className="w-full border-none bg-transparent text-center text-white focus:ring-0"
                />
                <button type="button" className="px-4 py-2 text-white transition-colors hover:text-primary">
                  +
                </button>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-teal-600"
              >
                Calculate &amp; Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuilderPreview
