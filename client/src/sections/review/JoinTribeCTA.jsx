import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function JoinTribeCTA() {
  return (
    <section className="relative overflow-hidden bg-[#031015] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(90,248,251,0.18),_transparent_60%)]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#5af8fb]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            overflow-hidden rounded-[2.5rem] border border-white/10
            bg-white/[0.06] p-8 shadow-[0_35px_100px_rgba(0,0,0,0.35)]
            backdrop-blur-xl sm:p-10 lg:p-14
          "
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            
            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#5af8fb]">
                Join the Tribe
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
                Start Your
                <br />
                Mancora Story
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Plan your next session in Máncora with wind, ocean, community,
                and real progression in one place.
              </p>
            </div>

            {/* CTA box */}
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 text-center shadow-inner">
              <p className="text-sm leading-7 text-white/70">
                Tell us your dates, your level, and the kind of experience you want to build.
              </p>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/build"
                  className="
                    mt-7 inline-flex min-h-14 w-full items-center justify-center
                    rounded-full bg-[#5af8fb] px-7 text-sm font-black
                    uppercase tracking-[0.22em] text-black
                    shadow-[0_20px_50px_rgba(90,248,251,0.22)]
                    transition hover:bg-white
                  "
                >
                  Build Your Trip
                </Link>
              </motion.div>

              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/40">
                Mancora Kite Club
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinTribeCTA