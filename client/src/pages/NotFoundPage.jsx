import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import heroImg from '../assets/imagenes-kitesurfing/posicionkt2.jpg'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <>
      <SEO
        titleKey="seo.notFoundTitle"
        descKey="seo.notFoundDesc"
        titleFallback="Mancora Kite Club | 404"
        descFallback="Page not found. The kitesurfing spot, trip, or page you are looking for does not exist. Return and keep riding with Máncora Kite Club in Peru."
        canonicalPath="/"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#031015] px-5 py-20 text-white sm:px-8 lg:px-12">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroImg}
            alt="Mancora Kite Club 404"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.2, ease: 'easeOut' }}
            className="h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#031015] via-[#031015]/70 to-[#031015]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(90,248,251,0.18),_transparent_55%)]" />
        </div>

        {/* Scanlines */}
        <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:100%_6px]" />

        {/* Animated loading bar */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: ['0%', '86%', '86%', '100%'] }}
          transition={{ duration: 2.8, ease: 'easeInOut' }}
          className="absolute left-0 top-0 z-30 h-[3px] bg-[#5af8fb] shadow-[0_0_24px_rgba(90,248,251,0.75)]"
        />

        {/* Ambient glows */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.18, 0.42, 0.18],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2 z-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5af8fb]/10 blur-3xl sm:h-[520px] sm:w-[520px]"
        />

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-28 bottom-10 z-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -28, 0],
            y: [0, 28, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-28 top-16 z-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"
        />

        {/* Giant 404 background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{
            opacity: 0.12,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeOut' },
            scale: { duration: 1.2, ease: 'easeOut' },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="
            pointer-events-none absolute z-0 select-none
            text-[9rem] font-black italic leading-none tracking-tighter text-transparent
            [-webkit-text-stroke:1px_rgba(255,255,255,0.28)]
            sm:text-[15rem] lg:text-[24rem]
          "
        >
          404
        </motion.div>

        {/* Small system status */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-5 top-6 z-30 hidden text-left sm:block"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/35">
            System Status
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-[#5af8fb]">
            Route Offline
          </p>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="text-xs font-black uppercase tracking-[0.42em] text-[#5af8fb] sm:text-sm"
          >
            Lost In The Wind
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35, skewX: -4 }}
            animate={{ opacity: 1, y: 0, skewX: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="
              mt-6 text-5xl font-black uppercase italic leading-[0.85] tracking-tighter
              text-white drop-shadow-[0_0_30px_rgba(90,248,251,0.18)]
              sm:text-7xl lg:text-9xl
            "
          >
            Off
            <span className="mx-3 text-[#5af8fb] drop-shadow-[0_0_24px_rgba(90,248,251,0.45)]">
              Route
            </span>
            <br />
            Detected
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mx-auto mt-7 max-w-2xl text-sm font-light uppercase leading-7 tracking-[0.18em] text-white/65 sm:text-base sm:leading-8"
          >
            The page you are looking for disappeared with the wind.
            Reconnect your route and keep moving with Mancora Kite Club.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/"
                className="
                  relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden
                  rounded-none bg-[#5af8fb] px-10 py-4 text-sm font-black uppercase
                  tracking-[0.26em] text-black shadow-[0_22px_60px_rgba(90,248,251,0.28)]
                  transition hover:bg-white sm:w-auto
                  before:absolute before:inset-0 before:-z-10 before:skew-x-[-14deg] before:bg-[#5af8fb]
                "
              >
                Return
              </Link>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="
                min-h-14 w-full border-b border-white/20 px-6 py-4 text-xs
                font-black uppercase tracking-[0.32em] text-white/80
                transition hover:border-[#5af8fb] hover:text-[#5af8fb]
                sm:w-auto
              "
            >
              Go Back
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/build"
                className="
                  inline-flex min-h-14 w-full items-center justify-center
                  border border-[#5af8fb]/45 bg-black/25 px-10 py-4 text-sm
                  font-black uppercase tracking-[0.26em] text-[#5af8fb]
                  backdrop-blur-md transition hover:bg-[#5af8fb] hover:text-black
                  sm:w-auto
                "
              >
                Build
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom terminal hint */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="
            absolute bottom-5 left-1/2 z-30 w-[calc(100%-2rem)] max-w-xl
            -translate-x-1/2 rounded-xl border border-[#5af8fb]/20 bg-black/35
            px-4 py-3 text-left font-mono text-[10px] text-[#5af8fb]/70
            backdrop-blur-md sm:bottom-8 sm:text-xs
          "
        >
          <p>
            <span className="text-white/35">mancora-kite-club:</span> route_not_found / recovery_available
          </p>
        </motion.div>
      </section>
    </>
  )
}
