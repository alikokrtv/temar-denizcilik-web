"use client";

import React from 'react';
import { Search, MapPin, Anchor, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function ServiceWorkflow({ locale }: { locale: string }) {
    const steps = [
        {
            icon: Search,
            title: locale === 'en' ? "INTAKE & ANALYSIS" : "TALEP VE ANALİZ",
            desc: locale === 'en' 
                ? "Real-time assessment of vessel needs and market-optimized pricing intelligence."
                : "Gemi ihtiyaçlarının gerçek zamanlı değerlendirilmesi ve pazar odaklı fiyatlandırma.",
            color: "blue"
        },
        {
            icon: MapPin,
            title: locale === 'en' ? "LOGISTICS DESIGN" : "LOJİSTİK TASARIM",
            desc: locale === 'en'
                ? "Precision planning of supply routes and multi-modal coordination for zero delays."
                : "Sıfır gecikme için ikmal rotalarının hassas planlanması ve multimodal koordinasyon.",
            color: "cyan"
        },
        {
            icon: Anchor,
            title: locale === 'en' ? "TACTICAL EXECUTION" : "TAKTİKSEL YÜRÜTME",
            desc: locale === 'en'
                ? "Adherence to highest international bunker safety protocols during physical supply."
                : "Fiziksel ikmal sırasında en yüksek uluslararası güvenlik protokollerine uyum.",
            color: "blue"
        },
        {
            icon: ClipboardCheck,
            title: locale === 'en' ? "DIGITAL VALIDATION" : "DİJİTAL DOĞRULAMA",
            desc: locale === 'en'
                ? "Immediate delivery of lab certificates, manifests, and technical compliance reports."
                : "Laboratuvar sertifikaları ve teknik uygunluk raporlarının anında dijital teslimi.",
            color: "cyan"
        }
    ];

    return (
        <section className="py-24 px-4 bg-[#0a192f] relative overflow-hidden">
            {/* Background elements for sophistication */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                        {locale === 'en' ? 'OPERATIONAL ' : 'OPERASYONEL '}
                        <span className="text-blue-400">{locale === 'en' ? 'WORKFLOW' : 'İŞ AKIŞI'}</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center group">
                            {/* Connector Line */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent z-0"></div>
                            )}

                            <div className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 shadow-2xl relative z-10">
                                <step.icon className="w-10 h-10 transition-transform group-hover:scale-110" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 text-[10px] font-black flex items-center justify-center border-4 border-[#0a192f]">
                                    0{i + 1}
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-black text-white mb-4 tracking-wide group-hover:text-blue-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed px-4 max-w-[280px]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-white/70 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        {locale === 'en' ? 'Real-time optimization active' : 'Gerçek zamanlı optimizasyon aktif'}
                    </div>
                </div>
            </div>
        </section>
    );
}
