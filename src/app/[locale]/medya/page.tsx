"use client";

import React, { useState } from 'react';
import { Camera, Video, Newspaper, Image as ImageIcon, X } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function MediaPage() {
    const locale = useLocale();
    const [selectedBlog, setSelectedBlog] = useState<any>(null);

    // Sample data for the gallery
    const images = [
        { src: '/Bunker Fuel.png', title: locale === 'en' ? 'Barge Operations' : 'Barge Operasyonları', category: 'image' },
        { src: '/yatch5.png', title: locale === 'en' ? 'Supply Operations' : 'İkmal Operasyonları', category: 'image' },
        { src: '/temar-ikmal-trucks.png', title: locale === 'en' ? 'Strategic Network' : 'Stratejik Ağ', category: 'image' },
    ];

    const blogPosts = [
        {
            date: locale === 'en' ? 'Oct 15, 2023' : '15 Eki 2023',
            title: locale === 'en' ? 'Temar Expands Operations to New Ports' : 'Temar Operasyonlarını Yeni Limanlara Genişletiyor',
            desc: locale === 'en' 
                ? 'We are proud to announce our new supply points across the Mediterranean, bringing our reliable services closer to you.' 
                : 'Akdeniz genelindeki yeni ikmal noktalarımızı duyurmaktan gurur duyuyoruz. Güvenilir hizmetlerimizi size daha da yaklaştırıyoruz.',
            fullContent: locale === 'en'
                ? "As part of our commitment to maintaining a robust maritime supply network, Temar Denizcilik has officially expanded its operational reach to several key Mediterranean ports. This strategic move aligns with the growing demands of our international clientele and reinforces our position as an industry leader.\n\nOur specialized barge fleet and highly trained operations team are now active 24/7 in these regions, guaranteeing smooth and timely bunker logistics. Whether it's high-grade lubricants, fuels, or essential marine paints, we are equipped to meet vessels on schedule without disrupting their routes.\n\nWe would like to thank all our partners and clients who have supported us in making this milestone possible."
                : "Güçlü bir denizcilik tedarik ağını sürdürme taahhüdümüzün bir parçası olarak Temar Denizcilik, operasyonel erişimini önemli Akdeniz limanlarına resmen genişletti. Bu stratejik hamle, uluslararası müşterilerimizin artan talepleriyle uyumludur ve sektör lideri konumumuzu güçlendirmektedir.\n\nUzmanlaşmış mavna filomuz ve yüksek eğitimli operasyon ekibimiz, sorunsuz ve zamanında bunker lojistiğini garanti altına almak için artık bu bölgelerde 7/24 hizmet veriyor. Yüksek kaliteli madeni yağlar, yakıtlar veya gemi boyaları fark etmeksizin gemilerin rotasını bozmadan zamanında ihtiyaçları karşılıyoruz.\n\nBu dönüm noktasını mümkün kılmamızda bizi destekleyen tüm tedarikçilerimize ve paydaşlarımıza teşekkür ederiz.",
            image: '/yacht.jpg.png'
        },
        {
            date: locale === 'en' ? 'Sep 28, 2023' : '28 Eyl 2023',
            title: locale === 'en' ? 'Sustainability Initiatives in Maritime' : 'Denizcilikte Sürdürülebilirlik Girişimleri',
            desc: locale === 'en'
                ? 'Discover our latest efforts in reducing carbon emissions and adopting green technologies in our bunker supply.'
                : 'Karbon emisyonlarını azaltma ve bunker ikmalimizde yeşil teknolojileri benimseme konusundaki son çabalarımızı keşfedin.',
            fullContent: locale === 'en'
                ? "The global maritime sector is undergoing a massive transformation, with sustainability being the key driver. At Temar Denizcilik, we are well aware of our environmental responsibilities. Our latest initiative prioritizes the usage and efficient delivery of Low Sulfur fuel variants that comply with the IMO 2020 strict regulations.\n\nFurthermore, zero-spill operations are enforced by strict physical inspections and modern containment systems around our supply nodes. We consistently monitor our carbon footprint during logistics execution and use data-driven routing to reduce unneeded emissions.\n\nA greener ocean means a sustainable future for international trade."
                : "Küresel denizcilik sektörü, merkezinde sürdürülebilirlik konuları olmak üzere devasa bir dönüşüm geçiriyor. Temar Denizcilik olarak çevresel sorumluluklarımızın son derece farkındayız. En son girişimimiz, IMO 2020 düzenlemeleriyle uyumlu Low Sulfur yakıt çeşitlerinin kullanımını ve etkin teslimatını önceliklendirmektir.\n\nDahası sıfır dökülme/sızıntı operasyonları sıkı denetimler ve ikmal alanları etrafındaki modern önlemler ile sürekli takip edilmektedir. Lojistik işlemleri sırasında karbon ayak izimizi veriler dahilinde denetliyor ve gerekmeyen emisyonları azaltmak için harita tabanlı rotalama çözümleri üretiyoruz.\n\nDaha yeşil bir okyanus uluslararası ticaretin sürdürülebilirliği için kaçınılmaz bir gelecektir.",
            image: '/Bunker Fuel.png'
        },
        {
            date: locale === 'en' ? 'Aug 12, 2023' : '12 Ağu 2023',
            title: locale === 'en' ? 'Q3 Maritime Industry Report' : '3. Çeyrek Denizcilik Sektör Raporu',
            desc: locale === 'en'
                ? 'An in-depth look at the global supply chain challenges and how Temar is overcoming them to guarantee delivery.'
                : 'Küresel tedarik zinciri zorluklarına ve Temar\'ın teslimatı garanti altına almak için bunları nasıl aştığına derinlemesine bir bakış.',
            fullContent: locale === 'en'
                ? "The third quarter brought unique logistical hurdles to the maritime industry, ranging from port congestions to geopolitical instabilities in key trade arteries. Despite these bottlenecks, Temar Denizcilik successfully accomplished a 98% on-time delivery rate for its bunker and lubricant operations.\n\nOur robust mitigation strategy involved holding strategic inventory at major hubs and diversifying supply chains to bypass constrained transit zones. This quarter clearly demonstrated the value of having a reliable physical supplier in turbulent times.\n\nRead our comprehensive Q3 report to delve into the operational statistics and market predictions made by our expert logistics team."
                : "Üçüncü çeyrek, liman yoğunluklarından önemli ticaret yollarındaki jeopolitik istikrarsızlıklara kadar denizcilik endüstrisine dikkate değer lojistik engeller getirdi. Bu sıkışıklıklara rağmen Temar Denizcilik yakıt ve yağ tedarik işlemlerini %98 zamanında kalkış başarısıyla tamamlamayı sürdürdü.\n\nGüçlü risk azaltma stratejimiz ana noktalarda emniyet stoku tutmak ve tedarik zincirimize esneklik sağlamak ile doğrudan ilintilidir. Bu çeyrek fırtınalı zamanlarda güvenilir ve fiziksel bir ikmalciyle çalışmanın taşıdığı stratejik değeri açıkça göstermiştir.\n\nOperasyon ekibimizin başarı istatistiklerini ve detaylı lojistik vizyonlarımızı içeren kapsamlı K3 piyasa raporumuzu okuyun.",
            image: '/yatch5.png'
        }
    ];

    return (
        <>
            <main className="min-h-screen bg-slate-50 py-20 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                            <Camera className="w-4 h-4" />
                            {locale === 'en' ? 'Media & Press' : 'Medya & Basın'}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                            {locale === 'en' ? 'Media ' : 'Medya ve '}<br />
                            <span className="text-blue-600">{locale === 'en' ? 'Gallery' : 'Galeri'}</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            {locale === 'en'
                                ? 'Discover our visual history, operational excellence, and press coverage from around the world.'
                                : 'Görsel tarihimizi, operasyonel mükemmelliğimizi ve dünya çapındaki basın yansımalarımızı keşfedin.'}
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        <button className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 shadow-md flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" />
                            {locale === 'en' ? 'All' : 'Tümü'}
                        </button>
                        <button className="px-6 py-2.5 rounded-full bg-white text-slate-600 font-semibold transition-all hover:bg-slate-100 border border-slate-200 flex items-center gap-2">
                            <Camera className="w-4 h-4" />
                            {locale === 'en' ? 'Photos' : 'Fotoğraflar'}
                        </button>
                        <button className="px-6 py-2.5 rounded-full bg-white text-slate-600 font-semibold transition-all hover:bg-slate-100 border border-slate-200 flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            {locale === 'en' ? 'Videos' : 'Videolar'}
                        </button>
                        <button className="px-6 py-2.5 rounded-full bg-white text-slate-600 font-semibold transition-all hover:bg-slate-100 border border-slate-200 flex items-center gap-2">
                            <Newspaper className="w-4 h-4" />
                            {locale === 'en' ? 'Press' : 'Basın'}
                        </button>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((item, i) => (
                            <div key={i} className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-md text-white text-xs font-bold rounded-full mb-2 border border-white/20">
                                        {item.category.toUpperCase()}
                                    </span>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Blog Section */}
                    <div className="mt-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
                                <Newspaper className="w-4 h-4" />
                                {locale === 'en' ? 'Latest News' : 'Güncel Haberler'}
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                                {locale === 'en' ? 'Blog & ' : 'Blog ve '}<span className="text-emerald-600">{locale === 'en' ? 'Announcements' : 'Duyurular'}</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, i) => (
                                <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group overflow-hidden flex flex-col cursor-pointer"
                                    onClick={() => setSelectedBlog(post)}>
                                    <div className="relative h-56 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                                            {post.date}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                            {post.desc}
                                        </p>
                                        <button className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all w-fit">
                                            {locale === 'en' ? 'Read More' : 'Devamını Oku'} <span className="text-lg">→</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            {/* Blog Reading Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto" onClick={() => setSelectedBlog(null)}>
                    <div 
                        className="bg-white rounded-3xl max-w-3xl w-full my-8 relative flex flex-col overflow-hidden animate-fade-in-up"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedBlog(null)}
                            className="absolute top-6 right-6 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors z-10 backdrop-blur-md"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        {/* Hero Image */}
                        <div className="h-64 sm:h-80 w-full relative">
                            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-lg mb-3">
                                    {selectedBlog.date}
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                                    {selectedBlog.title}
                                </h2>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 sm:p-12 bg-white">
                            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                                {selectedBlog.fullContent}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
