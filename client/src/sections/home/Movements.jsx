import { motion } from "framer-motion"

import logoOzone from "../../assets/LOGOS KITE CLUB/Logo_ozone.webp"
import logoDuotone from "../../assets/LOGOS KITE CLUB/Logo-duotone.webp"
import logoSlingshot from "../../assets/LOGOS KITE CLUB/Logo-slingshot.webp"
import logoRide from "../../assets/LOGOS KITE CLUB/Logo-Ride.webp"
import { useI18n } from '../../app/providers/i18nContext'

const sponsors = [
  { name: "Ozone", logo: logoOzone },
  { name: "Ride Engine", logo: logoRide },
  { name: "Duotone", logo: logoDuotone },
  { name: "Slingshot", logo: logoSlingshot },
]

function Movements() {
  const { t } = useI18n()
  const sponsorList = [...sponsors, ...sponsors, ...sponsors]

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#071a19] py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(42,157,143,0.22),_transparent_65%)]" />

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#071a19] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#071a19] to-transparent" />

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-primary">
            {t('sections.home.officialPartners')}
          </p>
        </div>

        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max items-center gap-7"
          >
            {sponsorList.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="
                  group flex h-24 min-w-[220px] items-center justify-center
                  rounded-3xl border border-white/10
                  bg-white/[0.07] px-8
                  shadow-[0_22px_55px_rgba(0,0,0,0.28)]
                  backdrop-blur-md
                  transition duration-500
                  hover:-translate-y-1
                  hover:border-primary/60
                  hover:bg-white/[0.11]
                  hover:shadow-[0_25px_75px_rgba(42,157,143,0.24)]
                "
              >
                <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    loading="lazy"
                    className={`
                      object-contain
                      opacity-80 grayscale
                      transition duration-500
                      group-hover:opacity-100
                      group-hover:grayscale-0
                      group-hover:scale-105
                      ${
                        sponsor.name === "Duotone"
                          ? "max-h-[82px] max-w-[195px]"
                          : "max-h-14 max-w-[150px]"
                      }
                    `}
                  />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Movements