import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'GPAutomobile - Pièces Auto en Tunisie',
  description: 'Votre source fiable pour les pièces automobiles en Tunisie',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
