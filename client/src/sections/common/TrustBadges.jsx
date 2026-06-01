/* eslint-disable react/prop-types */
import { BadgeCheck, MapPinned, PackageCheck, Radio, ShieldCheck, Star } from 'lucide-react'
import { brandImages } from '../../config/images.js'
import { TRUST_BADGES } from '../../data/trustBadges.js'
import { useI18n } from '../../app/providers/i18nContext.js'

const ikoLogo = brandImages?.ikoLogo

const ICONS = {
  badgeCheck: BadgeCheck,
  mapPinned: MapPinned,
  packageCheck: PackageCheck,
  radio: Radio,
  shieldCheck: ShieldCheck,
  star: Star,
}

const TONES = {
  iko: {
    card: 'border-[#38E0C8]/60 bg-[linear-gradient(135deg,rgba(56,224,200,0.18),rgba(222,255,154,0.08)_46%,rgba(193,155,108,0.16))] shadow-[0_28px_90px_rgba(56,224,200,0.16)]',
    stripe: 'from-[#38E0C8] via-[#DEFF9A] to-[#C19B6C]',
    icon: 'border-[#38E0C8]/45 bg-[#38E0C8]/10 text-[#38E0C8]',
    pill: 'border-[#38E0C8]/45 bg-[#38E0C8]/10 text-[#38E0C8]',
  },
  gold: {
    card: 'border-[#C19B6C]/35 bg-[#C19B6C]/[0.07] hover:border-[#C19B6C]/55',
    stripe: 'from-[#C19B6C] to-[#F4F2EA]',
    icon: 'border-[#C19B6C]/35 bg-[#C19B6C]/10 text-[#C19B6C]',
  },
  turquoise: {
    card: 'border-[#38E0C8]/30 bg-[#38E0C8]/[0.065] hover:border-[#38E0C8]/50',
    stripe: 'from-[#38E0C8] to-[#DEFF9A]',
    icon: 'border-[#38E0C8]/35 bg-[#38E0C8]/10 text-[#38E0C8]',
  },
  cyan: {
    card: 'border-cyan-300/30 bg-cyan-300/[0.06] hover:border-cyan-300/50',
    stripe: 'from-cyan-300 to-[#38E0C8]',
    icon: 'border-cyan-300/35 bg-cyan-300/10 text-cyan-200',
  },
  green: {
    card: 'border-[#DEFF9A]/30 bg-[#DEFF9A]/[0.065] hover:border-[#DEFF9A]/50',
    stripe: 'from-[#DEFF9A] to-[#38E0C8]',
    icon: 'border-[#DEFF9A]/35 bg-[#DEFF9A]/10 text-[#DEFF9A]',
  },
  amber: {
    card: 'border-amber-300/30 bg-amber-300/[0.06] hover:border-amber-300/50',
    stripe: 'from-amber-300 to-[#C19B6C]',
    icon: 'border-amber-300/35 bg-amber-300/10 text-amber-200',
  },
}

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getBadges(limit) {
  if (Number.isFinite(limit)) {
    return TRUST_BADGES.slice(0, Math.max(0, limit))
  }

  return TRUST_BADGES
}

function TrustBadges({
  variant = 'compact',
  featured = true,
  limit,
  className = '',
  showTitle = false,
}) {
  const { t } = useI18n()
  const isFull = variant === 'full'
  const badges = getBadges(limit)

  if (!badges.length) {
    return null
  }

  return (
    <section
      aria-label={t('trustBadges.aria')}
      className={cx(
        'relative overflow-hidden bg-[#0A1113] text-[#F4F2EA]',
        isFull ? 'px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24' : 'px-4 py-10 sm:px-6 lg:px-8',
        className
      )}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,224,200,0.1),transparent_42%,rgba(193,155,108,0.08))]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38E0C8]/45 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C19B6C]/35 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {showTitle && (
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#38E0C8]">
              {t('trustBadges.label')}
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {t('trustBadges.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              {t('trustBadges.subtitle')}
            </p>
          </div>
        )}

        <ul
          className={cx(
            'grid items-stretch gap-3 sm:gap-4',
            isFull
              ? 'sm:grid-cols-2 lg:grid-cols-3'
              : 'sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6'
          )}
        >
          {badges.map((badge) => {
            const Icon = ICONS[badge.icon] || ShieldCheck
            const isFeatured = featured && badge.priority
            const tone = TONES[badge.tone] || TONES.turquoise

            return (
              <li
                key={badge.id}
                className={cx(
                  'group relative flex h-full flex-col overflow-hidden rounded-lg border p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.045]',
                  isFull ? 'min-h-[210px] p-5 sm:p-6' : 'min-h-[172px]',
                  tone.card,
                  isFull && isFeatured ? 'lg:col-span-2' : ''
                )}
              >
                <div className={cx('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', tone.stripe)} aria-hidden="true" />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),transparent_45%)] opacity-70" aria-hidden="true" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div
                    className={cx(
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border',
                      isFull && isFeatured ? 'h-14 w-14' : '',
                      tone.icon
                    )}
                  >
                    {isFeatured && ikoLogo ? (
                      <img
                        src={ikoLogo}
                        alt={t('trustBadges.ikoLogoAlt')}
                        loading="lazy"
                        className="max-h-7 w-auto object-contain"
                      />
                    ) : (
                      <Icon size={isFull && isFeatured ? 26 : 20} strokeWidth={1.8} aria-hidden="true" />
                    )}
                  </div>

                  {badge.tagKey && (
                    <span className={cx('rounded-full border px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.2em]', tone.pill)}>
                      {t(badge.tagKey)}
                    </span>
                  )}
                </div>

                <p
                  className={cx(
                    'relative z-10 mt-4 text-center font-bold leading-snug text-white',
                    isFull ? 'text-lg sm:text-xl' : 'text-sm'
                  )}
                >
                  {t(badge.labelKey)}
                </p>
                <p
                  className={cx(
                    'relative z-10 mt-2 text-center mt-3 leading-6 text-white/70',
                    isFull ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  )}
                >
                  {t(badge.descriptionKey)}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default TrustBadges
