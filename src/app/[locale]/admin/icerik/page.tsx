"use client";

import React, { useState, useEffect } from 'react';
import { Save, FileText, Globe, Wand2, Loader2 } from 'lucide-react';

export default function ContentSettings() {
    const [pages, setPages] = useState<any[]>([]);
    const [selectedSlug, setSelectedSlug] = useState('anasayfa');
    const [content, setContent] = useState<any>({ tr: { title: '', content: '' }, en: { title: '', content: '' } });
    const [saving, setSaving] = useState(false);
    const [translating, setTranslating] = useState(false);

    useEffect(() => {
        // Mock veri çekme - Gerçekte api/icerik endpointine atılacak
        fetch(`/api/icerik?slug=${selectedSlug}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.title) {
                    setContent({
                        tr: { title: data.title.tr || '', content: data.content.tr || '' },
                        en: { title: data.title.en || '', content: data.content.en || '' }
                    });
                } else {
                    setContent({ tr: { title: '', content: '' }, en: { title: '', content: '' } });
                }
            });
    }, [selectedSlug]);

    const handleSave = async () => {
        setSaving(true);
        await fetch('/api/icerik', {
            method: 'POST',
            body: JSON.stringify({
                slug: selectedSlug,
                title: { tr: content.tr.title, en: content.en.title },
                content: { tr: content.tr.content, en: content.en.content }
            })
        });
        alert('İçerik başarıyla güncellendi!');
        setSaving(false);
    };

    const handleAutoTranslate = async (field: 'title' | 'content') => {
        const textToTranslate = content.tr[field];
        if (!textToTranslate) return;
        
        setTranslating(true);
        try {
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=tr|en`);
            const data = await res.json();
            if (data && data.responseData && data.responseData.translatedText) {
                setContent((prev: any) => ({
                    ...prev,
                    en: {
                        ...prev.en,
                        [field]: data.responseData.translatedText
                    }
                }));
            }
        } catch (e) {
            alert('Çeviri yapılırken hata oluştu.');
        }
        setTranslating(false);
    };

    return (
        <div className="max-w-5xl">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white">İçerik ve Metin Yönetimi</h1>
                    <p className="text-slate-400 text-sm mt-1">Sitedeki başlıkları ve paragrafları diller özelinde değiştirebilirsiniz.</p>
                </div>
                <button 
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all disabled:opacity-50"
                >
                    <Save className="w-5 h-5" />
                    {saving ? "Kaydediliyor..." : "İçeriği Kaydet"}
                </button>
            </div>

            <div className="flex gap-6 mb-8">
                {['anasayfa', 'hakkimizda', 'iletisim'].map(slug => (
                    <button 
                        key={slug}
                        onClick={() => setSelectedSlug(slug)}
                        className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${selectedSlug === slug ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                    >
                        {slug.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Türkçe İçerik */}
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400"><Globe className="w-4 h-4"/></div>
                        <h2 className="text-lg font-bold text-white">Türkçe (TR)</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Başlık (Title)</label>
                            <input 
                                type="text"
                                value={content.tr.title}
                                onChange={(e) => setContent({...content, tr: {...content.tr, title: e.target.value}})}
                                className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
                                placeholder="Örn: Okyanuslarda Güven"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Ana Metin / Paragraf</label>
                            <textarea 
                                value={content.tr.content}
                                onChange={(e) => setContent({...content, tr: {...content.tr, content: e.target.value}})}
                                className="w-full h-40 bg-[#1e293b] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
                            />
                        </div>
                    </div>
                </div>

                {/* İngilizce İçerik */}
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400"><Globe className="w-4 h-4"/></div>
                            <h2 className="text-lg font-bold text-white">İngilizce (EN)</h2>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm text-slate-400">Başlık (Title)</label>
                                <button 
                                    onClick={() => handleAutoTranslate('title')}
                                    disabled={translating}
                                    className="text-xs flex items-center gap-1 text-emerald-400 hover:text-emerald-300 disabled:opacity-50"
                                >
                                    {translating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />} Oto Çevir
                                </button>
                            </div>
                            <input 
                                type="text"
                                value={content.en.title}
                                onChange={(e) => setContent({...content, en: {...content.en, title: e.target.value}})}
                                className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" 
                                placeholder="e.g. Trust on Oceans"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm text-slate-400">Ana Metin / Paragraf</label>
                                <button 
                                    onClick={() => handleAutoTranslate('content')}
                                    disabled={translating}
                                    className="text-xs flex items-center gap-1 text-emerald-400 hover:text-emerald-300 disabled:opacity-50"
                                >
                                    {translating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />} Oto Çevir
                                </button>
                            </div>
                            <textarea 
                                value={content.en.content}
                                onChange={(e) => setContent({...content, en: {...content.en, content: e.target.value}})}
                                className="w-full h-40 bg-[#1e293b] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
