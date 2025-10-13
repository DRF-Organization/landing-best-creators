'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [time, setTime] = useState({ hours: 1, minutes: 33, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          hours = 1;
          minutes = 33;
          seconds = 12;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 mt-4">
      <div className="bg-white text-black rounded-lg px-4 py-2 min-w-[70px] text-center">
        <div className="text-2xl font-bold">{String(time.hours).padStart(2, '0')}</div>
        <div className="text-xs">Heures</div>
      </div>
      <div className="bg-white text-black rounded-lg px-4 py-2 min-w-[70px] text-center">
        <div className="text-2xl font-bold">{String(time.minutes).padStart(2, '0')}</div>
        <div className="text-xs">Minutes</div>
      </div>
      <div className="bg-white text-black rounded-lg px-4 py-2 min-w-[70px] text-center">
        <div className="text-2xl font-bold">{String(time.seconds).padStart(2, '0')}</div>
        <div className="text-xs">Secondes</div>
      </div>
    </div>
  );
}
