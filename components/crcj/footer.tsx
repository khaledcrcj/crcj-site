"use client";

import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];
  const isAr = lang === "ar";

  return (
    <footer className="relative border-t border-white/20 bg-[#1E3A8A] py-10 text-white">
      {/* Gradient (same style as hero/newsletter) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/95 via-[#1E3A8A]/90 to-[#2563EB]/85" />

      <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-6">
        <p
          className={cn(
            "text-sm text-white/80",
            isAr && "font-[var(--font-noto-arabic)]"
          )}
        >
          {t.footer1}
        </p>

        <p
          className={cn(
            "mt-2 text-sm text-white/70",
            isAr && "font-[var(--font-noto-arabic)]"
          )}
        >
          {t.footer2}
        </p>
      </div>
    </footer>
  );
}
