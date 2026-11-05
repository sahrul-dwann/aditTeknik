import { ArrowRight } from 'lucide-react'

function Button({
  children,
  href,
  variant = 'primary',
  icon = true,
  className = '',
}) {
  const variants = {
    primary: 'bg-secondary text-primary hover:bg-amber-500',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    dark: 'bg-primary text-white hover:bg-slate-800',
  }

  const buttonClass = `
    inline-flex items-center justify-center gap-2
    rounded-md px-6 py-3
    text-sm font-semibold
    transition-colors duration-300
    ${variants[variant]}
    ${className}
  `

  const content = (
    <>
      {children}

      {icon && <ArrowRight size={17} />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={buttonClass}>
      {content}
    </button>
  )
}

export default Button