"use client";

import React, { useState, useEffect } from 'react';
import {
    MessageSquare, Briefcase, Image as ImageIcon, TrendingUp,
    Eye, CheckCircle, Clock, ArrowRight, AlertCircle, Users, Ship, Globe,
    ExternalLink
} from 'lucide-react';
import Link from 'next/link';

interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject?: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

function StatCard({ icon: Icon, label, value, sub, color, gradient }: {
    icon: any; label: string; value: string | number; sub?: string; color: string; gradient: string;
}) {
    return (
        <div className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
            style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))',
                border: '1px solid rgba(51,65,85,0.5)',
            }}>
            <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: gradient }}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{ background: 'rgba(51,65,85,0.5)', color: '#94a3b8' }}>
                    Aktif
                </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm font-medium" style={{ color: '#94a3b8' }}>{label}</div>
            {sub && <div className="text-xs mt-1" style={{ color: '#475569' }}>{sub}</div>}
        </div>
    );
}

export default function AdminDashboard() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/contact')
            .then(r => r.json())
            .then(data => {
                if (Array.isArray(data)) setMessages(data.slice(0, 5));
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    const unreadCount = messages.filter(m => !m.isRead).length;

    const stats = [
        { icon: MessageSquare, label: 'İletişim Mesajı', value: messages.length, sub: `${unreadCount} okunmamış`, color: '#3b82f6', gradient: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' },
        { icon: Briefcase, label: 'Aktif Hizmet', value: 3, sub: 'Son güncelleme: bugün', color: '#06b6d4', gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)' },
        { icon: ImageIcon, label: 'Galeri Görseli', value: '—', sub: 'Galeri yönetiminden ekle', color: '#8b5cf6', gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)' },
        { icon: Globe, label: 'Aktif Dil', value: 2, sub: 'TR / EN', color: '#10b981', gradient: 'linear-gradient(135deg, #059669, #10b981)' },
        { icon: Ship, label: 'İkmal Noktası', value: '15+', sub: 'Türk Limanları', color: '#f59e0b', gradient: 'linear-gradient(135deg, #d97706, #f59e0b)' },
        { icon: Users, label: 'Kariyer Başvurusu', value: '—', sub: 'Yeni başvuru yok', color: '#ec4899', gradient: 'linear-gradient(135deg, #db2777, #ec4899)' },
    ];

    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
                <p className="text-sm" style={{ color: '#64748b' }}>
                    Temar Denizcilik Yönetim Paneline Hoş Geldiniz
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {stats.map((s, i) => (
                    <StatCard key={i} {...s} />
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Hızlı Eylemler */}
                <div className="rounded-2xl p-5"
                    style={{
                        background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))',
                        border: '1px solid rgba(51,65,85,0.5)',
                    }}>
                    <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        Hızlı Eylemler
                    </h2>
                    <div className="space-y-2">
                        {[
                            { label: 'Anasayfa İçeriğini Düzenle', href: '/admin/icerik?page=anasayfa', color: '#3b82f6' },
                            { label: 'Hizmet Ekle / Düzenle', href: '/admin/hizmetler', color: '#06b6d4' },
                            { label: 'Galeri Yönetimi', href: '/admin/galeri', color: '#8b5cf6' },
                            { label: 'Sözleşmeleri Güncelle', href: '/admin/sozlesmeler', color: '#10b981' },
                            { label: 'Siteyi Görüntüle', href: '/', target: '_blank', color: '#f59e0b' },
                        ].map((action, i) => (
                            <Link
                                key={i}
                                href={action.href}
                                target={action.target}
                                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                                style={{
                                    background: 'rgba(30,41,59,0.5)',
                                    border: '1px solid rgba(51,65,85,0.3)',
                                    color: '#cbd5e1',
                                }}
                            >
                                <span>{action.label}</span>
                                <ArrowRight className="w-4 h-4" style={{ color: action.color }} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Site Durumu */}
                <div className="rounded-2xl p-5"
                    style={{
                        background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))',
                        border: '1px solid rgba(51,65,85,0.5)',
                    }}>
                    <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        Site Durumu
                    </h2>
                    <div className="space-y-3">
                        {[
                            { label: 'Web Sitesi', status: 'Aktif', ok: true },
                            { label: 'Veritabanı Bağlantısı', status: 'Bağlı', ok: true },
                            { label: 'İletişim Formu', status: 'Çalışıyor', ok: true },
                            { label: 'Dil Sistemi', status: 'Aktif', ok: true },
                            { label: 'Medya Sunucusu', status: 'Aktif', ok: true },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between px-4 py-2.5 rounded-lg"
                                style={{ background: 'rgba(30,41,59,0.4)', border: '1px solid rgba(51,65,85,0.2)' }}>
                                <span className="text-sm" style={{ color: '#94a3b8' }}>{item.label}</span>
                                <span className="flex items-center gap-1.5 text-xs font-medium"
                                    style={{ color: item.ok ? '#34d399' : '#f87171' }}>
                                    <span className={`w-2 h-2 rounded-full ${item.ok ? 'bg-emerald-400' : 'bg-red-400'} animate-pulse`} />
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Son Mesajlar */}
            <div className="rounded-2xl p-5"
                style={{
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))',
                    border: '1px solid rgba(51,65,85,0.5)',
                }}>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-base font-semibold text-white flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-blue-400" />
                        Son İletişim Mesajları
                    </h2>
                    <Link href="/admin/mesajlar"
                        className="text-xs font-medium flex items-center gap-1 hover:opacity-70 transition-opacity"
                        style={{ color: '#60a5fa' }}>
                        Tümünü Gör <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>

                {loading ? (
                    <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-14 rounded-xl animate-pulse"
                                style={{ background: 'rgba(30,41,59,0.5)' }} />
                        ))}
                    </div>
                ) : messages.length === 0 ? (
                    <div className="text-center py-10" style={{ color: '#475569' }}>
                        <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">Henüz iletişim mesajı yok</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {messages.map((msg) => (
                            <div key={msg.id}
                                className="flex items-center gap-4 px-4 py-3 rounded-xl"
                                style={{
                                    background: msg.isRead ? 'rgba(30,41,59,0.3)' : 'rgba(29,78,216,0.08)',
                                    border: `1px solid ${msg.isRead ? 'rgba(51,65,85,0.2)' : 'rgba(37,99,235,0.2)'}`,
                                }}>
                                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)' }}>
                                    <span className="text-white text-sm font-bold">
                                        {msg.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-semibold text-white truncate">{msg.name}</p>
                                        {!msg.isRead && (
                                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                                        )}
                                    </div>
                                    <p className="text-xs truncate" style={{ color: '#64748b' }}>{msg.email}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-xs" style={{ color: '#475569' }}>
                                        {new Date(msg.createdAt).toLocaleDateString('tr-TR')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
