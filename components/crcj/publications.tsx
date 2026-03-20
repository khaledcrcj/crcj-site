"use client";

import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { FileText, ClipboardList, Users } from "lucide-react";

interface PublicationsProps {
  lang: Language;
}

export function Publications({ lang }: PublicationsProps) {
  const t = translations[lang];
  const isAr = lang === "ar";

  const publications = [
    { title: t.pub1, text: t.pub1t, icon: FileText },
    { title: t.pub2, text: t.pub2t, icon: ClipboardList },
    { title: t.pub3, text: t.pub3t, icon: Users },
  ];

  return (
    <section id="publications" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-[0.15em] text-[#1E3A8A]",
              isAr && "font-[var(--font-noto-arabic)]"
            )}
          >
            {t.pubLabel}
          </span>

          <h2
            className={cn(
              "mt-3 text-2xl font-bold leading-tight text-foreground lg:text-4xl",
              isAr && "font-[var(--font-noto-arabic)]"
            )}
          >
            {t.pubTitle}
          </h2>

          <p
            className={cn(
              "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg",
              isAr && "font-[var(--font-noto-arabic)]"
            )}
          >
            {t.pubIntro}
          </p>
        </div>

        {/* Publication Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {publications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-[#1E3A8A]/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-[#1E3A8A] transition-colors group-hover:bg-[#1E3A8A] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3
                  className={cn(
                    "text-xl font-semibold text-foreground",
                    isAr && "font-[var(--font-noto-arabic)]"
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={cn(
                    "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
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
