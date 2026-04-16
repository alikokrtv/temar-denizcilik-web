"use client";

import React from 'react';
import { FileText, Cookie, ShieldCheck } from 'lucide-react';

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        <Cookie className="w-4 h-4" /> Yasal Bilgilendirme
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Çerez Politikası</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-slate-600 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-blue-600" />
                            1. Çerez (Cookie) Nedir?
                        </h2>
                        <p>
                            Çerezler, web sitemizi ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. 
                            Temar Denizcilik olarak, web sitemizin düzgün çalışmasını sağlamak, kullanıcı deneyiminizi geliştirmek, site trafiğimizi 
                            analiz etmek ve size uygun içerikler sunmak amacıyla çerezler kullanmaktayız.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                            2. Kullanılan Çerez Türleri
                        </h2>
                        <div className="space-y-6 mt-4">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">A. Zorunlu Çerezler (Strictly Necessary Cookies)</h3>
                                <p className="text-sm">
                                    Web sitemizin temel fonksiyonlarının çalışması için kesinlikle gerekli olan çerezlerdir. Bu çerezler engellendiğinde 
                                    sitenin bazı bölümleri çalışmayabilir. Kişisel veri toplamazlar ve güvenlik, ağ yönetimi gibi işlemler için kullanılırlar.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">B. Analitik Çerezler (Performance/Analytics Cookies)</h3>
                                <p className="text-sm">
                                    Ziyaretçilerin web sitemizi nasıl kullandığını anlamamıza yardımcı olur. Hangi sayfaların en çok ziyaret edildiği, 
                                    kullanıcıların sitede ne kadar süre geçirdiği gibi bilgileri anonim olarak toplayarak sitemizi iyileştirmemizi sağlar (Örn: Google Analytics).
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">C. Pazarlama Çerezleri (Marketing Cookies)</h3>
                                <p className="text-sm">
                                    İlgi alanlarınıza uygun reklamlar göstermek ve kampanya performanslarını ölçmek için kullanılır. Bu çerezler 
                                    üçüncü parti reklam ağları tarafından cihazınıza yerleştirilebilir.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            3. Çerezleri Nasıl Yönetebilirsiniz?
                        </h2>
                        <p className="mb-4">
                            Sitemize ilk girişinizde karşınıza çıkan <strong>"Çerez Tercihleriniz"</strong> arayüzü (banner) üzerinden, zorunlu çerezler 
                            haricindeki çerezlere onay verebilir ya da reddedebilirsiniz. Ayrıca tarayıcı ayarlarınızdan çerezleri tamamen silebilirsiniz:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google Chrome Çerez Ayarları</a></li>
                            <li><a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox Çerez Ayarları</a></li>
                            <li><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Apple Safari Çerez Ayarları</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            4. İletişim Bilgileri
                        </h2>
                        <p>
                            Çerez politikamız ve kişisel verilerinizle ilgili her türlü soru, talep ve görüşünüz için bize aşağıdaki bilgilerden ulaşabilirsiniz:
                            <br /><br />
                            <strong>E-posta:</strong> info@temar.com<br />
                            <strong>Adres:</strong> İçmeler Mah. Aydınlıyolu Cad. Altaş Plaza No:34/4 Tuzla - İSTANBUL
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
