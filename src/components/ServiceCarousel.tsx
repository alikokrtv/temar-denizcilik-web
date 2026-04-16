"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCarouselProps {
    images: string[];
}

export default function ServiceCarousel({ images }: ServiceCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center">
            {/* Main Image View */}
            <div className="relative w-full h-80 sm:h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                    src={images[currentIndex]} 
                    alt={`Gallery Image ${currentIndex + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Left Arrow */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all z-10"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Right Arrow */}
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all z-10"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Counter Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-md z-10 shadow-lg">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 w-full overflow-x-auto pb-4 custom-scrollbar">
                <div className="flex justify-center sm:justify-start gap-3 w-max min-w-full mx-auto px-1">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden transition-all duration-300 border-4 shadow-md ${
                                currentIndex === idx 
                                    ? 'border-blue-600 scale-105 z-10 shadow-blue-500/30' 
                                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-blue-300'
                            }`}
                        >
                            <img 
                                src={img} 
                                alt={`Thumbnail ${idx + 1}`} 
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1;
                    border-radius: 20px;
                }
            `}</style>
        </div>
    );
}
