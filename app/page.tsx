import CreatorCard from "@/components/CreatorCard";
import Sidebar from "@/components/Sidebar";
import { CreatorData } from "@/lib/types";

const creators: CreatorData[] = [
  {
    rank: 1,
    name: "Camille",
    age: 19,
    mainImage: "/images/camille-1.jpeg",
    secondaryImage: "/images/camille-2.jpeg",
    accountUrl: "https://exemple.com/camille",
    specialty: "Étudiante en mode",
    rating: "4.98 / 5",
  },
  {
    rank: 2,
    name: "Violette",
    age: 20,
    mainImage: "/images/violette-1.jpeg",
    secondaryImage: "/images/violette-2.jpeg",
    accountUrl: "https://exemple.com/violette",
    specialty: "Se définit 'nymphomane'",
    rating: "4.96 / 5",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 lg:pr-[320px]">
        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Les Meilleurs Créateurs
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Français d&apos;Octobre ! 🏆
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Creator Cards */}
        <div className="space-y-20">
          {creators.map((creator) => (
            <CreatorCard key={creator.rank} {...creator} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>© 2025 Best Creators - Tous droits réservés</p>
          <p className="mt-2">
            Plateforme de promotion de créateurs de contenu français
          </p>
        </footer>
      </main>
    </div>
  );
}
