"use client";

import React, { useState } from 'react';
import { UploadCloud, Trash2, GripVertical, Info } from "lucide-react";

type ServiceGallery = {
    id: string;
    title: string;
    images: { id: string; url: string; name: string }[];
};

export default function AdminHizmetlerPage() {
    const [services, setServices] = useState<ServiceGallery[]>([
        {
            id: 'ikmal',
            title: "Denizcilik İkmal Çözümleri",
            images: [
                { id: "1", url: "https://images.unsplash.com/photo-1544377193-33dce4d95d0c", name: "Gemi_1.jpg" },
                { id: "2", url: "https://images.unsplash.com/photo-1572091520117-0628e202161f", name: "Yakıt_2.jpg" },
            ]
        },
        {
            id: 'madeniyag',
            title: "Madeni Yağ Satışı ve İkmali",
            images: [
                { id: "3", url: "https://images.unsplash.com/photo-1610488582996-03632cf464da", name: "Motor_1.jpg" }
            ]
        },
        {
            id: 'boya',
            title: "Denizcilik Boyaları",
            images: [
                { id: "4", url: "https://images.unsplash.com/photo-1528608246419-482a613d96dd", name: "Boya_1.jpg" }
            ]
        }
    ]);

    const handleUploadClick = () => {
        // Placeholder for real upload logic
        alert("Fotoğraf yükleme modalı açılacak.");
    };

    const handleDelete = (serviceId: string, imageId: string) => {
        setServices(services.map(s => {
            if (s.id === serviceId) {
                return { ...s, images: s.images.filter(img => img.id !== imageId) };
            }
            return s;
        }));
    };

    return (
        <div className="space-y-8 pb-12">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 border-b pb-4">
                    Hizmet Galeri Yönetimi
                </h1>
                <p className="text-slate-500 mt-2 flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    Ön yüzdeki (Faaliyet Alanlarımız) hizmet panellerine ait carousel (kaydırmalı) görselleri buradan yönetebilirsiniz. Her hizmet için maksimum 10 görsel eklenmesi önerilir.
                </p>
            </div>

            <div className="space-y-10">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        {/* Service Header */}
                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-slate-800">
                                {service.title}
                            </h2>
                            <span className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                {service.images.length} / 10 Görsel
                            </span>
                        </div>

                        <div className="p-6">
                            {/* Upload Area */}
                            <div 
                                onClick={handleUploadClick}
                                className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-slate-500 bg-slate-50/50 cursor-pointer hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-colors mb-8 group"
                            >
                                <div className="p-4 rounded-full bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:ring-blue-400 group-hover:shadow-md transition-all mb-4">
                                    <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                </div>
                                <p className="font-semibold text-slate-700 group-hover:text-blue-700">Görselleri Sürükleyin veya Tıklayın</p>
                                <p className="text-sm mt-2 text-slate-500 text-center">PNG, JPG veya WEBP (Maks. 5MB) <br/> Carousel için yatay ağırlıklı görseller önerilir.</p>
                            </div>

                            {/* Images Grid / List */}
                            {service.images.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {service.images.map((image, index) => (
                                        <div key={image.id} className="relative group bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                                            {/* Order Badge */}
                                            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-md z-10 backdrop-blur-sm">
                                                {index + 1}
                                            </div>
                                            
                                            {/* Image */}
                                            <div className="aspect-square relative flex items-center justify-center overflow-hidden">
                                                <img 
                                                    src={image.url} 
                                                    alt={image.name} 
                                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" 
                                                />
                                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300" />
                                            </div>
                                            
                                            {/* Handle and Delete */}
                                            <div className="p-2 bg-white flex items-center justify-between border-t border-slate-200">
                                                <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-move" title="Sıralamayı Değiştir">
                                                    <GripVertical className="w-4 h-4" />
                                                </button>
                                                <span className="text-xs text-slate-500 truncate px-2">{image.name}</span>
                                                <button 
                                                    onClick={() => handleDelete(service.id, image.id)}
                                                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" 
                                                    title="Görseli Sil"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-lg border border-slate-100">
                                    Bu hizmet için henüz görsel yüklenmedi.
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
