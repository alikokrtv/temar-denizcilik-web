"use client";

import React, { useState } from 'react';
import { FileText, Download, ChevronRight, Activity } from 'lucide-react';

interface SpecData {
    label: string;
    value: string;
}

interface TechSpecProps {
    title: string;
    specs: SpecData[];
    locale: string;
}

export default function TechSpecPanel({ title, specs, locale }: TechSpecProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-8 border border-slate-200 rounded-3xl overflow-hidden transition-all duration-500 bg-white">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <div className="text-xs font-black text-blue-600 uppercase tracking-widest">{locale === 'en' ? 'Technical Spec' : 'Teknik Şartname'}</div>
                        <h4 className="text-lg font-black text-slate-900 tracking-tight">{title}</h4>
                    </div>
                </div>
                <ChevronRight className={`w-6 h-6 text-slate-400 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
            </button>

            <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-8 bg-slate-50/50 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {specs.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">{spec.label}</span>
                                <span className="text-sm font-black text-slate-900">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                    
                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#0a192f] hover:bg-slate-900 text-white font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-1">
                        <Download className="w-5 h-5" />
                        {locale === 'en' ? 'Download Full Technical Data Sheet (PDF)' : 'Tam Teknik Bilgi Formunu İndir (PDF)'}
                    </button>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Activity className="w-3 h-3 text-emerald-500" />
                        {locale === 'en' ? 'Updated to ISO 8217:2017 standards' : 'ISO 8217:2017 standartlarına güncellendi'}
                    </div>
                </div>
            </div>
        </div>
    );
}
