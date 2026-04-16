"use client";

import { useState } from "react";
import { UploadCloud, Trash2, GripVertical } from "lucide-react";

export default function GalleryAdmin() {
    const [images] = useState([
        { id: "1", url: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c", name: "Gemiler_1.jpg" },
        { id: "2", url: "https://images.unsplash.com/photo-1559828453-61b6e4fa8331", name: "Yakıt_Ikmal_2.jpg" },
    ]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Galeri Yönetimi</h1>

            <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-700 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Yeni Fotoğraf Yükle</h2>
                <div className="group border-2 border-dashed border-slate-300 dark:border-zinc-600 rounded-2xl p-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                    <UploadCloud className="w-12 h-12 text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 mb-4" />
                    <p className="text-slate-600 dark:text-zinc-400 text-center group-hover:text-slate-700 dark:group-hover:text-zinc-300 transition-colors">
                        Fotoğrafları buraya sürükleyin veya <br />
                        <span className="text-blue-600 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-400">yüklemek için tıklayın</span>
                    </p>
                </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-700">
                <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Mevcut Fotoğraflar (Sürükle-Bırak Sıralama)</h2>
                <div className="space-y-4">
                    {images.map((img) => (
                        <div key={img.id} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl group hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200">
                            <div className="flex items-center">
                                <div className="p-2 cursor-grab active:cursor-grabbing hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg group/grip transition-colors mr-2">
                                    <GripVertical className="w-5 h-5 text-slate-400 group-hover/grip:text-slate-600 dark:group-hover/grip:text-zinc-300" />
                                </div>
                                <div className="w-16 h-16 rounded-lg bg-cover bg-center ring-1 ring-slate-100 dark:ring-zinc-800 group-hover:ring-blue-100 dark:group-hover:ring-blue-900/30 shadow-sm" style={{ backgroundImage: `url('${img.url}')` }}></div>
                                <span className="ml-4 font-medium text-slate-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{img.name}</span>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all focus:ring-2 focus:ring-red-500/50">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
