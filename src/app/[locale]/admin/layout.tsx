"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import {
    LayoutDashboard, FileText, Briefcase, Image as ImageIcon, Globe,
    Home, Info, Phone, MessageSquare, ChevronDown, ChevronRight,
    LogOut, Settings, User, Bell, Anchor, Menu, X, Briefcase as Career, Leaf
} from 'lucide-react';

const menuGroups = [
    {
        label: 'YÖNETİM',
        items: [
            { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { href: '/admin/mesajlar', icon: MessageSquare, label: 'Mesajlar', badge: true },
        ]
    },
    {
        label: 'İÇERİK YÖNETİMİ',
        items: [
            { href: '/admin/icerik?page=anasayfa', icon: Home, label: 'Anasayfa' },
            { href: '/admin/icerik?page=hakkimizda', icon: Info, label: 'Hakkımızda' },
            { href: '/admin/icerik?page=iletisim', icon: Phone, label: 'İletişim' },
            { href: '/admin/hizmetler', icon: Briefcase, label: 'Hizmetler' },
            { href: '/admin/galeri', icon: ImageIcon, label: 'Galeri' },
        ]
    },
    {
        label: 'SİSTEM',
        items: [
            { href: '/admin/diller', icon: Globe, label: 'Dil Yönetimi' },
            { href: '/admin/ayarlar', icon: Settings, label: 'Genel Ayarlar' },
            { href: '/admin/sozlesmeler', icon: FileText, label: 'Sözleşmeler' },
        ]
    },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen" style={{ background: '#080f1a', fontFamily: "'Inter', sans-serif" }}>
            <div className="flex min-h-screen">
                {/* Mobile Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* SIDEBAR */}
                <aside
                    className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    style={{
                        background: 'linear-gradient(180deg, #0d1526 0%, #0a1020 100%)',
                        borderRight: '1px solid rgba(51,65,85,0.4)',
                    }}
                >
                    {/* Logo */}
                    <div className="flex items-center justify-between px-5 py-5" style={{ borderBottom: '1px solid rgba(51,65,85,0.4)' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                                style={{ background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)' }}>
                                <Anchor className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm leading-none">Temar</p>
                                <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>Admin Panel</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="md:hidden text-slate-400 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto px-3 py-4">
                        {menuGroups.map((group) => (
                            <div key={group.label} className="mb-6">
                                <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: '#334155' }}>
                                    {group.label}
                                </p>
                                <div className="space-y-0.5">
                                    {group.items.map((item) => {
                                        const isActive = pathname === item.href || pathname?.startsWith(item.href.split('?')[0]);
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setSidebarOpen(false)}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                                                style={{
                                                    background: isActive
                                                        ? 'linear-gradient(135deg, rgba(29,78,216,0.2), rgba(6,182,212,0.1))'
                                                        : 'transparent',
                                                    color: isActive ? '#60a5fa' : '#94a3b8',
                                                    border: isActive ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                                                }}
                                            >
                                                <item.icon className="w-4 h-4 flex-shrink-0" />
                                                <span className="flex-1">{item.label}</span>
                                                {item.badge && (
                                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Bottom: Site Önizleme + Çıkış */}
                    <div className="px-3 pb-5 space-y-2" style={{ borderTop: '1px solid rgba(51,65,85,0.4)', paddingTop: '1rem' }}>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                            style={{ color: '#64748b', background: 'transparent', border: '1px solid rgba(51,65,85,0.3)' }}
                        >
                            <Globe className="w-4 h-4" />
                            <span>Siteyi Görüntüle</span>
                            <ChevronRight className="w-3 h-3 ml-auto" />
                        </a>
                        <a
                            href="/api/auth/signout"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                            style={{ color: '#ef4444', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Çıkış Yap</span>
                        </a>

                        {/* Proof Logo */}
                        <div className="flex items-center justify-center gap-2 pt-3 opacity-50 hover:opacity-80 transition-opacity">
                            <span className="text-xs" style={{ color: '#475569' }}>Tasarım</span>
                            <a href="https://www.proofmedia.com.tr" target="_blank" rel="noopener noreferrer">
                                <img src="/proof-logo.png" alt="Proof Media" className="h-5 w-auto object-contain" />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* TOP BAR */}
                    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4"
                        style={{
                            background: 'rgba(8, 15, 26, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid rgba(51,65,85,0.4)',
                        }}>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <div>
                                <h1 className="text-sm font-semibold text-white">Temar Denizcilik</h1>
                                <p className="text-xs" style={{ color: '#475569' }}>Yönetim Paneli</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Online indicator */}
                            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full"
                                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-xs font-medium text-emerald-400">Site Aktif</span>
                            </div>

                            {/* Admin Avatar */}
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl cursor-pointer transition-all"
                                style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(51,65,85,0.4)' }}>
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)' }}>
                                    <User className="w-4 h-4 text-white" />
                                </div>
                                <span className="hidden sm:block text-sm font-medium" style={{ color: '#cbd5e1' }}>Admin</span>
                            </div>
                        </div>
                    </header>

                    {/* PAGE CONTENT */}
                    <main className="flex-1 p-6" style={{ background: '#0b1220' }}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
