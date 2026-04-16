"use client";

import React, { useState } from 'react';
import { Ship, Anchor, Globe, Award, TrendingUp } from 'lucide-react';

const milestones = [
    {
        year: '1997',
        title: 'Kuruluş',
        description: 'Temar Denizcilik, denizcilik sektöründeki derin tecrübesini kurumsal bir çatı altında birleştirmek amacıyla İstanbul\'da kuruldu.',
        icon: <Anchor className="w-6 h-6" />
    },
    {
        year: '2005',
        title: 'Balkan Genişlemesi',
        description: 'Bölgesel deniz trafiğindeki artışla birlikte hizmet ağını genişleterek Marmara genelinde ilk büyük ölçekli ikmal operasyonlarını başlattı.',
        icon: <Ship className="w-6 h-6" />
    },
    {
        year: '2012',
        title: 'Lojistik Altyapı',
        description: 'Kendi lojistik ağını ve barge filosunu güçlendirerek operasyonel hızını ve güvenilirliğini en üst seviyeye çıkardı.',
        icon: <TrendingUp className="w-6 h-6" />
    },
    {
        year: '2020',
        title: 'Dijital Dönüşüm',
        description: 'Tüm operasyon süreçlerini dijital takip sistemlerine entegre ederek "Sıfır Hata" prensibiyle yeni bir dönem başlattı.',
        icon: <Award className="w-6 h-6" />
    },
    {
        year: '2024+',
        title: 'Global Vizyon',
        description: 'Bugün tüm Türk limanlarında ve uluslararası sularda tanınan, güvenilir bir çözüm ortağı olarak yoluna devam ediyor.',
        icon: <Globe className="w-6 h-6" />
    }
];

export default function Timeline() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-4">
            {/* Year Selector (Horizontal Line) */}
            <div className="relative mb-16 px-4">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-zinc-800 -translate-y-1/2"></div>
                
                {/* Active Progress Line */}
                <div 
                    className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 transition-all duration-500 ease-out"
                    style={{ width: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
                ></div>

                <div className="relative flex justify-between items-center">
                    {milestones.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`group relative flex flex-col items-center transition-all duration-300 ${
                                index <= activeIndex ? 'text-blue-600' : 'text-slate-400 dark:text-zinc-600'
                            }`}
                        >
                            {/* Dot */}
                            <div className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                                index === activeIndex 
                                    ? 'bg-white border-blue-600 scale-125 shadow-lg shadow-blue-500/20' 
                                    : index < activeIndex 
                                        ? 'bg-blue-600 border-blue-600' 
                                        : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800'
                            }`}></div>
                            
                            {/* Year Label */}
                            <span className={`absolute -top-10 font-black text-lg transition-all duration-300 ${
                                index === activeIndex ? 'scale-110 opacity-100' : 'opacity-60 group-hover:opacity-100'
                            }`}>
                                {item.year}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Box */}
            <div className="relative">
                <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-all duration-500 hover:shadow-blue-500/5">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 shrink-0">
                            {milestones[activeIndex].icon}
                        </div>
                        
                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                                {milestones[activeIndex].title}
                            </h3>
                            <p className="text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-light">
                                {milestones[activeIndex].description}
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Micro-Interaction Pointer */}
                <div className="flex justify-center mt-6 text-slate-400 dark:text-zinc-500 text-sm font-medium animate-bounce">
                    Yıllara tıklayarak yolculuğumuzu keşfedin
                </div>
            </div>
        </div>
    );
}
