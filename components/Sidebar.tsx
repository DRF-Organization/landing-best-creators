import Image from 'next/image';

const creators = [
  { name: 'Camille', image: '/images/camille-1.jpeg', rank: 1 },
  { name: 'Violette', image: '/images/violette-1.jpeg', rank: 2 },
];

export default function Sidebar() {
  return (
    <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm border-2 border-purple-500 rounded-2xl p-6 w-[280px] hidden lg:block">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl">🏆</span>
        <h3 className="text-white font-bold text-lg">Classement complet :</h3>
      </div>
      
      <div className="space-y-3">
        {creators.map((creator) => (
          <div key={creator.rank} className="flex items-center justify-between bg-gray-900/50 rounded-xl p-3 hover:bg-gray-800/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                {creator.rank}
              </div>
              <Image
                src={creator.image}
                alt={creator.name}
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10"
              />
              <span className="text-white font-medium">{creator.name}</span>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
              VOIR
            </button>
          </div>
        ))}
      </div>
      
      <p className="text-gray-400 text-xs mt-4 text-center">
        *Pensez à vous abonner à ces 2 comptes, ils sont <span className="text-purple-400 font-semibold">exceptionnels</span>
      </p>
    </div>
  );
}
