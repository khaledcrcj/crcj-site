"use client";

import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { MapPin, Globe, Handshake, GraduationCap } from "lucide-react";

interface AboutProps {
  lang: Language;
}

export function About({ lang }: AboutProps) {
  const t = translations[lang];
  const isAr = lang === "ar";

  const highlights = [
    { title: t.h1, text: t.h1t, icon: MapPin },
    { title: t.h2, text: t.h2t, icon: Globe },
    { title: t.h3, text: t.h3t, icon: Handshake },
    { title: t.h4, text: t.h4t, icon: GraduationCap },
  ];

  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-[0.15em] text-blue-700",
              isAr && "font-[var(--font-noto-arabic)]"
            )}
          >
            {t.aboutLabel}
          </span>

          <h2
            className={cn(
              "mt-3 text-2xl font-bold leading-tight text-foreground lg:text-4xl",
              isAr && "font-[var(--font-noto-arabic)]"
            )}
          >
            {t.aboutTitle}
          </h2>

          <p
            className={cn(
              "mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground lg:text-lg",
              isAr && "font-[var(--font-noto-arabic)]"
            )}
          >
            {t.aboutText}
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3
                  className={cn(
                    "text-xl font-bold text-foreground",
                    isAr && "font-[var(--font-noto-arabic)]"
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-muted-foreground",
                    isAr && "font-[var(--font-noto-arabic)]"
                  )}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
