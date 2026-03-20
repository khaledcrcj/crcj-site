"use client";

import Image from "next/image";
import { type Language } from "@/lib/translations";
import { useState } from "react";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="CRCJ" width={40} height={40} />
          <span className="text-sm font-semibold">
            {lang === "ar"
              ? "مركز القاهرة الإقليمي للعدالة الجنائية"
              : "CRCJ"}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded ${
              lang === "en" ? "bg-blue-700 text-white" : "bg-gray-200"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("ar")}
            className={`px-3 py-1 rounded ${
              lang === "ar" ? "bg-blue-700 text-white" : "bg-gray-200"
            }`}
          >
            AR
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-3 py-1 rounded bg-gray-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu */}
      {menuOpen && (
        <div className="border-t px-4 py-4">
          <div className="flex flex-col gap-2">
            <a href="#about">About</a>
            <a href="#areas">What We Do</a>
            <a href="#programs">Programs</a>
          </div>
        </div>
      )}
    </header>
  );
}
