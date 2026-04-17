"use client";

import { Link } from '@/i18n/routing';
import Image from "next/image";
import React from "react";
import { ArrowRight, Ship, Droplet, PaintBucket, Globe, Clock, ShieldCheck, Anchor, ChevronRight } from "lucide-react";
import AnimatedCounter from '@/components/AnimatedCounter';
import CapabilityGrid from '@/components/CapabilityGrid';
import { useTranslations, useLocale } from 'next-intl';

function ServiceCard({ item, locale }: { item: any, locale: string }) {
    const [isVisible, setIsVisible] = React.useState(false);
    const itemRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (itemRef.current) observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Link 
            key={item.id}
            ref={itemRef}
            href={`/hizmetler#${item.id}`} 
            className={`group bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-blue-100 flex flex-col h-full overflow-hidden relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${item.delay}ms` }}
        >
            <div className="w-full h-64 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white">{item.title}</h3>
                </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-slate-600 mb-4 md:mb-8 flex-grow leading-relaxed font-medium">
                    {item.desc}
                </p>
                <div className="flex items-center text-blue-600 font-bold text-sm tracking-wide transition-all group-hover:translate-x-2">
                    {locale === 'en' ? 'Service Details' : 'Hizmet Detayları'} <ArrowRight className="ml-2 w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}

