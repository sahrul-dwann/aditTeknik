import { ArrowUpRight } from 'lucide-react'

function CategoryCard({ category }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-primary/20" />
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-primary">
            {category.title}
          </h3>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition-colors group-hover:bg-secondary group-hover:text-primary">
            <ArrowUpRight size={19} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          {category.description}
        </p>

      </div>

    </article>
  )
}

export default CategoryCard