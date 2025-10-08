'use client';

import { useLanguageSelectorPopup } from './hooks/useLanguageSelectorPopup';
import LanguageModal from './LanguageModal';

interface LanguageSelectorWrapperProps {
    currentLocale: string;
}

export default function LanguageSelectorWrapper({ currentLocale }: LanguageSelectorWrapperProps) {
    const { showPopup, closePopup } = useLanguageSelectorPopup();

    if (!showPopup) return null;

    return (
        <LanguageModal
            currentLocale={currentLocale}
            onClose={closePopup}
        />
    );
}