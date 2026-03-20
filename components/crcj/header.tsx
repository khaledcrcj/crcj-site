"use client";

import Image from "next/image";
import { type Language } from "@/lib/translations";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  return (
    <div style={{ padding: "20px", background: "white", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
      {/* LEFT: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Image src="/logo.png" alt="CRCJ" width={40} height={40} />
        <span style={{ fontWeight: 700 }}>
          {lang === "ar"
            ? "مركز القاهرة الإقليمي للعدالة الجنائية"
            : "CRCJ"}
        </span>
      </div>

      {/* RIGHT: Controls */}
      <div>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ar")}>AR</button>
        <button onClick={() => alert("Menu works")}>Menu</button>
      </div>
    </div>
  );
}
