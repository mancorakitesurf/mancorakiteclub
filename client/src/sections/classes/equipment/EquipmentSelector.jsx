import { useState } from "react"

function EquipmentSelector({ data, reverse = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = data[activeIndex]

  return (
    <div className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} bg-white rounded-3xl shadow-xl overflow-hidden`}>

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
            className={`flex-1 p-6 text-left border-l-4 transition flex flex-col justify-center ${
              activeIndex === index
                ? "border-primary bg-white"
                : "border-transparent hover:bg-white"
            } ${reverse ? "lg:border-l-0 lg:border-r-4" : ""}`}
          >
            <h5 className="font-bold text-black">{item.label}</h5>
            <p className="text-xs text-black">{item.subtitle}</p>
          </button>
        ))}
      </div>

    </div>
  )
}

export default EquipmentSelector