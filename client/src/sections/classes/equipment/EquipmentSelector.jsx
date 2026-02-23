{/* SELECTOR SECTION */}
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
      {/* ICONO CON ANCHO FIJO */}
      <div className="w-12 flex-shrink-0"> 
        <span className={`material-icons-round text-3xl transition-colors ${
          activeIndex === index ? "text-primary" : "text-gray-400 group-hover:text-primary"
        }`}>
          {item.icon}
        </span>
      </div>

      {/* TEXTO */}
      <div className="flex-grow min-w-0 ml-2"> {/* min-w-0 evita que el texto desborde */}
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