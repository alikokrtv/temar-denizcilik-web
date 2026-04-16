"use client";

import React from 'react';
import { Lock, EyeOff, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        <Lock className="w-4 h-4" /> Gizlilik
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Gizlilik Politikası</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-slate-600 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <EyeOff className="w-6 h-6 text-blue-600" />
                            1. Gizliliğiniz Bizim İçin Önemlidir
                        </h2>
                        <p>
                            Temar Denizcilik A.Ş. olarak web sitemizi (temar.com) ziyaret ettiğinizde gizliliğinize ve kişisel verilerinizin korunmasına büyük önem veriyoruz. Bu politika, sizin hakkınızda edindiğimiz bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                            2. Bilgi Toplama ve Kullanım
                        </h2>
                        <p className="mb-4">
                            Hizmetlerimizi geliştirme ve size daha iyi bir deneyim sağlama amacıyla, bize doğrudan ilettiğiniz iletişim formu verilerini ve kullanımınıza dair analitik verileri kayıt altına alabiliriz:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
                            <li><strong>Kişisel Bilgiler:</strong> İletişim veya kariyer formlarını kullanırken paylaştığınız ad, telefon, e-posta gibi bilgiler.</li>
                            <li><strong>Log Verileri:</strong> Tarayıcı tipi, IP adresi, sayfa ziyaret süreleri gibi site performansını ölçmeye yarayan teknik detaylar.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Lock className="w-6 h-6 text-blue-600" />
                            3. Bilgi Güvenliği
                        </h2>
                        <p>
                            Toplanan kişisel veriler, endüstri standartlarında alınan teknik ve idari tedbirlerle korunmaktadır. Yetkisiz erişim, kullanım, değiştirme veya ifşaya karşı sıkı güvenlik protokolleri uygulamaktayız. Şeffaflık ilkemiz gereği verileriniz rızanız olmaksızın pazarlama amacıyla üçüncü şahıslara satılmaz veya paylaşılmaz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            4. Üçüncü Taraf Bağlantıları
                        </h2>
                        <p>
                            Sitemiz ara sıra üçüncü taraf sitelere bağlantılar içerebilir. Bu sitelerin kendi bağımsız gizlilik politikaları vardır. Bu nedenle bağlantı verilen sitelerin içerik veya faaliyetlerinden şirketimiz sorumlu tutulamaz.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
