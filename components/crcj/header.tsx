"use client";

import Image from "next/image";
import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const t = translations[lang];
  const isAr = lang === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t.navAbout },
    { href: "#areas", label: t.navAreas },
    { href: "#publications", label: t.navPublications },
    { href: "#programs", label: t.navPrograms },
    { href: "#newsletter", label: t.navNewsletter },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">

        {/* Logo */}
        <a href="#" className="flex min-w-0 shrink-0 items-center gap-3">
          <Image
            src="/crcj_logo_traced.svg"
            alt="CRCJ Logo"
            width={56}
            height={56}
            className="h-12 w-auto lg:h-14"
            priority
          />

          <div className="hidden min-w-0 sm:block">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
              CRCJ
            </div>

            <div
              className={cn(
                "text-sm font-semibold text-foreground lg:text-base leading-tight",
                isAr && "font-[var(--font-noto-arabic)]"
              )}
            >
              {isAr
                ? "مركز القاهرة الإقليمي للعدالة الجنائية"
                : "Cairo Regional Center for Criminal Justice"}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                isAr && "font-[var(--font-noto-arabic)]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Switch + Mobile Menu */}
        <div className="relative z-20 flex shrink-0 items-center gap-3">
          
          {/* Language Switch */}
          <div className="flex overflow-hidden rounded-md border border-border bg-white">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-3 py-1.5 text-sm font-semibold transition-colors",
                lang === "en"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-foreground hover:bg-muted"
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("ar")}
              className={cn(
                "px-3 py-1.5 text-sm font-semibold transition-colors",
                lang === "ar"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-foreground hover:bg-muted"
              )}
            >
              AR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isAr && "font-[var(--font-noto-arabic)]"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
