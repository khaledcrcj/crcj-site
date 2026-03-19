"use client";

import { useEffect, useState } from "react";

function SocialIcon({ href = "#", label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: "46px",
        height: "46px",
        backgroundColor: "#ffffff",
        color: "#1d4ed8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        textDecoration: "none",
        boxShadow: "0 4px 14px rgba(15,23,42,0.12)",
      }}
    >
      {children}
    </a>
  );
}

export default function Page() {
  const [lang, setLang] = useState("en");
  const [currentHero, setCurrentHero] = useState(0);
  const isAr = lang === "ar";

  const heroImages = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
    "/hero6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const t = {
    en: {
      navAbout: "About",
      navAreas: "What We Do",
      navPublications: "Publications",
      navPrograms: "Education & Training",
      navNewsletter: "Newsletter",
      navContact: "Contact",

      heroLabel: "Regional Platform for Criminal Justice, Security, and Rule of Law",
      heroTop: "Cairo • Egypt • Africa • Middle East",
      heroTitle: "Cairo Regional Center for Criminal Justice",
      heroSubtitle: "A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East",
      heroText:
        "CRCJ brings together education, training, and policy engagement to address evolving criminal justice challenges across Egypt, Africa, and the Middle East.",
      heroBtn1: "Explore Programs",
      heroBtn2: "Learn More",

      aboutLabel: "About CRCJ",
      aboutTitle: "A Cairo-based platform for criminal justice excellence",
      aboutText:
        "The Cairo Regional Center for Criminal Justice (CRCJ) is a Cairo-based regional platform established to advance criminal justice through education, professional training, policy engagement, and strategic cooperation. Serving Egypt, Africa, and the Middle East, CRCJ seeks to support justice-sector institutions, professionals, and partners through accredited credit-hour programs, non-credit professional training, and specialized capacity-building initiatives in areas of regional and international relevance.",

      h1: "Egypt",
      h1t: "Institutional base and headquarters",
      h2: "Africa",
      h2t: "Regional reach and future expansion",
      h3: "Middle East",
      h3t: "Strategic engagement and cooperation",
      h4: "Credit + Non-Credit",
      h4t: "Academic and professional pathways",

      areasLabel: "What We Do",
      areasTitle: "Areas of focus",
      areasIntro:
        "CRCJ operates across a set of core thematic areas addressing priority criminal justice challenges at the national, regional, and international levels.",

      fa1: "Transnational Crime and Security",
      fa1t:
        "Addressing organized crime, trafficking networks, and cross-border criminal activities through training, research, and international cooperation initiatives.",
      fa2: "Illicit Financial Flows and Anti-Corruption",
      fa2t:
        "Focusing on financial crime, money laundering, asset recovery, and anti-corruption frameworks to strengthen financial integrity and institutional resilience.",
      fa3: "Violent Extremism and Prevention",
      fa3t:
        "Supporting prevention strategies, rehabilitation frameworks, and policy responses to counter violent extremism and related threats.",
      fa4: "Cybercrime and Emerging Technologies",
      fa4t:
        "Addressing the criminal use of technology, including cybercrime, digital evidence, and the implications of emerging technologies such as artificial intelligence.",
      fa5: "Rule of Law and Access to Justice",
      fa5t:
        "Promoting legal frameworks, judicial capacity, and access to justice, including institutional strengthening and governance mechanisms.",
      fa6: "Security Governance and Risk Mitigation",
      fa6t:
        "Enhancing institutional preparedness, risk assessment, and governance approaches to address evolving security challenges.",

      pubLabel: "Publications and Insights",
      pubTitle: "Knowledge development and policy dialogue",
      pubIntro:
        "CRCJ contributes to knowledge development and policy dialogue through publications, research outputs, and analytical work addressing key criminal justice challenges.",
      pub1: "Research and Policy Papers",
      pub1t:
        "Analytical publications addressing emerging criminal justice issues, regional trends, and policy frameworks.",
      pub2: "Reports and Briefings",
      pub2t:
        "Targeted reports and thematic briefings supporting decision-makers, institutions, and practitioners.",
      pub3: "Events and Knowledge Exchange",
      pub3t:
        "Workshops, seminars, and expert dialogues fostering regional cooperation and knowledge sharing.",

      progLabel: "Education and Professional Training",
      progTitle: "Program pathways",
      progIntro:
        "CRCJ delivers accredited credit-hour and non-credit programs in criminal justice through structured academic and professional frameworks designed to support regional capacity and institutional development.",
      p1: "Accredited Credit-Hour Programs",
      p1t:
        "Accredited credit-hour programs delivered under approved academic partnership frameworks, designed to provide structured academic content in criminal justice and related fields. Academic credit is awarded in accordance with the requirements and accreditation of the relevant partner institution and the applicable program framework.",
      p2: "Non-Credit Professional Programs",
      p2t:
        "Non-credit professional programs, including executive education, short courses, and specialized training modules, designed to support practitioners, institutions, and sector stakeholders across the criminal justice ecosystem through targeted, practice-oriented learning.",
      p3: "Capacity Building and Specialized Training",
      p3t:
        "Capacity-building and specialized training initiatives developed to support institutional strengthening, regional cooperation, and operational effectiveness across justice, enforcement, and regulatory sectors, addressing emerging and priority criminal justice challenges.",
      progDisc:
        "Academic credit, certification, and any formal recognition are subject to the requirements, approval processes, and accreditation frameworks of the relevant partner institutions.",

      newsTitle: "Newsletter",
      newsText: "Receive updates straight into your mailbox.",
      newsPlaceholder: "Email Address",
      newsBtn: "Submit",

      talkTitle: "Talk to us",
      talkText: "Connect with us on our socials and keep up to date.",

      contactLabel: "Contact",
      contactTitle: "Connect with CRCJ",
      contactText:
        "For institutional partnerships, program participation, and general inquiries, please contact:",
      contactEmail: "info@crcj.org",
      contactLocation: "Cairo, Arab Republic of Egypt",

      footer1: "© 2026 Cairo Regional Center for Criminal Justice (CRCJ). All rights reserved.",
      footer2:
        "CRCJ is a regional platform dedicated to advancing criminal justice through education, training, and cooperation.",
      langEN: "EN",
      langAR: "AR",
    },

    ar: {
      navAbout: "حول المركز",
      navAreas: "مجالات العمل",
      navPublications: "المنشورات والرؤى",
      navPrograms: "التعليم والتدريب",
      navNewsletter: "النشرة الإخبارية",
      navContact: "اتصل بنا",

      heroLabel: "منصة إقليمية للعدالة الجنائية والأمن وسيادة القانون",
      heroTop: "القاهرة • مصر • أفريقيا • الشرق الأوسط",
      heroTitle: "المركز الإقليمي للعدالة الجنائية بالقاهرة",
      heroSubtitle: "مركز إقليمي للنهوض بالعدالة الجنائية في مصر وأفريقيا والشرق الأوسط",
      heroText:
        "يجمع مركز CRCJ بين التعليم والتدريب والمشاركة في السياسات لمعالجة تحديات العدالة الجنائية المتطورة في مصر وأفريقيا والشرق الأوسط.",
      heroBtn1: "استكشف البرامج",
      heroBtn2: "اعرف المزيد",

      aboutLabel: "حول CRCJ",
      aboutTitle: "منصة مقرها القاهرة للتميز في مجال العدالة الجنائية",
      aboutText:
        "يُعدّ المركز الإقليمي للعدالة الجنائية بالقاهرة منصةً إقليميةً مقرها القاهرة، أُنشئت للنهوض بالعدالة الجنائية من خلال التعليم والتدريب المهني والمشاركة في وضع السياسات والتعاون الاستراتيجي. ويسعى المركز، الذي يخدم مصر وأفريقيا والشرق الأوسط، إلى دعم مؤسسات قطاع العدالة والمهنيين والشركاء من خلال برامج معتمدة بساعات دراسية محددة، وبرامج تدريبية مهنية غير معتمدة، ومبادرات متخصصة لبناء القدرات في مجالات ذات أهمية إقليمية ودولية.",

      h1: "مصر",
      h1t: "القاعدة المؤسسية والمقر الرئيسي",
      h2: "أفريقيا",
      h2t: "النطاق الإقليمي والتوسع المستقبلي",
      h3: "الشرق الأوسط",
      h3t: "المشاركة والتعاون الاستراتيجي",
      h4: "معتمد + غير معتمد",
      h4t: "المسارات الأكاديمية والمهنية",

      areasLabel: "ما نقوم به",
      areasTitle: "مجالات التركيز",
      areasIntro:
        "يعمل CRCJ عبر مجموعة من المجالات الموضوعية الأساسية التي تتناول تحديات العدالة الجنائية ذات الأولوية على المستويات الوطنية والإقليمية والدولية.",

      fa1: "الجريمة والأمن عبر الحدود",
      fa1t:
        "التصدي للجريمة المنظمة وشبكات الاتجار والأنشطة الإجرامية العابرة للحدود من خلال التدريب والبحث ومبادرات التعاون الدولي.",
      fa2: "التدفقات المالية غير المشروعة ومكافحة الفساد",
      fa2t:
        "التركيز على الجرائم المالية وغسل الأموال واسترداد الأصول وأطر مكافحة الفساد لتعزيز النزاهة المالية والمرونة المؤسسية.",
      fa3: "التطرف العنيف والوقاية منه",
      fa3t:
        "دعم استراتيجيات الوقاية وأطر إعادة التأهيل والاستجابات السياساتية لمواجهة التطرف العنيف والتهديدات المرتبطة به.",
      fa4: "الجرائم الإلكترونية والتقنيات الناشئة",
      fa4t:
        "معالجة الاستخدام الإجرامي للتكنولوجيا، بما في ذلك الجرائم الإلكترونية والأدلة الرقمية وآثار التقنيات الناشئة مثل الذكاء الاصطناعي.",
      fa5: "سيادة القانون والوصول إلى العدالة",
      fa5t:
        "تعزيز الأطر القانونية والقدرات القضائية وإتاحة الوصول إلى العدالة، بما في ذلك تعزيز المؤسسات وآليات الحوكمة.",
      fa6: "حوكمة الأمن وتخفيف المخاطر",
      fa6t:
        "تعزيز الجاهزية المؤسسية وتقييم المخاطر ومقاربات الحوكمة لمعالجة التحديات الأمنية المتطورة.",

      pubLabel: "المنشورات والرؤى",
      pubTitle: "تطوير المعرفة والحوار السياساتي",
      pubIntro:
        "يسهم CRCJ في تطوير المعرفة والحوار السياساتي من خلال المنشورات ومخرجات البحوث والأعمال التحليلية التي تتناول أبرز تحديات العدالة الجنائية.",
      pub1: "أوراق بحثية وسياساتية",
      pub1t:
        "منشورات تحليلية تتناول قضايا العدالة الجنائية الناشئة والاتجاهات الإقليمية وأطر السياسات.",
      pub2: "التقارير والإحاطات",
      pub2t:
        "تقارير موجهة وموجزات موضوعية لدعم صناع القرار والمؤسسات والممارسين.",
      pub3: "الفعاليات وتبادل المعرفة",
      pub3t:
        "ورش عمل وندوات وحوارات خبراء لتعزيز التعاون الإقليمي وتبادل المعرفة.",

      progLabel: "التعليم والتدريب المهني",
      progTitle: "مسارات البرامج",
      progIntro:
        "يقدم CRCJ برامج معتمدة بساعات دراسية وبرامج غير معتمدة في مجال العدالة الجنائية من خلال أطر أكاديمية ومهنية منظمة، صُممت لدعم القدرات الإقليمية والتنمية المؤسسية.",
      p1: "برامج الساعات الدراسية المعتمدة",
      p1t:
        "برامج تُقدَّم في إطار شراكات أكاديمية معتمدة، وتهدف إلى توفير محتوى أكاديمي منظم في العدالة الجنائية والمجالات ذات الصلة. وتُمنح الساعات الدراسية وفقًا لمتطلبات واعتماد المؤسسة الشريكة ذات الصلة وإطار البرنامج المعمول به.",
      p2: "البرامج المهنية غير المعتمدة",
      p2t:
        "برامج مهنية غير معتمدة، تشمل التعليم التنفيذي والدورات القصيرة ووحدات التدريب المتخصصة، وتهدف إلى دعم الممارسين والمؤسسات وأصحاب المصلحة في منظومة العدالة الجنائية من خلال تعلم موجه وعملي.",
      p3: "بناء القدرات والتدريب المتخصص",
      p3t:
        "مبادرات لبناء القدرات والتدريب المتخصص، تم تطويرها لدعم تعزيز المؤسسات والتعاون الإقليمي والفعالية التشغيلية في قطاعات العدالة وإنفاذ القانون والتنظيم، ومعالجة التحديات الناشئة وذات الأولوية في مجال العدالة الجنائية.",
      progDisc:
        "تخضع الساعات المعتمدة والشهادات وأي صورة من صور الاعتراف الرسمي لمتطلبات وإجراءات الموافقة وأطر الاعتماد الخاصة بالمؤسسات الشريكة ذات الصلة.",

      newsTitle: "النشرة الإخبارية",
      newsText: "استلم التحديثات مباشرة في بريدك الإلكتروني.",
      newsPlaceholder: "البريد الإلكتروني",
      newsBtn: "إرسال",

      talkTitle: "تواصل معنا",
      talkText: "تابعنا عبر منصاتنا الاجتماعية وابقَ على اطلاع دائم.",

      contactLabel: "اتصل بنا",
      contactTitle: "تواصل مع CRCJ",
      contactText:
        "للاستفسارات المتعلقة بالشراكات المؤسسية، والمشاركة في البرامج، والاستفسارات العامة، يرجى التواصل عبر:",
      contactEmail: "info@crcj.org",
      contactLocation: "القاهرة، جمهورية مصر العربية",

      footer1: "© 2026 المركز الإقليمي للعدالة الجنائية بالقاهرة. جميع الحقوق محفوظة.",
      footer2: "CRCJ منصة إقليمية مخصصة للنهوض بالعدالة الجنائية من خلال التعليم والتدريب والتعاون.",
      langEN: "EN",
      langAR: "AR",
    },
  }[lang];

  const focusAreas = [
    { title: t.fa1, text: t.fa1t },
    { title: t.fa2, text: t.fa2t },
    { title: t.fa3, text: t.fa3t },
    { title: t.fa4, text: t.fa4t },
    { title: t.fa5, text: t.fa5t },
    { title: t.fa6, text: t.fa6t },
  ];

  const publications = [
    { title: t.pub1, text: t.pub1t },
    { title: t.pub2, text: t.pub2t },
    { title: t.pub3, text: t.pub3t },
  ];

  const programCards = [
    { title: t.p1, text: t.p1t },
    { title: t.p2, text: t.p2t },
    { title: t.p3, text: t.p3t },
  ];

  const dir = isAr ? "rtl" : "ltr";

  return (
    <main
      dir={dir}
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#0f172a",
        direction: dir,
      }}
    >
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "14px 20px",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
            <img src="/logo.png" alt="CRCJ Logo" style={{ height: "52px", maxWidth: "100%" }} />
            <div style={{ lineHeight: "1.25", minWidth: 0 }}>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "#2563eb",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                CRCJ
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#0f172a",
                  wordBreak: "break-word",
                }}
              >
                {isAr ? "المركز الإقليمي للعدالة الجنائية بالقاهرة" : "Cairo Regional Center for Criminal Justice"}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <nav style={{ display: "flex", gap: "16px", fontSize: "13px", flexWrap: "wrap" }}>
              <a href="#about" style={{ color: "#334155", textDecoration: "none" }}>{t.navAbout}</a>
              <a href="#areas" style={{ color: "#334155", textDecoration: "none" }}>{t.navAreas}</a>
              <a href="#publications" style={{ color: "#334155", textDecoration: "none" }}>{t.navPublications}</a>
              <a href="#programs" style={{ color: "#334155", textDecoration: "none" }}>{t.navPrograms}</a>
              <a href="#newsletter" style={{ color: "#334155", textDecoration: "none" }}>{t.navNewsletter}</a>
              <a href="#contact" style={{ color: "#334155", textDecoration: "none" }}>{t.navContact}</a>
            </nav>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => setLang("en")}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: lang === "en" ? "1px solid #1d4ed8" : "1px solid #cbd5e1",
                  backgroundColor: lang === "en" ? "#1d4ed8" : "#ffffff",
                  color: lang === "en" ? "#ffffff" : "#0f172a",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                {t.langEN}
              </button>
              <button
                onClick={() => setLang("ar")}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: lang === "ar" ? "1px solid #1d4ed8" : "1px solid #cbd5e1",
                  backgroundColor: lang === "ar" ? "#1d4ed8" : "#ffffff",
                  color: lang === "ar" ? "#ffffff" : "#0f172a",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                {t.langAR}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section
        style={{
          position: "relative",
          color: "#ffffff",
          padding: "90px 20px 85px 20px",
          overflow: "hidden",
          minHeight: "560px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {heroImages.map((img, index) => (
          <div
            key={img}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: currentHero === index ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
              transform: "scale(1.02)",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(15,23,42,0.86) 0%, rgba(29,78,216,0.82) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.10), transparent 30%), radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 25%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "36px",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                backgroundColor: "rgba(255,255,255,0.14)",
                fontSize: "13px",
                marginBottom: "22px",
                letterSpacing: "0.5px",
              }}
            >
              {t.heroLabel}
            </div>

            <div
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#bfdbfe",
                fontWeight: "700",
                marginBottom: "14px",
              }}
            >
              {t.heroTop}
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 50px)",
                lineHeight: "1.2",
                margin: 0,
                fontWeight: "700",
                maxWidth: "720px",
              }}
            >
              {t.heroTitle}
            </h1>

            <p
              style={{
                marginTop: "22px",
                fontSize: "clamp(18px, 3vw, 21px)",
                lineHeight: "1.8",
                color: "#dbeafe",
                maxWidth: "760px",
              }}
            >
              {t.heroSubtitle}
            </p>

            <p
              style={{
                marginTop: "16px",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#dbeafe",
                maxWidth: "760px",
              }}
            >
              {t.heroText}
            </p>

            <div style={{ marginTop: "30px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#programs"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                {t.heroBtn1}
              </a>

              <a
                href="#about"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "#ffffff",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                {t.heroBtn2}
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/logo.png"
              alt="CRCJ Logo"
              style={{
                width: "min(430px, 85%)",
                maxWidth: "100%",
                height: "auto",
                filter: "drop-shadow(0 18px 35px rgba(0,0,0,0.25))",
              }}
            />
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: "72px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {t.aboutLabel}
          </div>

          <h2 style={{ fontSize: "clamp(28px, 5vw, 38px)", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
            {t.aboutTitle}
          </h2>

          <p style={{ marginTop: "24px", fontSize: "18px", lineHeight: "1.9", color: "#475569", maxWidth: "940px" }}>
            {t.aboutText}
          </p>
        </div>
      </section>

      <section style={{ padding: "0 20px 72px 20px", backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            [t.h1, t.h1t],
            [t.h2, t.h2t],
            [t.h3, t.h3t],
            [t.h4, t.h4t],
          ].map((item) => (
            <div
              key={item[0]}
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div style={{ fontSize: "26px", fontWeight: "700", color: "#0f172a" }}>{item[0]}</div>
              <div style={{ marginTop: "10px", color: "#64748b", lineHeight: "1.7", fontSize: "15px" }}>
                {item[1]}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="areas"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          padding: "72px 20px",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 25%), radial-gradient(circle at bottom right, rgba(255,255,255,0.06), transparent 25%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#bfdbfe",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {t.areasLabel}
            </div>

            <h2 style={{ fontSize: "clamp(28px, 5vw, 38px)", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
              {t.areasTitle}
            </h2>

            <p style={{ marginTop: "18px", maxWidth: "860px", marginInline: "auto", color: "#dbeafe", lineHeight: "1.8", fontSize: "17px" }}>
              {t.areasIntro}
            </p>
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {focusAreas.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  padding: "24px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  color: "#ffffff",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "12px", fontSize: "20px", lineHeight: "1.35" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#dbeafe", lineHeight: "1.8", fontSize: "15px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" style={{ padding: "72px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {t.pubLabel}
          </div>

          <h2 style={{ fontSize: "clamp(28px, 5vw, 38px)", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
            {t.pubTitle}
          </h2>

          <p style={{ marginTop: "20px", fontSize: "17px", lineHeight: "1.8", color: "#475569", maxWidth: "940px" }}>
            {t.pubIntro}
          </p>

          <div
            style={{
              marginTop: "38px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {publications.map((item) => (
              <div
                key={item.title}
                style={{
                  border: "1px solid #e5e7eb",
                  padding: "28px",
                  borderRadius: "12px",
                  backgroundColor: "#f8fafc",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "22px", lineHeight: "1.35" }}>{item.title}</h3>
                <p style={{ margin: 0, lineHeight: "1.8", color: "#475569" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" style={{ padding: "72px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div
            style={{
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {t.progLabel}
          </div>

          <h2 style={{ fontSize: "clamp(28px, 5vw, 38px)", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
            {t.progTitle}
          </h2>

          <p style={{ marginTop: "20px", fontSize: "17px", lineHeight: "1.8", color: "#475569", maxWidth: "940px" }}>
            {t.progIntro}
          </p>

          <div
            style={{
              marginTop: "38px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {programCards.map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1px solid #e5e7eb",
                  padding: "28px",
                  borderRadius: "12px",
                  backgroundColor: "#f8fafc",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "22px", lineHeight: "1.35" }}>{card.title}</h3>
                <p style={{ lineHeight: "1.8", color: "#475569", margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "28px", fontSize: "14px", color: "#64748b", lineHeight: "1.8" }}>
            {t.progDisc}
          </p>
        </div>
      </section>

      <section
        id="newsletter"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.10), transparent 18%), radial-gradient(circle at 85% 30%, rgba(255,255,255,0.08), transparent 16%), radial-gradient(circle at 25% 85%, rgba(255,255,255,0.07), transparent 18%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ padding: "60px 20px" }}>
            <h2 style={{ fontSize: "30px", margin: 0, marginBottom: "8px" }}>{t.newsTitle}</h2>
            <p style={{ fontSize: "16px", margin: 0, marginBottom: "22px", color: "#eaf4ff" }}>
              {t.newsText}
            </p>

            <input
              type="email"
              placeholder={t.newsPlaceholder}
              style={{
                width: "100%",
                maxWidth: "440px",
                padding: "16px",
                borderRadius: "6px",
                border: "none",
                marginBottom: "14px",
                boxSizing: "border-box",
              }}
            />

            <button
              style={{
                width: "100%",
                maxWidth: "440px",
                padding: "14px",
                borderRadius: "6px",
                border: "none",
                fontWeight: "700",
                backgroundColor: "#f3f4f6",
                color: "#111827",
                cursor: "pointer",
              }}
            >
              {t.newsBtn}
            </button>
          </div>

          <div
            style={{
              padding: "60px 20px",
              borderLeft: isAr ? "none" : "2px solid rgba(255,255,255,0.25)",
              borderRight: isAr ? "2px solid rgba(255,255,255,0.25)" : "none",
            }}
          >
            <h2 style={{ fontSize: "30px", margin: 0, marginBottom: "8px" }}>{t.talkTitle}</h2>
            <p style={{ margin: 0, marginBottom: "24px", color: "#eaf4ff" }}>
              {t.talkText}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
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
      </section>

      <section
        id="contact"
        style={{
          padding: "72px 20px",
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              color: "#93c5fd",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {t.contactLabel}
          </div>

          <h2 style={{ fontSize: "clamp(28px, 5vw, 38px)", marginTop: "14px", marginBottom: 0 }}>
            {t.contactTitle}
          </h2>

          <p style={{ marginTop: "20px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.8" }}>
            {t.contactText}
          </p>

          <p style={{ fontSize: "18px", color: "#cbd5e1", marginTop: "18px" }}>{t.contactEmail}</p>
          <p style={{ fontSize: "18px", color: "#cbd5e1" }}>{t.contactLocation}</p>
        </div>
      </section>

      <footer
        style={{
          padding: "24px 20px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          lineHeight: "1.8",
        }}
      >
        <div>{t.footer1}</div>
        <div>{t.footer2}</div>
      </footer>
    </main>
  );
}
