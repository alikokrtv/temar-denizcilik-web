"use client";
import { Link, usePathname } from '@/i18n/routing';
import { Instagram, Linkedin, MapPin, Phone, Mail, Ship, Anchor, ArrowRight, Globe, ChevronRight, MessageCircle } from 'lucide-react';
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

                    {/* Col 1: Logo + Slogan */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <img src="/images/logo/logo-main.png" alt="Temar Denizcilik Logo" className="h-24 md:h-32 lg:h-40 w-auto object-contain -ml-2 invert brightness-0" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 pr-4 font-medium italic">
                            "Denizcilik ve lojistik sektöründe güvenilir çözüm ortağınız; çeyrek asırlık tecrübeyle rotanızı kesintisiz kılıyoruz."
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://www.instagram.com/temardenizcilik/" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:bg-gradient-to-tr from-purple-600 to-pink-500"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/company/temar-denizcilik/" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:bg-blue-600"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Anchor className="w-5 h-5 text-blue-500" /> {t('Navigation.corporate')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/hakkimizda" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> Biz Kimiz?
                                </Link>
                            </li>
                             <li>
                                <Link href="/hakkimizda#tarihcemiz" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> Tarihçemiz
                                </Link>
                            </li>
                            <li>
                                <Link href="/hakkimizda#bolgeler" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> Hizmet Bölgelerimiz
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Docs */}
                    <div className="lg:col-span-3 lg:pl-4">
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-cyan-500" /> Yasal & Dokümanlar
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/kvkk" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> KVKK - Gizlilik Sözleşmesi
                                </Link>
                            </li>
                            <li>
                                <a href="/docs/terms-temar.pdf" target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> Genel Şartlar - Temar
                                </a>
                            </li>
                            <li>
                                <a href="/docs/terms-fire.pdf" target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm">
                                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" /> Genel Şartlar - Fire
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: İletişim */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Phone className="w-5 h-5 text-emerald-500" /> {t('Navigation.contact')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://maps.google.com/maps?q=%C4%B0%C3%A7meler%20Mahallesi%20Ayd%C4%B1nl%C4%B1yolu%20Caddesi%20Alta%C5%9F%20Plaza%20No%3A34%2F4%20Tuzla%20%C4%B0STANBUL" target="_blank" rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-sm group">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                                    <span className="leading-relaxed group-hover:text-blue-400 transition-colors text-slate-400">
                                        İçmeler Mah. Aydınlıyolu Cad. Altaş Plaza No:34/4 Tuzla - İSTANBUL
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+902165820052" className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors text-slate-400">
                                    <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    +90 216 582 00 52
                                </a>
                            </li>
                             <li>
                                <a href="https://wa.me/905367779651" className="flex items-center gap-3 text-sm hover:text-green-400 transition-colors text-slate-400">
                                    <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    +90 536 777 96 51
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-6" style={{ background: 'rgba(51,65,85,0.4)' }} />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-500 text-sm mb-4 md:mb-0 flex items-center gap-3">
                        <span>© {new Date().getFullYear()} Temar Denizcilik. Tüm Hakları Saklıdır.</span>
                        <span className="text-slate-800">|</span>
                        <Link href="/admin/login" className="text-slate-600 hover:text-slate-400 transition-colors text-xs font-semibold underline decoration-slate-700 underline-offset-4">
                            Yönetici Paneli
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <span className="text-slate-600 text-xs tracking-widest uppercase font-bold">Powered BY</span>
                        <a href="https://www.proofmedia.com.tr" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-all hover:scale-105 active:scale-95">
                            <img src="/images/logo/proof-logo-white.png" alt="Proof Media" className="h-8 w-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
