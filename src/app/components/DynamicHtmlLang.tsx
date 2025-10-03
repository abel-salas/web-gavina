'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getValidLocale } from '@/seo';

export default function DynamicHtmlLang() {
    const pathname = usePathname();

    useEffect(() => {
        // Extraer el locale de la URL
        const segments = pathname.split('/');
        const locale = segments[1] || 'es';
        const validLocale = getValidLocale(locale);

        // Actualizar el atributo lang del html
        document.documentElement.lang = validLocale;
    }, [pathname]);

    return null;
}