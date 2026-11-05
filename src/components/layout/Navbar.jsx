import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { navigation } from "../../data/navigation";
import BrandLogo from "../common/BrandLogo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div onClick={closeMenu}>
            <BrandLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-amber-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button href="#kontak" icon={false}>
              <Phone size={16} />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-primary hover:bg-gray-100 lg:hidden"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            {isOpen ?
              <X size={25} />
            : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-gray-100 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-amber-600"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3">
                <Button href="#kontak" className="w-full" icon={false}>
                  <Phone size={16} />
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
