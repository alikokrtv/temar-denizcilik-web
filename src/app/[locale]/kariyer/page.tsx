"use client";

import React, { useState } from 'react';
import { Briefcase, Send, ShieldCheck, GraduationCap, Users, HeartHandshake } from 'lucide-react';
import { useLocale } from 'next-intl';

const positions = [
    { id: 1, title: 'Deniz Operasyonları Uzmanı', location: 'Merkez Ofis / Tuzla', type: 'Tam Zamanlı' },
    { id: 2, title: 'Madeni Yağ Satış Yöneticisi', location: 'Merkez Ofis / Tuzla', type: 'Tam Zamanlı' },
    { id: 3, title: 'Bunker Saha Sorumlusu', location: 'Saha / Limanlar', type: 'Tam Zamanlı' }
];

export default function CareerPage() {
    const locale = useLocale();

    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', position: '', experience: '', message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/kariyer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ fullName: '', email: '', phone: '', position: '', experience: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        {locale === 'en' ? 'Join Our Team' : 'Ekibimize Katılın'}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        {locale === 'en' ? 'Careers' : 'Kariyer'}
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {locale === 'en' 
                            ? 'Be a part of our team shaping the global maritime industry. Take your career to the top in our innovative and growth-oriented work environment.'
                            : 'Küresel denizcilik sektörüne yön veren ekibimizin bir parçası olun. Yenilikçi ve büyüme odaklı çalışma ortamımızda kariyerinizi zirveye taşıyın.'}
                    </p>
                </div>

                {/* Neden Temar? */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {(locale === 'en' ? [
                        { icon: GraduationCap, title: 'Continuous Development', desc: 'We support your personal development with sectoral training and global networking.' },
                        { icon: Users, title: 'Egalitarian Culture', desc: 'A dynamic and participatory work environment where ideas are freely shared.' },
                        { icon: HeartHandshake, title: 'Fringe Benefits', desc: 'Competitive salary, private health insurance, and performance-based bonus system.' }
                    ] : [
                        { icon: GraduationCap, title: 'Sürekli Gelişim', desc: 'Sektörel eğitimler ve global network ile kişisel gelişiminizi destekliyoruz.' },
                        { icon: Users, title: 'Eşitlikçi Kültür', desc: 'Fikirlerin özgürce paylaşıldığı, dinamik ve katılımcı bir çalışma ortamı.' },
                        { icon: HeartHandshake, title: 'Yan Haklar', desc: 'Rekabetçi maaş, özel sağlık sigortası ve performansa dayalı prim sistemi.' },
                    ]).map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Açık Pozisyonlar */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-black text-slate-900 mb-6">
                            {locale === 'en' ? 'Open Positions' : 'Açık Pozisyonlar'}
                        </h2>
                        <div className="space-y-4">
                            {positions.map(pos => (
                                <div key={pos.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group hover:border-blue-500 transition-colors">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{pos.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> {pos.location}</span>
                                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {locale === 'en' && pos.type === 'Tam Zamanlı' ? 'Full Time' : pos.type}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-sm text-blue-800 leading-relaxed">
                                {locale === 'en' 
                                    ? 'If you cannot find a suitable position, you can make a general application. Your application will be evaluated in our resume pool.'
                                    : 'Size uygun bir pozisyon bulamadıysanız genel başvuru yapabilirsiniz. Başvurunuz özgeçmiş havuzumuzda değerlendirilecektir.'}
                            </div>
                        </div>
                    </div>

                    {/* Başvuru Formu */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_20px_60px_rgba(37,99,235,0.05)]">
                            <h2 className="text-3xl font-black text-slate-900 mb-2">{locale === 'en' ? 'Application Form' : 'Başvuru Formu'}</h2>
                            <p className="text-slate-500 mb-8">{locale === 'en' ? 'Please fill in your information completely.' : 'Lütfen bilgilerinizi eksiksiz doldurunuz.'}</p>

                            {status === 'success' ? (
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center h-64 flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Başvurunuz Alındı</h3>
                                    <p className="text-emerald-600">İnsan Kaynakları departmanımız yetkinliklerinizi değerlendirip size dönüş yapacaktır.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Full Name *' : 'Ad Soyad *'}</label>
                                            <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Email Address *' : 'E-posta Adresi *'}</label>
                                            <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Phone Number *' : 'Telefon Numarası *'}</label>
                                            <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Position Applied For *' : 'Başvurduğunuz Pozisyon *'}</label>
                                            <select required name="position" value={formData.position} onChange={handleChange} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer text-slate-700">
                                                <option value="" disabled>{locale === 'en' ? 'Please select' : 'Lütfen seçiniz'}</option>
                                                {positions.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                                                <option value="Genel Başvuru">{locale === 'en' ? 'General Application' : 'Genel Başvuru'}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Experience *' : 'Deneyiminiz *'}</label>
                                        <select required name="experience" value={formData.experience} onChange={handleChange} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer text-slate-700">
                                            <option value="" disabled>{locale === 'en' ? 'Please select' : 'Lütfen seçiniz'}</option>
                                            <option value="Deneyimsiz">{locale === 'en' ? 'Inexperienced / New Graduate' : 'Deneyimsiz / Yeni Mezun'}</option>
                                            <option value="1-3 Yıl">{locale === 'en' ? '1-3 Years' : '1-3 Yıl'}</option>
                                            <option value="3-5 Yıl">{locale === 'en' ? '3-5 Years' : '3-5 Yıl'}</option>
                                            <option value="5+ Yıl">{locale === 'en' ? '5+ Years' : '5+ Yıl'}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Cover Letter' : 'Ön Yazı (Bize kendinizden bahsedin)'}</label>
                                        <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                                    </div>
                                    {status === 'error' && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100">
                                            {locale === 'en' ? 'An error occurred while submitting. Please try again.' : 'Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'}
                                        </div>
                                    )}
                                    <button disabled={status === 'loading'} type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-1">
                                        {status === 'loading' ? (locale === 'en' ? 'Sending...' : 'Gönderiliyor...') : <>{locale === 'en' ? 'Complete Application' : 'Başvuruyu Tamamla'} <Send className="w-5 h-5" /></>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
