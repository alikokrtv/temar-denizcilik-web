import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const timestamp = Date.now();
        const originalName = file.name.replace(/\s+/g, '-').toLowerCase();
        const filename = `${timestamp}-${originalName}`;
        const publicPath = path.join(process.cwd(), 'public', filename);

        // Save the file to public/
        fs.writeFileSync(publicPath, buffer);

        return NextResponse.json({ 
            success: true, 
            url: `/${filename}`,
            message: 'Dosya başarıyla yüklendi' 
        });
    } catch (error) {
        console.error('Yükleme hatası:', error);
        return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
    }
}
