import { getLocalizedData } from "@/app/lib/localization";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Link from "next/link";
import type { Route } from 'next';
import { getContactInfo } from "@/app/lib/contact-utils";
import HoursSection from "./HoursSection";
import SocialMedia from "./SocialMedia";

export default async function Footer({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict, href } = getLocalizedData(locale);
  const contactInfo = getContactInfo();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href={href('/') as Route} className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                <span className="material-icons-outlined mr-2 align-middle">restaurant</span>
                {dict.seo.siteName}
              </Link>
            </div>
            <p className="text-gray-300 mb-6">
              {dict.footer?.description || 'Restaurant tradicional con auténtica cocina mediterránea.'}
            </p>
            <SocialMedia theme="dark" iconSize="large" />
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href={href('/') as Route} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={href('/menu') as Route} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.menu}
                </Link>
              </li>
              <li>
                <Link href={href('/history') as Route} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.history}
                </Link>
              </li>
              <li>
                <Link href={href('/contact') as Route} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.contacto}
                </Link>
              </li>
              {/* <li>
                <Link href={href('/gallery') as Route} className="text-gray-300 hover:text-white transition-colors">
                  {dict.nav.gallery}
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer?.contact?.title || 'Contacto'}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <span className="material-icons-outlined mr-2 mt-1 text-lg">place</span>
                <span className="whitespace-pre-line">{contactInfo.address}</span>
              </p>
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2 text-lg">phone</span>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center">
                <span className="material-icons-outlined mr-2 text-lg">smartphone</span>
                <a href={`tel:${contactInfo.mobile.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {contactInfo.mobile}
                </a>
              </p>
              <div className="flex items-start">
                <span className="material-icons-outlined mr-2 mt-1 text-lg">access_time</span>
                <div className="flex-1">
                  <HoursSection 
                    locale={locale} 
                    showTitle={true} 
                    showIcon={false} 
                    isFooter={true}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior con selector de idiomas */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {dict.footer?.copyright || '© 2024 Restaurant Banys La Gavina. Todos los derechos reservados.'}
            </div>

            {/* Selector de idiomas */}
            <div className="flex flex-col items-center md:items-end">
              <div className="mb-2">
                <span className="text-sm text-gray-400 font-medium">{dict.footer?.language_selector || 'Idioma'}</span>
              </div>
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}