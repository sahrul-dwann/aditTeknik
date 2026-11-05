function BrandLogo({ variant = 'default' }) {
  return (
    <a
      href="#beranda"
      className={`brand-logo ${variant === 'footer' ? 'brand-logo-footer' : ''}`}
      aria-label="Adit Teknik - Beranda"
    >
      {/* Logo Emblem */}
      <div className="brand-mark">
        <span>AT</span>
      </div>

      {/* Logo Text */}
      <div className="brand-content">
        <span className="brand-name">
          ADIT TEKNIK
        </span>

        <span className="brand-tagline">
          SOLUSI PERALATAN TEKNIK
        </span>
      </div>
    </a>
  )
}

export default BrandLogo