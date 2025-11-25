import CreatorCard from "@/components/CreatorCard";
import TopCreatorsBar from "@/components/TopCreatorsBar";
import { CreatorData } from "@/lib/types";
import { getCurrentMonthYear } from "@/lib/utils";

const creators: CreatorData[] = [
  {
    rank: 1,
    name: "Camille",
    age: 21,
    mainImage: "/images/camille-1.jpeg",
    secondaryImage: "/images/camille-2.jpeg",
    accountUrl: "https://onlyfans.com/itsscamille/c56",
    specialty: "Étudiante en mode",
    rating: "4.98 / 5",
  },
  {
    rank: 2,
    name: "Violette",
    age: 22,
    mainImage: "/images/violette-1.jpeg",
    secondaryImage: "/images/violette-2.jpeg",
    accountUrl: "https://onlyfans.com/itssviolette/c19",
    specialty: "Se définit 'nymphomane'",
    rating: "4.96 / 5",
  },
];

export default function Home() {
  const monthYear = getCurrentMonthYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Top Créatrices Onlyfans
            <br /> en France
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              {monthYear} 🏆
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>

          {/* Subtitle CTA */}
          <div className="mt-8 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 border-2 border-yellow-500/50 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-yellow-300 text-lg md:text-xl font-semibold text-center leading-relaxed">
              🔥 Les {creators.length} comptes OnlyFans sont{" "}
              <span className="text-yellow-100 font-bold">GRATUITS</span>{" "}
              pendant quelques heures !<br />
              <span className="text-white">
                Envoyez-leur un message dès maintenant pour recevoir une
                surprise 🎁
              </span>
            </p>
          </div>
        </header>

        {/* Top Creators Bar */}
        <TopCreatorsBar creators={creators} />

        {/* Creator Cards */}
        <main className="space-y-20">
          {creators.map((creator) => (
            <div key={creator.rank} id={`creator-${creator.rank}`}>
              <CreatorCard {...creator} />
            </div>
          ))}
        </main>
        {/* Footer */}
        <footer className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>© 2025 Best Creators - Tous droits réservés</p>
          <p className="mt-2">
            Plateforme de promotion de créateurs de contenu français
          </p>
        </footer>
      </div>
    </div>
  );
}
