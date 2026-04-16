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
        <div className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 transition-colors group-hover:bg-blue-100/50"></div>
            
            <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon className="w-8 h-8" />
                </div>
                
                <div className="mb-6">
                    <div className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> {title}
                    </div>
                    <div className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
                        {value}
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium">
                        {desc}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 group-hover:text-blue-600 transition-colors">
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
            value: "12+ VEHICLES",
            desc: locale === 'en'
                ? "Customized tanker fleet for high-precision bunker and lubricant delivery operations."
                : "Yüksek hassasiyetli yakıt ve yağ teslimat operasyonları için özel tanker filosu.",
            tags: ["Bunker Barges", "Road Tankers", "GPS-Tracked"]
        },
        {
            icon: ShieldCheck,
            title: locale === 'en' ? "OPERATIONAL SAFETY" : "OPERASYONEL EMNİYET",
            value: "ZERO SPILL",
            desc: locale === 'en'
                ? "Strict adherence to MARPOL and international safety standards with zero incident record."
                : "Sıfır kaza kaydı ile MARPOL ve uluslararası emniyet standartlarına tam uyum.",
            tags: ["MARPOL", "IMO 2020", "Safety First"]
        },
        {
            icon: Globe,
            title: locale === 'en' ? "PORT NETWORK" : "LİMAN AĞI",
            value: "100% COVERAGE",
            desc: locale === 'en'
                ? "Full operational presence in all Turkish ports, shipyards, and strategic anchorages."
                : "Tüm Türk limanları, tersaneler ve stratejik demirleme sahalarında tam operasyonel varlık.",
            tags: ["Marmara", "Aegean", "Mediterranean"]
        }
    ];

    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
                            <Zap className="w-4 h-4" /> {locale === 'en' ? 'Advanced Capabilities' : 'Gelişmiş Yetkinlikler'}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            {locale === 'en' ? 'PROPELLING MARITIME ' : 'DENİZCİLİKTE '} 
                            <span className="text-blue-600">{locale === 'en' ? 'AUTHORITY' : 'OTORİTE'}</span>
                        </h2>
                    </div>
                    <p className="text-lg text-slate-500 max-w-sm font-medium leading-relaxed">
                        {locale === 'en' 
                            ? 'Our infrastructure is designed for the most demanding maritime operations globally.'
                            : 'Altyapımız, küresel ölçekteki en zorlu denizcilik operasyonları için tasarlanmıştır.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((cap, i) => (
                        <CapabilityCard key={i} {...cap} />
                    ))}
                </div>
            </div>
        </section>
    );
}
