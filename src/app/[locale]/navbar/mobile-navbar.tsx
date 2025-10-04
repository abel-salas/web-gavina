'use client';

import { useState, useEffect } from 'react';
import { useCloseOnEscape, useBodyScrollLock } from '@/app/components/hooks/useModal';
import Link from 'next/link';
import type { Route } from 'next';

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavbarProps {
  navItems: NavItem[];
  homeHref: string;
}

export default function MobileNavbar({ navItems, homeHref }: MobileNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Usar hooks personalizados
  useCloseOnEscape(isMenuOpen, closeMenu);
  useBodyScrollLock(isMenuOpen);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    const handleRouteChange = () => closeMenu();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);



  return (
    <>
      {/* Mobile Navigation Bar */}
      <nav className="md:hidden bg-gray-900 text-white relative z-50">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                href={homeHref as Route}
                className="text-xl font-bold text-white hover:text-blue-300 transition-colors"
                onClick={closeMenu}
              >
                🍽️ Gavina
              </Link>
            </div>

            {/* Hamburger Button - Siempre visible encima del modal */}
            <button
              onClick={toggleMenu}
              className={`relative z-50 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-300 ${
                isMenuOpen ? 'bg-gray-700 hover:bg-gray-600' : 'hover:bg-gray-800'
              }`}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              <span className="sr-only">{isMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}</span>
              {/* Hamburger Icon con animación mejorada */}
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out top-3 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMenu}
        >
          {/* Modal Content */}
          <div
            className="fixed top-0 right-0 h-full w-80 max-w-sm bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Sin botón X, solo título */}
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white">Menú</h2>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col h-full">
              {/* Navigation Items */}
              <nav className="flex-1 px-4 py-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href as Route}
                        onClick={closeMenu}
                        className="block py-3 px-4 text-lg text-white hover:text-blue-300 hover:bg-gray-800 rounded-lg transition-colors duration-200 font-medium"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>


            </div>
          </div>
        </div>
      )}
    </>
  );
}