"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Ship, Droplet, PaintBucket, Anchor, CheckCircle2, ArrowRight, ShieldCheck, Clock, Globe } from 'lucide-react';
import ServiceCarousel from '@/components/ServiceCarousel';
import TechSpecPanel from '@/components/TechSpecPanel';
import ServiceWorkflow from '@/components/ServiceWorkflow';

import { useLocale } from 'next-intl';

export default function ServicesPage() {
    const locale = useLocale();

    const services = [
        {
            id: 'yakit',
            icon: Ship,
            title: locale === 'en' ? 'Bunker Fuel Solutions' : 'Bunker Yakıt Çözümleri',
            desc: locale === 'en' 
                ? 'Kara tankerleri ve yüksek kapasiteli barge filomuzla operasyonel mükemmelliği hedefliyoruz; DMA, MGO, VLSFO, AGO ve LSMGO ürün gruplarında kesintisiz enerji sağlıyoruz.'
                : 'Kara tankerleri ve yüksek kapasiteli barge filomuzla operasyonel mükemmelliği hedefliyoruz; DMA, MGO, VLSFO, AGO ve LSMGO ürün gruplarında kesintisiz enerji sağlıyoruz.',
            images: [
                '/images/services/fuel/fuel-1.jpg',
                '/images/services/fuel/fuel-2.jpg',
                '/images/services/fuel/fuel-3.jpg',
                '/images/services/fuel/fuel-4.jpg',
                '/images/services/fuel/fuel-5.jpg',
                '/images/services/fuel/fuel-6.jpg',
                '/images/services/fuel/fuel-7.jpg',
                '/images/services/fuel/fuel-8.jpg',
            ],
            features: locale === 'en' ? [
                'Fast and reliable barge supply',
                'DMA, MGO, VLSFO, LSMGO range',
                'International inspection standards',
                '7/24 coverage in all Turkish ports'
            ] : [
                'Hızlı ve güvenilir barge ikmali',
                'DMA, MGO, VLSFO, LSMGO ürün gamı',
                'Uluslararası gözetim standartları',
                'Tüm Türk limanlarında 7/24 hizmet'
            ],
            details: locale === 'en'
                ? 'Under the ICON brand vision, we offer flexible supply models and strategic solutions. Our supply operations are carried out under independent international supervision firm with the highest security and transparency.'
                : 'Operasyonel Yetkinlik ve Güven vizyonuyla, esnek tedarik modelleri ve stratejik çözümler üretiyoruz. İkmal süreçlerimiz bağımsız uluslararası gözetim firmalarının denetiminde, en yüksek emniyet ve şeffaflık standartlarında gerçekleştirilir.',
            specs: [
                { label: "Compliance", value: "ISO 8217:2017" },
                { label: "Products", value: "VLSFO, MGO, AGO" },
                { label: "Inspection", value: "SGS / Intertek" },
                { label: "Delivery", value: "Barge & Truck" }
            ]
        },
        {
            id: 'madeni-yag',
            icon: Droplet,
            title: locale === 'en' ? 'Lubricant Sales and Supply' : 'Madeni Yağ Satışı ve İkmali',
            desc: locale === 'en'
                ? 'Ana makine, silindir-sistem ve tüm yardımcı makineler için yüksek performanslı madeni yağ ikmallerini gerçekleştiriyoruz.'
                : 'Ana makine, silindir-sistem ve tüm yardımcı makineler için yüksek performanslı madeni yağ ikmallerini gerçekleştiriyoruz.',
            images: [
                '/images/services/lubricants/lub-1.jpg',
                '/images/services/lubricants/lub-2.jpg',
                '/images/services/lubricants/lub-3.jpg',
                '/images/services/lubricants/lub-4.jpg',
                '/images/services/lubricants/lub-5.jpg',
                '/images/services/lubricants/lub-6.jpg',
                '/images/services/lubricants/lub-7.jpg',
            ],
            features: locale === 'en' ? [
                'Transit and Domestic delivery',
                'High viscosity greases',
                'Laboratory analysis support',
                'Global logistics network'
            ] : [
                'Transit ve Yerli teslimat seçenekleri',
                'Yüksek ısıl dirençli gresler',
                'Laboratuvar analiz desteği',
                'Geniş lojistik ve dağıtım ağı'
            ],
            details: locale === 'en'
                ? 'We ensure operational continuity and motor efficiency by supplying premium lubricants. From silinder systems to hydraulic oils, we provide solutions for every engine type with technical expertise.'
                : 'Ağır hizmet tipi deniz motorları için özel geliştirilmiş ürünlerle ekipman ömrünü uzatıyoruz. Silindir, Hidrolik, Dişli yağlarından yüksek ısıl dirençli greslere kadar zengin portföyümüzle uzman mühendislik desteği sağlıyoruz.',
            specs: [
                { label: "Grades", value: "SAE 30, 40, 50" },
                { label: "Analyses", value: "Detailed Lab Support" },
                { label: "Brands", value: "Global Premium" },
                { label: "Delivery", value: "Door-to-Deck" }
            ]
        },
        {
            id: 'boya',
            icon: PaintBucket,
            title: locale === 'en' ? 'Marine Paints' : 'Denizcilik Boyaları',
            desc: locale === 'en'
                ? 'Tersanelerdeki yeni inşa projelerinden zorlu tamir-bakım süreçlerine kadar gemilerinizin fiziki bütünlüğünü koruyan üst düzey korozyon dirençli boyalar.'
                : 'Tersanelerdeki yeni inşa projelerinden zorlu tamir-bakım süreçlerine kadar gemilerinizin fiziki bütünlüğünü koruyan üst düzey korozyon dirençli boyalar.',
            images: [
                '/images/services/paint/paint-1.jpg',
                '/images/services/paint/paint-2.jpg',
                '/images/services/paint/paint-3.jpg',
                '/images/services/paint/paint-4.jpg',
                '/images/services/paint/paint-5.jpg',
                '/images/services/paint/paint-6.jpg',
                '/images/services/paint/paint-7.jpg',
                '/images/services/paint/paint-8.jpg',
            ],
            features: locale === 'en' ? [
                'NACE/FROSIO Inspector support',
                'SeaStock availability',
                'High corrosion resistance',
                'Technical condition analysis'
            ] : [
                'NACE/FROSIO Enspektör desteği',
                'SeaStock (Seyir Stoğu) ikmali',
                'Yüksek korozyon direnci',
                'Yüzey kondisyon analizi'
            ],
            details: locale === 'en'
                ? 'We supply marine paints at international standards. Our NACE/FROSIO certified experts guide your vessel and analyze surface conditions to issue quality certificates.'
                : 'Uluslararası standartlarda tedarik ettiğimiz boyalarla gemi yüzeylerini koruma altına alıyoruz. Uzman enspektörlerimiz (NACE/FROSIO) geminizi yönlendirir, yüzey kondisyonunu analiz eder ve uluslararası geçerliliğe sahip raporlar sunar.',
            specs: [
                { label: "Inspector", value: "NACE / FROSIO" },
                { label: "Stock", value: "SeaStock Available" },
                { label: "Types", value: "Epoxy, Polyurethane" },
                { label: "Standard", value: "ISO 12944" }
            ]
        },
        {
            id: 'liman',
            icon: Anchor,
            title: locale === 'en' ? 'Port Services' : 'Liman Hizmetleri',
            desc: locale === 'en'
                ? 'Gemilerin liman konaklamaları süresince ihtiyaç duyduğu her türlü lojistik, teknik ve operasyonel destek.'
                : 'Gemilerin liman konaklamaları süresince ihtiyaç duyduğu her türlü lojistik, teknik ve operasyonel destek.',
            images: ['/barge-map.png'],
            features: locale === 'en' ? [
                '24/7 Guaranteed response',
                'All Turkish Ports covered',
                'Spare parts logistics',
                'Customs and docs tracking'
            ] : [
                '7/24 Kesintisiz hizmet güvencesi',
                'Tüm Türk limanlarında kapsam',
                'Yedek parça lojistiği',
                'Gümrük ve evrak süreç takibi'
            ],
            details: locale === 'en'
                ? 'We minimize port stay duration through professional coordination. Our team provides integrated agency and logistics support for any vessel size in any Turkish port.'
                : 'Gemi limandayken geçen zamanın maliyetini biliyoruz. Bu nedenle liman hizmetlerimiz, geminizin bekleme süresini minimize edecek şekilde profesyonel acentelik ve lojistik koordinasyonumuzla planlanmıştır.',
            specs: [
                { label: "Availability", value: "7/24 Active" },
                { label: "Ports", value: "All TR Ports" },
                { label: "Agency", value: "Full Integrated" },
                { label: "Coordination", value: "Real-time Tracking" }
            ]
        }
    ];

    return (
        <>
            <main className="min-h-screen bg-slate-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                            {locale === 'en' ? 'Our Solutions' : 'Çözümlerimiz'}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            {locale === 'en' ? 'Our Services' : 'Hizmetlerimiz'}
                        </h1>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            {locale === 'en'
                                ? 'We offer a 24/7 uninterrupted service guarantee with the highest quality standards in every field of the maritime sector.'
                                : 'Denizcilik sektörünün her alanında, en yüksek kalite standartlarıyla 7/24 kesintisiz hizmet güvencesi sunuyoruz.'}
                        </p>
                    </div>

                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="w-full lg:w-1/2 relative group">
                                    <ServiceCarousel images={service.images} />
                                    <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-blue-600 shadow-xl z-20">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">{service.title}</h2>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                                        {service.desc}
                                    </p>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        {service.details}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {service.features.map((feat, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                <span className="text-slate-700 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={`/iletisim?service=${service.id}`} className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1">
                                        {locale === 'en' ? 'Request Official Quote' : 'Resmi Teklif Al'} <ArrowRight className="w-5 h-5" />
                                    </Link>

                                    <TechSpecPanel title={service.title} specs={service.specs} locale={locale} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* ===== SERVICE WORKFLOW ===== */}
            <ServiceWorkflow locale={locale} />


            {/* ===== CTA ===== */}
            <div className="bg-slate-50 px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#0a192f] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full"></div>
                        
                        <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
                            {locale === 'en' ? 'Do you have a special request?' : 'Özel Bir Talebiniz Mi Var?'}
                        </h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 relative z-10">
                            {locale === 'en'
                                ? 'Apart from our standard services, consult with our expert team for custom supply solutions and long-term agreements for your fleet.'
                                : 'Standart hizmetlerimizin dışında, filonuza özel tedarik çözümleri ve uzun dönemli anlaşmalar için uzman ekibimizle görüşün.'}
                        </p>
                        <Link href="/iletisim" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-xl transition-all shadow-xl relative z-10">
                            {locale === 'en' ? 'Contact Us' : 'Bize Ulaşın'} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
