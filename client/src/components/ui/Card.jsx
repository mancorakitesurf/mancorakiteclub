function Card({ className = '', children }) {
  return (
    <article
      className={`rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-6 ${className}`}
    >
      {children}
    </article>
  )
}

export default Card
