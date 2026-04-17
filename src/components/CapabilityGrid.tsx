"use client";

import React from 'react';
import { ShieldCheck, Truck, Zap, Globe, Gauge, Activity } from 'lucide-react';

interface CapabilityItemProps {
    icon: React.ElementType;
    title: string;
    value: string;
    desc: string;
    tags: string[];
}

function CapabilityCard({ icon: Icon, title, value, desc, tags }: CapabilityItemProps) {
    return (
        <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/60 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-blue-100/80 pointer-events-none" />

            <div className="relative z-10 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <Icon className="w-7 h-7" />
                </div>

                {/* Label */}
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> {title}
                </div>

                {/* Big Value */}
                <div className="text-3xl xl:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                    {value}
                </div>

                {/* Description — flex-grow pushes tags to the bottom */}
                <p className="text-slate-500 leading-relaxed text-sm flex-grow mb-6">
                    {desc}
                </p>

                {/* Tags — always at the bottom */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CapabilityGrid({ locale }: { locale: string }) {
    const capabilities = [
        {
            icon: Gauge,
            title: locale === 'en' ? "SUPPLY CAPACITY" : "İKMAL KAPASİTESİ",
            value: "150.000+ MT",
            desc: locale === 'en'
                ? "Annual marine fuel and lubricant supply volume across major Turkish trade routes."
                : "Türkiye'nin ana ticaret rotaları üzerinde yıllık denizcilik yakıtı ve madeni yağ ikmal hacmi.",
            tags: ["VLSFO", "LSMGO", "ISO 8217:2017"]
        },
        {
            icon: Truck,
            title: locale === 'en' ? "LOGISTICS FLEET" : "LOJİSTİK FİLO",
            value: "12+ Vehicles",
            desc: locale === 'en'
                ? "Customized tanker fleet for high-precision bunker and lubricant delivery operations."
                : "Yüksek hassasiyetli yakıt ve yağ teslimat operasyonları için özel tanker filosu.",
            tags: ["Bunker Barges", "Road Tankers", "GPS-Tracked"]
        },
        {
            icon: ShieldCheck,
            title: locale === 'en' ? "OPERATIONAL SAFETY" : "OPERASYONEL EMNİYET",
            value: "Zero Spill",
            desc: locale === 'en'
                ? "Strict adherence to MARPOL and international safety standards with zero incident record."
                : "Sıfır kaza kaydı ile MARPOL ve uluslararası emniyet standartlarına tam uyum.",
            tags: ["MARPOL", "IMO 2020", "Safety First"]
        },
        {
            icon: Globe,
            title: locale === 'en' ? "PORT NETWORK" : "LİMAN AĞI",
            value: "100% Coverage",
            desc: locale === 'en'
                ? "Full operational presence in all Turkish ports, shipyards, and strategic anchorages."
                : "Tüm Türk limanları, tersaneler ve stratejik demirleme sahalarında tam operasyonel varlık.",
            tags: ["Marmara", "Aegean", "Mediterranean"]
        }
    ];

    return (
        <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-50 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-6">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-5 border border-blue-100">
                            <Zap className="w-4 h-4" />
                            {locale === 'en' ? 'Advanced Capabilities' : 'Gelişmiş Yetkinlikler'}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            {locale === 'en' ? 'PROPELLING MARITIME ' : 'DENİZCİLİKTE '}
                            <span className="text-blue-600">{locale === 'en' ? 'AUTHORITY' : 'OTORİTE'}</span>
                        </h2>
                    </div>
                    <p className="text-base text-slate-500 max-w-sm leading-relaxed lg:text-right">
                        {locale === 'en'
                            ? 'Our infrastructure is designed for the most demanding maritime operations globally.'
                            : 'Altyapımız, küresel ölçekteki en zorlu denizcilik operasyonları için tasarlanmıştır.'}
                    </p>
                </div>

                {/* Grid — items-stretch forces equal height cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {capabilities.map((cap, i) => (
                        <CapabilityCard key={i} {...cap} />
                    ))}
                </div>
            </div>
        </section>
    );
}
