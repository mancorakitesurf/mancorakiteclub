import { createElement } from 'react'

function Container({ as = 'div', className = '', children }) {
  return (
    createElement(
      as,
      { className: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}` },
      children,
    )
  )
}

export default Container
