import type { Metadata } from 'next'
import { Geist_Mono, Inter, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import { PartnerButton } from '@/components/partner-button';
import { Navbar } from './navbar';
import { Footer } from './footer';

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

export const metadata: Metadata = {
  title: 'Japan Day Hack',
  description:
    'Where Japanese industry meets student innovation. An annual innovation summit by TSLAS, Thapar Institute.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
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
      <body className="min-h-full flex flex-col text-on-background font-body-md antialiased relative bg-gradient-to-br from-primary/5 to-surface-container-lowest">
      <TooltipProvider>
        <Navbar />
        {children}
        <Footer />

        {/* Sticky Partner CTA for mobile */}
        <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 p-4 md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <PartnerButton className="w-full px-6 py-4" />
        </div>

        <Toaster />
      </TooltipProvider>
      </body>
    </html>
  )
}
