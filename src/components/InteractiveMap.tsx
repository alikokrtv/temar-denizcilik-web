"use client";

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { Anchor, ArrowRight, ChevronRight } from 'lucide-react';

interface InteractiveMapProps {
    locale: string;
    compact?: boolean;
}

export default function InteractiveMap({ locale, compact = false }: InteractiveMapProps) {
    const [selectedPort, setSelectedPort] = useState<{name:string, details:string}|null>(null);

    const ports = [
        { name: "İstanbul", top: "25%", left: "28%", details: locale === 'en' ? "24/7 uninterrupted bunker supply, straight from the heart of Marmara." : "Marmara'nın kalbinden 7/24 kesintisiz yakıt ve yağ tedariği." },
        { name: "İzmir", top: "52%", left: "15%", details: locale === 'en' ? "Complete technical and logistics supply for ships in the Aegean region." : "Ege bölgesinde yanaşan gemiler için eksiksiz teknik ve lojistik ikmal." },
        { name: "Mersin", top: "78%", left: "68%", details: locale === 'en' ? "Strategic supply point serving Mediterranean trade routes." : "Akdeniz ticaret rotalarına hizmet veren stratejik ikmal noktamız." },
        { name: "İskenderun", top: "82%", left: "75%", details: locale === 'en' ? "High capacity fuel operations for heavy industry vessels." : "Ağır sanayi gemilerine yönelik yüksek kapasiteli yakıt operasyonları." },
        { name: "Karadeniz", top: "15%", left: "65%", details: locale === 'en' ? "Reliable partner for all Northern port logistics and supplies." : "Kuzey limanlarındaki tüm tedarik süreçlerinde güvenilir iş ortağı." }
    ];

    const mapContent = (
        <div className="relative w-full aspect-[16/9] md:aspect-auto">
            <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-3xl -z-10 transform scale-90" />
            <img 
                src="/barge-map.png" 
                alt="Türkiye Fiziksel İkmal Noktaları" 
                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.12)]" 
            />
            
            {/* Interactive Pins */}
            {ports.map((port, idx) => (
                <div 
                    key={idx} 
                    className="absolute w-8 h-8 -ml-4 -mt-4 group cursor-pointer z-20 flex items-center justify-center"
                    style={{ top: port.top, left: port.left }}
                    onClick={(e) => {
                        e.preventDefault();
                        setSelectedPort(port);
                    }}
                >
                    {/* Ring Pulse */}
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500/30 animate-ping"></span>
                    
                    {/* Inner Dot */}
                    <div className="relative w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-2xl pointer-events-none whitespace-nowrap z-30">
                        {port.name}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900/90 rotate-45"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    if (compact) {
        return (
            <>
                {mapContent}
                {selectedPort && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPort(null)}></div>
                        <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative z-10 shadow-2xl">
                            <button onClick={() => setSelectedPort(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                <Anchor className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-3">{selectedPort.name} {locale === 'en' ? 'Port' : 'Limanı'}</h3>
                            <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                            <p className="text-slate-600 leading-relaxed mb-8">{selectedPort.details}</p>
                            <Link href="/iletisim" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                                {locale === 'en' ? 'Contact Logistics Team' : 'Lojistik Ekibine Ulaş'} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <section className="py-24 px-4 bg-[#0a192f] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <Anchor className="w-4 h-4" /> {locale === 'en' ? 'Strong Logistics Network' : 'Güçlü Lojistik Ağı'}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 uppercase leading-tight">
                        {locale === 'en' ? 'PHYSICAL SUPPLY' : 'FİZİKSEL İKMAL'} <br/>
                        <span className="text-blue-400">{locale === 'en' ? 'POINTS' : 'NOKTALARIMIZ'}</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                        {locale === 'en'
                            ? 'We provide limitless supply with our strong partner network not only in Istanbul or the Marmara region but also in Izmir, Mersin, Iskenderun, and Black Sea ports.'
                            : 'Sadece İstanbul veya Marmara bölgesinde değil; İzmir, Mersin, İskenderun ve Karadeniz limanlarında da güçlü partner ağımızla sınır tanımayan tedarik sağlıyoruz.'}
                    </p>
                    <Link href="/iletisim" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl transition-all hover:bg-blue-500 hover:-translate-y-1">
                        {locale === 'en' ? 'Contact Us' : 'İletişime Geçin'} <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
                
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    {mapContent}
                </div>
            </div>

            {/* Port Modal */}
            {selectedPort && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedPort(null)}></div>
                    <div className="bg-white rounded-[2.5rem] p-10 max-w-sm w-full relative z-10 shadow-2xl transform transition-all animate-fade-in-up border border-slate-100">
                        <button onClick={() => setSelectedPort(null)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all">
                            <ArrowRight className="w-5 h-5 rotate-45" />
                        </button>
                        <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 shadow-inner">
                            <Anchor className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{selectedPort.name} {locale === 'en' ? 'Port' : 'Limanı'}</h3>
                        <div className="w-16 h-1.5 bg-blue-600 rounded-full mb-6"></div>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                            {selectedPort.details}
                        </p>
                        <Link href="/iletisim" className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                            {locale === 'en' ? 'Quick Contact' : 'Hızlı İletişim'} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
}
