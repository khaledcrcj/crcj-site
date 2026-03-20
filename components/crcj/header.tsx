"use client";

import Image from "next/image";
import { translations, type Language } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { Menu, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const t = translations[lang];
  const isAr = lang === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = [
    { href: "#about", label: t.navAbout },
    { href: "#areas", label: t.navAreas },
    { href: "#publications", label: t.navPublications },
    { href: "#programs", label: t.navPrograms },
    { href: "#newsletter", label: t.navNewsletter },
    { href: "#contact", label: t.navContact },
  ];

  const searchTargets = useMemo(
    () => [
      { href: "#about", keywords: ["about", "mission", "vision", "عن", "من نحن"] },
      { href: "#areas", keywords: ["areas", "focus", "themes", "مجالات", "محاور"] },
      { href: "#publications", keywords: ["publications", "research", "reports", "منشورات", "أبحاث"] },
      { href: "#programs", keywords: ["programs", "training", "courses", "برامج", "تدريب"] },
      { href: "#newsletter", keywords: ["newsletter", "news", "updates", "نشرة", "أخبار"] },
      { href: "#contact", keywords: ["contact", "email", "location", "تواصل", "اتصال"] },
    ],
    []
  );

  const runSearch = () => {
    const query = search.trim().toLowerCase();
    if (!query) return;

    const match = searchTargets.find((item) =>
      item.keywords.some((keyword) => keyword.includes(query) || query.includes(keyword))
    );

    if (match) {
      window.location.hash = match.href;
      setMobileMenuOpen(false);
      setSearch("");
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runSearch();
    }
  };

  const changeLang = (value: Language) => {
    setLang(value);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        {/* Logo */}
        <a href="#" className="flex min-w-0 shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="CRCJ Logo"
            width={44}
            height={44}
            className="h-10 w-auto"
          />
          <div className="hidden min-w-0 md:block">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
              CRCJ
            </div>
            <div
              className={cn(
                "max-w-[260px] truncate text-sm font-semibold text-foreground xl:max-w-none",
                isAr && "font-[var(--font-noto-arabic)]"
              )}
            >
              {isAr
                ? "مركز القاهرة الإقليمي للعدالة الجنائية"
                : "Cairo Regional Center for Criminal Justice"}
            </div>
          </div>
        </a>

        {/* Search */}
        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex w-full max-w-xs items-center rounded-md border border-border bg-white px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder={isAr ? "ابحث..." : "Search..."}
              className={cn(
                "ml-2 w-full bg-transparent text-sm text-foreground outline-none",
                isAr && "mr-2 ml-0 font-[var(--font-noto-arabic)]"
              )}
            />
          </div>
        </div>

        {/* Language + Menu */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="relative z-[60] flex overflow-hidden rounded-md border border-border bg-white">
            <button
              type="button"
              onMouseDown={() => changeLang("en")}
              onClick={() => changeLang("en")}
              className={cn(
                "px-3 py-1.5 text-sm font-semibold transition-colors",
                lang === "en"
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-white text-foreground"
              )}
            >
              EN
            </button>
            <button
              type="button"
              onMouseDown={() => changeLang("ar")}
              onClick={() => changeLang("ar")}
              className={cn(
                "px-3 py-1.5 text-sm font-semibold transition-colors",
                lang === "ar"
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-white text-foreground"
              )}
            >
              AR
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4">
          <div className="mb-4 flex gap-2 md:hidden">
            <div className="flex flex-1 items-center rounded-md border border-border bg-white px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder={isAr ? "ابحث..." : "Search..."}
                className={cn(
                  "ml-2 w-full bg-transparent text-sm text-foreground outline-none",
                  isAr && "mr-2 ml-0 font-[var(--font-noto-arabic)]"
                )}
              />
            </div>

            <button
              type="button"
              onClick={runSearch}
              className={cn(
                "rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white",
                isAr && "font-[var(--font-noto-arabic)]"
              )}
            >
              {isAr ? "بحث" : "Go"}
            </button>
          </div>

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
