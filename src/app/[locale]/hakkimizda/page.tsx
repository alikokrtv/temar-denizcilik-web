"use client";

import React from 'react';
import { Target, Eye, Globe, ShieldCheck, Zap, Users, Award, ArrowRight, CheckCircle2, Anchor, Ship, TrendingUp } from 'lucide-react';
import { useLocale } from 'next-intl';

function SectionBadge({ text }: { text: string }) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            {text}
        </div>
    );
}

const timelineData = [
    { 
        year: '1997', 
        title: 'Kuruluş', 
        desc: 'Temelleri kurucumuz Barbaros Çınar tarafından atılan Temar Denizcilik, denizcilik sektörüne ilk adımını attı.',
        img: '/images/brand/brand-8.png'
    },
    { 
        year: '2005', 
        title: 'İlk Gemi Yakıtı İkmali', 
        desc: 'Lojistik altyapısını güçlendirerek portföyüne gemi yakıtı (Bunker fuel) hizmetini ekledi.',
        img: '/images/services/fuel/fuel-3.jpg'
    },
    { 
        year: '2012', 
        title: 'Lojistik Altyapı', 
        desc: 'Kendi lojistik ağını ve barge filosunu güçlendirerek operasyonel hızını ve güvenilirliğini en üst seviyeye çıkardı.',
        img: '/images/services/fuel/fuel-7.jpg'
    },
    { 
        year: '2020', 
        title: 'Dijital Dönüşüm', 
        desc: 'Operasyonel süreçleri dijitalleştirerek şeffaf ve izlenebilir hizmet anlayışını sistemlerine entegre etti.',
        img: '/images/brand/brand-10.png'
    },
    { 
        year: '2024+', 
        title: 'Stratejik Büyüme', 
        desc: 'Küresel tedarik ağını genişleterek Akdeniz ve Marmara havzasındaki lider konumunu pekiştirdi.',
        img: '/images/services/lubricants/lub-5.jpg'
    },
    { 
        year: '2025', 
        title: 'Sürdürülebilir Büyüme', 
        desc: 'Operasyonel kapasitesini artırarak sektörün güvenilir çözüm ortakları arasındaki yerini sağlamlaştırdı.',
        img: '/images/services/fuel/fuel-11.jpg'
    },
    { 
        year: '2026', 
        title: 'Gemi İşletmeciliği', 
        desc: 'Stratejik hedefleri doğrultusunda gemi işletmeciliği ve armatörlük faaliyetlerini başlatarak hizmet ağını bir üst seviyeye taşımayı hedefliyor.',
        img: '/images/brand/brand-6.png'
    },
];

