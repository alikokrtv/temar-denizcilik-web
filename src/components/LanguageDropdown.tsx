"use client";
import React, { useState, useEffect, useRef } from 'react';

import {useRouter, usePathname} from '@/i18n/routing';
import {Globe, ChevronDown} from 'lucide-react';
import {useLocale} from 'next-intl';

type Language = {
    code: string;
    name: string;
    isActive: boolean;
    isDefault: boolean;
};

const defaultLanguages: Language[] = [
    { code: "tr", name: "Türkçe", isActive: true, isDefault: true },
    { code: "en", name: "English", isActive: true, isDefault: false },
];

export default function LanguageDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [languages, setLanguages] = useState<Language[]>([]);
    const [activeLang, setActiveLang] = useState<Language | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    useEffect(() => {
        // Fetch languages from localStorage (saved by Admin Panel)
        const saved = localStorage.getItem('site_languages');
        let parsedLangs = defaultLanguages;
        
        if (saved) {
            parsedLangs = JSON.parse(saved);
        }
        
        // Filter only active languages
        const activeLangs = parsedLangs.filter(l => l.isActive);
        setLanguages(activeLangs);

        // Get user preference or default
        const matchedPref = activeLangs.find(l => l.code === currentLocale);
        setActiveLang(matchedPref || activeLangs[0]);

        // Handle outside click
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [currentLocale]);

    const handleSelect = (lang: Language) => {
        setActiveLang(lang);
        localStorage.setItem('user_language', lang.code);
        setIsOpen(false);
        router.replace(pathname, {locale: lang.code});
    };

    if (!activeLang || languages.length === 0) return null;

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-slate-50"
            >
                <Globe className="w-5 h-5 mr-1" />
                <span className="font-semibold text-sm uppercase">{activeLang.code}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden transform opacity-100 scale-100 transition-all duration-200">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang)}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                                    activeLang.code === lang.code 
                                        ? 'bg-blue-50 text-blue-700 font-semibold' 
                                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                                }`}
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
