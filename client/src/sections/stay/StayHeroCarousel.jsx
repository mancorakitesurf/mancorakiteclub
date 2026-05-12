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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.desktop.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.desktop.length) % carouselImages.desktop.length)
    setIsAutoPlay(false)
  }

  // Auto-play effect (9 seconds)
  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.desktop.length)
    }, 9000)

    return () => clearInterval(timer)
  }, [isAutoPlay, carouselImages.desktop.length])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Desktop images */}
      <div className="hidden md:flex h-full w-full">
        {carouselImages.desktop.map((image, index) => (
          <motion.div
            key={`desktop-${index}`}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.div
              className="h-full w-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{
                scale: currentSlide === index ? [1, 1.05] : 1,
              }}
              transition={{
                duration: 9,
                ease: "linear",
                repeat: currentSlide === index ? Infinity : 0,
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
        ))}
      </div>

      {/* Mobile images */}
      <div className="flex md:hidden h-full w-full">
        {carouselImages.mobile.map((image, index) => (
          <motion.div
            key={`mobile-${index}`}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.div
              className="h-full w-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              animate={{
                scale: currentSlide === index ? [1, 1.05] : 1,
              }}
              transition={{
                duration: 9,
                ease: "linear",
                repeat: currentSlide === index ? Infinity : 0,
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
        ))}
      </div>

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
        {carouselImages.desktop.map((_, index) => (
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
