import {
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'

import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { contact } from '../../data/contact'

function ContactSection() {
  const whatsappUrl = contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        contact.whatsappMessage
      )}`
    : null

  return (
    <section id="kontak" className="bg-surface py-20 md:py-24">

      <Container>

        {/* Section Heading */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="Hubungi Kami"
            title="Kami Siap Membantu Kebutuhan Anda"
            description="Kunjungi toko kami atau hubungi melalui WhatsApp untuk mendapatkan informasi mengenai produk dan kebutuhan peralatan teknik."
            align="center"
          />
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">

          {/* Address Card */}
          <article className="rounded-lg border border-gray-200 bg-white p-7 transition-shadow duration-300 hover:shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <MapPin size={27} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-primary">
              Alamat Toko
            </h3>

            <p className="mt-3 min-h-14 text-sm leading-7 text-gray-500">
              {contact.address}
            </p>

            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-amber-600"
            >
              Lihat Lokasi
              <ArrowUpRight size={17} />
            </a>

          </article>

          {/* WhatsApp Card */}
          <article className="rounded-lg border border-gray-200 bg-white p-7 transition-shadow duration-300 hover:shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <MessageCircle size={27} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-primary">
              WhatsApp
            </h3>

            <p className="mt-3 min-h-14 text-sm leading-7 text-gray-500">
              Hubungi kami melalui WhatsApp untuk mendapatkan informasi
              produk dan kebutuhan peralatan teknik.
            </p>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle size={17} />
                Hubungi via WhatsApp
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <p className="mt-6 text-xs text-amber-700">
                Nomor WhatsApp belum diatur.
              </p>
            )}

          </article>

        </div>

      </Container>

    </section>
  )
}

export default ContactSection