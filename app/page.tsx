"use client";

import { useState } from "react";
import { type Language } from "@/lib/translations";
import { Header } from "@/components/crcj/header";

export default function Page() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <main className="min-h-screen bg-white">
      <Header lang={lang} setLang={setLang} />
    </main>
  );
}
