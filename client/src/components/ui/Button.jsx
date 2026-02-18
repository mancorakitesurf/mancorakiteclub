import { createElement } from 'react'

function Button({ as = 'button', className = '', children, ...props }) {
  return (
    createElement(
      as,
      {
        className: `inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 ${className}`,
        ...props,
      },
      children,
    )
  )
}

export default Button
