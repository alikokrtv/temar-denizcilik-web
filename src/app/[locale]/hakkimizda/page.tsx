"use client";

import React from 'react';
import Link from 'next/link';
import { Target, Eye, Heart, Globe, ShieldCheck, Zap, Users, Leaf, Award, ArrowRight, CheckCircle2, Anchor } from 'lucide-react';
import Timeline from '@/components/Timeline';
import { useLocale } from 'next-intl';

function SectionBadge({ text }: { text: string }) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            {text}
        </div>
    );
}

const values = [
    { icon: ShieldCheck, title: 'Güvenilirlik', desc: 'Müşterilerimize verdiğimiz sözü her koşulda tutar, operasyonlarını kesintisiz sürdürmelerini sağlarız.' },
    { icon: Zap, title: 'Hız & Verimlilik', desc: '7/24 kesintisiz operasyon anlayışımızla en kritik anlarda bile en hızlı çözümü sunarız.' },
    { icon: Globe, title: 'Küresel Bakış Açısı', desc: 'Yerel güçlü varlığımızı global tedarik ağımızla birleştirerek dünya standartlarında hizmet veririz.' },
    { icon: Leaf, title: 'Sürdürülebilirlik', desc: 'MARPOL ve IMO standartlarına tam uyumla çevresel sorumluluğumuzu her zaman ön planda tutarız.' },
    { icon: Users, title: 'Müşteri Odaklılık', desc: 'Her müşterimizin ihtiyacını ayrı değerlendirerek kişiselleştirilmiş çözümler üretiriz.' },
    { icon: Award, title: 'Kalite Taahhüdü', desc: 'ISO 9001 sertifikalı kalite yönetim sistemimizle en yüksek ürün ve hizmet standartlarını koruruz.' },
];

const team = [
    { name: 'Genel Müdür', title: 'Yönetim Kurulu Başkanı', initials: 'GM' },
    { name: 'Operasyon Direktörü', title: 'Denizcilik Operasyonları', initials: 'OD' },
    { name: 'Satış Direktörü', title: 'Küresel Satış & Pazarlama', initials: 'SD' },
];

