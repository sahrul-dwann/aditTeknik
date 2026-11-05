import { ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ProductCard from '../common/ProductCard'
import { products } from '../../data/products'

function ProductSection() {
  return (
    <section id="produk" className="bg-surface py-20 md:py-24">

      <Container>

        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <SectionHeading
            eyebrow="Produk Unggulan"
            title="Pilihan Peralatan Teknik untuk Kebutuhan Anda"
            description="Temukan berbagai pilihan peralatan teknik dan mesin yang dapat mendukung kebutuhan pekerjaan, bengkel, dan industri."
          />

          <a
            href="#kontak"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-amber-600"
          >
            Tanyakan Produk
            <ArrowRight size={17} />
          </a>

        </div>

        {/* Product Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </Container>

    </section>
  )
}

export default ProductSection