"use client";

import { usePathname } from 'next/navigation';

export default function WaveBackground() {
    const pathname = usePathname();
    
    // Don't show the animated wave background on admin panel
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-80 mix-blend-multiply">
            {/* The SVG and its animations represent the light ocean wave effect in the background */}
            <svg 
                className="waves absolute bottom-0 w-full h-[60vh] min-h-[300px]" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 24 150 28" 
                preserveAspectRatio="none" 
                shapeRendering="auto"
            >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(37, 99, 235, 0.02)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(37, 99, 235, 0.05)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(37, 99, 235, 0.01)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(37, 99, 235, 0.04)" />
                </g>
            </svg>
        </div>
    );
}
