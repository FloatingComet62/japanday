import type { Metadata } from 'next'
import { Geist_Mono, Inter, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

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
        {children}
        <Toaster />
      </TooltipProvider>
      </body>
    </html>
  )
}
