import { getDictionary } from '@/app/lib/getDictionary';
import ArrocesContent from './ArrocesContent';
import { generatePageMetadata } from '@/seo/generators/metadata';
import { generateRestaurantJsonLd } from '@/seo/generators/json-ld';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({ 
    locale: locale as any, 
    page: 'arroces' as any 
  });
}

export default async function ArrocesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const jsonLD = generateRestaurantJsonLd(locale as any);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <ArrocesContent dict={dict} />
    </>
  );
}