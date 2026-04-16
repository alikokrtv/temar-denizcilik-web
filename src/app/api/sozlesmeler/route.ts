import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'sozlesmeler.json');

export async function GET() {
    try {
        if (!fs.existsSync(DATA_PATH)) {
            return NextResponse.json({ error: 'Veri bulunamadı' }, { status: 404 });
        }
        const data = fs.readFileSync(DATA_PATH, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        fs.writeFileSync(DATA_PATH, JSON.stringify(body, null, 2));
        return NextResponse.json({ success: true, message: 'Sözleşmeler kaydedildi' });
    } catch (error) {
        console.error('Kaydetme hatası:', error);
        return NextResponse.json({ error: 'Kaydetme hatası' }, { status: 500 });
    }
}
