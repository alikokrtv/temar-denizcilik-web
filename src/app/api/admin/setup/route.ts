import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
    try {
        // Check if any user exists
        const userCount = await prisma.user.count();
        
        if (userCount > 0) {
            return NextResponse.json({ 
                message: "Sistemde zaten kullanıcı mevcut. Güvenlik nedeniyle bu sayfa üzerinden yeni kullanıcı oluşturulamaz." 
            }, { status: 400 });
        }

        // Create initial admin user
        const hashedPassword = await bcrypt.hash("admin123", 10);
        
        const admin = await prisma.user.create({
            data: {
                email: "admin@temar.com",
                password: hashedPassword,
                name: "Admin",
                role: "ADMIN"
            }
        });

        return NextResponse.json({
            message: "İlk admin hesabı başarıyla oluşturuldu.",
            email: admin.email,
            password: "admin123 (Lütfen giriş yaptıktan sonra değiştiriniz!)",
            loginUrl: "/tr/admin/login"
        });

    } catch (error: any) {
        console.error("Setup Error:", error);
        return NextResponse.json({ 
            error: "Kurulum sırasında bir hata oluştu.", 
            details: error.message 
        }, { status: 500 });
    }
}
