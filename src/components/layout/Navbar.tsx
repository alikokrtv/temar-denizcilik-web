"use client";
import { Link, usePathname } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { ChevronDown, Instagram, Linkedin, Menu, X, Phone, Mail, Ship, ArrowRight } from 'lucide-react';
import LanguageDropdown from '@/components/LanguageDropdown';
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const pathname = usePathname();
    const t = useTranslations('Navigation');
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navLinks = [
        {
            name: t('corporate'),
            href: '/hakkimizda',
            dropdown: [
                { name: t('about'), href: '/hakkimizda' },
                { name: 'Misyon & Vizyon', href: '/hakkimizda#misyon-vizyon' },
                { name: 'Tarihçemiz', href: '/hakkimizda#tarihcemiz' },
                { name: t('sustainability'), href: '/surdurulebilirlik' },
                { name: 'Kalite Politikamız', href: '/kalite' },
                { name: t('careers'), href: '/kariyer' },
            ]
        },
        {
            name: t('services'),
            href: '/hizmetler',
            dropdown: [
                { name: t('bunker'), href: '/hizmetler#yakit' },
                { name: t('lubricant'), href: '/hizmetler#madeni-yag' },
                { name: t('paint'), href: '/hizmetler#boya' },
                { name: t('agency'), href: '/hizmetler#acente' },
            ]
        },
        { name: t('references'), href: '/referanslar' },
        { name: t('media'), href: '/medya' },
        { name: t('contact'), href: '/iletisim' },
    ];

    if (pathname?.startsWith('/admin')) return null;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* TOP INFO BAR */}
            <div className="hidden md:block w-full bg-[#0a192f] text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
                    <div className="flex items-center gap-6">
                        <a href="tel:+902165820052" className="flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors">
                            <Phone className="w-3 h-3" />
                            +90 216 582 00 52
                        </a>
                        <a href="mailto:info@temar.com" className="flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors">
                            <Mail className="w-3 h-3" />
                            info@temar.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-blue-300">
                        <span>7/24 Kesintisiz Operasyon</span>
                        <span>·</span>
                        <a href="https://www.instagram.com/temardenizcilik/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Instagram className="w-3.5 h-3.5" />
                        </a>
                        <a href="https://www.linkedin.com/company/temar-denizcilik/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? 'bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-gray-100'
                    : 'bg-white border-b border-gray-100'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24 md:h-28">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="transition-transform hover:scale-105 duration-300 block">
                                <img src="/logo.png" alt="Temar Denizcilik Logo" className="h-24 md:h-32 lg:h-36 w-auto object-contain pb-1 scale-[1.15] md:scale-100 origin-left" />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                link.dropdown ? (
                                    <div key={link.name} className="relative group">
                                        <Link
                                            href={link.href}
                                            className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                                pathname?.startsWith(link.href)
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                                            }`}
                                        >
                                            {link.name}
                                            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                                        </Link>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-2">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                            pathname === link.href
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            <div className="hidden md:block">
                                <LanguageDropdown />
                            </div>
                            <Link
                                href="/iletisim"
                                className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
                            >
                                {t('getQuote')} <ArrowRight className="w-4 h-4" />
                            </Link>

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setMobileOpen(true)}
                                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    {/* Panel */}
                    <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col overflow-y-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-gray-100">
                            <img src="/logo.png" alt="Temar" className="w-36 h-auto object-contain" />
                            <div className="flex items-center gap-2">
                                <div className="scale-[0.85] origin-right">
                                    <LanguageDropdown />
                                </div>
                                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                                    <X className="w-6 h-6 text-slate-700" />
                                </button>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex-1 p-4 space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <button
                                        className="w-full flex items-center justify-between px-4 py-3.5 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                                        onClick={() => link.dropdown ? setOpenDropdown(openDropdown === link.name ? null : link.name) : window.location.assign(link.href)}
                                    >
                                        {!link.dropdown ? (
                                            <Link href={link.href} onClick={() => setMobileOpen(false)} className="w-full text-left">{link.name}</Link>
                                        ) : (
                                            <span className="w-full text-left">{link.name}</span>
                                        )}
                                        {link.dropdown && (
                                            <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                        )}
                                    </button>
                                    {link.dropdown && openDropdown === link.name && (
                                        <div className="pl-6 pb-2 pt-1 space-y-1.5">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-[0.95rem] font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Bottom */}
                        <div className="p-4 border-t border-gray-100 space-y-3">
                            <a href="tel:+902165820052" className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700">
                                <Phone className="w-4 h-4 text-blue-600" />
                                +90 216 582 00 52
                            </a>
                            <Link
                                href="/iletisim"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
                            >
                                Teklif Al <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
