import { motion } from "framer-motion"

const sponsors = [
  "Slingshot",
  "Ride Engine",
  "Duotone",
  "Ozone",
  "ION",
  "Mystic",
  "North",
  "Cabrinha",
]

function Movements() {
  const sponsorList = [...sponsors, ...sponsors]

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#071a19] py-8 text-white">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(42,157,143,0.22),_transparent_65%)]" />

      {/* Fade izquierdo */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#071a19] to-transparent" />

      {/* Fade derecho */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#071a19] to-transparent" />

      <div className="relative z-10">
        {/* Header pequeño */}
        <div className="mb-7 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
            Official Partners
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max items-center gap-6"
          >
            {sponsorList.map((sponsor, index) => (
              <div
                key={`${sponsor}-${index}`}
                className="
                  group flex min-w-[190px] items-center justify-center
                  rounded-2xl border border-white/10
                  bg-white/[0.06] px-8 py-5
                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  backdrop-blur-md
                  transition duration-500
                  hover:-translate-y-1
                  hover:border-primary/60
                  hover:bg-primary/10
                  hover:shadow-[0_25px_70px_rgba(42,157,143,0.22)]
                "
              >
                <span
                  className="
                    font-display text-base font-black uppercase
                    tracking-[0.35em] text-white/75
                    transition duration-500
                    group-hover:text-white
                  "
                >
                  {sponsor}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Movements