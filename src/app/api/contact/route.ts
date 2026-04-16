import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Ad, e-posta ve mesaj zorunludur.' }, { status: 400 });
        }

        const contact = await prisma.contactMessage.create({
            data: { name, email, phone, company, subject, message },
        });

        return NextResponse.json({ success: true, id: contact.id }, { status: 201 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Mesaj gönderilemedi.' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const messages = await prisma.contactMessage.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
        return NextResponse.json(messages);
    } catch (error) {
        console.error('Get messages error:', error);
        return NextResponse.json({ error: 'Mesajlar alınamadı.' }, { status: 500 });
    }
}
