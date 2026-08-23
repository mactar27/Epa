import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EPA Fondation — Ensemble pour l’avenir',
  description: 'EPA Fondation accompagne, soutient et valorise la jeunesse pour bâtir un avenir meilleur.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0b0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className="bg-background text-foreground antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