export default function AboutPage() {
    const locale = useLocale();

    return (
        <main className="min-h-screen w-full bg-white relative overflow-hidden scroll-smooth">
            {/* Subtle background blobs */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-50/80 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-cyan-50/60 rounded-full blur-[100px]" />
            </div>

            {/* ===== HERO ===== */}
            <section className="relative pt-20 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <SectionBadge text={locale === 'en' ? 'Corporate' : 'Kurumsal'} />
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0a192f] tracking-tight mb-6 animate-fade-in-up">
                        {locale === 'en' ? 'Who Are ' : 'Biz '} 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            {locale === 'en' ? 'We?' : 'Kimiz?'}
                        </span>
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-8" />
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
                        {locale === 'en' 
                            ? 'We are a visionary supply company bringing trust, quality, and speed together in the global maritime industry.'
                            : 'Küresel denizcilik sektöründe güven, kalite ve hızı bir araya getiren vizyoner bir ikmal şirketiyiz.'}
                    </p>
                </div>
            </section>

            {/* ===== BİZ KİMİZ? ===== */}
            <section id="biz-kimiz" className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-[#0a192f] mb-6 tracking-tight">
                                {locale === 'en' ? 'The Story of' : "Temar Denizcilik'in"} <br />
                                <span className="text-blue-600">{locale === 'en' ? 'Temar Denizcilik' : 'Hikayesi'}</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    {locale === 'en'
                                        ? 'Temar Denizcilik is a visionary supply company bringing trust, quality, and speed together in the global maritime industry. Since our establishment, we provide professional solutions for all fuel, lubricant, and paint needs of ships operating in the harsh conditions of the seas.'
                                        : 'Temar Denizcilik, küresel denizcilik sektöründe güven, kalite ve hızı bir araya getiren vizyoner bir ikmal şirketidir. Kurulduğumuz günden bu yana, denizlerin zorlu şartlarında operasyonlarını sürdüren gemilere her türlü yakıt, madeni yağ ve boya ihtiyacında profesyonel çözümler sunuyoruz.'}
                                </p>
                                <p>
                                    {locale === 'en'
                                        ? 'We work to provide quality products, logistics, and competitive pricing to our customers. Our team, with years of experience in the sector, has a deep awareness of the fundamentals and development of the market.'
                                        : 'Müşterilerimize kaliteli ürün, lojistik ve rekabetçi fiyatlandırma sağlamak için çalışmaktayız. Sektörde uzun yıllar deneyime sahip ekibimiz, pazarın temelleri ve gelişimi konusunda derinlemesine farkındalığa sahiptir.'}
                                </p>
                                <p>
                                    {locale === 'en'
                                        ? 'By developing our physical supply experience in the global market, we bring stability and reliability to the marine fuel market. Our company offers a global perspective as well as a local outlook on market dynamics.'
                                        : 'Fiziksel ikmal tecrübemizi, global pazarda geliştirerek gemi yakıt pazarına istikrar ve güvenilirlik getiriyoruz. Şirketimiz, pazar dinamiklerine yerel bir bakış açısının yanı sıra küresel bir bakış açısı sunmaktadır.'}
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    { num: '15+', label: 'Yıl Tecrübe' },
                                    { num: '1000+', label: 'Başarılı İkmal' },
                                    { num: '500+', label: 'Küresel Liman' },
                                    { num: '7/24', label: 'Operasyon' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-4 text-center">
                                        <div className="text-2xl font-black text-blue-600">{stat.num}</div>
                                        <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img src="/yatch5.png" alt="Temar Denizcilik Operasyon" className="w-full h-[500px] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/50 to-transparent rounded-[2.5rem]" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                        <Anchor className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">ISO 9001 & 14001</p>
                                        <p className="text-xs text-slate-500">Sertifikalı Kalite</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MİSYON & VİZYON ===== */}
            <section id="misyon-vizyon" className="py-16 px-4 bg-[#0a192f] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {/* Misyon */}
                    <div className="rounded-[2.5rem] p-10 border"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                            style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}>
                            <Target className="w-7 h-7 text-white" />
                        </div>
                        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                            Misyonumuz
                        </div>
                        <h3 className="text-3xl font-black text-white mb-4">
                            Hedefimiz: <span className="text-blue-400">Mükemmellik</span>
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            Denizcilik sektörünün her aşamasında — yakıt, madeni yağ ve boya ikmali dahil — en yüksek kalite standartlarını koruyarak müşterilerimizin operasyonel sürekliliğini güvence altına almak ve küresel tedarik zincirinde güvenilir bir partner olmaktır.
                        </p>
                        <div className="mt-6 space-y-3">
                            {['Kesintisiz 7/24 tedarik', 'Uluslararası kalite standartları', 'Rekabetçi fiyatlandırma'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Vizyon */}
                    <div className="rounded-[2.5rem] p-10"
                        style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.15), rgba(6,182,212,0.08))', border: '1px solid rgba(37,99,235,0.25)' }}>
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                            style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)' }}>
                            <Eye className="w-7 h-7 text-white" />
                        </div>
                        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                            Vizyonumuz
                        </div>
                        <h3 className="text-3xl font-black text-white mb-4">
                            Geleceğe <span className="text-cyan-400">Bakış</span>
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            Küresel denizcilik sektöründe sürdürülebilirliği, inovasyon ve dijital dönüşümü merkezine alarak; yeşil denizcilik standartlarını benimseyen, teknoloji odaklı ve çevre dostu tedarik çözümleriyle Türkiye'nin uluslararası alandaki en değerli denizcilik markası olmaktır.
                        </p>
                        <div className="mt-6 space-y-3">
                            {["Yeşil denizcilik öncülüğü", "Dijital tedarik sistemleri", "Akdeniz'in en büyük ağı"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DEĞERLERİMİZ ===== */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <SectionBadge text="Temel Değerler" />
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] mb-4 tracking-tight">
                            Bizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Güçlü Kılan Değerler</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6" />
                        <p className="text-slate-500 max-w-2xl mx-auto">Her kararımızın ve her hizmetimizin altında yatan temel ilkeler.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((val, i) => (
                            <div key={i}
                                className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-blue-100">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                                    style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.1), rgba(6,182,212,0.1))' }}>
                                    <val.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{val.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TARİHÇE ===== */}
            <section id="tarihcemiz" className="py-16 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <SectionBadge text="Yolculuğumuz" />
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight mb-3">
                            Tarih<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">çemiz</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
                    </div>
                    <Timeline />
                </div>
            </section>

            {/* ===== SERTİFİKALAR ===== */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <SectionBadge text="Kalite Güvencesi" />
                        <h2 className="text-4xl font-black text-[#0a192f] tracking-tight mb-3">
                            Sertifika & <span className="text-blue-600">Uyumluluk</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Uluslararası standartlara tam uyumumuzu belgeleyen sertifikalarımız.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { cert: 'ISO 9001:2015', desc: 'Kalite Yönetim Sistemi', detail: 'Ürün ve hizmet kalitesini güvence altına alan uluslararası standart sertifikası.' },
                            { cert: 'ISO 14001:2015', desc: 'Çevre Yönetim Sistemi', detail: 'Çevresel etki yönetimi ve sürdürülebilirlik standartlarına uygunluk belgesi.' },
                            { cert: 'MARPOL Uyumu', desc: 'Deniz Kirliliği Önleme', detail: 'IMO\'nun deniz kirliliğini önleme sözleşmesine tam uyum ve operasyonel standartlar.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-gradient-to-br from-[#0a192f] to-[#1e3a5f] rounded-3xl p-8 text-center group hover:-translate-y-2 transition-all duration-300 shadow-lg">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                                    style={{ background: 'linear-gradient(135deg, rgba(29,78,216,0.4), rgba(6,182,212,0.2))', border: '1px solid rgba(96,165,250,0.2)' }}>
                                    <Award className="w-8 h-8 text-blue-300" />
                                </div>
                                <h3 className="text-xl font-black text-white mb-1">{item.cert}</h3>
                                <p className="text-blue-400 text-sm font-semibold mb-4">{item.desc}</p>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HİZMET BÖLGELERİ ===== */}
            <section id="hizmet-bolgelerimiz" className="py-16 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <SectionBadge text="Küresel Erişim" />
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] tracking-tight mb-3">
                            Hizmet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Bölgelerimiz</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">BARGE <span className="text-blue-600">OPERATIONS</span></h3>
                            <p className="text-lg text-slate-600 font-light leading-relaxed mb-2">
                                Marmara bölgesi genelinde deniz lojistiğinde güvenilir çözümler. Tuzla, Ambarlı, Yalova ve tüm İstanbul limanlarında 7/24 operasyonlar.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img src="/barge-map.png" alt="Barge Operations Map" className="w-full max-w-[520px] h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">FİZİKSEL İKMAL <span className="text-blue-600">NOKTALARI</span></h3>
                            <p className="text-lg text-slate-600 font-light leading-relaxed mb-2">
                                Tüm Türk limanlarında güvenilir deniz lojistiği çözümleri. İzmir, Mersin, İskenderun ve Karadeniz limanlarında güçlü partner ağımızla tam kapsamlı tedarik.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img src="/İstanbul.png" alt="Türkiye Fiziksel İkmal Noktaları" className="w-full max-w-[520px] h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {[
                            { title: 'Stratejik Konum', desc: 'İstanbul ve Çanakkale boğazlarında kritik öneme sahip ikmal noktalarımızla hizmetinizdeyiz.' },
                            { title: '7/24 Kesintisiz', desc: 'Deniz trafiğinin hiç durmadığı bu yollarda, biz de hiç durmadan operasyonel destek sağlıyoruz.' },
                            { title: 'Kapsamlı Ağ', desc: 'Sadece Türkiye limanlarında değil, dünya çapındaki partner ağımızla global çözümler üretiyoruz.' },
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                                <h4 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="py-16 px-4 bg-gradient-to-r from-[#0a192f] to-[#1e3a5f]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Birlikte Çalışalım</h2>
                    <p className="text-slate-300 mb-8 text-lg">Operasyonel ihtiyaçlarınız için uzman ekibimizle iletişime geçin.</p>
                    <Link href="/iletisim"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/30">
                        İletişime Geçin <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
