import type { Metadata } from 'next';
import Navbar from "./navbar/nav-bar";
import Footer from "../components/Footer";
import {
    generatePageMetadata,
    generateRestaurantJsonLd,
    generateWebsiteJsonLd,
    SEO_CONFIG,
    getValidLocale,
    type SupportedLocale
} from '@/seo';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = getValidLocale(locale);

    return generatePageMetadata({
        locale: validLocale,
        page: 'home'
    });
}

export async function generateStaticParams() {
    return SEO_CONFIG.site.supportedLocales.map((locale) => ({
        locale,
    }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const validLocale = getValidLocale(locale) as SupportedLocale;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: generateRestaurantJsonLd(validLocale),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: generateWebsiteJsonLd(validLocale),
                }}
            />
            <div className="min-h-screen flex flex-col">
                <Navbar params={params} />
                <main className="flex-1 pt-16">
                    {children}
                </main>
                <Footer params={params} />
            </div>
        </>
    );
}