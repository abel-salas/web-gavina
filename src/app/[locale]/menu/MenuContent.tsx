'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MenuCategory, Dictionary } from '@/app/lib/dictionary.models';

interface MenuContentInfo {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
}

interface MenuContentProps {
    dict: Dictionary;
    menuData: Record<string, MenuCategory>;
    menuContent?: MenuContentInfo;
}

interface ModalState {
    isOpen: boolean;
    imageSrc: string;
    title: string;
    imageAlt: string;
}

export default function MenuContent({ dict, menuData, menuContent }: MenuContentProps) {
    const [modal, setModal] = useState<ModalState>({
        isOpen: false,
        imageSrc: '',
        title: '',
        imageAlt: ''
    });

    // Definir el orden deseado de las categorías (7, 6, 5, 4, 3, 2, 1)
    const categoryOrder = ['drinks', 'desserts', 'fish', 'meat', 'rice', 'salads', 'starters'];

    // Convertir el objeto de categorías a array con orden específico
    const categories = categoryOrder
        .map(key => ({
            key,
            data: menuData[key] as MenuCategory
        }))
        .filter(category => category.data && category.data.items && category.data.items.length > 0)
        .reverse();

    const openModal = (item: { name: string; image?: string | null; imageAlt?: string }) => {
        if (!item.image) return; // Solo abrir modal si hay imagen

        setModal({
            isOpen: true,
            imageSrc: item.image,
            title: item.name,
            imageAlt: item.imageAlt || item.name
        });
    };

    const closeModal = () => {
        setModal({
            isOpen: false,
            imageSrc: '',
            title: '',
            imageAlt: ''
        });
    };

    // Allergen mapping for display with translations
    const getAllergenLabel = (allergen: string) => {
        return dict.menu?.allergens?.types?.[allergen as keyof typeof dict.menu.allergens.types] || allergen;
    };

    const allergenIcons: Record<string, string> = {
        gluten: 'grass',
        shellfish: 'set_meal',
        fish: 'phishing',
        dairy: 'local_drink',
        eggs: 'egg',
        nuts: 'nature',
        soy: 'eco',
        celery: 'local_florist',
        mustard: 'spa',
        sesame: 'grain',
        sulfites: 'science'
    };

    return (
        <>
            <main className="pt-12">
                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-parisienne mb-6">
                        {menuContent?.title || dict.menu?.title || "Nuestra Carta"}
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        {menuContent?.subtitle || dict.menu?.subtitle || "Cocina mediterránea inspirada en los productos del mar"}
                    </p>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <section className="grid lg:grid-cols-2 gap-8">
                        {categories.map(({ key, data }) => (
                            <article key={key} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-semibold mb-2 text-blue-800">{data.title}</h2>
                                    {data.subtitle && (
                                        <p className="text-sm text-gray-500 italic">{data.subtitle}</p>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    {data.items.map((item: MenuCategory['items'][0], index: number) => (
                                        <div
                                            key={index}
                                            className={`border-b pb-4 last:border-b-0 p-2 rounded transition-colors ${item.image ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                                            onClick={() => item.image && openModal(item)}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={`font-medium text-gray-900 flex-1 transition-colors ${item.image ? 'hover:text-blue-600' : ''}`}>
                                                    {item.name}
                                                    {item.recommended && (
                                                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                                            Recomendado
                                                        </span>
                                                    )}
                                                    {item.image && (
                                                        <span className="ml-2 text-blue-500 text-sm hover:text-blue-700 transition-colors" title="Ver imagen del plato">📸</span>
                                                    )}
                                                </h3>
                                                <span className="text-blue-600 font-semibold ml-4">{item.price}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm">{item.description}</p>

                                            {/* Allergens */}
                                            {item.allergens && item.allergens.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-1">
                                                    <span className="text-xs text-gray-500 mr-2">
                                                        {dict.menu?.allergens?.label || 'Alérgenos:'}
                                                    </span>
                                                    {item.allergens.map((allergen: string, allergenIndex: number) => (
                                                        <span
                                                            key={allergenIndex}
                                                            className="inline-flex items-center text-[10px] bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-full"
                                                            title={getAllergenLabel(allergen)}
                                                        >
                                                            <span className="material-icons-outlined text-[12px] leading-none" style={{ fontSize: '12px', lineHeight: '12px' }}>
                                                                {allergenIcons[allergen] || 'warning'}
                                                            </span>
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </section>
                </div>

                {/* Allergens Legend - Horizontal scroll on mobile */}
                <section className="bg-orange-50 py-6 mt-8">
                    <div className="container mx-auto px-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                            {dict.menu?.allergens?.legend || 'Leyenda de Alérgenos'}
                        </h3>
                        <div className="overflow-x-auto">
                            <div className="flex gap-3 pb-2 min-w-max lg:justify-center">
                                {Object.keys(allergenIcons).map((allergen) => (
                                    <div
                                        key={allergen}
                                        className="inline-flex items-center text-[10px] bg-orange-100 text-orange-800 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                                    >
                                        <span className="material-icons-outlined mr-1 text-[10px]">
                                            {allergenIcons[allergen] || 'warning'}
                                        </span>
                                        {getAllergenLabel(allergen)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="menu-content relative h-96 md:h-[500px] flex items-center justify-center py-20">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={menuContent?.backgroundImage || "/images/menu/mesa_carta.jpg"}
                            alt="Carta del restaurante Banys La Gavina"
                            fill
                            className="object-cover"
                            priority
                            quality={90}
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {menuContent?.description || dict.menu?.description || "El chef ha creado este menú inspirándose en los productos del mar y en nuestra cocina mediterránea, sin descuidar las buenas carnes y los platos de temporada. Siempre trabajando con productos de primera calidad y cuidando mucho la presentación."}
                        </p>
                    </div>
                </section>
            </main>

            {/* Modal */}
            {modal.isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] w-[90vw] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
                            <Image
                                src={modal.imageSrc}
                                alt={modal.imageAlt}
                                fill
                                className="object-contain"
                                quality={90}
                            />
                        </div>

                        {/* Title */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{modal.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {modal.imageAlt || 'Imagen del plato'}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}