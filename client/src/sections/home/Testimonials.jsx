import { FaQuoteLeft } from 'react-icons/fa'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from './homeContent.js'

function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#0A1113] py-20 text-[#F4F2EA] sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4F2EA]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F4F2EA]/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-20 text-center font-display text-3xl font-bold tracking-normal text-[#F4F2EA] sm:text-4xl md:text-5xl">
          What Our Riders Say
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-9 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {TESTIMONIALS.map((item, index) => (
            <div key={item.name} className="flex pt-12">
              <article className="relative flex h-full min-h-[440px] w-full flex-col items-center rounded-2xl bg-[#F4F2EA] px-6 pb-8 pt-16 text-center text-[#0A1113] shadow-[0_26px_80px_rgba(0,0,0,0.34)] ring-1 ring-white/10 sm:px-8 lg:min-h-[460px]">
                <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full border-[5px] border-[#F4F2EA] bg-[#0A1113] shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
                  <img
                    src={item.image}
                    alt={`User ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-5 flex h-6 items-center justify-center gap-1.5 text-[#C19B6C]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={18} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#0A1113]/10 bg-white/50 text-[#C19B6C]">
                  <span className="text-lg leading-none">
                    <FaQuoteLeft />
                  </span>
                </div>

                <div className="flex min-h-[150px] flex-1 items-center">
                  <p className="line-clamp-5 text-sm font-medium italic leading-7 text-[#0A1113]/80 sm:text-base">
                    {item.text}
                  </p>
                </div>

                <div className="mt-auto w-full border-t border-[#0A1113]/10 pt-5">
                  <h5 className="text-lg font-bold text-[#0A1113]">{item.name}</h5>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-normal text-[#0A1113]/50">{item.country}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
