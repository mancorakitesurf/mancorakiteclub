import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { componentImages } from '../../config/images.js'

const { horizontal, vertical } = componentImages["pages/StayPage.jsx"]

function StayHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Desktop & Mobile carousel images
  const carouselImages = {
    desktop: horizontal,
    mobile: vertical,
  }
  const slideCount = Math.max(carouselImages.desktop.length, carouselImages.mobile.length)
  const slides = Array.from({ length: slideCount }, (_, index) => ({
    desktop: carouselImages.desktop[index % carouselImages.desktop.length],
    mobile: carouselImages.mobile[index % carouselImages.mobile.length],
  }))

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
    setIsAutoPlay(false)
  }

  // Auto-play effect (9 seconds)
  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount)
    }, 9000)

    return () => clearInterval(timer)
  }, [isAutoPlay, slideCount])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <motion.div
          key={`stay-hero-${index}`}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.picture
            className="block h-full w-full"
            animate={{
              scale: currentSlide === index ? [1, 1.05] : 1,
            }}
            transition={{
              duration: 9,
              ease: "linear",
              repeat: currentSlide === index ? Infinity : 0,
            }}
          >
            <source media="(min-width: 768px)" srcSet={slide.desktop} />
            <img
              src={slide.mobile}
              alt=""
              width="960"
              height="1707"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              className="h-full w-full object-cover"
            />
          </motion.picture>
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
      ))}

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 z-50 flex gap-3">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white/20 p-3 backdrop-blur-md transition hover:bg-white/30"
        >
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white/20 p-3 backdrop-blur-md transition hover:bg-white/30"
        >
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            animate={{ 
              scale: currentSlide === index ? 1.2 : 1,
              opacity: currentSlide === index ? 1 : 0.5,
            }}
            className="h-2 rounded-full bg-white/60 transition"
            style={{
              width: currentSlide === index ? '24px' : '8px',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default StayHeroCarousel
