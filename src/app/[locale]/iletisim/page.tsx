"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Ship } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function ContactPage() {
    const locale = useLocale();
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '', subject: '', message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
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
                        <Ship className="w-4 h-4" /> {locale === 'en' ? 'Get In Touch' : 'Bize Ulaşın'}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        {locale === 'en' ? 'Contact' : 'İletişim'}
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {locale === 'en'
                            ? 'Contact us directly through our international network for your requests, quotes, or operational needs.'
                            : 'Talepleriniz, teklif almak veya operasyonel ihtiyaçlarınız için uluslararası ağımız üzerinden doğrudan bize ulaşın.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
                    {/* Bilgi Kartı */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_20px_60px_rgba(37,99,235,0.05)] h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[80px]" />
                            
                            <h2 className="text-3xl font-black text-slate-900 mb-8 relative z-10">
                                {locale === 'en' ? 'Head Office' : 'Merkez Ofis'}
                            </h2>
                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                                            {locale === 'en' ? 'Address' : 'Adres'}
                                        </h3>
                                        <p className="text-slate-700 font-medium leading-relaxed">
                                            İçmeler Mah. Aydınlıyolu Cad.<br />Altaş Plaza No:34/4<br />Tuzla - İSTANBUL
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                                            {locale === 'en' ? 'Phone' : 'Telefon'}
                                        </h3>
                                        <a href="tel:+902165820052" className="block text-slate-700 font-medium hover:text-blue-600 transition-colors mb-1">+90 216 582 00 52</a>
                                        <a href="https://wa.me/905367779651" className="block text-green-600 font-medium hover:text-green-700 transition-colors">+90 536 777 96 51 (WhatsApp)</a>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                                            {locale === 'en' ? 'Email' : 'E-posta'}
                                        </h3>
                                        <a href="mailto:info@temar.com" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">info@temar.com</a>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                                            {locale === 'en' ? 'Operation Hours' : 'Operasyon Saatleri'}
                                        </h3>
                                        <p className="text-emerald-600 font-bold">
                                            {locale === 'en' ? '7/24 Continuous Service' : '7/24 Kesintisiz Hizmet'}
                                        </p>
                                        <p className="text-slate-500 text-sm mt-1">
                                            {locale === 'en' ? 'Office: Weekdays 09:00 - 18:00' : 'Ofis: Hafta içi 09:00 - 18:00'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Kartı */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_20px_60px_rgba(37,99,235,0.05)] h-full">
                            <h2 className="text-3xl font-black text-slate-900 mb-2">
                                {locale === 'en' ? 'Write to Us' : 'Bize Yazın'}
                            </h2>
                            <p className="text-slate-500 mb-8">
                                {locale === 'en'
                                    ? 'You can send us the form completely. We will respond as soon as possible.'
                                    : 'Formu eksiksiz doldurarak tarafımıza iletebilirsiniz. En kısa sürede dönüş sağlanacaktır.'}
                            </p>
                            
                            {status === 'success' ? (
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center h-64 flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                                        {locale === 'en' ? 'Message Received' : 'Mesajınız Alındı'}
                                    </h3>
                                    <p className="text-emerald-600">
                                        {locale === 'en' ? 'Thank you for contacting us. Our relevant department will get in touch with you shortly.' : 'İlginiz için teşekkür ederiz. İlgili departmanımız en kısa sürede sizinle iletişime geçecektir.'}
                                    </p>
                                    <button onClick={() => setStatus('idle')} className="mt-6 text-emerald-700 font-semibold underline hover:text-emerald-800">
                                        {locale === 'en' ? 'Send another message' : 'Yeni mesaj gönder'}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Full Name *' : 'Ad Soyad *'}</label>
                                            <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none" placeholder={locale === 'en' ? "John Doe" : "Adınız Soyadınız"} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Email Address *' : 'E-posta Adresi *'}</label>
                                            <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none" placeholder="ornek@sirket.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Phone Number' : 'Telefon Numarası'}</label>
                                            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none" placeholder="+90 5XX XXX XX XX" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Company Name' : 'Firma Adı'}</label>
                                            <input name="company" value={formData.company} onChange={handleChange} type="text" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none" placeholder={locale === 'en' ? "Company LTD" : "Firma Ünvanı"} />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Subject *' : 'İlgili Konu *'}</label>
                                        <select required name="subject" value={formData.subject} onChange={handleChange} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none text-slate-700 appearance-none">
                                            <option value="" disabled>{locale === 'en' ? 'Please select' : 'Lütfen seçiniz'}</option>
                                            <option value="Denizcilik İkmal (Yakıt)">{locale === 'en' ? 'Bunker Supply' : 'Denizcilik İkmal (Yakıt)'}</option>
                                            <option value="Madeni Yağ">{locale === 'en' ? 'Lubricants' : 'Madeni Yağ Çözümleri'}</option>
                                            <option value="Denizcilik Boyası">{locale === 'en' ? 'Marine Paints' : 'Denizcilik Boyaları'}</option>
                                            <option value="Liman Hizmetleri">{locale === 'en' ? 'Port Services' : 'Liman Hizmetleri'}</option>
                                            <option value="Diğer">{locale === 'en' ? 'Other' : 'Diğer'}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">{locale === 'en' ? 'Your Message *' : 'Mesajınız *'}</label>
                                        <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none resize-y" placeholder={locale === 'en' ? "How can we help you?" : "Size nasıl yardımcı olabiliriz?"}></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100">
                                            {locale === 'en' ? 'An error occurred while sending your message. Please try again.' : 'Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.'}
                                        </div>
                                    )}

                                    <button disabled={status === 'loading'} type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed">
                                        {status === 'loading' ? (locale === 'en' ? 'Sending...' : 'Gönderiliyor...') : (
                                            <>{locale === 'en' ? 'Send Message' : 'Mesajı Gönder'} <Send className="w-5 h-5 ml-2" /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Harita */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 h-[500px]">
                    <iframe 
                        src="https://maps.google.com/maps?q=%C4%B0%C3%A7meler%20Mahallesi%20Ayd%C4%B1nl%C4%B1yolu%20Caddesi%20Alta%C5%9F%20Plaza%20No%3A34%2F4%20Tuzla%20%C4%B0STANBUL&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" title="Temar Merkez Ofis"
                    />
                </div>
            </div>
        </main>
    );
}
