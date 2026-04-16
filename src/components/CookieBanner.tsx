"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, ChevronDown, ChevronUp, Shield } from 'lucide-react';

interface CookieSettings {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export default function CookieBanner() {
    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [exiting, setExiting] = useState(false);
    const [settings, setSettings] = useState<CookieSettings>({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('temar_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setShow(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const dismiss = (accepted: boolean, customSettings?: CookieSettings) => {
        setExiting(true);
        setTimeout(() => {
            setShow(false);
            localStorage.setItem('temar_cookie_consent', JSON.stringify({
                accepted,
                settings: customSettings || settings,
                timestamp: new Date().toISOString(),
            }));
        }, 400);
    };

    if (!show) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-[200] p-4 ${exiting ? 'cookie-exit' : 'cookie-enter'}`}
        >
            <div className="max-w-4xl mx-auto">
                <div className="rounded-2xl shadow-[0_-8px_60px_rgba(0,0,0,0.15)]"
                    style={{
                        background: 'rgba(255,255,255,0.97)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(226, 232, 240, 0.8)',
                    }}>
                    <div className="p-5 sm:p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)' }}>
                                    <Cookie className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">Çerez Tercihleriniz</h3>
                                    <p className="text-xs text-slate-500">KVKK kapsamında bilgilendirme</p>
                                </div>
                            </div>
                            <button onClick={() => dismiss(false)}
                                className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors flex-shrink-0">
                                <X className="w-4 h-4 text-slate-400" />
                            </button>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            Web sitemizi daha iyi bir deneyim sunmak için çerezler kullanıyoruz. 
                            Tercihlerinizi yönetebilir veya tümünü kabul edebilirsiniz. 
                            Daha fazla bilgi için{' '}
                            <Link href="/cerez-politikasi" className="text-blue-600 hover:underline font-medium">
                                Çerez Politikamızı
                            </Link>{' '}
                            inceleyebilirsiniz.
                        </p>

                        {/* Toggle Details */}
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 mb-4 transition-colors"
                        >
                            {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            {showDetails ? 'Seçenekleri Gizle' : 'Çerez Ayarlarını Yönet'}
                        </button>

                        {showDetails && (
                            <div className="space-y-3 mb-5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                {[
                                    {
                                        key: 'necessary' as const,
                                        label: 'Zorunlu Çerezler',
                                        desc: 'Site işlevselliği için gereklidir, devre dışı bırakılamaz.',
                                        locked: true,
                                    },
                                    {
                                        key: 'analytics' as const,
                                        label: 'Analitik Çerezler',
                                        desc: 'Ziyaretçi sayısı ve sayfa etkinliğini anlamamıza yardımcı olur.',
                                        locked: false,
                                    },
                                    {
                                        key: 'marketing' as const,
                                        label: 'Pazarlama Çerezleri',
                                        desc: 'İlgi alanlarınıza uygun içerik ve reklamlar göstermek için kullanılır.',
                                        locked: false,
                                    },
                                ].map((item) => (
                                    <div key={item.key} className="flex items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                                            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                        </div>
                                        <div className="flex-shrink-0 pt-0.5">
                                            {item.locked ? (
                                                <div className="flex items-center gap-1 text-xs text-slate-400">
                                                    <Shield className="w-3.5 h-3.5" />
                                                    <span>Zorunlu</span>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setSettings(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                                    className={`w-11 h-6 rounded-full transition-all duration-300 relative ${settings[item.key] ? 'bg-blue-600' : 'bg-slate-300'}`}
                                                >
                                                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${settings[item.key] ? 'left-6' : 'left-1'}`} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2">
                            {showDetails && (
                                <button
                                    onClick={() => dismiss(true, settings)}
                                    className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                                >
                                    Seçimlerimi Kaydet
                                </button>
                            )}
                            <button
                                onClick={() => dismiss(false)}
                                className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                            >
                                Reddet
                            </button>
                            <button
                                onClick={() => dismiss(true, { necessary: true, analytics: true, marketing: true })}
                                className="flex-1 py-2.5 px-4 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                                style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
                            >
                                Tümünü Kabul Et
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
