import {
  Phone,
  MapPin,
  MessageCircle,
} from 'lucide-react'

import Container from '../common/Container'
import { navigation } from '../../data/navigation'
import { contact } from '../../data/contact'
import BrandLogo from '../common/BrandLogo'

function Footer() {
  const whatsappUrl = contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        contact.whatsappMessage
      )}`
    : null

  return (
    <footer className="bg-primary text-white">

      <Container>

        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <BrandLogo variant="footer" />

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-300">
              Toko peralatan teknik, mesin, dan perlengkapan industri
              untuk mendukung kebutuhan pelanggan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-semibold">
              Navigasi
            </h4>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-5 font-semibold">
              Kategori Produk
            </h4>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>Kompresor</li>
              <li>Mesin Teknik</li>
              <li>Peralatan Bengkel</li>
              <li>Perlengkapan Industri</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-semibold">
              Hubungi Kami
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="shrink-0 text-secondary"
                />

                <span>{contact.address}</span>
              </li>

              <li>
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-secondary"
                  >
                    <MessageCircle
                      size={18}
                      className="shrink-0 text-secondary"
                    />

                    WhatsApp
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <Phone
                      size={18}
                      className="shrink-0 text-secondary"
                    />

                    WhatsApp
                  </div>
                )}
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Toko Adit Teknik.
            All Rights Reserved.
          </p>
        </div>

      </Container>

    </footer>
  )
}

export default Footer