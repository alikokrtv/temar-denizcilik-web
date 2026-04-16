"use client";

import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Phone, Building2, Eye, EyeOff, Search, Filter } from 'lucide-react';

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject?: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

export default function AdminMessages() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState<ContactMessage | null>(null);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    useEffect(() => {
        fetch('/api/contact')
            .then(r => r.json())
            .then(data => { if (Array.isArray(data)) setMessages(data); })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    const filtered = messages.filter(m => {
        const matchSearch = m.name.toLowerCase().includes(search.toLowerCase())
            || m.email.toLowerCase().includes(search.toLowerCase())
            || (m.subject || '').toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === 'all' ? true : !m.isRead;
        return matchSearch && matchFilter;
    });

    const unreadCount = messages.filter(m => !m.isRead).length;

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-1">İletişim Mesajları</h1>
                <p className="text-sm" style={{ color: '#64748b' }}>
                    {messages.length} toplam mesaj · {unreadCount} okunmamış
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#475569' }} />
                    <input
                        type="text"
                        placeholder="Ad, e-posta veya konu ara..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500"
                        style={{
                            background: 'rgba(15,23,42,0.8)',
                            border: '1px solid rgba(51,65,85,0.5)',
                        }}
                    />
                </div>
                <div className="flex gap-2">
                    {(['all', 'unread'] as const).map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                            style={{
                                background: filter === f ? 'linear-gradient(135deg, #1d4ed8, #3b82f6)' : 'rgba(15,23,42,0.8)',
                                color: filter === f ? 'white' : '#94a3b8',
                                border: filter === f ? 'none' : '1px solid rgba(51,65,85,0.5)',
                            }}
                        >
                            {f === 'all' ? 'Tümü' : `Okunmamış (${unreadCount})`}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Message List */}
                <div className="lg:col-span-2 space-y-2">
                    {loading ? (
                        Array(5).fill(0).map((_, i) => (
                            <div key={i} className="h-20 rounded-xl animate-pulse"
                                style={{ background: 'rgba(30,41,59,0.5)' }} />
                        ))
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-16 rounded-2xl" style={{
                            background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(51,65,85,0.3)'
                        }}>
                            <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-20 text-white" />
                            <p className="text-sm" style={{ color: '#475569' }}>Mesaj bulunamadı</p>
                        </div>
                    ) : (
                        filtered.map(msg => (
                            <button
                                key={msg.id}
                                onClick={() => setSelected(msg)}
                                className="w-full text-left px-4 py-4 rounded-xl transition-all"
                                style={{
                                    background: selected?.id === msg.id
                                        ? 'linear-gradient(135deg, rgba(29,78,216,0.2), rgba(6,182,212,0.1))'
                                        : msg.isRead ? 'rgba(15,23,42,0.6)' : 'rgba(29,78,216,0.08)',
                                    border: selected?.id === msg.id
                                        ? '1px solid rgba(37,99,235,0.4)'
                                        : msg.isRead ? '1px solid rgba(51,65,85,0.3)' : '1px solid rgba(37,99,235,0.2)',
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)' }}>
                                        <span className="text-white text-sm font-bold">
                                            {msg.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-semibold text-white truncate">{msg.name}</span>
                                            {!msg.isRead && <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />}
                                        </div>
                                        <p className="text-xs truncate mb-1" style={{ color: '#64748b' }}>{msg.email}</p>
                                        <p className="text-xs truncate" style={{ color: '#475569' }}>
                                            {msg.subject || msg.message.substring(0, 50) + '...'}
                                        </p>
                                    </div>
                                    <span className="text-xs flex-shrink-0" style={{ color: '#334155' }}>
                                        {new Date(msg.createdAt).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit' })}
                                    </span>
                                </div>
                            </button>
                        ))
                    )}
                </div>

                {/* Message Detail */}
                <div className="lg:col-span-3">
                    {selected ? (
                        <div className="rounded-2xl p-6 h-full"
                            style={{
                                background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))',
                                border: '1px solid rgba(51,65,85,0.5)',
                            }}>
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)' }}>
                                        <span className="text-white text-lg font-bold">
                                            {selected.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">{selected.name}</h2>
                                        <p className="text-sm" style={{ color: '#64748b' }}>
                                            {new Date(selected.createdAt).toLocaleString('tr-TR')}
                                        </p>
                                    </div>
                                </div>
                                <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${selected.isRead ? 'bg-slate-800 text-slate-400' : 'bg-blue-500/20 text-blue-400'}`}
                                    style={{ border: '1px solid rgba(51,65,85,0.4)' }}>
                                    {selected.isRead ? 'Okundu' : 'Okunmamış'}
                                </span>
                            </div>

                            <div className="space-y-3 mb-6">
                                {[
                                    { icon: Mail, label: 'E-posta', value: selected.email, href: `mailto:${selected.email}` },
                                    selected.phone ? { icon: Phone, label: 'Telefon', value: selected.phone, href: `tel:${selected.phone}` } : null,
                                    selected.company ? { icon: Building2, label: 'Şirket', value: selected.company, href: null } : null,
                                    selected.subject ? { icon: MessageSquare, label: 'Konu', value: selected.subject, href: null } : null,
                                ].filter(Boolean).map((item: any, i) => (
                                    <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                                        style={{ background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(51,65,85,0.2)' }}>
                                        <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: '#60a5fa' }} />
                                        <span className="text-xs font-medium w-16 flex-shrink-0" style={{ color: '#475569' }}>{item.label}:</span>
                                        {item.href ? (
                                            <a href={item.href} className="text-sm text-white hover:text-blue-400 transition-colors">{item.value}</a>
                                        ) : (
                                            <span className="text-sm text-white">{item.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-xl p-5" style={{
                                background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(51,65,85,0.2)'
                            }}>
                                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#475569' }}>Mesaj</p>
                                <p className="text-sm leading-relaxed text-white" style={{ whiteSpace: 'pre-wrap' }}>{selected.message}</p>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <a
                                    href={`mailto:${selected.email}`}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-80"
                                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
                                >
                                    <Mail className="w-4 h-4" />
                                    E-posta ile Yanıtla
                                </a>
                                {selected.phone && (
                                    <a
                                        href={`tel:${selected.phone}`}
                                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                                        style={{
                                            background: 'rgba(30,41,59,0.6)',
                                            border: '1px solid rgba(51,65,85,0.4)',
                                            color: '#cbd5e1'
                                        }}
                                    >
                                        <Phone className="w-4 h-4" />
                                        Ara
                                    </a>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-2xl flex flex-col items-center justify-center h-96"
                            style={{
                                background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))',
                                border: '1px solid rgba(51,65,85,0.5)',
                            }}>
                            <MessageSquare className="w-12 h-12 mb-4 opacity-20 text-white" />
                            <p className="text-sm" style={{ color: '#475569' }}>Mesaj detayını görmek için soldaki listeden seçin</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
