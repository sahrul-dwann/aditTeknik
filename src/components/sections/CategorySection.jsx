import { ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import CategoryCard from '../common/CategoryCard'
import { categories } from '../../data/categories'

function CategorySection() {
  return (
    <section id="produk" className="bg-surface py-20 md:py-24">

      <Container>

        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <SectionHeading
            eyebrow="Kategori Produk"
            title="Temukan Peralatan Teknik Sesuai Kebutuhan Anda"
            description="Jelajahi berbagai kategori produk yang tersedia untuk mendukung kebutuhan teknik, bengkel, dan industri."
          />

          <a
            href="#kontak"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-amber-600"
          >
            Konsultasi Produk
            <ArrowRight size={17} />
          </a>

        </div>

        {/* Category Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </Container>

    </section>
  )
}

export default CategorySection