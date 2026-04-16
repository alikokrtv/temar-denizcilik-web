"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Save, FileText, UploadCloud, FileType, CheckCircle, ExternalLink, Trash2 } from 'lucide-react';
import React, { Suspense } from 'react';

type DocumentKey = 'gizlilik' | 'kvkk' | 'sozlesme';

interface DocData {
    content: string;
    pdfUrl: string;
}

interface SozlesmelerData {
    gizlilik: DocData;
    kvkk: DocData;
    sozlesme: DocData;
}

function SozlesmelerEditorInner() {
    const [activeTab, setActiveTab] = React.useState<DocumentKey>('gizlilik');
    const [allData, setAllData] = React.useState<SozlesmelerData>({
        gizlilik: { content: '', pdfUrl: '' },
        kvkk: { content: '', pdfUrl: '' },
        sozlesme: { content: '', pdfUrl: '' }
    });
    const [isSaving, setIsSaving] = React.useState(false);
    const [isUploading, setIsUploading] = React.useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const editor = useEditor({
        extensions: [StarterKit],
        immediatelyRender: false,
        content: '',
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            setAllData(prev => ({
                ...prev,
                [activeTab]: { ...prev[activeTab], content: html }
            }));
        }
    });

    React.useEffect(() => {
        fetch('/api/sozlesmeler')
            .then(res => res.json())
            .then(data => {
                setAllData(data);
                if (editor) {
                    editor.commands.setContent(data[activeTab].content);
                }
            })
            .catch(err => console.error("Veriler yüklenemedi", err));
    }, [editor]);

    // Handle Tab Change
    const handleTabChange = (tab: DocumentKey) => {
        setActiveTab(tab);
        if (editor) {
            editor.commands.setContent(allData[tab].content);
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const res = await fetch('/api/sozlesmeler', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(allData)
            });
            if (res.ok) alert("Tüm değişiklikler başarıyla kaydedildi!");
        } catch (err) {
            alert("Kaydetme sırasında bir hata oluştu.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type !== 'application/pdf') {
            alert('Lütfen sadece PDF dosyası yükleyin.');
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                setAllData(prev => ({
                    ...prev,
                    [activeTab]: { ...prev[activeTab], pdfUrl: data.url }
                }));
                alert("PDF başarıyla yüklendi!");
            }
        } catch (err) {
            alert("Dosya yüklenemedi.");
        } finally {
            setIsUploading(false);
        }
    };

    const removePdf = () => {
        setAllData(prev => ({
            ...prev,
            [activeTab]: { ...prev[activeTab], pdfUrl: '' }
        }));
    };

    const getTabTitle = (tab: DocumentKey) => {
        switch(tab) {
            case 'gizlilik': return 'Gizlilik Politikası';
            case 'kvkk': return 'KVKK Metni';
            case 'sozlesme': return 'Genel Sözleşme & Şartlar';
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Sözleşmeler & Evraklar</h1>
                    <p className="text-slate-500 dark:text-zinc-400">Yasal metinleri ve PDF dokümanlarını buradan yönetebilirsiniz.</p>
                </div>
                <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-500/20 transition-all font-bold disabled:opacity-50"
                >
                    <Save className="w-5 h-5 mr-2" />
                    {isSaving ? 'Kaydediliyor...' : 'Tümünü Kaydet'}
                </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-2 mb-8 bg-white dark:bg-zinc-800 p-1.5 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-700">
                {(['gizlilik', 'kvkk', 'sozlesme'] as DocumentKey[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                            activeTab === tab 
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                            : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-zinc-700/50 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                        {getTabTitle(tab)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: PDF Upload & Settings */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-800 rounded-[2rem] p-8 border border-slate-100 dark:border-zinc-700 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                            <FileType className="w-5 h-5 mr-3 text-blue-500" />
                            PDF Dosyası
                        </h3>
                        
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            accept=".pdf" 
                            onChange={handleFileUpload} 
                        />

                        {allData[activeTab].pdfUrl ? (
                            <div className="space-y-4">
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800/50 flex items-center justify-between group">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-sm font-medium text-green-700 dark:text-green-400 truncate max-w-[150px]">Dosya Yüklü</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <a href={allData[activeTab].pdfUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:text-blue-600 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                        <button onClick={removePdf} className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:text-red-500 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-full py-3 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl text-sm font-bold text-slate-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-800 transition-all"
                                >
                                    Farklı Dosya Yükle
                                </button>
                            </div>
                        ) : (
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full h-48 border-2 border-dashed border-slate-200 dark:border-zinc-700 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-all group"
                            >
                                <UploadCloud className={`w-10 h-10 mb-3 ${isUploading ? 'animate-bounce text-blue-500' : 'text-slate-300 group-hover:text-blue-400 transition-colors'}`} />
                                <p className="text-sm font-bold text-slate-500 dark:text-zinc-400">{isUploading ? 'Yükleniyor...' : 'PDF Dosyası Seç'}</p>
                                <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Maksimum 10MB</p>
                            </div>
                        )}
                    </div>

                    <div className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-xl shadow-blue-500/20">
                        <h3 className="font-black text-xl mb-3">Bilgilendirme</h3>
                        <p className="text-blue-100 text-sm leading-relaxed font-medium">
                            Burada yaptığınız değişiklikler doğrudan site üzerindeki yasal sayfalarda güncellenir. PDF yüklendiğinde, sayfalarda otomatik olarak "PDF Olarak İndir" butonu belirir.
                        </p>
                    </div>
                </div>

                {/* Right: Text Editor */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-[2.5rem] border border-slate-100 dark:border-zinc-700 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-slate-100 dark:border-zinc-700 bg-slate-50/50 dark:bg-zinc-900/50 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="font-black text-slate-700 dark:text-zinc-200 uppercase tracking-wider text-xs">{getTabTitle(activeTab)} İçeriği</span>
                        </div>
                        <div className="flex space-x-2">
                             <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl text-sm font-bold hover:shadow-md transition-all active:scale-95" onClick={() => editor?.chain().focus().toggleBold().run()}>B</button>
                             <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl text-sm font-bold italic hover:shadow-md transition-all active:scale-95" onClick={() => editor?.chain().focus().toggleItalic().run()}>I</button>
                        </div>
                    </div>
                    <div className="p-10 flex-grow min-h-[500px] prose dark:prose-invert max-w-none">
                        <EditorContent editor={editor} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SozlesmelerEditor() {
    return (
        <Suspense fallback={<div className="p-12 text-center font-bold text-slate-500">Editör Yükleniyor...</div>}>
            <SozlesmelerEditorInner />
        </Suspense>
    );
}
