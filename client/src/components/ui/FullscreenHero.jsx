import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { A11y, Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRevealHeroOnScroll } from '../../hooks/useRevealHeroOnScroll.js'

import 'swiper/css'
import 'swiper/css/effect-fade'

const baseImageClassName = 'h-full w-full object-cover'

const heightClassNames = {
  screen: 'h-screen min-h-[100svh]',
  fullscreen: 'h-screen min-h-[100svh]',
  compact: 'min-h-[78svh]',
}

const alignClassNames = {
  'bottom-left': {
    wrapper: 'items-end justify-start',
    content: 'mb-16 max-w-xl text-left sm:mb-20 md:max-w-2xl lg:mb-24',
  },
  'center-left': {
    wrapper: 'items-center justify-start',
    content: 'max-w-xl text-left md:max-w-2xl',
  },
  center: {
    wrapper: 'items-center justify-center',
    content: 'mx-auto max-w-xl text-center md:max-w-2xl',
  },
}

const compactContentClassNames = {
  'bottom-left': 'mb-10 max-w-[18rem] text-left sm:mb-12 sm:max-w-sm md:mb-14 md:max-w-md lg:mb-16',
  'center-left': 'max-w-[18rem] text-left sm:max-w-sm md:max-w-md',
  center: 'mx-auto max-w-[18rem] text-center sm:max-w-sm md:max-w-md',
}

const densityClassNames = {
  default: {
    eyebrow: 'mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/75 sm:text-xs',
    title: 'font-display text-5xl font-semibold leading-[0.95] tracking-normal text-white drop-shadow-[0_12px_36px_rgba(0,0,0,0.28)] sm:text-6xl md:text-7xl lg:text-8xl',
    subtitle: 'mt-5 max-w-md text-sm font-light leading-6 text-white/85 drop-shadow-[0_8px_28px_rgba(0,0,0,0.24)] sm:text-base md:mt-6 md:max-w-xl md:text-lg md:leading-8',
    meta: 'mt-6 flex flex-wrap items-center gap-4 text-sm text-white/75',
    actions: 'mt-8 flex flex-wrap gap-3',
    action: 'inline-flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark sm:px-6',
  },
  compact: {
    eyebrow: 'mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-[0.68rem]',
    title: 'font-display text-3xl font-semibold leading-[0.98] tracking-normal text-white drop-shadow-[0_12px_36px_rgba(0,0,0,0.24)] sm:text-4xl md:text-5xl lg:text-6xl',
    subtitle: 'mt-3 max-w-[19rem] text-xs font-light leading-5 text-white/80 drop-shadow-[0_8px_28px_rgba(0,0,0,0.22)] sm:max-w-sm sm:text-sm md:mt-4 md:text-base md:leading-6',
    meta: 'mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70 sm:text-sm',
    actions: 'mt-5 flex flex-wrap gap-2.5',
    action: 'inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-xs font-semibold shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark sm:h-11 sm:px-5 sm:text-sm',
  },
}

function normalizeSlides({ backgroundImage, backgroundAlt, imageClassName, slides }) {
  if (slides?.length) {
    return slides.map((slide) => ({
      desktopSrc: slide.desktopSrc || slide.src,
      mobileSrc: slide.mobileSrc || slide.src || slide.desktopSrc,
      alt: slide.alt || backgroundAlt || '',
      imageClassName: slide.imageClassName || imageClassName || '',
    }))
  }

  if (!backgroundImage) {
    return []
  }

  return [
    {
      desktopSrc: backgroundImage,
      mobileSrc: backgroundImage,
      alt: backgroundAlt || '',
      imageClassName: imageClassName || '',
    },
  ]
}

