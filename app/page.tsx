"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [city, setCity] = useState("Tangier");
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const carouselImages = [
    "/images/camille/c-1.jpeg",
    "/images/camille/c-2.jpeg",
    "/images/camille/s-2.jpg",
  ];

  const mainImage = "/images/camille/s-3.jpg";

  // Detect user's city from IP
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.city) {
          setCity(data.city);
        }
      } catch (error) {
        console.log("Could not detect location, using default");
      }
    };

    detectLocation();
  }, []);

  // Carousel tracking
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Countdown timer to midnight
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      const difference = midnight.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Main Container */}
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 whitespace-nowrap">
            Coucou moi c&apos;est Camille ❤️
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Active now</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {city}
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            setApi={setApi}
            className="w-full mb-6"
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={image}
                      alt={`Camille ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-pink-500/40 hover:bg-pink-500/80 border-none text-white" />
            <CarouselNext className="right-2 bg-pink-500/40 hover:bg-pink-500/80 border-none text-white" />
          </Carousel>

          {/* Carousel Dots Indicator */}
          <div className="flex justify-center gap-2 -mt-2 mb-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all rounded-full ${
                  index === current
                    ? "w-8 h-2 bg-pink-400"
                    : "w-2 h-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-700">
          <p className="text-white text-center text-lg leading-relaxed">
            J&apos;attends ton message sur ma plateforme, c&apos;est gratuit
            jusqu&apos;à minuit et en plus j&apos;ai mis tout mon contenu là bas
            🥰 Je t&apos;attends !
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="https://onlyfans.com/itsscamille/c66"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-gray-900 font-bold text-lg py-4 px-6 rounded-full text-center transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/50 mb-4"
        >
          <span className="flex items-center justify-center gap-2 whitespace-nowrap">
            Viens discuter avec moi (gratuit) 💘
          </span>
        </a>

        {/* Countdown Timer */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 mb-8 border border-pink-500/30">
          <p className="text-center text-pink-400 text-sm mb-2 font-semibold">
            ⏰ Offre gratuite expire dans :
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="bg-pink-500/20 rounded-lg px-3 py-2 border border-pink-500/50">
                <span className="text-2xl font-bold text-white">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">heures</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-500/20 rounded-lg px-3 py-2 border border-pink-500/50">
                <span className="text-2xl font-bold text-white">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-500/20 rounded-lg px-3 py-2 border border-pink-500/50">
                <span className="text-2xl font-bold text-white">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">secondes</p>
            </div>
          </div>
        </div>

        {/* Main Sexy Photo */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
          <Image src={mainImage} alt="Camille" fill className="object-cover" />
        </div>

        {/* Footer */}
        <footer className="mt-12 pb-8">
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span>© 2025 GetAllMyLinks.com</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
