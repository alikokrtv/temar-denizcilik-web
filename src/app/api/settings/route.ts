import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const settings = await prisma.siteSetting.findMany();
        return NextResponse.json(settings);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        // Body is expecting { key: "whatsapp", value: "90555...", group: "contact" }
        // or an array of objects for bulk update
        if (Array.isArray(body)) {
            for (const item of body) {
                 await prisma.siteSetting.upsert({
                     where: { key: item.key },
                     update: { value: item.value, group: item.group || 'general' },
                     create: { key: item.key, value: item.value, group: item.group || 'general' }
                 });
            }
            return NextResponse.json({ success: true });
        } else {
             const result = await prisma.siteSetting.upsert({
                 where: { key: body.key },
                 update: { value: body.value, group: body.group || 'general' },
                 create: { key: body.key, value: body.value, group: body.group || 'general' }
             });
             return NextResponse.json(result);
        }
    } catch (e) {
        return NextResponse.json({ error: 'Failed to update setting' }, { status: 500 });
    }
}
