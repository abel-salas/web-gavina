import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicHtmlLang from "./components/DynamicHtmlLang";
import { SEO_CONFIG } from "@/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Restaurante Gavina',
    default: 'Restaurante Gavina - Cocina Mediterránea Auténtica',
  },
  description: "Descubre la auténtica cocina mediterránea en Restaurante Gavina. Platos caseros, ingredientes frescos y un ambiente acogedor.",
  metadataBase: new URL(SEO_CONFIG.site.url),
  alternates: {
    canonical: '/',
    languages: SEO_CONFIG.site.supportedLocales.reduce((acc, locale) => {
      acc[locale] = `/${locale}`;
      return acc;
    }, {} as Record<string, string>),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DynamicHtmlLang />
        {children}
      </body>
    </html>
  );
}

