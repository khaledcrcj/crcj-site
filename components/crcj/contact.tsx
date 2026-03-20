"use client";

import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";

interface ContactProps {
  lang: Language;
}

export function Contact({ lang }: ContactProps) {
  const t = translations[lang];
  const isAr = lang === "ar";

  return (
    <section id="contact" className="bg-blue-700 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <span className={cn(
          "text-xs font-bold uppercase tracking-[0.15em] text-white/70",
          isAr && "font-[var(--font-noto-arabic)]"
        )}>
          {t.contactLabel}
        </span>
        
        <h2 className={cn(
          "mt-3 text-2xl font-bold leading-tight lg:text-4xl",
          isAr && "font-[var(--font-noto-arabic)]"
        )}>
          {t.contactTitle}
        </h2>
        
        <p className={cn(
          "mx-auto mt-4 max-w-2xl text-base text-white/80 lg:text-lg",
          isAr && "font-[var(--font-noto-arabic)]"
        )}>
          {t.contactText}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={`mailto:${t.contactEmail}`}
            className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
          >
            <Mail className="h-5 w-5" />
            <span className={cn(
              "text-base lg:text-lg",
              isAr && "font-[var(--font-noto-arabic)]"
            )}>
              {t.contactEmail}
            </span>
          </a>
          
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="h-5 w-5" />
            <span className={cn(
              "text-base lg:text-lg",
              isAr && "font-[var(--font-noto-arabic)]"
            )}>
              {t.contactLocation}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
