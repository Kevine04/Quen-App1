import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'ChatCart - Turn your WhatsApp business into a real online store',
  description: 'Create a professional online store in minutes and receive orders directly through WhatsApp. Perfect for small businesses.',
  keywords: ['WhatsApp store', 'online store', 'e-commerce', 'small business', 'WhatsApp business'],
  authors: [{ name: 'ChatCart' }],
  openGraph: {
    title: 'ChatCart - WhatsApp Store Builder',
    description: 'Turn your WhatsApp business into a real online store',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