export default function Home() {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const [mounted, setMounted] = React.useState(false);
    const [heroData, setHeroData] = React.useState({
        mediaUrl: "/images/services/fuel/fuel-2.jpg",
    });

    const statsData = [
        { num: 1000, suffix: "+", title: locale === 'en' ? "Successful Logistics" : "Başarılı Lojistik", desc: locale === 'en' ? "On-time delivery guarantee" : "Zamanında teslimat garantisi" },
        { num: 500, suffix: "+", title: locale === 'en' ? "Port Network" : "Liman Ağı", desc: locale === 'en' ? "Global service points" : "Küresel hizmet noktası" },
        { num: 15, suffix: "+", title: locale === 'en' ? "Years Exp." : "Yıllık Tecrübe", desc: locale === 'en' ? "Industry leading operation" : "Sektör lideri operasyon" },
        { num: 24, prefix: "7/", suffix: "", title: locale === 'en' ? "Uninterrupted Service" : "Kesintisiz Hizmet", desc: locale === 'en' ? "Sector where time never stops" : "Zamanın durmadığı sektör" }
    ];

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={heroData.mediaUrl} 
                        alt="Temar Denizcilik" 
                        fill
                        priority
                        className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-[#0a192f]/50"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center mt-10">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest mb-6 animate-fade-in-up">
                        {t('heroTop')}
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight animate-fade-in-up animation-delay-100">
                        {t('heroTitle1')} <br/>
                        <span className="text-blue-400">{t('heroTitle2')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up animation-delay-200">
                        {t('heroDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
                        <Link href="/hizmetler" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1">
                            {t('viewServices')}
                        </Link>
                        <Link href="/iletisim" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold transition-all hover:-translate-y-1">
                            {locale === 'en' ? 'Request a Quote' : 'Teklif Talep Et'}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== STATS MARQUEE ===== */}
            <div className="bg-white border-b border-slate-100 py-6 overflow-hidden">
                <div className="flex animate-slide-left w-max hover:animate-none">
                    {[...statsData, ...statsData, ...statsData].map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4 px-16 border-r border-slate-100">
                            <div className="text-3xl font-black text-blue-600 flex-shrink-0">
                                {stat.prefix}{stat.num}{stat.suffix}
                            </div>
                            <div className="flex-shrink-0">
                                <div className="text-sm font-bold text-slate-900">{stat.title}</div>
                                <div className="text-xs text-slate-500">{stat.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== FAALİYET ALANLARI ===== */}
            <section className="py-12 md:py-24 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                            {locale === 'en' ? 'Our Solutions' : 'Çözümlerimiz'}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                            {locale === 'en' ? 'Fields of Activity' : 'Faaliyet Alanlarımız'}
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {locale === 'en' 
                                ? '7/24 seamless, reliable, and high-performance supply solutions to the global maritime industry.'
                                : 'Küresel denizcilik sektörüne 7/24 kesintisiz, güvenilir ve yüksek performanslı tedarik çözümleri.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                id: "ikmal",
                                title: locale === 'en' ? "Bunker Supply" : "Denizcilik İkmal",
                                img: "/images/services/fuel/fuel-4.jpg",
                                icon: Ship,
                                desc: locale === 'en' 
                                    ? "Reliable fuel supply service at international standards with our wide product network in all ports and anchorages."
                                    : "Tüm liman ve demirleme sahalarında geniş ürün ağımızla uluslararası standartlarda güvenilir yakıt tedarik hizmeti.",
                                delay: "100"
                            },
                            {
                                id: "madeni-yag",
                                title: locale === 'en' ? "Lubricant Supply" : "Madeni Yağ İkmali",
                                img: "/images/services/lubricants/lub-4.jpg",
                                icon: Droplet,
                                desc: locale === 'en'
                                    ? "Premium quality lubricant solutions supporting operational continuity and engine efficiency."
                                    : "Operasyonel sürekliliği ve motor verimliliğini destekleyen üstün kaliteli madeni yağ çözümleri.",
                                delay: "200"
                            },
                            {
                                id: "boya",
                                title: locale === 'en' ? "Marine Paints" : "Denizcilik Boyaları",
                                img: "/images/services/paint/paint-5.jpg",
                                icon: PaintBucket,
                                desc: locale === 'en'
                                    ? "High-level corrosion resistant marine paints and stock coating solutions needed during navigation."
                                    : "Üst düzey korozyon dirençli denizcilik boyaları ve seyir esnasında ihtiyaç duyulan stok kaplama çözümleri.",
                                delay: "300"
                            }
                        ].map((item) => (
                            <ServiceCard key={item.id} item={item} locale={locale} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CAPABILITIES ===== */}
            <CapabilityGrid locale={locale} />

            {/* ===== WHY US ===== */}
            <section className="py-24 px-4 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                            <img src="/images/brand/brand-8.png" alt="Temar Denizcilik" className="w-full h-[600px] object-cover" />
                        </div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -z-10" />
                        
                        <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block max-w-xs">
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-lg font-black text-slate-900">{locale === 'en' ? 'Reliable Partner' : 'Güvenilir Partner'}</div>
                                    <div className="text-sm text-slate-500">{locale === 'en' ? 'Service at global standards' : 'Global standartlarda hizmet'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
                            {locale === 'en' ? 'Our Difference' : 'Farkımız'}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            {locale === 'en' ? 'Why' : 'Neden'} <span className="text-blue-600">Temar Denizcilik?</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            {locale === 'en' 
                                ? 'We stand by your side in challenging operations in the maritime sector. We know the critical importance of time and ensure your route is uninterrupted.'
                                : 'Denizcilik sektöründeki zorlu operasyonlarda yanınızdayız. Zamanın kritik önemini biliyor, rotanızı kesintiye uğratmıyoruz.'}
                        </p>
                        <div className="space-y-6">
                            {[
                                { 
                                    icon: Globe, 
                                    title: locale === 'en' ? "Global Supply Network" : "Küresel Tedarik Ağı", 
                                    desc: locale === 'en' ? "Complete supply at the world's strategic ports." : "Dünyanın stratejik limanlarında eksiksiz ikmal." 
                                },
                                { 
                                    icon: Clock, 
                                    title: locale === 'en' ? "7/24 Continuous Operation" : "7/24 Kesintisiz Operasyon", 
                                    desc: locale === 'en' ? "Instant response to urgent needs with quick reflexes." : "Hızlı reflekslerimizle acil ihtiyaçlara anında çözüm." 
                                },
                                { 
                                    icon: ShieldCheck, 
                                    title: locale === 'en' ? "International Standards" : "Uluslararası Standartlar", 
                                    desc: locale === 'en' ? "Certified services complying with safety standards." : "Sertifikalı ve emniyet standartlarına uygun hizmet." 
                                }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-all shadow-sm">
                                        <feat.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">{feat.title}</h3>
                                        <p className="text-slate-600">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/hakkimizda" className="inline-flex items-center gap-2 mt-10 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                            {locale === 'en' ? 'More about us' : 'Hakkımızda daha fazlası'} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== SÜRDÜRÜLEBİLİRLİK ===== */}
            <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-200">
                        {locale === 'en' ? 'Green Maritime' : 'Yeşil Denizcilik'}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        {locale === 'en' ? 'We Care for Our ' : 'Okyanuslarımıza '}
                        <span className="text-emerald-600">{locale === 'en' ? 'Oceans' : 'Önem Veriyoruz'}</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {locale === 'en'
                            ? 'With our operations fully compliant with the MARPOL convention and IMO 2020 sulfur limit, we protect our seas with a zero-spill goal. We invest in innovations to leave a cleaner world for future generations.'
                            : 'MARPOL sözleşmesine ve IMO 2020 kükürt sınırına tam uyumlu operasyonlarımızla, sıfır döküntü hedefiyle denizlerimizi koruyoruz. Gelecek nesillere daha temiz bir dünya bırakmak için inovasyonlara yatırım yapıyoruz.'}
                    </p>
                    <Link href="/surdurulebilirlik" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-emerald-200/50">
                        {locale === 'en' ? 'Environmental Policy' : 'Çevre Politikamız'} <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* ===== LİMANLAR ===== */}
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
                            {locale === 'en' ? 'View Map' : 'Haritayı İncele'} <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-[3rem] blur-3xl -z-10 transform scale-95" />
                            <img src="/barge-map.png" alt="Türkiye Fiziksel İkmal Noktaları" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)] rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
