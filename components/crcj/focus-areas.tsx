"use client";

import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { 
  Shield, 
  Banknote, 
  AlertTriangle, 
  Laptop, 
  Scale, 
  Lock 
} from "lucide-react";

interface FocusAreasProps {
  lang: Language;
}

export function FocusAreas({ lang }: FocusAreasProps) {
  const t = translations[lang];
  const isAr = lang === "ar";

  const areas = [
    { title: t.fa1, text: t.fa1t, icon: Shield },
    { title: t.fa2, text: t.fa2t, icon: Banknote },
    { title: t.fa3, text: t.fa3t, icon: AlertTriangle },
    { title: t.fa4, text: t.fa4t, icon: Laptop },
    { title: t.fa5, text: t.fa5t, icon: Scale },
    { title: t.fa6, text: t.fa6t, icon: Lock },
  ];

  return (
    <section id="areas" className="relative overflow-hidden bg-blue-700 py-16 text-white lg:py-24">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className={cn(
            "text-xs font-bold uppercase tracking-[0.15em] text-white/70",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.areasLabel}
          </span>
          <h2 className={cn(
            "mt-3 text-2xl font-bold leading-tight lg:text-4xl",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.areasTitle}
          </h2>
          <p className={cn(
            "mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/80 lg:text-lg",
            isAr && "font-[var(--font-noto-arabic)]"
          )}>
            {t.areasIntro}
          </p>
        </div>

        {/* Area Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={cn(
                  "text-lg font-semibold leading-tight lg:text-xl",
                  isAr && "font-[var(--font-noto-arabic)]"
                )}>
                  {item.title}
                </h3>
                <p className={cn(
                  "mt-3 text-sm leading-relaxed text-white/75",
                  isAr && "font-[var(--font-noto-arabic)]"
                )}>
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
