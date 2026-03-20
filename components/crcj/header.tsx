"use client";

import { type Language } from "@/lib/translations";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  return (
    <div style={{ padding: "20px", background: "white", borderBottom: "1px solid #ddd" }}>
      <span style={{ marginRight: "20px", fontWeight: 700 }}>
        {lang === "ar" ? "العربية" : "English"}
      </span>

      <button
        type="button"
        onClick={() => setLang("en")}
        style={{
          marginRight: "10px",
          padding: "10px 16px",
          background: lang === "en" ? "#1E3A8A" : "#eee",
          color: lang === "en" ? "white" : "black",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("ar")}
        style={{
          marginRight: "10px",
          padding: "10px 16px",
          background: lang === "ar" ? "#1E3A8A" : "#eee",
          color: lang === "ar" ? "white" : "black",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
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
        }}
      >
        Menu
      </button>
    </div>
  );
}
