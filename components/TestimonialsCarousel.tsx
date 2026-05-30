"use client";
import { useState, useEffect, useCallback } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Harvard University",
    image: "https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg",
    text: "EduVisa's guidance was instrumental in my journey to Harvard. The team's personalized approach and expertise made the entire application process smooth and stress-free.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Oxford University",
    image: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg",
    text: "I couldn't have gotten into Oxford without EduVisa's support. Their visa consultation was particularly helpful and saved me months of confusion.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "MIT",
    image: "https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg",
    text: "The consultants at EduVisa understood my goals perfectly and provided tailored advice. I'm now thriving at MIT thanks to their expert guidance.",
    rating: 5,
  },
  {
    name: "Amara Osei",
    role: "Stanford University",
    image: "https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg",
    text: "From SOP reviews to interview prep, EduVisa covered every detail. Getting into Stanford felt impossible before I met their team.",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    role: "University of Toronto",
    image: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg",
    text: "The visa guidance alone was worth every penny. EduVisa made my move to Canada seamless and stress-free from day one.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "London School of Economics",
    image: "https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg",
    text: "I was overwhelmed by the LSE application process. EduVisa broke it down step by step and I received my offer letter within months.",
    rating: 5,
  },
];

// How many cards to show at each breakpoint
function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const update = () => setVisible(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = testimonials.length;
  const maxIndex = total - visible;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((c) => Math.min(Math.max(c + dir, 0), maxIndex));
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, maxIndex]
  );

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(t);
  }, [maxIndex]);

  const canPrev = current > 0;
  const canNext = current < maxIndex;

  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">

          <div className="text-center w-full">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
              Client Testimonials
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-5" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from successful students who achieved their goals
              with our expert guidance
            </p>
          </div>

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => go(-1)}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full border-2 border-border hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-foreground hover:text-primary transition-all duration-200"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              disabled={!canNext}
              className="w-11 h-11 rounded-full border-2 border-primary bg-primary text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center hover:bg-primary/90 transition-all duration-200"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${visible} + ${visible === 1 ? 24 : visible === 2 ? 12 : 8}px)))`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col gap-5 bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-border/50 hover:border-primary/20 transition-all duration-300"
                style={{ width: `calc(${100 / visible}% - ${visible === 1 ? 0 : visible === 2 ? 12 : 16}px)` }}
              >
                {/* Quote mark */}
                <span className="text-6xl leading-none text-primary/15 font-serif select-none -mb-2">
                  "
                </span>

                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{t.name}</h3>
                    <p className="text-xs text-primary font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-7 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}