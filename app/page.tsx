"use client";

import { useState } from "react";
import { type Language } from "@/lib/translations";
import { Header } from "@/components/crcj/header";
import { Hero } from "@/components/crcj/hero";
import { About } from "@/components/crcj/about";
import { FocusAreas } from "@/components/crcj/focus-areas";
import { Publications } from "@/components/crcj/publications";
import { Programs } from "@/components/crcj/programs";
import { Newsletter } from "@/components/crcj/newsletter";
import { Contact } from "@/components/crcj/contact";
import { Footer } from "@/components/crcj/footer";

export default function Page() {
  const [lang, setLang] = useState<Language>("en");
  const isAr = lang === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={isAr ? "font-[var(--font-noto-arabic)]" : "font-sans"}
    >
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <FocusAreas lang={lang} />
      <Publications lang={lang} />
      <Programs lang={lang} />
      <Newsletter lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
