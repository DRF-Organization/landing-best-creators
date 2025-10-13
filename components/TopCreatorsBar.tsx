import Image from "next/image";
import { CreatorData } from "@/lib/types";
import { getCurrentMonthYear } from "@/lib/utils";

interface TopCreatorsBarProps {
  creators: CreatorData[];
}

export default function TopCreatorsBar({ creators }: TopCreatorsBarProps) {
  const monthYear = getCurrentMonthYear();

  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 border-2 border-purple-500/50 rounded-2xl p-6 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-3xl">🏆</span>
          <h2 className="text-2xl font-bold text-white">
            Top {creators.length} {monthYear}
          </h2>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {creators.map((creator) => (
            <a
              key={creator.rank}
              href={creator.accountUrl}
              target="_blank"
              className="group bg-black/50 hover:bg-black/70 border border-purple-500/30 hover:border-purple-500 rounded-xl p-4 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 w-full"
            >
              <div className="flex items-center gap-4">
                {/* Rank Badge */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -top-2 -left-2 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg z-10">
                    #{creator.rank}
                  </div>
                  <Image
                    src={creator.mainImage}
                    alt={creator.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-20 h-20 border-2 border-purple-500"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg truncate">
                    {creator.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{creator.age} ans</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-sm font-semibold">
                      ⭐ {creator.rating}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold group-hover:from-purple-700 group-hover:to-blue-700 transition-all">
                    VOIR
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          ✨ Cliquez pour découvrir leur profil complet
        </p>
      </div>
    </section>
  );
}
