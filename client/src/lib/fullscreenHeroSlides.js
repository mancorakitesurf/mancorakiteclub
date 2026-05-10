import { heroImages } from '../config/images.js'

const unique = (items) => items.filter(Boolean).filter((item, index, array) => array.indexOf(item) === index)

export const HERO_SLIDE_PRESETS = heroImages

export function createHeroSlides({
  desktop = [],
  mobile = HERO_SLIDE_PRESETS.kite.mobile,
  alt = 'Mancora Kite Club hero',
  imageClassName = 'object-[52%_center] md:object-center',
} = {}) {
  const desktopSources = unique(desktop).length ? unique(desktop) : HERO_SLIDE_PRESETS.kite.desktop
  const mobileSources = unique(mobile).length ? unique(mobile) : HERO_SLIDE_PRESETS.kite.mobile
  const slideCount = Math.max(3, desktopSources.length, mobileSources.length)

  return Array.from({ length: slideCount }, (_, index) => ({
    desktopSrc: desktopSources[index % desktopSources.length],
    mobileSrc: mobileSources[index % mobileSources.length],
    alt: `${alt} ${index + 1}`,
    imageClassName,
  }))
}

export function createPresetHeroSlides(presetName = 'kite', options = {}) {
  const preset = HERO_SLIDE_PRESETS[presetName] || HERO_SLIDE_PRESETS.kite

  return createHeroSlides({
    ...options,
    desktop: [...(options.desktop || []), ...preset.desktop],
    mobile: options.mobile || preset.mobile,
  })
}
