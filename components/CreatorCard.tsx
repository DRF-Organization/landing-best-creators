import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { CreatorData } from "@/lib/types";

export default function CreatorCard({
  rank,
  name,
  age,
  mainImage,
  secondaryImage,
  accountUrl,
  specialty,
  rating,
}: CreatorData) {
  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        #{rank} - {name}, {age} ans
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left side - Images */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image
                src={mainImage}
                alt={name}
                fill
                className="rounded-full object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/50"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
              <Image
                src={secondaryImage}
                alt={`${name} secondary`}
                fill
                className="rounded-full object-cover border-4 border-pink-500 shadow-xl shadow-pink-500/50"
              />
            </div>
          </div>
        </div>

        {/* Right side - Info */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500 rounded-2xl p-6 shadow-2xl">
            <div className="border-2 border-yellow-400 bg-yellow-400/10 rounded-xl p-4 mb-4">
              <p className="text-yellow-400 font-semibold text-center flex items-center justify-center gap-2">
                🏆 Le compte de {name} est gratuit pendant quelques heures
                encore ! 🏆
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Compte :</span>
                <a
                  href={accountUrl}
                  className="text-blue-400 hover:text-blue-300 underline font-medium"
                >
                  Voir le profil
                </a>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Langue :</span>
                <span className="text-white">🇫🇷</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Âge :</span>
                <span className="text-white font-semibold">{age} ans</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Particularité :</span>
                <span className="text-white font-medium">{specialty}</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Notation :</span>
                <span className="text-yellow-400 font-bold">
                  {rating} ⭐⭐⭐⭐⭐
                </span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Statut :</span>
                <span className="text-green-400 font-semibold">
                  🟢 En ligne
                </span>
              </div>

              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Promotion :</span>
                <span className="text-orange-400 font-semibold">
                  🔥 Gratuit 🔥
                </span>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105">
            👉 Accéder Gratuitement 👈
          </button>

          <div className="bg-black/50 border border-gray-700 rounded-xl p-4">
            <p className="text-white font-semibold mb-2">
              ⏰ Expiration de l&apos;accès gratuit :
            </p>
            <CountdownTimer />
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/50 rounded-xl p-4">
            <p className="text-white font-semibold mb-3">
              ➡️ Comment accéder gratuitement ?
            </p>
            <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
              <li>
                Cliquez sur{" "}
                <span className="text-purple-400 font-semibold">
                  {accountUrl}
                </span>
              </li>
              <li>
                Cliquez sur le bouton{" "}
                <span className="text-purple-400 font-semibold">
                  &quot;S&apos;ABONNER GRATUITEMENT&quot;
                </span>
              </li>
              <li>
                Envoyez-lui un message et elle va commencer, elle adore
                discuter! 😊
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
