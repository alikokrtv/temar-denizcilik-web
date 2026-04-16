import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveBackground from "@/components/WaveBackground";
import CookieBanner from "@/components/CookieBanner";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Temar Denizcilik | Küresel Denizcilik Tedarik Çözümleri",
    template: "%s | Temar Denizcilik"
  },
  description: "Temar Denizcilik; denizcilik yakıtları, madeni yağ ve korozyon dirençli boya ikmali alanında Türkiye'nin lider tedarik şirketi. 7/24 küresel hizmet, ISO sertifikalı kalite.",
  keywords: ["denizcilik", "bunker fuel", "madeni yağ", "denizcilik boyası", "ship supply", "maritime", "ikmal", "temar"],
  openGraph: {
    title: "Temar Denizcilik | Küresel Denizcilik Tedarik Çözümleri",
    description: "Denizcilik yakıtları, madeni yağ ve boya ikmali alanında 7/24 küresel hizmet.",
    type: "website",
    locale: "tr_TR",
    siteName: "Temar Denizcilik",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 relative">
        <NextIntlClientProvider messages={messages}>
          <WaveBackground />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