export default function AboutPage() {
    const locale = useLocale();
    const [activeYear, setActiveYear] = React.useState(0);
    
    const t = {
        title: locale === 'en' ? 'Corporate' : 'Kurumsal',
        who: locale === 'en' ? 'Who Are We?' : 'Biz Kimiz?',
        desc: locale === 'en' 
            ? 'A quarter-century journey: Sea strength, port quality.' 
            : 'Çeyrek asırlık serüven: Denizde güç, limanda kalite.',
    };

    return (
        <main className="min-h-screen w-full bg-white relative overflow-hidden scroll-smooth">
            {/* background elements */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-50/80 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-cyan-50/60 rounded-full blur-[100px]" />
            </div>

            {/* ===== HERO ===== */}
            <section className="relative pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <SectionBadge text={t.title} />
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0a192f] tracking-tight mb-6">
                        {t.who.split(' ')[0]} <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            {t.who.split(' ').slice(1).join(' ')}
                        </span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-8 shadow-lg shadow-blue-500/20" />
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                        {t.desc}
                    </p>
                </div>
            </section>

            {/* ===== BİZ KİMİZ? (SECTION 1) ===== */}
            <section id="biz-kimiz" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="/images/brand/brand-9.png" alt="Temar Denizcilik Foundation" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">Kurucumuz</p>
                                    <p className="text-3xl font-black tracking-tight">Barbaros Çınar</p>
                                    <p className="text-slate-300 text-sm mt-1">1997 - Vizyoner Denizcilik Çözümleri</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] mb-8 tracking-tight leading-tight">
                                Temellerimiz <span className="text-blue-600">1997 Yılında</span> Atıldı
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Temelleri 1997 yılında kurucumuz <strong>Barbaros Çınar</strong> tarafından atılan Temar Denizcilik, çeyrek asrı aşan yolculuğuna <strong>"denizde güç, limanda kalite"</strong> ilkesiyle devam ediyor.
                                </p>
                                <p>
                                    İstanbul'da başlayan bu serüven, yıllar içinde madeni yağ tedarikinden gemi yakıt ikmaline (bunkering) kadar genişleyen bir uzmanlık ağına dönüştü. Bugün Türkiye'nin tüm stratejik limanlarında, Marmara'nın kalbindeki barç operasyonlarımız ve geniş kara tankeri filomuzla hizmet veriyoruz.
                                </p>
                                <p>
                                    Bizim için her operasyon; sadece bir yakıt veya yağ teslimatı değil, bir geminin rotasını kesintisiz sürdürmesini sağlayan teknik bir sorumluluktur. <strong>"Güvenli liman"</strong> olma özelliğimizi 25 yılı aşkın süredir koruyoruz.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-6">
                                {[
                                    { icon: Award, label: 'ISO Sertifikalı', sub: '9001 & 14001' },
                                    { icon: Ship, label: 'Kendi Filomuz', sub: 'Barge & Tanker' },
                                    { icon: Globe, label: 'Türk Limanları', sub: 'Tümünde Aktif' },
                                ].map((item, i) => (
                                    <div key={i} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                        <p className="text-sm font-bold text-slate-900">{item.label}</p>
                                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{item.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY US? ===== */}
            <section className="py-24 px-4 bg-[#0a192f] relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <SectionBadge text="Neden Biz?" />
                            <h2 className="text-4xl font-black text-white mb-6">Operasyonel <br/><span className="text-blue-400">Yetkinlik</span> ve Güven</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Tecrübemizi büyük cümlelerle değil, operasyonel hızımızla ve sunduğumuz şeffaflıkla kanıtlamayı tercih ediyoruz.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'İhtiyaca göre Transit veya Yerli yakıt seçenekleri',
                                    'Bağımsız uluslararası denetim standartları',
                                    'Kendi öz mal varlıklarımızla sürdürülebilir lojistik',
                                    'Rekabetçi fiyatlandırma ve esnek tedarik'
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-200">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span className="text-sm font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: ShieldCheck, title: 'Şeffaf Operasyon', desc: 'İkmal süreçlerimiz, şeffaflık ilkemiz gereği bağımsız uluslararası gözetim firmalarının, en yüksek emniyet standartlarında gerçekleştirilmektedir.' },
                                { icon: Zap, title: 'Hız ve Dinamizm', desc: 'Sektörün en dinamik ekibiyle, profesyonel işletmelere rekabetçi fiyatlandırma ve sürdürülebilir iş birliği fırsatları sunuyoruz.' },
                                { icon: Globe, title: 'Küresel ve Yerel Ağ', desc: 'Yılların öz mal varlıklarımızla, dünya limanlarında ise güçlü partner ağımızla gemilerinizin rotasını kesintisiz kılıyoruz.' },
                                { icon: TrendingUp, title: 'Geleceğe Bakış', desc: '2026 yılı itibarıyla gemi işletmeciliği ve armatörlük alanındaki yeni adımlarımızla denizcilikteki varlığımızı bir üst seviyeye taşıyoruz.' },
                            ].map((card, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <card.icon className="w-10 h-10 text-blue-400 mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TARİHÇEMİZ (INTERACTIVE) ===== */}
            <section id="tarihcemiz" className="py-32 px-4 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <SectionBadge text="Yolculuğumuz" />
                        <h2 className="text-4xl md:text-6xl font-black text-[#0a192f] tracking-tight mb-4">
                            Tarih<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">çemiz</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6" />
                        <p className="text-slate-500 text-lg">Yıllara göre Temar'ın gelişim yolculuğunu keşfedin.</p>
                    </div>

                    {/* Timeline Selector */}
                    <div className="relative mb-20 scroll-m-20">
                         {/* Progress Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700 ease-out"
                                style={{ width: `${(activeYear / (timelineData.length - 1)) * 100}%` }}
                            />
                        </div>

                        <div className="relative flex justify-between items-center z-10 px-2 lg:px-0">
                            {timelineData.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveYear(i)}
                                    className="group relative flex flex-col items-center"
                                >
                                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-4 transition-all duration-500 flex items-center justify-center bg-white ${
                                        activeYear === i 
                                            ? 'border-blue-600 scale-125 shadow-xl shadow-blue-500/30' 
                                            : 'border-slate-100 group-hover:border-blue-200'
                                    }`}>
                                        <span className={`text-[10px] md:text-sm font-black transition-colors ${
                                            activeYear === i ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                                        }`}>
                                            {item.year.replace('+', '')}
                                        </span>
                                    </div>
                                    <div className={`absolute top-full mt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hidden md:block ${
                                        activeYear === i ? 'text-blue-600 opacity-100' : 'opacity-0 translate-y-2'
                                    }`}>
                                        {item.title.split(' ')[0]}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Display */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-slate-50 p-8 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm relative">
                        <div className="order-2 lg:order-1 space-y-8">
                             <div className="inline-block px-6 py-2 rounded-2xl bg-blue-600 text-white text-3xl font-black mb-4 shadow-lg shadow-blue-500/20">
                                {timelineData[activeYear].year}
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight leading-tight transition-all duration-500">
                                {timelineData[activeYear].title}
                            </h3>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium transition-all duration-500">
                                {timelineData[activeYear].desc}
                            </p>
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex -space-x-4">
                                    {['/images/brand/brand-1.jpg', '/images/brand/brand-4.jpg', '/images/brand/brand-2.jpg'].map((src, i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                                            <img src={src} alt="Team" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm font-bold text-slate-500">Temar Denizcilik Operasyon Ekibi</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square">
                                {timelineData[activeYear].img ? (
                                    <img 
                                        key={timelineData[activeYear].img}
                                        src={timelineData[activeYear].img} 
                                        alt={timelineData[activeYear].title} 
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                        <Ship className="w-20 h-20 text-slate-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== HİZMET BÖLGELERİMİZ (SECTION 3) ===== */}
            <section id="bolgeler" className="py-24 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <SectionBadge text="Kapsama Alanı" />
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight mb-4 uppercase">
                            Hizmet <span className="text-blue-600">Bölgelerimiz</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-blue-50 group hover:border-blue-200 transition-all">
                                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase flex items-center gap-3">
                                    <span className="w-10 h-1 bg-blue-600 rounded-full" />
                                    BARGE <span className="text-blue-600">OPERATIONS</span>
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Marmara bölgesi genelinde deniz lojistiğinde güvenilir çözümler. <strong>Tuzla, Ambarlı, Yalova</strong> ve tüm İstanbul limanlarında 7/24 kesintisiz operasyonlar.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {['Tuzla', 'Ambarlı', 'Yalova', 'İstanbul Limanları'].map((tag, i) => (
                                        <span key={i} className="text-xs font-bold px-3 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>

                             <div className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-cyan-50 group hover:border-cyan-200 transition-all">
                                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase flex items-center gap-3">
                                    <span className="w-10 h-1 bg-cyan-500 rounded-full" />
                                    FİZİKSEL İKMAL <span className="text-blue-600">NOKTALARI</span>
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Tüm Türk limanlarında güvenilir deniz lojistiği çözümleri. <strong>İzmir, Mersin, İskenderun</strong> ve Karadeniz limanlarında güçlü partner ağımızla tam kapsamlı tedarik.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {['Ege', 'Akdeniz', 'Karadeniz', 'Kuzey Marmara'].map((tag, i) => (
                                        <span key={i} className="text-xs font-bold px-3 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-3xl" />
                            <img src="/temar-map.png" alt="Temar Operation Network Map" className="relative w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== GELECEĞE BAKIŞ ===== */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-blue-600 text-white mb-8 shadow-2xl shadow-blue-500/30">
                        <TrendingUp className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] mb-6">Geleceğe Bakış</h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-12 italic">
                        "2026 yılı itibarıyla gemi işletmeciliği ve armatörlük alanındaki yeni adımlarımızla, denizcilikteki varlığımızı bir üst seviyeye taşıyoruz. Temar Denizcilik olarak, dün olduğu gibi bugün de her ikmalde aynı titizliği, her rotada aynı profesyonelliği sunmaya devam edeceğiz."
                    </p>
                    <div className="h-px w-32 bg-slate-200 mx-auto" />
                </div>
            </section>
        </main>
    );
}
