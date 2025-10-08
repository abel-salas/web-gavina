'use client';

import { useState, useEffect } from 'react';

export function useLanguageSelectorPopup() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Solo en el cliente, verificar parámetros de URL
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            const shouldShowSelector = url.searchParams.get('selectLang') === 'true';

            if (shouldShowSelector) {
                setShowPopup(true);

                // Limpiar la URL del parámetro para evitar indexación
                url.searchParams.delete('selectLang');

                // Reemplazar la URL en el historial sin recargar la página
                window.history.replaceState({}, '', url.pathname + url.search);
            }
        }
    }, []); // Solo se ejecuta una vez al montar

    const closePopup = () => {
        setShowPopup(false);
    };

    return {
        showPopup,
        closePopup
    };
}