import type { Metadata } from 'next';
import { generatePageMetadata, getValidLocale } from '@/seo';
import { client } from "../../../../sanity/client";
import { contactContentQuery } from "../../../../sanity/queries";
import ContactContent from "./ContactContent";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);

  return generatePageMetadata({
    locale: validLocale,
    page: 'contacto',
    path: '/contacto'
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);

  // Obtener contenido de Sanity con el idioma específico
  let contactContent = null;

  try {
    contactContent = await client.fetch(contactContentQuery, { locale: validLocale });
  } catch (error) {
    console.warn('⚠️ No se pudo obtener contenido de contacto desde Sanity:', error);
  }

  // Si no hay contenido desde Sanity, mostrar error
  if (!contactContent) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-600">Contenido no disponible en este momento.</p>
        </div>
      </main>
    );
  }

  return <ContactContent content={contactContent} locale={validLocale} />;
}