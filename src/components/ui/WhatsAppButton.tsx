"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "905367779651";
  const message = "Merhaba, bilgi alabilir miyim?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group pointer-events-auto"
      aria-label="WhatsApp ile İletişime Geçin"
    >
      <div className="relative">
        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 group-hover:animate-none"></div>
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_8px_30px_rgb(34,197,94,0.4)] text-white transition-all duration-300 group-hover:scale-110 group-active:scale-95 border-2 border-white/20">
          <MessageCircle className="w-7 h-7 fill-current" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-1/2 right-[120%] translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white text-slate-800 px-4 py-2 rounded-xl shadow-2xl border border-slate-100 whitespace-nowrap text-sm font-bold flex items-center gap-2">
            <span>Bize Yazın</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white border-t border-r border-slate-100 rotate-45"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
