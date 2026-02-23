import Card from '../../components/ui/Card.jsx'

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <Card className="transition-all">

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <h4 className="font-semibold text-slate-900">
          {question}
        </h4>

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
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed">
          {answer}
        </p>
      </div>

    </Card>
  )
}

export default FaqItem