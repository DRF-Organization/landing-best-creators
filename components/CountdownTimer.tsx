"use client";

import { useEffect, useState } from "react";

function getNextDeadline() {
  const now = new Date();
  const parisTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Paris" })
  );

  const currentHour = parisTime.getHours();
  const deadline = new Date(parisTime);

  if (currentHour < 12) {
    deadline.setHours(12, 0, 0, 0);
  } else {
    deadline.setHours(24, 0, 0, 0);
  }

  return deadline.getTime();
}

export default function CountdownTimer() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = getNextDeadline();
      const now = Date.now();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime({ hours, minutes, seconds });
      } else {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 justify-center w-full">
      <div className="bg-white text-black rounded-xl px-6 py-4 flex-1 text-center">
        <div className="text-4xl md:text-5xl font-bold">
          {String(time.hours).padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base font-medium mt-1">Heures</div>
      </div>
      <div className="bg-white text-black rounded-xl px-6 py-4 flex-1 text-center">
        <div className="text-4xl md:text-5xl font-bold">
          {String(time.minutes).padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base font-medium mt-1">Minutes</div>
      </div>
      <div className="bg-white text-black rounded-xl px-6 py-4 flex-1 text-center">
        <div className="text-4xl md:text-5xl font-bold">
          {String(time.seconds).padStart(2, "0")}
        </div>
        <div className="text-sm md:text-base font-medium mt-1">Secondes</div>
      </div>
    </div>
  );
}
