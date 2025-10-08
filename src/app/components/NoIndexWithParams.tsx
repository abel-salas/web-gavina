'use client';

import { useEffect } from 'react';

export default function NoIndexWithParams() {
    useEffect(() => {
        // Solo en el cliente, verificar parámetros de URL
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);

            // Si hay parámetros de query (como selectLang=true), agregar noindex
            if (url.search) {
                const metaRobots = document.querySelector('meta[name="robots"]');

                if (metaRobots) {
                    metaRobots.setAttribute('content', 'noindex, follow');
                } else {
                    const newMeta = document.createElement('meta');
                    newMeta.name = 'robots';
                    newMeta.content = 'noindex, follow';
                    document.head.appendChild(newMeta);
                }
            }
        }
    }, []); // Solo se ejecuta una vez al montar

    return null;
}