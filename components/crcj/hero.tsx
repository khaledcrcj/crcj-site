"use client";

import { useEffect, useState, useCallback } from "react";
import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  lang: Language;
}

const heroImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
];

export function Hero({ lang }: HeroProps) {
  const t = translations[lang];
  const isAr = lang === "ar";
  const [currentHero, setCurrentHero] = useState(0);

  const goNext = useCallback(() => {
    setCurrentHero((prev) => (prev + 1) % heroImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentHero((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-blue-700 py-20 text-white lg:min-h-[680px] lg:py-24">
      {/* Background Images */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            currentHero === index ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/95 via-blue-700/90 to-blue-700/85" />

      {/* Navigation Arrows */}
      <button
        onClick={isAr ? goNext : goPrev}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 lg:left-6 lg:h-12 lg:w-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      <button
        onClick={isAr ? goPrev : goNext}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 lg:right-6 lg:h-12 lg:w-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={cn(
            "mb-6 inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm lg:text-sm",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.heroLabel}
          </div>

          {/* Location */}
          <p className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.heroTop}
          </p>

          {/* Title */}
          <h1 className={cn(
            "text-3xl font-bold leading-tight text-balance lg:text-5xl xl:text-6xl",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className={cn(
            "mt-6 text-lg leading-relaxed text-white/90 lg:text-xl",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.heroSubtitle}
          </p>

          {/* Description */}
          <p className={cn(
            "mt-4 text-base leading-relaxed text-white/75 lg:text-lg",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.heroText}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className={cn(
                "rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90",
                isAr && "font-[var(--font-noto-arabic)]"
              )}
            >
              {t.heroBtn1}
            </a>
            <a
              href="#about"
              className={cn(
                "rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10",
                isAr && "font-[var(--font-noto-arabic)]"
              )}
            >
              {t.heroBtn2}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentHero(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentHero === index
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}
