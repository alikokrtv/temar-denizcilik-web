"use client";

import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function KVKKPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                        <ShieldAlert className="w-4 h-4" /> Yasal Bilgilendirme
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Kişisel Verilerin Korunması</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500">Aydınlatma Metni - Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-slate-600 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-blue-600" />
                            1. Veri Sorumlusunun Kimliği
                        </h2>
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, <strong>Temar Denizcilik A.Ş.</strong> ("Şirket") olarak, veri sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde kaydedecek, saklayacak, güncelleyecek, mevzuatın izin verdiği durumlarda 3. kişilere açıklayabilecek/devredebilecek ve KVKK’da sayılan şekillerde işleyebileceğiz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-blue-600" />
                            2. Kişisel Verilerin İşlenme Amacı
                        </h2>
                        <p className="mb-4">Toplanan kişisel verileriniz, şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması amacıyla işlenmektedir. Temel amaçlarımız şunlardır:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
                            <li>İletişim, başvuru ve teklif formlarının değerlendirilmesi,</li>
                            <li>Tarafınıza denizcilik tedarik operasyonlarıyla (ikmal, boya, madeni yağ) ilgili hizmet sağlanması,</li>
                            <li>Müşteri ilişkileri yönetimi ve hukuki süreçlerin yürütülmesi,</li>
                            <li>Kariyer sayfamız üzerinden yapılan iş başvurularının değerlendirilmesi.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-blue-600" />
                            3. İşlenen Kişisel Verilerinizin Aktarımı
                        </h2>
                        <p>
                            Toplanan kişisel verileriniz; iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumları ve özel kişilere KVKK’nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-blue-600" />
                            4. Kişisel Veri Sahibinin Hakları
                        </h2>
                        <p className="mb-4">KVKK’nın 11. maddesi uyarınca veri sahipleri aşağıdaki haklara sahiptir:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
                            <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                            <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                            <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                            <li>Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve silinmesini talep etme.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
