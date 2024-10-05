import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-emerald-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Trouvez les meilleures pièces pour votre voiture
              </h1>
              <p className="mx-auto max-w-[700px] text-emerald-100 md:text-xl">
                Des milliers de pièces de qualité pour toutes les marques et modèles
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/categories">Voir les catégories</Link>
              </Button>
              <Button variant="outline">
                <Link href="/marques">Marques populaires</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Catégories populaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Moteur', 'Freins', 'Suspension', 'Éclairage', 'Filtration', 'Transmission', 'Carrosserie', 'Électricité'].map((category) => (
              <Link 
                key={category} 
                href={`/categorie/${category.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-emerald-600 opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
