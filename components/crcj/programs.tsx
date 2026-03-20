"use client";

import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { Award, BookOpen, Target } from "lucide-react";

interface ProgramsProps {
  lang: Language;
}

export function Programs({ lang }: ProgramsProps) {
  const t = translations[lang];
  const isAr = lang === "ar";

  const programs = [
    { title: t.p1, text: t.p1t, icon: Award },
    { title: t.p2, text: t.p2t, icon: BookOpen },
    { title: t.p3, text: t.p3t, icon: Target },
  ];

  return (
    <section id="programs" className="bg-muted/50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className={cn(
            "text-xs font-bold uppercase tracking-[0.15em] text-blue-700",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.progLabel}
          </span>
          <h2 className={cn(
            "mt-3 text-2xl font-bold leading-tight text-foreground lg:text-4xl",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.progTitle}
          </h2>
          <p className={cn(
            "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.progIntro}
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn(
                  "group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl",
                  index === 0 && "lg:col-span-1"
                )}
              >
                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-700 to-blue-500" />
                
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={cn(
                  "text-xl font-semibold text-foreground",
                  isAr && "font-[var(--font-noto-arabic)]"
                )}>
                  {item.title}
                </h3>
                <p className={cn(
                  "mt-3 text-sm leading-relaxed text-muted-foreground",
                  isAr && "font-[var(--font-noto-arabic)]"
                )}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className={cn(
          "mt-8 text-center text-sm text-muted-foreground",
          isAr && "font-[var(--font-noto-arabic)]"
        )}>
          {t.progDisc}
        </p>
      </div>
    </section>
  );
}
