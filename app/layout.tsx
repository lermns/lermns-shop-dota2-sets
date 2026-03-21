import type { Metadata, Viewport } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LERMNS SHOP | Exclusive Dota 2 Sets & Items',
  description: 'Premium Dota 2 marketplace for exclusive hero sets, Arcanas, and Immortals. Straight from my inventory to yours. @lermns',
  keywords: ['Dota 2', 'Arcana', 'Immortal', 'Steam', 'Trading', 'Sets', 'Cosmetics'],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${cinzel.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
