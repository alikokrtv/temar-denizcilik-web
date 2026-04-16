import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    try {
        if (slug) {
            const page = await prisma.pageContent.findUnique({ where: { slug } });
            return NextResponse.json(page || {});
        }
        const pages = await prisma.pageContent.findMany();
        return NextResponse.json(pages);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        const result = await prisma.pageContent.upsert({
            where: { slug: body.slug },
            update: { title: body.title, content: body.content },
            create: { slug: body.slug, title: body.title, content: body.content }
        });
        
        return NextResponse.json(result);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
    }
}
