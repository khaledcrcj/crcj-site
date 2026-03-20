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
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
        <p className={cn(
          "text-sm text-muted-foreground",
          isAr && "font-[var(--font-noto-arabic)]"
        )}>
          {t.footer1}
        </p>
        <p className={cn(
          "mt-2 text-sm text-muted-foreground",
          isAr && "font-[var(--font-noto-arabic)]"
        )}>
          {t.footer2}
        </p>
      </div>
    </footer>
  );
}
