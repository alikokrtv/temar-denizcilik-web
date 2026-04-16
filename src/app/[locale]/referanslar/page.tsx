"use client";

import React from 'react';
import { Star, ShieldCheck, Zap, Globe, PackageCheck, Anchor } from 'lucide-react';
import { useLocale } from 'next-intl';

const partners = [
    { name: 'Referans 1' },
    { name: 'Referans 2' },
    { name: 'Referans 3' },
    { name: 'Referans 4' },
    { name: 'Referans 5' },
    { name: 'Referans 6' }
];

export default function ReferencesPage() {
    const locale = useLocale();

    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        {locale === 'en' ? 'Our Global Partners' : 'Küresel Ortaklarımız'}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        {locale === 'en' ? 'References' : 'Referanslar'}
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        {locale === 'en' 
                            ? "The world's leading maritime, logistics, and shipping companies choose Temar as their reliable partner in port operations."
                            : "Dünyanın önde gelen denizcilik, lojistik ve armatörlük firmaları, liman operasyonlarında güvenilir iş ortağı olarak Temar'ı tercih ediyor."}
                    </p>
                </div>

                {/* İş Ortaklarımız Marquee */}
                <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl py-12 mb-20 overflow-hidden relative">
                    <h2 className="text-center text-xl font-bold text-slate-800 mb-10">
                        {locale === 'en' ? 'Global Brands That Prefer Us' : 'Bizi Tercih Eden Küresel Markalar'}
                    </h2>
                    
                    {/* Fade Edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex animate-slide-left-slow w-max items-center gap-16 px-8">
                        {[...partners, ...partners, ...partners].map((partner, i) => (
                            <div key={i} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
                                <span className="text-2xl font-black text-slate-300 tracking-wider uppercase">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Neden Bizi Tercih Ediyorlar? */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {(locale === 'en' ? [
                        { icon: ShieldCheck, title: 'Reliability', desc: 'International quality delivery at the promised time.' },
                        { icon: Zap, title: '24/7 Reaction', desc: 'Operations team providing instant solutions in emergencies.' },
                        { icon: Globe, title: 'Global Network', desc: 'Operational and supply capability at international standards.' },
                        { icon: PackageCheck, title: 'Complete Supply', desc: 'One-stop solution for all fleet needs from fuel to paint.' }
                    ] : [
                        { icon: ShieldCheck, title: 'Güvenilirlik', desc: 'Söz verdiğimiz zamanda, uluslararası kalitede teslimat.' },
                        { icon: Zap, title: '7/24 Reaksiyon', desc: 'Acil durumlarda anında çözüm sağlayan operasyon ekibi.' },
                        { icon: Globe, title: 'Küresel Ağ', desc: 'Uluslararası standartlarda operasyon ve ikmal yeteneği.' },
                        { icon: PackageCheck, title: 'Eksiksiz Tedarik', desc: 'Yakıttan boyaya tüm filo ihtiyaçlarının tek noktadan çözümü.' }
                    ]).map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow text-center group">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Case Study / Başarı Hikayesi Modülü */}
                <div className="bg-[#0a192f] rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white flex flex-col md:flex-row gap-12 items-center">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <div className="inline-flex gap-1 text-yellow-400 mb-6">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                            {locale === 'en' 
                                ? '"Temar\'s speed saves lives in every time-critical operation."' 
                                : '"Zamanın kritik olduğu her operasyonda Temar\'ın hızı hayat kurtarıyor."'}
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            {locale === 'en' 
                                ? 'A professional team that has been flawlessly carrying out the challenging supply operations of our large tonnage cargo ships during their passage through the Istanbul and Çanakkale straits for years.' 
                                : 'Büyük tonajlı yük gemilerimizin İstanbul ve Çanakkale boğazı geçişlerindeki zorlu ikmal operasyonlarını yıllardır eksiksiz bir şekilde yürüten profesyonel bir ekip.'}
                        </p>
                        <div>
                            <p className="font-bold text-lg">{locale === 'en' ? 'International Fleet Manager' : 'Uluslararası Filo Yöneticisi'}</p>
                            <p className="text-blue-400">{locale === 'en' ? 'Global Maritime Logistics' : 'Global D. Lojistik'}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <img src="/Bunker Fuel.png" alt="Gemi Operasyon" className="w-full h-[400px] object-cover rounded-3xl border-4 border-slate-800/50 shadow-2xl" />
                    </div>
                </div>

            </div>
        </main>
    );
}
