import { ArrowUpRight } from 'lucide-react'

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
          {product.category}
        </span>

      </div>

      {/* Product Information */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-3">

          <h3 className="text-lg font-bold text-primary">
            {product.name}
          </h3>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-amber-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />

        </div>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <a
          href="#kontak"
          className="mt-4 inline-flex items-center gap-2 border-t border-gray-100 pt-4 text-sm font-semibold text-primary transition-colors hover:text-amber-600"
        >
          Konsultasi Produk
          <ArrowUpRight size={16} />
        </a>

      </div>

    </article>
  )
}

export default ProductCard  