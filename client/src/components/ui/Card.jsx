function Card({ className = '', children }) {
  return (
    <article
      className={`rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur ${className}`}
    >
      {children}
    </article>
  )
}

export default Card
