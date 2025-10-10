'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORTED_LANGUAGES } from "@/app/lib/languages";
import type { Route } from 'next';
import Image from "next/image";

interface LanguageSwitcherProps {
    currentLocale: string;
    showFlags?: boolean;
    isModal?: boolean;
    onLanguageSelect?: (langCode: string) => void;
}

export default function LanguageSwitcher({
    currentLocale,
    isModal = false,
    onLanguageSelect
}: LanguageSwitcherProps) {
    const pathname = usePathname();

    // Extraer la ruta sin el locale
    let pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');

    // Si la ruta queda vacía o es solo '/', mantenerla como '/' para la página principal
    if (!pathWithoutLocale || pathWithoutLocale === '') {
        pathWithoutLocale = '/';
    }

    const handleLanguageClick = (langCode: string, e: React.MouseEvent) => {
        if (isModal && onLanguageSelect) {
            e.preventDefault();
            onLanguageSelect(langCode);
        }
    };

    const getFlag = (langCode: string, size: 'small' | 'large' = 'small') => {
        const flags = {
            'es': '🇪🇸',
            'en': '🇬🇧',
            'nl': '🇳🇱',
            'de': '🇩🇪'
        };

        // Caso especial para catalán - usar SVG
        if (langCode === 'ca') {
            const dimensions = size === 'large' ? { width: 28, height: 20 } : { width: 20, height: 14 };
            return (
                <Image
                    src="/catalan.png"
                    alt="Bandera catalana"
                    width={dimensions.width}
                    height={dimensions.height}
                    className="inline-block"
                />
            );
        }

        return flags[langCode as keyof typeof flags] || '';
    };

    if (isModal) {
        // Versión modal con diseño diferente
        return (
            <div className="space-y-3">
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <Link
                        key={lang.code}
                        href={`/${lang.code}${pathWithoutLocale}` as Route}
                        onClick={(e) => handleLanguageClick(lang.code, e)}
                        className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${lang.code === currentLocale
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-7 h-7">
                                {lang.code === 'ca' ? (
                                    getFlag(lang.code, 'large')
                                ) : (
                                    <span className="text-2xl">{getFlag(lang.code, 'large')}</span>
                                )}
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-lg">{lang.displayName}</div>
                                <div className="text-sm text-gray-500">{lang.name}</div>
                            </div>
                        </div>
                        {lang.code === currentLocale && (
                            <span className="material-icons-outlined text-blue-500">check_circle</span>
                        )}
                    </Link>
                ))}
            </div>
        );
    }

    // Versión normal del footer
    return (
        <div className="flex gap-2 flex-wrap">
            {SUPPORTED_LANGUAGES.map((lang) => (
                <Link
                    key={lang.code}
                    href={`/${lang.code}${pathWithoutLocale}` as Route}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200'
                        } ${currentLocale === lang.code
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