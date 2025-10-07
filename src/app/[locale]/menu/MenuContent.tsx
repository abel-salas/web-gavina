'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MenuCategory, Dictionary } from '@/app/lib/dictionary.models';

interface MenuContentProps {
    dict: Dictionary;
    menuData: {
        starters?: MenuCategory;
        salads?: MenuCategory;
        rice?: MenuCategory;
        meat?: MenuCategory;
        fish?: MenuCategory;
        drinks?: MenuCategory;
    };
}

interface ModalState {
    isOpen: boolean;
    imageSrc: string;
    title: string;
}

export default function MenuContent({ dict, menuData }: MenuContentProps) {
    const [modal, setModal] = useState<ModalState>({
        isOpen: false,
        imageSrc: '',
        title: ''
    });

    const categories = [
        { key: 'starters', data: menuData.starters },
        { key: 'salads', data: menuData.salads },
        { key: 'rice', data: menuData.rice },
        { key: 'meat', data: menuData.meat },
        { key: 'fish', data: menuData.fish },
        { key: 'drinks', data: menuData.drinks }
    ].filter((category): category is { key: string; data: MenuCategory } =>
        category.data !== undefined
    );

    const openModal = (itemName: string) => {
        // Por ahora usamos una imagen placeholder
        // Más adelante se podrán agregar imágenes específicas por plato
        setModal({
            isOpen: true,
            imageSrc: '/images/menu/carta_menu.jpg', // Imagen placeholder
            title: itemName
        });
    };

    const closeModal = () => {
        setModal({
            isOpen: false,
            imageSrc: '',
            title: ''
        });
    };

    return (
        <>
            <main>
                {/* Hero Section con imagen */}
                <section className="relative h-96 md:h-[500px] flex items-center justify-center mb-16">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/menu/mesa_carta.jpg"
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
                        <h1 className="text-5xl md:text-6xl font-parisienne mb-6 text-white">
                            {dict.menu?.title || "Nuestra Carta"}
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                            {dict.menu?.subtitle || "Cocina mediterránea inspirada en los productos del mar"}
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {dict.menu?.description || "El chef ha creado este menú inspirándose en los productos del mar y en nuestra cocina mediterránea, sin descuidar las buenas carnes y los platos de temporada. Siempre trabajando con productos de primera calidad y cuidando mucho la presentación."}
                        </p>
                    </div>
                </section>

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
                                            className="border-b pb-4 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                                            onClick={() => openModal(item.name)}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-medium text-gray-900 flex-1 hover:text-blue-600 transition-colors">
                                                    {item.name}
                                                    {item.recommended && (
                                                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                                            Recomendado
                                                        </span>
                                                    )}
                                                    <span className="ml-2 text-gray-400 text-sm">📸</span>
                                                </h3>
                                                <span className="text-blue-600 font-semibold ml-4">{item.price}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            </main>

            {/* Modal */}
            {modal.isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-lg max-w-2xl max-h-[90vh] overflow-hidden"
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
                        <div className="relative w-full h-80 md:h-96">
                            <Image
                                src={modal.imageSrc}
                                alt={modal.title}
                                fill
                                className="object-cover"
                                quality={90}
                            />
                        </div>

                        {/* Title */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{modal.title}</h3>
                            <p className="text-gray-600 text-sm">
                                {/* Placeholder text - se puede personalizar por plato más adelante */}
                                Imagen del plato - Próximamente con fotos reales
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}