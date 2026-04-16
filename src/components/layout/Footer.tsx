"use client";
import { Link, usePathname } from '@/i18n/routing';
import { Instagram, Linkedin, MapPin, Phone, Mail, Ship, Anchor, ArrowRight, Globe, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations();
    const pathname = usePathname();
    if (pathname?.startsWith('/admin')) return null;

    return (
        <footer className="bg-[#040e1e] text-white relative overflow-hidden">
            {/* Top decorative line */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #1d4ed8, #06b6d4, transparent)' }} />

            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.08), transparent)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 mb-14">

                    {/* Col 1: Logo + Hakkında */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <img src="/Beyaz Temar.png" alt="Temar Denizcilik Logo" className="h-32 md:h-44 lg:h-52 w-auto object-contain -ml-2" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 pr-4">
                            {t('Footer.desc')}
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://www.instagram.com/temardenizcilik/" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <Instagram className="w-4 h-4" style={{ color: '#94a3b8' }} />
                            </a>
                            <a href="https://www.linkedin.com/company/temar-denizcilik/" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <Linkedin className="w-4 h-4" style={{ color: '#94a3b8' }} />
                            </a>
                        </div>
                        {/* Sertifika Rozetleri */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['ISO 9001', 'ISO 14001', 'MARPOL'].map(cert => (
                                <span key={cert} className="text-xs px-3 py-1 rounded-full font-semibold"
                                    style={{ background: 'rgba(29,78,216,0.15)', border: '1px solid rgba(29,78,216,0.3)', color: '#60a5fa' }}>
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:ml-auto">
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Anchor className="w-5 h-5 text-blue-500" /> {t('Navigation.corporate')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/hakkimizda" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> {t('Navigation.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/surdurulebilirlik" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> {t('Navigation.sustainability')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/kariyer" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> {t('Navigation.careers')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Ship className="w-5 h-5 text-emerald-500" /> {t('Navigation.services')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/hizmetler#yakit" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> {t('Navigation.bunker')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetler#madeni-yag" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> {t('Navigation.lubricant')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/hizmetler#boya" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> {t('Navigation.paint')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: İletişim */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Phone className="w-5 h-5 text-purple-500" /> {t('Navigation.contact')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://maps.google.com/?q=Tuzla+İstanbul" target="_blank" rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-sm group">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                                    <span className="leading-relaxed group-hover:text-blue-400 transition-colors" style={{ color: '#64748b' }}>
                                        İçmeler Mah. Aydınlıyolu Cad.<br />Altaş Plaza No:34/4<br />Tuzla - İSTANBUL
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+902165820052" className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors" style={{ color: '#64748b' }}>
                                    <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    +90 216 582 00 52
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@temar.com" className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors" style={{ color: '#64748b' }}>
                                    <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    info@temar.com
                                </a>
                            </li>
                            <li className="pt-2">
                                <Link href="/iletisim"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5 w-full justify-center shadow-lg shadow-blue-500/20">
                                    {t('Navigation.contact')} <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-6" style={{ background: 'rgba(51,65,85,0.4)' }} />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-500 text-sm mb-4 md:mb-0 flex items-center gap-3">
                        <span>© {new Date().getFullYear()} Temar Denizcilik. {t('Footer.rights')}</span>
                        <span className="text-slate-800">|</span>
                        <Link href="/admin/login" className="text-slate-600 hover:text-slate-400 transition-colors text-xs font-semibold">
                            Admin Portallar
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span className="text-slate-600 text-xs">{t('Footer.design')}:</span>
                        <a href="https://www.proofmedia.com.tr" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                            <img src="/proof-logo.png" alt="Proof Media" className="h-6 w-auto grayscale scale-150 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
