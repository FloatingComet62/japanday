import { Geist_Mono, Inter, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { PartnerButton } from '@/components/partner-button';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { dir } from 'i18next'
import { getResources, getT, initServerI18next } from 'next-i18next/server'
import { I18nProvider } from 'next-i18next/client'
import i18nConfig from '@/i18n.config';

initServerI18next(i18nConfig)

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-hanken',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jetbrains',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata() {
  const { t } = await getT()
  return {
    title: t("title"),
    description: t("description")
  }
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { i18n, lng } = await getT();
  const resources = getResources(i18n);

  return (
    <I18nProvider language={lng} resources={resources}>
      <html
        lang={lng}
        dir={dir(lng)}
        className={cn(
          "h-full",
          "antialiased",
          "font-sans",
          inter.variable,
          hanken.variable,
          jetbrainsMono.variable,
          geistMono.variable,
        )}
      >
        <body className="min-h-full flex flex-col text-on-background font-body-md antialiased relative bg-gradient-to-r from-[#BC002D21] to-[#ffffff]">
        <TooltipProvider>
          <Navbar />
          <div className="bg-pattern">
            {children}
          </div>
          <Footer />
          <div className="fixed bottom-0 left-0 w-full border-t border-outline-variant/30 p-4 md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <PartnerButton className="w-full px-6 py-4" />
          </div>
          <Toaster />
        </TooltipProvider>
        </body>
      </html>
    </I18nProvider> 
  )
}
