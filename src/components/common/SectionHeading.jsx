function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
  }

  return (
    <div className={`max-w-2xl ${alignment[align]}`}>
      {eyebrow && (
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
          {eyebrow}
        </span>
      )}

      <h2 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
        {title}
      </h2>

      <div className="mt-4 h-1 w-12 bg-secondary" />

      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading