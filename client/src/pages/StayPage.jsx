import { componentImages } from '../config/images.js'
import {
  FaMapMarkerAlt,
  FaBed,
  FaWhatsapp,
  FaDumbbell,
  FaUmbrellaBeach,
} from "react-icons/fa"
import { GiLotus, GiWhaleTail, GiScubaMask, GiTurtle } from "react-icons/gi"

import StandardPage from "./StandardPage.jsx"
import FullscreenHero from "../components/ui/FullscreenHero.jsx"
import { createPresetHeroSlides } from "../lib/fullscreenHeroSlides.js"
import { buildWhatsAppUrl } from "../lib/whatsapp.js"
import { useI18n } from "../app/providers/i18nContext.jsx"

const { heroImg, img1, img2, img3, img4, img5 } = componentImages["pages/StayPage.jsx"]

function StayPage() {
  const { t, currentLang } = useI18n()

  const stayMessage = t('stay.whatsappMessage')

  const amenities = [
    {
      icon: <GiLotus />,
      title: t('stay.yoga'),
      text: t('stay.yogaDesc'),
    },
    {
      icon: <GiWhaleTail />,
      title: t('stay.whaleWatching'),
      text: t('stay.whaleWatchingDesc'),
    },
    {
      icon: <GiScubaMask />,
      title: t('stay.scubaDiving'),
      text: t('stay.scubaDivingDesc'),
    },
    {
      icon: <GiTurtle />,
      title: t('stay.swimTurtles'),
      text: t('stay.swimTurtlesDesc'),
    },
    {
      icon: <FaDumbbell />,
      title: t('stay.gym'),
      text: t('stay.gymDesc'),
    },
    {
      icon: <FaUmbrellaBeach />,
      title: t('stay.beachfrontBungalows'),
      text: t('stay.beachfrontBungalowsDesc'),
    },
  ]

  const pricing = [
    {
      guests: 1,
      label: t('stay.onePerson'),
      sublabel: t('stay.privateRoom'),
      price: 50,
    },
    {
      guests: 2,
      label: t('stay.twoPersons'),
      sublabel: t('stay.sameRoom'),
      price: 80,
    },
  ]

  const gallery = [
    {
      image: img1,
      title: t('stay.galleryPrivateRoom'),
      label: t('stay.galleryComfort'),
    },
    {
      image: img2,
      title: t('stay.galleryBedroom'),
      label: t('stay.galleryRest'),
    },
    {
      image: img3,
      title: t('stay.galleryNightView'),
      label: t('stay.galleryAtmosphere'),
    },
    {
      image: img4,
      title: t('stay.galleryPool'),
      label: t('stay.galleryLifestyle'),
    },
    {
      image: img5,
      title: t('stay.galleryLodge'),
      label: t('stay.galleryExperience'),
    },
  ]

  return (
    <StandardPage
      titleKey="seo.stayTitle"
      descKey="seo.stayDesc"
      titleFallback="Stay with Us in Máncora | Máncora Kite Club"
      descFallback="Premium accommodation in Máncora for kitesurfers and riders. Clean rooms with A/C, WiFi, hot water, breakfast. Calm base close to the best spots. Book direct!"
      fullWidth
    >
      <div className="overflow-hidden bg-white dark:bg-surface-dark">
        <FullscreenHero
          as="section"
          eyebrow={t('stay.heroLabel')}
          title={t('stay.heroTitle')}
          subtitle={t('stay.heroDesc')}
          density="compact"
          slides={createPresetHeroSlides('stay', {
            desktop: [heroImg, img4, img5],
            alt: 'Stay with us in Mancora',
            imageClassName: 'object-[52%_center] md:object-center',
          })}
          actions={[
            {
              href: `/build${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}`,
              label: t('common.buildYourTrip'),
              className: "bg-primary text-white hover:bg-primary/90",
            },
            {
              href: buildWhatsAppUrl(stayMessage),
              label: t('common.bookOnWhatsApp'),
              icon: FaWhatsapp,
              external: true,
              className: "border-white/50 text-white hover:bg-white hover:text-slate-950",
            },
          ]}
        />

        {/* INTRO */}
        <section className="grid gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.15fr] lg:px-16 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {t('stay.introLabel')}
            </p>

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl">
              {t('stay.introTitle')}
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>{t('stay.introP1')}</p>
            <p>{t('stay.introP2')}</p>
          </div>
        </section>

        {/* AMENITIES */}
        <section className="bg-slate-50 px-6 py-20 dark:bg-background-dark sm:px-10 lg:px-16">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {t('stay.amenitiesLabel')}
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
              {t('stay.amenitiesTitle')}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-surface-dark"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {t('stay.ratesLabel')}
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
              {t('stay.ratesTitle')}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              {t('stay.ratesSubtitle')}
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            {pricing.map((plan) => (
              <article
                key={plan.guests}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-surface-dark"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    {plan.guests}
                  </div>

                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">
                      {plan.label}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {plan.sublabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-bold text-slate-950 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                    {t('stay.perNight')}
                  </span>
                </div>

                <p className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  <FaBed />
                  {t('stay.breakfastIncluded')}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                {t('stay.galleryLabel')}
              </p>

              <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">
                {t('stay.galleryTitle')}
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              {t('stay.galleryDesc')}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {[gallery[0], gallery[1]].map((item, index) => (
              <article
                key={item.title}
                className={`group relative h-[400px] overflow-hidden rounded-[2rem] ${
                  index === 0 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    {item.label}
                  </p>

                  <h3
                    className={`mt-2 font-bold ${
                      index === 0 ? "text-3xl" : "text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {[gallery[2], gallery[3], gallery[4]].map((item) => (
              <article
                key={item.title}
                className="group relative h-[300px] overflow-hidden rounded-[2rem]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="grid gap-8 bg-slate-50 px-6 py-20 dark:bg-background-dark sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-surface-dark">
            <div className="overflow-hidden rounded-[1.5rem]" style={{ height: "380px" }}>
              <iframe
                title="Mancora Kite House location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5971273445416!2d-81.0530883!3d-4.1020847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x903691315a6adf53%3A0x11242dabd794a228!2sMancora%20Kite%20Club%20-%20Escuela%20kitesurf%20y%20wingfoil!5e0!3m2!1sen!2spe!4v1778131649396!5m2!1sen!2spe"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  filter:
                    "invert(1) hue-rotate(180deg) grayscale(0.15) brightness(0.85)",
                  border: 0,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-surface-dark">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {t('stay.locationLabel')}
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold text-slate-950 dark:text-white">
              {t('stay.locationTitle')}
            </h2>

            <p className="mt-5 flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-primary" />
              {t('stay.locationAddress')}
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {t('stay.locationDesc')}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-center text-white sm:px-10 lg:px-16">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <FaBed className="mx-auto text-4xl text-primary" />

            <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
              {t('stay.ctaTitle')}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              {t('stay.ctaDesc')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to={`/build${currentLang === 'en' ? '' : currentLang === 'fr' ? '/fr' : '/esp'}`}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-primary/90 sm:w-auto"
              >
                {t('common.buildYourTrip')}
              </Link>

              <a
                href={buildWhatsAppUrl(stayMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950 sm:w-auto"
              >
                <FaWhatsapp />
                {t('common.bookOnWhatsApp')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </StandardPage>
  )
}

export default StayPage
