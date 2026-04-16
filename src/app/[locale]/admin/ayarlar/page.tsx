"use client";

import React, { useState, useEffect } from 'react';
import { Save, Phone, Mail, Instagram, Linkedin, MapPin } from 'lucide-react';

export default function GeneralSettings() {
    const [settings, setSettings] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetch('/api/settings')
            .then(res => res.json())
            .then(data => {
                const map:any = {};
                data.forEach((item:any) => {
                    map[item.key] = item.value;
                });
                setSettings(map);
                setLoading(false);
            });
    }, []);

    const handleChange = (key: string, value: string) => {
        setSettings({ ...settings, [key]: value });
    };

    const handleSave = async () => {
        setSaving(true);
        const payload = Object.keys(settings).map(key => ({
            key,
            value: settings[key],
            group: 'general'
        }));

        await fetch('/api/settings', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        
        alert("Ayarlar başarıyla kaydedildi!");
        setSaving(false);
    };

    if (loading) return <div className="text-white p-6">Yükleniyor...</div>;

    return (
        <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white">Site İletişim Ayarları</h1>
                    <p className="text-slate-400 text-sm mt-1">Sitenizde görünen telefon, whatsapp, adres gibi bilgileri buradan güncelleyebilirsiniz. Kod veya teknik bir işlem gerekmez.</p>
                </div>
                <button 
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all disabled:opacity-50"
                >
                    <Save className="w-5 h-5" />
                    {saving ? "Kaydediliyor..." : "Ayarları Kaydet"}
                </button>
            </div>

            <div className="space-y-6">
                {/* İletişim Bilgileri */}
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
                    <h2 className="text-lg font-bold text-white mb-4">Temel İletişim Bilgileri</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <Phone className="w-4 h-4 text-emerald-400" /> WhatsApp Numarası (Örn: +90555...)
                            </label>
                            <input 
                                type="text" 
                                value={settings.whatsapp || ''}
                                onChange={(e) => handleChange('whatsapp', e.target.value)}
                                className="w-full bg-[#1e293b] border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-blue-500 focus:border-blue-500" 
                                placeholder="+90 555 000 00 00"
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <Phone className="w-4 h-4 text-blue-400" /> Şirket Telefonu
                            </label>
                            <input 
                                type="text" 
                                value={settings.phone || ''}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                className="w-full bg-[#1e293b] border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-blue-500 focus:border-blue-500" 
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <Mail className="w-4 h-4 text-rose-400" /> E-Posta Adresi
                            </label>
                            <input 
                                type="text" 
                                value={settings.email || ''}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="w-full bg-[#1e293b] border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-blue-500 focus:border-blue-500" 
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <MapPin className="w-4 h-4 text-slate-400" /> Açık Adres
                            </label>
                            <textarea 
                                value={settings.address || ''}
                                onChange={(e) => handleChange('address', e.target.value)}
                                className="w-full bg-[#1e293b] border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-blue-500 focus:border-blue-500 h-24" 
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Sosyal Medya */}
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
                    <h2 className="text-lg font-bold text-white mb-4">Sosyal Medya Linkleri</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <Instagram className="w-4 h-4 text-pink-500" /> Instagram Linki
                            </label>
                            <input 
                                type="text" 
                                value={settings.instagram || ''}
                                onChange={(e) => handleChange('instagram', e.target.value)}
                                className="w-full bg-[#1e293b] border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-blue-500 focus:border-blue-500" 
                                placeholder="https://instagram.com/temardenizcilik"
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <Linkedin className="w-4 h-4 text-blue-500" /> LinkedIn Linki
                            </label>
                            <input 
                                type="text" 
                                value={settings.linkedin || ''}
                                onChange={(e) => handleChange('linkedin', e.target.value)}
                                className="w-full bg-[#1e293b] border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-blue-500 focus:border-blue-500" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-6 flex justify-end">
                <button 
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all disabled:opacity-50"
                >
                    <Save className="w-5 h-5" />
                    {saving ? "Kaydediliyor..." : "Ayarları Kaydet"}
                </button>
            </div>
        </div>
    );
}
