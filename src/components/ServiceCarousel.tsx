"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCarouselProps {
    images: string[];
    autoSlideInterval?: number;
}

export default function ServiceCarousel({ images, autoSlideInterval = 4000 }: ServiceCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(nextSlide, autoSlideInterval);
        return () => clearInterval(timer);
    }, [nextSlide, autoSlideInterval]);

    // Synchronize scroll of thumbnails
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeThumb = scrollContainerRef.current.children[0].children[currentIndex] as HTMLElement;
            if (activeThumb) {
                const scrollLeft = activeThumb.offsetLeft - (scrollContainerRef.current.offsetWidth / 2) + (activeThumb.offsetWidth / 2);
                scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    }, [currentIndex]);

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center">
            {/* Main Image View */}
            <div className="relative w-full h-80 sm:h-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl group border border-slate-100 mb-6">
                <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, idx) => (
                        <div key={idx} className="w-full h-full flex-shrink-0">
                            <img 
                                src={img} 
                                alt={`Gallery Image ${idx + 1}`} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button 
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Right Arrow */}
                <button 
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 sm:p-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                    <div 
                        key={currentIndex}
                        className="h-full bg-blue-500 animate-slide-progress"
                        style={{ animationDuration: `${autoSlideInterval}ms` }}
                    />
                </div>

                {/* Counter Badge */}
                <div className="absolute bottom-6 left-6 bg-slate-900/80 text-white px-4 py-1.5 rounded-xl text-xs font-bold tracking-widest backdrop-blur-md z-10 shadow-lg uppercase">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Strip */}
            <div 
                ref={scrollContainerRef}
                className="w-full overflow-x-auto pb-4 no-scrollbar scroll-smooth"
            >
                <div className="flex justify-center sm:justify-start gap-3 w-max min-w-full mx-auto px-4">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden transition-all duration-300 border-4 shadow-md ${
                                currentIndex === idx 
                                    ? 'border-blue-600 scale-105 z-10 shadow-blue-500/30 ring-4 ring-blue-500/20' 
                                    : 'border-transparent opacity-50 hover:opacity-100 hover:border-blue-300'
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
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes slide-progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-slide-progress {
                    animation-name: slide-progress;
                    animation-timing-function: linear;
                }
            `}</style>
        </div>
    );
}

