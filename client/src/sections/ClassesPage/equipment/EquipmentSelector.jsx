import { useState } from "react"
import { motion } from "framer-motion" 

function EquipmentSelector({ data, reverse = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = data[activeIndex]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{ once: true, margin: "-100px" }}   
      transition={{ duration: 0.5, ease: "easeOut" }} 
      className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} bg-white rounded-3xl shadow-xl overflow-hidden`}
    >

      {/* IMAGE */}
      <div className="w-full lg:w-2/3 relative h-64 lg:h-[500px]">
        <img
          src={activeItem.image}
          alt={activeItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h4 className="text-white text-2xl font-bold">
            {activeItem.title}
          </h4>
          <p className="text-gray-300 mt-2">
            {activeItem.description}
          </p>
        </div>
      </div>

      {/* SELECTOR */}
      <div className="w-full lg:w-1/3 bg-gray-50 flex flex-col">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 p-6 text-left border-l-4 transition flex items-center group ${
              activeIndex === index
                ? "border-primary bg-white"
                : "border-transparent hover:bg-white"
            } ${reverse ? "lg:border-l-0 lg:border-r-4" : ""}`}
          >
            {/* ICON */}
            <div className="w-12 flex-shrink-0">
              <span className={`material-icons-round text-3xl transition-colors ${
                activeIndex === index ? "text-primary" : "text-gray-400 group-hover:text-primary"
              }`}>
                {item.icon}
              </span>
            </div>

            {/* TEXT */}
            <div className="flex-grow min-w-0 ml-2">
              <h5 className={`font-bold truncate transition-colors ${
                activeIndex === index ? "text-black" : "text-gray-700 group-hover:text-primary"
              }`}>
                {item.label}
              </h5>
              <p className="text-xs text-gray-500 truncate">{item.subtitle}</p>
            </div>

            {/* CHEVRON */}
            <span className={`material-icons-round ml-2 flex-shrink-0 transition-all ${
              activeIndex === index ? "text-primary opacity-100" : "text-gray-400 opacity-0 group-hover:opacity-100"
            }`}>
              {reverse ? "chevron_left" : "chevron_right"}
            </span>
          </button>
        ))}
      </div>

    </motion.div>
  )
}

export default EquipmentSelector