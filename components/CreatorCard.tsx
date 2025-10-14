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
        {/* Left side - Images + CTA + Timer */}
        <div className="space-y-6">
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

          {/* CTA Button */}
          <a
            href={accountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg shadow-purple-500/50 transition-all transform hover:scale-105 text-center"
          >
            👉 Accéder Gratuitement 👈
          </a>

          {/* Timer */}
          <div className="bg-black/50 border-2 border-purple-500/50 rounded-xl p-6">
            <p className="text-white font-bold text-center mb-4 text-lg">
              ⏰ Expiration de l&apos;abonnement gratuit :
            </p>
            <CountdownTimer />
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

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700/50 pb-3 pt-1">
                <span className="text-gray-300 text-base font-medium">
                  Compte :
                </span>
                <a
                  href={accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline font-semibold text-base"
                >
                  Voir le profil
                </a>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
                <span className="text-gray-300 text-base font-medium">
                  Langue :
                </span>
                <span className="text-white text-lg">🇫🇷</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
                <span className="text-gray-300 text-base font-medium">
                  Âge :
                </span>
                <span className="text-white font-bold text-base">
                  {age} ans
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
                <span className="text-gray-300 text-base font-medium">
                  Notation :
                </span>
                <span className="text-yellow-400 font-bold text-base">
                  {rating} ⭐⭐⭐⭐⭐
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-700/50 pb-3">
                <span className="text-gray-300 text-base font-medium">
                  Statut :
                </span>
                <span className="text-green-400 font-bold text-base">
                  🟢 En ligne
                </span>
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-300 text-base font-medium">
                  Promotion :
                </span>
                <span className="text-orange-400 font-bold text-base">
                  🔥 Gratuit 🔥
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/50 rounded-xl p-4">
            <p className="text-white font-semibold mb-3">
              ➡️ Comment accéder gratuitement ?
            </p>
            <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
              <li>
                Cliquez sur{" "}
                <a
                  href={accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 font-semibold underline"
                >
                  {accountUrl}
                </a>
              </li>
              <li>
                Cliquez sur le bouton{" "}
                <span className="text-purple-400 font-semibold ">
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
