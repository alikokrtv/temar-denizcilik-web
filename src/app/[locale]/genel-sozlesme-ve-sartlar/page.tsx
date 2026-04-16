"use client";

import React from 'react';
import { FileSignature, AlertCircle } from 'lucide-react';

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        <FileSignature className="w-4 h-4" /> Yasal Bilgilendirme
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Genel Sözleşme Şartları</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-slate-600 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Taraflar ve Tanımlar</h2>
                        <p>
                            İşbu Genel Sözleşme Şartları (bundan böyle "Şartlar" olarak anılacaktır), Temar Denizcilik A.Ş. ("Tedarikçi") ile tedarik işlemlerinde bulunan alıcı veya gemi donatanı ("Alıcı") arasında yapılacak satış, ikmal ve lojistik anlaşmalarında bağlayıcıdır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Sipariş ve Kabul</h2>
                        <p>
                            Alıcı tarafından iletilen bunker (gemi yakıtı), madeni yağ veya boya tedariki siparişleri, Tedarikçi tarafından yazılı veya elektronik onayın gönderilmesi ile bağlayıcı hale gelir. Sipariş onayında belirtilen özellikler ve miktarlar satıcının taahhütleri esastır.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Teslimat</h2>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li>Teslimatlar geminin yanaştığı rıhtım/demirleme sahalarında barge veya kamyon vasıtasıyla fiziksel ikmal kurallarına göre gerçekleştirilir.</li>
                            <li>Kötü hava şartları, mücbir sebepler, idari liman kararları veya grev hallerinde oluşacak gecikmelerden Tedarikçi sorumlu değildir.</li>
                            <li>Tedarik edilen ürün miktarı, tedarikçi barge'sinde veya aracında okunacak ölçüm sistemleri ile mutabakata varılacaktır.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Kalite ve Temsil</h2>
                        <p>
                            Tedarikçi, ürünlerin spesifikasyonlara uygunluğundan sorumludur. Numune alma süreci, MARPOL kuralları veya genel uluslararası endüstri standartlarına (ör: ISO 8217) uygun olarak teslimat tankında yapılır. Tesis edilecek numunelerin bir kısmı gemiye, diğerleri de gerektiğinde analiz edilmek üzere satıcıda kilitli muhafaza edilir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Fiyatlandırma ve Ödeme</h2>
                        <p>
                            Onaylanmış formda veya fatura üzerinde aksine bir ödeme planı olmadığı sürece, fatura kesim tarihinden itibaren en geç belirlenen vadede veya anında nakden ödeme yapılacaktır. Zamanında ifa edilmeyen ödemeler için gecikme faizi hakkı saklıdır.
                        </p>
                    </section>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8 flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <p className="text-sm text-blue-800">
                            <strong>Hatırlatma:</strong> İşbu şartlar zeyilname ve ana sözleşmelerle desteklenecektir. Temar, internet sitesinde yayınlanan şartları dilediği zaman güncelleme hakkını saklı tutar.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
