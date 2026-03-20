"use client";

import Image from "next/image";
import { type Language } from "@/lib/translations";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  return (
    <div
      style={{
        padding: "16px 24px",
        background: "white",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Image src="/logo.png" alt="CRCJ" width={40} height={40} />
        <span style={{ fontWeight: 700, fontSize: "20px" }}>
          {lang === "ar"
            ? "مركز القاهرة الإقليمي للعدالة الجنائية"
            : "CRCJ"}
        </span>
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          type="button"
          onClick={() => setLang("en")}
          style={{
            padding: "10px 16px",
            background: lang === "en" ? "#1E3A8A" : "#eee",
            color: lang === "en" ? "white" : "black",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => setLang("ar")}
          style={{
            padding: "10px 16px",
            background: lang === "ar" ? "#1E3A8A" : "#eee",
            color: lang === "ar" ? "white" : "black",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          AR
        </button>

        <button
          type="button"
          onClick={() => alert("Menu works")}
          style={{
            padding: "10px 16px",
            background: "#eee",
            color: "black",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Menu
        </button>
      </div>
    </div>
  );
}
