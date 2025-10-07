'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORTED_LANGUAGES } from "@/app/lib/languages";

interface LanguageSwitcherProps {
    currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const pathname = usePathname();

    // Extraer la ruta sin el locale
    let pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');

    // Si la ruta queda vacía o es solo '/', mantenerla como '/' para la página principal
    if (!pathWithoutLocale || pathWithoutLocale === '') {
        pathWithoutLocale = '/';
    }

    return (
        <div className="flex gap-2 flex-wrap">
            {SUPPORTED_LANGUAGES.map((lang) => (
                <Link
                    key={lang.code}
                    href={`/${lang.code}${pathWithoutLocale}`}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentLocale === lang.code
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white hover:shadow-sm'
                        }`}
                    title={`Cambiar a ${lang.displayName}`}
                >
                    {lang.name}
                </Link>
            ))}
        </div>
    );
}