import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { fullName, email, phone, position, experience, message } = body;

        if (!fullName || !email || !phone || !position) {
            return NextResponse.json({ error: 'Tüm zorunlu alanları doldurunuz.' }, { status: 400 });
        }

        const app = await prisma.careerApplication.create({
            data: { fullName, email, phone, position, experience, message },
        });

        return NextResponse.json({ success: true, id: app.id }, { status: 201 });
    } catch (error) {
        console.error('Career application error:', error);
        return NextResponse.json({ error: 'Başvuru gönderilemedi.' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const applications = await prisma.careerApplication.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
        return NextResponse.json(applications);
    } catch (error) {
        console.error('Get applications error:', error);
        return NextResponse.json({ error: 'Başvurular alınamadı.' }, { status: 500 });
    }
}
