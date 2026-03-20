"use client";

import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface NewsletterProps {
  lang: Language;
}

function SocialIcon({ href = "#", label, children }: { href?: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      {children}
    </a>
  );
}

export function Newsletter({ lang }: NewsletterProps) {
  const t = translations[lang];
  const isAr = lang === "ar";

  return (
    <section id="newsletter" className="relative overflow-hidden bg-blue-700 text-white">
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Newsletter Form */}
          <div className="px-4 py-12 lg:border-r lg:border-white/20 lg:px-8 lg:py-16">
            <h2 className={cn(
              "text-2xl font-bold lg:text-3xl",
              isAr && "font-[var(--font-noto-arabic)]"
            )}>
              {t.newsTitle}
            </h2>
            <p className={cn(
              "mt-2 text-white/80",
              isAr && "font-[var(--font-noto-arabic)]"
            )}>
              {t.newsText}
            </p>

            <form className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={t.newsPlaceholder}
                className={cn(
                  "flex-1 rounded-md border-0 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50",
                  isAr && "font-[var(--font-noto-arabic)]"
                )}
              />
              <button
                type="submit"
                className={cn(
                  "rounded-md bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-400",
                  isAr && "font-[var(--font-noto-arabic)]"
                )}
              >
                {t.newsBtn}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="border-t border-white/20 px-4 py-12 lg:border-t-0 lg:px-8 lg:py-16">
            <h2 className={cn(
              "text-2xl font-bold lg:text-3xl",
              isAr && "font-[var(--font-noto-arabic)]"
            )}>
              {t.talkTitle}
            </h2>
            <p className={cn(
              "mt-2 text-white/80",
              isAr && "font-[var(--font-noto-arabic)]"
            )}>
              {t.talkText}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <SocialIcon label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.2 4.8 12 4.8 12 4.8s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.8L6.2 3.9H4.3L17.8 20Z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.6V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.6v8h2.9Z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5a1.72 1.72 0 1 0 0-3.44 1.72 1.72 0 0 0 0 3.44ZM5.5 9.75h2.9V19h-2.9V9.75Zm4.72 0h2.78v1.26h.04c.39-.73 1.33-1.5 2.73-1.5 2.92 0 3.46 1.92 3.46 4.42V19h-2.9v-4.48c0-1.07-.02-2.45-1.49-2.45-1.5 0-1.73 1.17-1.73 2.37V19h-2.89V9.75Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
