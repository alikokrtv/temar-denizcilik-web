"use client";

import React from 'react';
import { Leaf, Droplet, Wind, ShieldAlert, BadgeCheck, Network } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function SustainabilityPage() {
    const locale = useLocale();

    return (
        <main className="min-h-screen bg-white py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-100">
                        <Leaf className="w-4 h-4" /> {locale === 'en' ? 'Environmental Compliance' : 'Çevre İçin Uyumu'}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                        {locale === 'en' ? 'Our Green Maritime ' : 'Yeşil Denizcilik '}<br/>
                        <span className="text-emerald-500">{locale === 'en' ? 'Vision' : 'Vizyonumuz'}</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        {locale === 'en' 
                            ? 'As Temar Denizcilik, we put the protection of the oceans and seas at the center of our business. We carry out environmentally sensitive supply operations in full compliance with MARPOL standards.'
                            : 'Temar Denizcilik olarak okyanusların ve denizlerin korunmasını işimizin merkezine koyuyoruz. MARPOL standartlarına tam uyumla çevreye duyarlı ikmal operasyonları gerçekleştiriyoruz.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[100px] -z-10"></div>
                        <img src="/yatch5.png" alt="Yeşil Denizcilik" className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover" />
                        
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 hidden md:flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                                <BadgeCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-lg">ISO 14001</p>
                                <p className="text-slate-500 text-sm">Çevre Yönetim Sistemi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6">
                            {locale === 'en' ? 'Our Commitment to Reduce Emissions' : 'Emisyonları Azaltma Taahhüdümüz'}
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {locale === 'en' 
                                ? 'The bunker sector is the lifeblood of maritime trade, but it is our responsibility to reduce its environmental impact on our world.'
                                : 'Bunker sektörü deniz ticaretinin can damarıdır ancak dünyamız üzerindeki çevresel etkisini azaltmak bizim sorumluluğumuzdur.'}
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {locale === 'en'
                                ? 'We prioritize the supply of Low Sulfur fuels and continuously optimize our service processes in parallel with international carbon emission reduction goals.'
                                : 'Low Sulfur (Düşük Kükürtlü) yakıtların tedarikine öncelik veriyor, uluslararası karbon emisyonu azaltma hedeflerine paralel olarak hizmet süreçlerimizi sürekli olarak optimize ediyoruz.'}
                        </p>
                        
                        <div className="space-y-4">
                            {(locale === 'en' ? [
                                { icon: Droplet, title: 'Low Sulfur Fuel', desc: 'Product supply fully compliant with the IMO 2020 sulfur limit.' },
                                { icon: Wind, title: 'Carbon Footprint', desc: 'Reducing emissions by optimizing barge logistics routes.' },
                                { icon: ShieldAlert, title: 'Zero Spill Goal', desc: 'Extra security measures taken to prevent marine pollution during supply.' }
                            ] : [
                                { icon: Droplet, title: 'Düşük Kükürtlü Yakıt', desc: 'IMO 2020 kükürt sınırına tam uyumlu ürün ikmali.' },
                                { icon: Wind, title: 'Karbon Ayak İzi', desc: 'Barge lojistik rotalarının optimize edilerek emisyonun azaltılması.' },
                                { icon: ShieldAlert, title: 'Sıfır Döküntü Hedefi', desc: 'İkmal sırasında deniz kirliliğini önlemek için alınan ekstra güvenlik önlemleri.' }
                            ]).map((item, i) => (
                                <div key={i} className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MARPOL */}
                <div className="bg-[#0a192f] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <Network className="w-16 h-16 text-emerald-400 mx-auto mb-6 relative z-10" />
                    <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
                        {locale === 'en' ? 'Full Compliance with MARPOL Convention' : 'MARPOL Sözleşmesine Tam Uyum'}
                    </h2>
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10 relative z-10 leading-relaxed">
                        {locale === 'en' 
                            ? 'We strictly apply the procedures of the International Convention for the Prevention of Pollution from Ships (MARPOL) and act according to international regulations in our port operations to properly manage all ship wastes.'
                            : 'Gemilerden Kaynaklanan Kirliliğin Önlenmesi Uluslararası Sözleşmesi (MARPOL) prosedürlerini harfiyen uyguluyor, tüm gemi atıklarının doğru şekilde yönetilmesi için liman operasyonlarımızda uluslararası regülasyonlara göre hareket ediyoruz.'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="font-bold text-emerald-400 mb-2">{locale === 'en' ? 'Trained Team' : 'Eğitimli Ekip'}</h3>
                            <p className="text-sm text-slate-400">
                                {locale === 'en' ? 'Expert staff receiving regular training on environmental emergencies.' : 'Çevresel acil durumlar konusunda düzenli eğitim alan uzman kadro.'}
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="font-bold text-emerald-400 mb-2">{locale === 'en' ? 'Inspection & Control' : 'Denetim & Kontrol'}</h3>
                            <p className="text-sm text-slate-400">
                                {locale === 'en' ? 'Strict environmental and operational inspection at every stage of the supply process.' : 'Tedarik sürecinin her aşamasında sıkı çevresel ve operasyonel denetim.'}
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="font-bold text-emerald-400 mb-2">{locale === 'en' ? 'Innovative Approach' : 'Yenilikçi Yaklaşım'}</h3>
                            <p className="text-sm text-slate-400">
                                {locale === 'en' ? 'Investment in green technologies and sustainable product groups.' : 'Yeşil teknolojilere ve sürdürülebilir ürün gruplarına olan yatırım.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
