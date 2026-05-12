import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '../../app/providers/i18nContext.js'
import { componentImages } from '../../config/images.js'

const { galleryFull } = componentImages["pages/StayPage.jsx"]

function GalleryItem({ image, index, colSpan = "md:col-span-1" }) {
  const heights = [
    "md:row-span-2 h-[500px] md:h-full", // 0
    "h-[300px]",                         // 1
    "h-[300px]",                         // 2
    "h-[300px]",                         // 3
    "h-[350px]",                         // 4
    "md:row-span-2 h-[500px] md:h-full", // 5
    "h-[300px]",                         // 6
    "h-[350px]",                         // 7
    "h-[300px]",                         // 8
    "md:row-span-2 h-[500px] md:h-full", // 9
    "h-[350px]",                         // 10
    "h-[300px]",                         // 11
    "h-[350px]",                         // 12
    "h-[300px]",                         // 13
    "h-[300px]",                         // 14
  ]

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={`group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:z-10 ${colSpan} ${heights[index % heights.length]}`}
    >
      <motion.img
        src={image}
        alt={`Gallery ${index}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            View Space
          </span>
        </motion.div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
    </motion.article>
  )
}

function StayGallery() {
  const { t } = useI18n()
  const galleryRef = useRef(null)

  return (
    <section 
      ref={galleryRef}
      className="relative px-6 py-20 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -right-20 top-40 w-96 h-96 bg-[#2A9D8F]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative z-10"
      >
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#2A9D8F] mb-4">
          {t('stay.galleryLabel')}
        </p>

        <h2 className="font-display text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tight">
          {t('stay.galleryTitle')}
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('stay.galleryDesc')}
        </p>
      </motion.div>

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
        className="mx-auto grid grid-cols-1 gap-6 md:auto-rows-max md:grid-cols-4 relative z-10"
      >
        {galleryFull.map((image, index) => {
          // Asymmetric layout logic for up to 15 images
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
            />
          )
        })}
      </motion.div>
    </section>
  )
}

export default StayGallery
