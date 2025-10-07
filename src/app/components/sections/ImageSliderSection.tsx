'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { ImageSlider } from '@/app/lib/sanity/contentTypes';
import { getLocalizedText } from '@/app/lib/sanity/contentTypes';

interface ImageSliderSectionProps {
  sliders: ImageSlider[];
  locale: string;
}

interface SingleSliderProps {
  slider: ImageSlider;
  locale: string;
}

const SingleSlider = ({ slider, locale }: SingleSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, autoplaySpeed, title } = slider;

  // Auto-play effect
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, autoplaySpeed * 1000);

    return () => clearInterval(interval);
  }, [images.length, autoplaySpeed]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <section className="image-slider-section pt-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="md:container md:mx-auto px-0 md:px-4 md:pb-12">
        {/* Título del slider */}
        {title && (
          <div className="text-center mb-6 md:mb-8 px-4 md:px-0 py-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {getLocalizedText(title, locale)}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full" />
          </div>
        )}

        {/* Slider Container */}
        <div className="w-full md:max-w-6xl md:mx-auto">
          <div className="relative overflow-hidden md:rounded-2xl shadow-2xl bg-white pb-12 md:pb-2">
            {/* Images */}
            <div className="relative aspect-[16/9]">
              {/* All images stacked */}
              {images.map((imageItem, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 1.05
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <Image
                    src={imageItem.image.asset?.url || '/images/placeholder.jpg'}
                    alt={imageItem.image.alt || getLocalizedText(imageItem.caption, locale)}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </motion.div>
              ))}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Progress Bar - Solo si hay múltiples imágenes */}
            {hasMultipleImages && (
              <div className="absolute bottom-20 md:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative w-24 md:w-32 lg:w-40">
                  {/* Background bar */}
                  <div className="w-full h-0.5 bg-slate-300" />
                  
                  {/* Active progress bar */}
                  <motion.div
                    className="absolute top-0 left-0 h-0.5 bg-slate-600"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${((currentIndex + 1) / images.length) * 100}%`
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>
            )}

            {/* Caption - Always on top, outside the image container */}
            <div className="bg-white px-4 py-content-imag-slider">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 text-center leading-tight"
                >
                  {getLocalizedText(currentImage.caption, locale)}
                </motion.h3>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ImageSliderSection = ({ sliders, locale }: ImageSliderSectionProps) => {
  // Filtrar sliders activos
  const activeSliders = sliders.filter(slider => 
    slider.isActive && 
    slider.images && 
    slider.images.length > 0
  );

  if (activeSliders.length === 0) return null;

  return (
    <>
      {activeSliders.map((slider) => (
        <div
          key={slider._id}
          className={slider.showOnMobile ? '' : 'hidden md:block'}
        >
          <SingleSlider slider={slider} locale={locale} />
        </div>
      ))}
    </>
  );
};

export default ImageSliderSection;