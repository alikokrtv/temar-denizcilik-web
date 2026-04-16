"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Ship, Droplet, PaintBucket, Anchor, CheckCircle2, ArrowRight, ShieldCheck, Clock, Globe } from 'lucide-react';
import ServiceCarousel from '@/components/ServiceCarousel';

import { useLocale } from 'next-intl';

export default function ServicesPage() {
    const locale = useLocale();

    const services = [
        {
            id: 'ikmal',
            icon: Ship,
            title: locale === 'en' ? 'Bunker Supply Solutions' : 'Denizcilik İkmal Çözümler            desc: locale === 'en' 
                ? 'We provide reliable and uninterrupted fuel supply services at international standards with our wide product network in all Turkish ports, shipyards, and anchorages.'
                : 'Tüm Türk limanları, tersane ve demirleme sahalarında geniş ürün ağımızla, uluslararası standartlarda güvenilir ve kesintisiz yakıt tedarik hizmeti sunuyoruz.',
            images: ['/temar-ikmal-trucks.png', '/Bunker Fuel.png', '/yacht.jpg.png'],
            features: locale === 'en' ? [
                'Fast and reliable supply',
                'Certified fuel solutions',
                'Full compliance with ISO standards',
                'Supply support at anchorages'
            ] : [
                'Hızlı ve güvenilir tedarik',
                'Sertifikalı yakıt çözümleri',
                'ISO standartlarına tam uyum',
                'Demirleme sahalarında ikmal desteği'
            ],
            details: locale === 'en'
                ? 'We supply all kinds of marine fuel your ships need at any time of the day, under any conditions, with quality, reliable and competitive conditions. Our supply operations are carried out in accordance with the highest level of safety and environmental protection standards.'
                : 'Günün her saatinde, her koşulda, gemilerinizin ihtiyacı olan her türlü denizcilik yakıtını kaliteli, güvenilir ve rekabetçi koşullarla tedarik ediyoruz. Tedarik operasyonlarımız, en üst düzey güvenlik ve çevre koruma standartlarına uygun olarak yürütülür.'
        },
        {
            id: 'madeni-yag',
            icon: Droplet,
            title: locale === 'en' ? 'Lubricant Sales and Supply' : 'Madeni Yağ Satışı ve İkmali',
            desc: locale === 'en'
                ? 'Premium quality lubricants developed for main engines, systems and marine engines, supporting operational continuity and ship engine efficiency.'
                : 'Ana makine, sistem ve deniz motorları için geliştirilmiş, operasyonel sürekliliği ve gemi motor verimliliğini destekleyen üstün kaliteli madeni yağlar.',
            images: ['/yatch5.png', '/temar-ikmal-trucks.png', '/barge-map.png'],
            features: locale === 'en' ? [
                'Oils providing superior performance',
                'Extended engine life',
                'Collaboration with global premium brands',
                'Special delivery options with barge'
            ] : [
                'Üstün performans sağlayan yağlar',
                'Uzatılmış motor ömrü',
                'Küresel premium markalarla işbirliği',
                'Barge ile özel teslimat seçenekleri'
            ],
            details: locale === 'en'
                ? 'By supplying the products of the world\'s leading lubricant manufacturers, we support your ships to operate longer and with higher performance. We provide solutions for all engine types, from single cylinder engines to the most complex systems.'
                : 'Dünyanın önde gelen madeni yağ üreticilerinin ürünlerini tedarik ederek gemilerinizin daha uzun ömürlü ve performanslı çalışmasına destek oluyoruz. Tek silindirli makinelerden en karmaşık sistemlere kadar tüm motor tipleri için çözüm sağlıyoruz.'
        },
        {
            id: 'boya',
            icon: PaintBucket,
            title: locale === 'en' ? 'Marine Paints' : 'Denizcilik Boyaları',
            desc: locale === 'en'
                ? 'High-level corrosion-resistant marine paints and stock coating solutions needed during navigation at international standards.'
                : 'Uluslararası standartlarda üst düzey korozyon dirençli denizcilik boyaları ve seyir esnasında ihtiyaç duyulan stok kaplama çözümleri.',
            images: ['/Bunker Fuel.png', '/yatch5.png', '/yacht.jpg.png'],
            features: locale === 'en' ? [
                'High corrosion resistance',
                'Toxic/non-toxic underwater paints',
                'Long-term protection',
                'Special expertise for shipyard applications'
            ] : [
                'Yüksek korozyon direnci',
                'Zehirli/zehirsiz sualtı boyaları',
                'Uzun süreli koruma',
                'Tersane uygulamaları için özel uzmanlık'
            ],
            details: locale === 'en'
                ? 'We offer the most durable paint and coating systems to protect ship surfaces against harsh ocean conditions, salt water, and biological pollution. We stand by you at every stage, from emergency touch-ups during navigation to comprehensive dry-docking operations.'
                : 'Gemi yüzeylerini zorlu okyanus şartlarına, tuzlu suya ve biyolojik kirliliğe karşı korumak için en dayanıklı boya ve kaplama sistemlerini sunuyoruz. Seyir esnasındaki acil rötuşlardan kapsamlı havuzlama operasyonlarına kadar her aşamada yanınızdayız.'
        },
        {
            id: 'liman',
            icon: Anchor,
            title: locale === 'en' ? 'Port Services' : 'Liman Hizmetleri',
            desc: locale === 'en'
                ? 'All kinds of logistics, technical and operational support required by ships during their port stays.'
                : 'Gemilerin liman konaklamaları süresince ihtiyaç duyduğu her türlü lojistik, teknik ve operasyonel destek.',
            images: ['/barge-map.png', '/Bunker Fuel.png', '/temar-ikmal-trucks.png'],ilerin liman konaklamaları süresince ihtiyaç duyduğu her türlü lojistik, teknik ve operasyonel destek.',
            image: '/barge-map.png',
            features: locale === 'en' ? [
                'Document and customs tracking',
                'Spare parts logistics',
                'Provisions and material supply',
                'Waste reception coordination'
            ] : [
                'Evrak ve gümrük süreçleri takibi',
                'Yedek parça lojistiği',
                'Kumanya ve malzeme tedariği',
                'Atık alım koordinasyonu'
            ],
            details: locale === 'en'
                ? 'We know the cost of the time spent when the ship is at the port. For this reason, our port services are planned to minimize your ship\'s waiting time. We provide fully integrated service with our professional agency and logistics coordination.'
                : 'Gemi limandayken geçen zamanın maliyetini biliyoruz. Bu nedenle liman hizmetlerimiz, geminizin bekleme süresini minimize edecek şekilde planlanmıştır. Profesyonel acentelik ve lojistik koordinasyonumuzla tam entegre hizmet veriyoruz.'
        }
    ];

    return (
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
                                    {locale === 'en' ? 'Get a Quote' : 'Teklif Al'} <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-[#0a192f] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
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
        </main>
    );
}
