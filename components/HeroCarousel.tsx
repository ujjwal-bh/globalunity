"use client";
import { useEffect, useState, useCallback } from "react";

const images = [
  "https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg",
  "https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg",
  "https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg",
  "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover object-center" />
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 text-white flex items-center justify-center transition-all sm:w-11 sm:h-11"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 text-white flex items-center justify-center transition-all sm:w-11 sm:h-11"
        aria-label="Next"
      >
        &#8594;
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-7 bg-primary" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}