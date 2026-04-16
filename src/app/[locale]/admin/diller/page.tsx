"use client";

import { useState, useEffect } from "react";
import { Save } from "lucide-react";

export default function LanguageAdmin() {
    const [languages, setLanguages] = useState([
        { code: "tr", name: "Türkçe", isActive: true, isDefault: true },
        { code: "en", name: "English", isActive: true, isDefault: false },
        { code: "es", name: "Español", isActive: false, isDefault: false },
    ]);

    useEffect(() => {
        const saved = localStorage.getItem('site_languages');
        if (saved) {
            setLanguages(JSON.parse(saved));
        }
    }, []);

    const toggleLanguage = (code: string) => {
        setLanguages(langs =>
            langs.map(lang =>
                lang.code === code ? { ...lang, isActive: !lang.isActive } : lang
            )
        );
    };

    const handleSave = () => {
        localStorage.setItem('site_languages', JSON.stringify(languages));
        alert('Dil ayarları başarıyla kaydedildi!');
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-slate-800">Dil Yönetim Paneli</h1>
                <button 
                  onClick={handleSave}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                    <Save className="w-5 h-5 mr-2" />
                    Değişiklikleri Kaydet
                </button>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-700">
                <p className="text-slate-600 dark:text-zinc-400 mb-8">
                    Sistemde görüntülenmesini istemediğiniz dilleri buradan kapatabilirsiniz. Kapatılan diller site menülerinden anında gizlenecektir.
                </p>

                <div className="space-y-6">
                    {languages.map(lang => (
                        <div key={lang.code} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-lg">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center">
                                    {lang.name} ({lang.code.toUpperCase()})
                                    {lang.isDefault && (
                                        <span className="ml-3 text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                                            Varsayılan Dil
                                        </span>
                                    )}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-zinc-500 mt-1">
                                    {lang.isActive ? "Şu anda sitede ziyaretçilere gösteriliyor." : "Bu dil şu anda sitede kapalı durumda."}
                                </p>
                            </div>

                            {/* Toggle Switch */}
                            <button
                                onClick={() => toggleLanguage(lang.code)}
                                disabled={lang.isDefault}
                                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${lang.isActive ? 'bg-blue-600' : 'bg-slate-300 dark:bg-zinc-600'} ${lang.isDefault ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <span
                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${lang.isActive ? 'translate-x-7' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
