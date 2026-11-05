import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { advantages } from '../../data/advantages'

function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-24">

      <Container>

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Mengapa Adit Teknik?"
          title="Mitra yang Tepat untuk Kebutuhan Peralatan Teknik Anda"
          description="Kami berkomitmen untuk membantu memenuhi kebutuhan peralatan teknik melalui pilihan produk dan layanan yang berorientasi pada pelanggan."
          align="center"
        />

        {/* Advantages Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {advantages.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                className="group border-t-2 border-gray-200 pt-6 transition-colors duration-300 hover:border-secondary"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-amber-50 text-amber-600 transition-colors group-hover:bg-secondary group-hover:text-primary">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

              </div>
            )
          })}

        </div>

      </Container>

    </section>
  )
}

export default WhyChooseUs