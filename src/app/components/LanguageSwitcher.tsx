'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORTED_LANGUAGES } from "@/app/lib/languages";
import type { Route } from 'next';

interface LanguageSwitcherProps {
    currentLocale: string;
    showFlags?: boolean;
    isModal?: boolean;
    onLanguageSelect?: (langCode: string) => void;
}

export default function LanguageSwitcher({
    currentLocale,
    showFlags = false,
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

    const getFlag = (langCode: string) => {
        const flags = {
            'es': '🇪🇸',
            'en': '🇬🇧',
            'ca': '🏴󠁥󠁳󠁣󠁴󠁿',
            'nl': '🇳🇱',
            'de': '🇩🇪'
        };
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
                            {showFlags && (
                                <span className="text-2xl">{getFlag(lang.code)}</span>
                            )}
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
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${showFlags ? 'flex items-center gap-2' : ''
                        } ${currentLocale === lang.code
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white hover:shadow-sm'
                        }`}
                    title={`Cambiar a ${lang.displayName}`}
                >
                    {showFlags && <span>{getFlag(lang.code)}</span>}
                    {lang.name}
                </Link>
            ))}
        </div>
    );
}