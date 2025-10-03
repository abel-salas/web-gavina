import { getLocalizedData } from "@/app/lib/localization";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Link from "next/link";

export default async function Footer({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict, href } = getLocalizedData(locale);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href={href('/')} className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                🍽️ {dict.seo.siteName}
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              {dict.footer.description}
            </p>
            <div className="flex space-x-4">
              {/* Redes sociales */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.789L3.647 8.864c1.297 0 2.448.73 3.016 1.789l1.786 6.335z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href={href('/')} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={href('/menu')} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.menu}
                </Link>
              </li>
              <li>
                <Link href={href('/contact')} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.contacto}
                </Link>
              </li>
              <li>
                <Link href={href('/gallery')} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.gallery}
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.contact.title}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span className="whitespace-pre-line">{dict.footer.contact.address}</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href={`tel:${dict.footer.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {dict.footer.contact.phone}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                <a href={`tel:${dict.footer.contact.mobile.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {dict.footer.contact.mobile}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🕐</span>
                {dict.footer.hours.text}
              </p>
              <p className="flex items-center">
                <span className="mr-2">📘</span>
                <a href="#" className="hover:text-white transition-colors">
                  {dict.footer.social.facebook}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior con selector de idiomas */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {dict.footer.copyright}
            </div>
            
            {/* Selector de idiomas */}
            <div className="flex flex-col items-center md:items-end">
              <div className="mb-2">
                <span className="text-sm text-gray-400 font-medium">Idioma / Language</span>
              </div>
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}