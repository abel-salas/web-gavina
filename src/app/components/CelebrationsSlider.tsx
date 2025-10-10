'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideImage {
  caption?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  alt: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

interface CelebrationsSliderProps {
  images: SlideImage[];
}

export default function CelebrationsSlider({ images }: CelebrationsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Imágenes */}
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image?.asset?.url || ''}
            alt={slide.alt || 'Celebraciones'}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Controles de navegación */}
      {images.length > 1 && (
        <>
          {/* Botones anterior/siguiente - Diseño elegante */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 group z-10"
            aria-label="Imagen anterior"
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40">
              <svg className="w-6 h-6 text-white group-hover:text-white/90 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 group z-10"
            aria-label="Imagen siguiente"
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40">
              <svg className="w-6 h-6 text-white group-hover:text-white/90 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Indicadores elegantes con líneas */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
                aria-label={`Ir a imagen ${index + 1}`}
              >
                <div className={`h-1 transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 bg-white shadow-lg'
                    : 'w-8 bg-white/50 hover:bg-white/70 group-hover:w-10'
                }`} />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}