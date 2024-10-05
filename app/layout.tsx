import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { AppProvider } from '@/contexts/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GPAutomobile - Pièces Auto en Tunisie',
  description: 'Votre source fiable pour les pièces automobiles en Tunisie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AppProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-emerald-800 text-white py-6">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">À propos</h4>
                    <ul className="space-y-2">
                      <li><a href="/a-propos">Notre histoire</a></li>
                      <li><a href="/contact">Contactez-nous</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Service client</h4>
                    <ul className="space-y-2">
                      <li><a href="/faq">FAQ</a></li>
                      <li><a href="/livraison">Livraison</a></li>
                      <li><a href="/retours">Retours</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Légal</h4>
                    <ul className="space-y-2">
                      <li><a href="/conditions">Conditions d'utilisation</a></li>
                      <li><a href="/confidentialite">Politique de confidentialité</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                    <ul className="space-y-2">
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">Instagram</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p>&copy; 2024 GPAutomobile. Tous droits réservés.</p>
                </div>
              </div>
            </footer>
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