function HeroMedia({ backgroundImage, backgroundAlt, imageClassName, slides, revealContent }) {
  const heroSlides = normalizeSlides({
    backgroundImage,
    backgroundAlt,
    imageClassName,
    slides,
  })
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!heroSlides.length) {
    return null
  }

  if (heroSlides.length === 1) {
    const [slide] = heroSlides

    return (
      <picture className="absolute inset-0 z-0 block h-full w-full">
        <source media="(min-width: 768px)" srcSet={slide.desktopSrc} />
        <img
          src={slide.mobileSrc || slide.desktopSrc}
          alt={slide.alt}
          fetchPriority="high"
          className={`${baseImageClassName} ${slide.imageClassName}`}
        />
      </picture>
    )
  }

  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <div
        className="h-full w-full cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Show next hero image"
        onClick={() => swiperRef.current?.slideNext()}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            swiperRef.current?.slideNext()
          }
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full [&_.swiper-slide]:h-full [&_.swiper-wrapper]:h-full"
          aria-label="Hero visual highlights"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={`${slide.alt}-${index}`} className="!h-full">
              <picture className="block h-full w-full">
                <source media="(min-width: 768px)" srcSet={slide.desktopSrc} />
                <img
                  src={slide.mobileSrc || slide.desktopSrc}
                  alt={slide.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  className={`${baseImageClassName} ${slide.imageClassName}`}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className={`absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 transition-all duration-700 md:bottom-9 md:left-auto md:right-10 md:translate-x-0 ${
          revealContent ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        {heroSlides.map((slide, index) => {
          const isActive = activeIndex === index

          return (
            <button
              key={`${slide.alt}-indicator-${index}`}
              type="button"
              aria-label={`Show hero image ${index + 1}`}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                isActive
                  ? 'w-9 bg-white'
                  : 'w-3 bg-white/45 hover:w-5 hover:bg-white/75'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

function FullscreenHero({
  as: Tag = 'header',
  title,
  subtitle,
  eyebrow,
  backgroundImage,
  backgroundAlt,
  imageClassName,
  slides,
  actions = [],
  meta = [],
  align = 'bottom-left',
  overlay = 'soft',
  height = 'screen',
  density = 'default',
  children,
  className = '',
  contentClassName = '',
}) {
  const heroActions = Array.isArray(actions) ? actions : [actions].filter(Boolean)
  const heightClassName = heightClassNames[height] || heightClassNames.screen
  const alignment = alignClassNames[align] || alignClassNames['bottom-left']
  const densityClasses = densityClassNames[density] || densityClassNames.default
  const contentLayoutClassName =
    density === 'compact'
      ? compactContentClassNames[align] || compactContentClassNames['bottom-left']
      : alignment.content
  const hasOverlay = overlay !== 'none' && overlay !== false
  const revealContent = useRevealHeroOnScroll(40)

  return (
    <Tag className={`relative ${heightClassName} w-full overflow-hidden bg-background-dark ${className}`}>
      <HeroMedia
        backgroundImage={backgroundImage}
        backgroundAlt={backgroundAlt}
        imageClassName={imageClassName}
        slides={slides}
        revealContent={revealContent}
      />

      {hasOverlay ? (
        <>
          <div
            className={`pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-black/5 to-transparent transition-opacity duration-700 ${
              revealContent ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-[1] w-full bg-gradient-to-r from-black/45 via-black/15 to-transparent transition-opacity duration-700 md:w-2/3 ${
              revealContent ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      ) : null}

      <motion.div
        initial={false}
        animate={revealContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-none relative z-10 flex h-full w-full px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 sm:px-8 md:px-12 lg:px-16 ${alignment.wrapper}`}
      >
        <div className={`${revealContent ? 'pointer-events-auto' : 'pointer-events-none'} ${contentLayoutClassName} ${contentClassName}`}>
          {eyebrow ? (
            <p className={densityClasses.eyebrow}>
              {eyebrow}
            </p>
          ) : null}

          <h1 className={densityClasses.title}>
            {title}
          </h1>

          {subtitle ? (
            <p className={densityClasses.subtitle}>
              {subtitle}
            </p>
          ) : null}

          {meta.length ? (
            <div className={densityClasses.meta}>
              {meta.map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center gap-4">
                  {index > 0 ? <span className="h-1 w-1 rounded-full bg-white/40" /> : null}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ) : null}

          {children}

          {heroActions.length ? (
            <div className={densityClasses.actions}>
              {heroActions.map((action) => {
                const ActionIcon = action.icon
                const actionClassName = action.className || 'border-white/25 bg-white/10 text-white hover:border-white/45 hover:bg-white/20 focus:ring-white/70'
                const ActionComponent = action.to ? Link : 'a'
                const actionProps = action.to
                  ? { to: action.to }
                  : {
                      href: action.href,
                      target: action.external ? '_blank' : undefined,
                      rel: action.external ? 'noopener noreferrer' : undefined,
                    }

                return (
                  <ActionComponent
                    key={`${action.label}-${action.to || action.href}`}
                    {...actionProps}
                    className={`${densityClasses.action} ${actionClassName}`}
                  >
                    {ActionIcon ? <ActionIcon className="text-lg" aria-hidden="true" /> : null}
                    {action.label}
                  </ActionComponent>
                )
              })}
            </div>
          ) : null}
        </div>
      </motion.div>
    </Tag>
  )
}

export default FullscreenHero
