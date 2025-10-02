import { getLocalizedData } from "@/app/lib/localization";
import MobileNavbar from "./mobile-navbar";

export default async function Navbar({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict, href } = getLocalizedData(locale);

  const navItems = [
    { href: href('/'), label: dict.nav.home },
    { href: href('/menu'), label: dict.nav.menu },
    { href: href('/contact'), label: dict.nav.contacto },
    { href: href('/gallery'), label: dict.nav.gallery },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href={href('/')} className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
                🍽️ Gavina
              </a>
            </div>

            {/* Desktop Menu - Centrado */}
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Espacio para mantener el logo centrado */}
            <div className="flex-shrink-0 w-24"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavbar 
        navItems={navItems}
        homeHref={href('/')}
      />
    </>
  );
}
