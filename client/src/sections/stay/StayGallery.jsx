import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus } from 'react-icons/fa'
import { useI18n } from '../../app/providers/i18nContext.js'
import { componentImages } from '../../config/images.js'

const { galleryFull } = componentImages["pages/StayPage.jsx"]

const itemData = [
  { titleKey: "stay.galleryPrivateRoom", descKey: "stay.galleryComfort" }, // 0
  { titleKey: "stay.galleryBedroom", descKey: "stay.galleryRest" },       // 1
  { titleKey: "stay.galleryLodge", descKey: "stay.galleryExperience" },   // 2
  { titleKey: "stay.galleryPool", descKey: "stay.galleryLifestyle" },     // 3
  { titleKey: "stay.galleryNightView", descKey: "stay.galleryAtmosphere" }, // 4
  { titleKey: "stay.galleryLodge", descKey: "stay.galleryExperience" },   // 5
  { titleKey: "stay.galleryBedroom", descKey: "stay.galleryRest" },       // 6
  { titleKey: "stay.galleryPool", descKey: "stay.galleryLifestyle" },     // 7
  { titleKey: "stay.galleryPrivateRoom", descKey: "stay.galleryComfort" }, // 8
  { titleKey: "stay.galleryLodge", descKey: "stay.galleryExperience" },   // 9
  { titleKey: "stay.galleryNightView", descKey: "stay.galleryAtmosphere" }, // 10
  { titleKey: "stay.galleryBedroom", descKey: "stay.galleryRest" },       // 11
  { titleKey: "stay.galleryPool", descKey: "stay.galleryLifestyle" },     // 12
  { titleKey: "stay.galleryPrivateRoom", descKey: "stay.galleryComfort" }, // 13
  { titleKey: "stay.galleryLodge", descKey: "stay.galleryExperience" },   // 14
]

function GalleryItem({ image, index, colSpan = "md:col-span-1", onClick }) {
  const { t } = useI18n()
  const data = itemData[index % itemData.length]

  const heights = [
    "md:row-span-2 h-[450px] md:h-full", // 0
    "h-[280px]",                         // 1
    "h-[280px]",                         // 2
    "h-[280px]",                         // 3
    "h-[320px]",                         // 4
    "md:row-span-2 h-[450px] md:h-full", // 5
    "h-[280px]",                         // 6
    "h-[320px]",                         // 7
    "h-[280px]",                         // 8
    "md:row-span-2 h-[450px] md:h-full", // 9
    "h-[320px]",                         // 10
    "h-[280px]",                         // 11
    "h-[320px]",                         // 12
    "h-[280px]",                         // 13
    "h-[280px]",                         // 14
  ]

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(42,157,143,0.15)] hover:z-10 cursor-pointer border border-slate-200/50 dark:border-white/5 ${colSpan} ${heights[index % heights.length]}`}
    >
      <img
        src={image}
        alt={`${t(data.titleKey)} - ${t(data.descKey)}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      
      {/* Cinematic Gradient & Multilingual Hover Details */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-8">
        <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#b7e28a] mb-1.5">
            {t(data.descKey)}
          </p>
          <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight mb-5">
            {t(data.titleKey)}
          </h3>
        </div>
        
        <div className="self-end translate-y-4 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-950 transition-colors duration-300">
          <FaSearchPlus className="text-lg" />
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
    </motion.article>
  )
}

function StayGallery() {
  const { t } = useI18n()
  const galleryRef = useRef(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Lightbox navigation functions
  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  
  const showPrev = (e) => {
    e?.stopPropagation()
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === 0 ? galleryFull.length - 1 : prev - 1))
  }

  const showNext = (e) => {
    e?.stopPropagation()
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === galleryFull.length - 1 ? 0 : prev + 1))
  }

  // Keyboard controls
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent background scrolling while open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  return (
    <section 
      ref={galleryRef}
      className="relative px-6 py-28 sm:px-10 lg:px-16 overflow-hidden bg-white dark:bg-background-dark"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#2A9D8F]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-[#b7e28a]/4 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-6xl relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2A9D8F]/10 to-[#b7e28a]/10 border border-[#2A9D8F]/20 text-[10px] font-black uppercase tracking-[0.3em] text-[#2A9D8F] dark:text-[#b7e28a] shadow-sm">
              ✨ Boutique Resort
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-black text-slate-950 dark:text-white uppercase tracking-tighter">
            {t('stay.galleryTitle')}
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-650 dark:text-slate-300 leading-relaxed">
            {t('stay.galleryDesc')}
          </p>
        </motion.div>
      </div>

      {/* Masonry grid with staggered children */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
        className="mx-auto grid grid-cols-1 gap-8 md:auto-rows-max md:grid-cols-4 max-w-6xl relative z-10"
      >
        {galleryFull.map((image, index) => {
          // Asymmetric layout logic for 15 images
          const colSpanMap = {
            0: "md:col-span-2",
            1: "md:col-span-1",
            2: "md:col-span-1",
            3: "md:col-span-1",
            4: "md:col-span-1",
            5: "md:col-span-2",
            6: "md:col-span-1",
            7: "md:col-span-1",
            8: "md:col-span-1",
            9: "md:col-span-2",
            10: "md:col-span-1",
            11: "md:col-span-1",
            12: "md:col-span-1",
            13: "md:col-span-1",
            14: "md:col-span-1",
          }
          return (
            <GalleryItem 
              key={index} 
              image={image} 
              index={index}
              colSpan={colSpanMap[index % 15] || "md:col-span-1"}
              onClick={() => openLightbox(index)}
            />
          )
        })}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-10 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-55 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
              aria-label="Close Lightbox"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Main Content Area */}
            <div className="relative flex w-full max-w-5xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-4 sm:-left-20 z-55 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Previous Image"
              >
                <FaChevronLeft className="text-lg" />
              </button>

              {/* Central Image Container */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl max-h-[75vh] w-full flex items-center justify-center shadow-2xl border border-white/5 bg-slate-950"
              >
                <img
                  src={galleryFull[lightboxIndex]}
                  alt={t(itemData[lightboxIndex % itemData.length].titleKey)}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-4 sm:-right-20 z-55 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Next Image"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>

            {/* Bottom Caption Info */}
            <motion.div 
              key={`caption-${lightboxIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="font-display text-2xl font-black uppercase tracking-tight">
                {t(itemData[lightboxIndex % itemData.length].titleKey)}
              </h4>
              <p className="text-xs font-bold text-[#b7e28a] tracking-widest uppercase mt-2">
                {t(itemData[lightboxIndex % itemData.length].descKey)}
              </p>
              <div className="mt-4 text-[10px] tracking-wider text-slate-500 font-bold uppercase">
                {lightboxIndex + 1} / {galleryFull.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default StayGallery
