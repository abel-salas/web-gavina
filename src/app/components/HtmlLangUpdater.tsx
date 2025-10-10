'use client';

import { useEffect } from 'react';

interface HtmlLangUpdaterProps {
  locale: string;
}

export default function HtmlLangUpdater({ locale }: HtmlLangUpdaterProps) {
  useEffect(() => {
    // Solo actualizar si el lang actual es diferente al deseado
    // Esto previene actualizaciones innecesarias y problemas de hidratación
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}