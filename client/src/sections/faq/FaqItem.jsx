function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white shadow-sm transition-all dark:bg-surface-dark">
      
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <h4 className="font-semibold">{question}</h4>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100 px-5 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FaqItem