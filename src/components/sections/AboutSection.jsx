import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

const highlights = [
  'Menyediakan kebutuhan peralatan teknik dan mesin',
  'Melayani kebutuhan pelanggan sejak tahun 2018',
  'Beragam pilihan perlengkapan untuk usaha dan industri',
]

function AboutSection() {
  return (
    <section id="tentang" className="bg-white py-20 md:py-24">

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* About Image */}
          <div className="relative">

            <div className="absolute -left-4 -top-4 h-32 w-32 border-l-4 border-t-4 border-secondary" />

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=85"
                alt="Aktivitas dan peralatan teknik"
                loading="lazy"
                className="h-[350px] w-full object-cover md:h-[480px]"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 right-5 rounded-lg bg-primary p-6 text-white shadow-xl md:-right-6">

              <p className="text-4xl font-extrabold text-secondary">
                2018
              </p>

              <p className="mt-2 text-sm font-medium">
                Tahun Berdiri
              </p>

              <p className="mt-1 text-xs text-gray-300">
                Toko Adit Teknik
              </p>

            </div>

          </div>

          {/* About Content */}
          <div className="pt-5 lg:pt-0">

            <SectionHeading
              eyebrow="Tentang Kami"
              title="Mengenal Lebih Dekat Toko Adit Teknik"
              description="Toko Adit Teknik merupakan usaha yang bergerak dalam penyediaan berbagai kebutuhan alat teknik, mesin, dan perlengkapan industri."
            />

            <p className="mt-5 text-sm leading-8 text-gray-500">
              Berdiri sejak November 2018, Toko Adit Teknik hadir untuk
              memenuhi kebutuhan peralatan teknik bagi pelanggan.
              Kami berfokus pada penyediaan berbagai pilihan produk
              yang dapat mendukung aktivitas pekerjaan, usaha, dan industri.
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-4">

              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-amber-600"
                  />

                  <p className="text-sm leading-6 text-gray-600">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button href="#kontak">
                Hubungi Kami
              </Button>
            </div>

          </div>

        </div>

      </Container>

    </section>
  )
}

export default AboutSection