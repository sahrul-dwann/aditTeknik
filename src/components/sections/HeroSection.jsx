import { ArrowRight, MessageCircle } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'

function HeroSection() {
  return (
    <section id="beranda" className="overflow-hidden bg-white">

      <Container>
        <div className="grid min-h-[560px] items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">

          {/* Hero Content */}
          <div className="relative z-10">

            <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Toko Peralatan Teknik & Mesin
            </span>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight text-primary md:text-5xl xl:text-6xl">
              Solusi Peralatan Teknik untuk Kebutuhan Industri dan Usaha
            </h1>

            <div className="mt-6 h-1 w-16 bg-secondary" />

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-500">
              Toko Adit Teknik menyediakan berbagai peralatan teknik,
              mesin, kompresor, dan perlengkapan industri berkualitas
              untuk mendukung produktivitas bisnis Anda.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">

              <Button href="#produk">
                Jelajahi Produk
              </Button>

              <Button
                href="#kontak"
                variant="outline"
                icon={false}
              >
                <MessageCircle size={17} />
                Konsultasi Kebutuhan
              </Button>

            </div>

            {/* Supporting Text */}
            <div className="mt-10 flex items-center gap-3 border-t border-gray-100 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <ArrowRight size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Mitra Peralatan Teknik Anda
                </p>

                <p className="text-xs text-gray-500">
                  Melayani kebutuhan teknik dan industri.
                </p>
              </div>
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative">

            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-100/70 blur-3xl" />

            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85"
                alt="Peralatan dan aktivitas teknik industri"
                className="h-[350px] w-full object-cover md:h-[460px]"
              />

              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Image Caption */}
            <div className="absolute -bottom-5 left-5 rounded-lg bg-white p-4 shadow-lg md:-left-5">
              <p className="text-xs font-medium text-gray-500">
                Toko Adit Teknik
              </p>

              <p className="mt-1 text-sm font-bold text-primary">
                Solusi Kebutuhan Teknik
              </p>
            </div>

          </div>

        </div>
      </Container>

    </section>
  )
}

export default HeroSection