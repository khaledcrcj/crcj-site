export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937", backgroundColor: "#f8fafc" }}>
      {/* Top Bar */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "18px 40px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", letterSpacing: "1.5px", color: "#2563eb", fontWeight: "700" }}>
              CRCJ
            </div>
            <div style={{ fontSize: "20px", fontWeight: "700", color: "#111827" }}>
              Cairo Regional Center for Criminal Justice
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "14px",
              color: "#4b5563",
              flexWrap: "wrap",
            }}
          >
            <a href="#about" style={{ textDecoration: "none", color: "#4b5563" }}>About</a>
            <a href="#areas" style={{ textDecoration: "none", color: "#4b5563" }}>Core Areas</a>
            <a href="#programs" style={{ textDecoration: "none", color: "#4b5563" }}>Programs</a>
            <a href="#contact" style={{ textDecoration: "none", color: "#4b5563" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#ffffff",
          padding: "90px 40px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "850px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                backgroundColor: "rgba(255,255,255,0.12)",
                borderRadius: "999px",
                fontSize: "13px",
                marginBottom: "22px",
              }}
            >
              Regional Academic and Professional Platform
            </div>

            <h1
              style={{
                fontSize: "46px",
                lineHeight: "1.2",
                margin: 0,
                fontWeight: "700",
              }}
            >
              Cairo Regional Center for Criminal Justice (CRCJ)
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.7",
                marginTop: "22px",
                color: "#dbeafe",
                maxWidth: "900px",
              }}
            >
              A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East
            </p>

            <p
              style={{
                marginTop: "16px",
                fontSize: "19px",
                color: "#e5e7eb",
                direction: "rtl",
              }}
            >
              مركز إقليمي لتعزيز العدالة الجنائية في مصر وأفريقيا والشرق الأوسط
            </p>

            <div style={{ marginTop: "30px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#about"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#111827",
                  textDecoration: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Learn More
              </a>

              <a
                href="#contact"
                style={{
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "80px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "900px" }}>
            <div style={{ color: "#2563eb", fontWeight: "700", fontSize: "14px", marginBottom: "12px" }}>
              ABOUT CRCJ
            </div>
            <h2 style={{ fontSize: "34px", margin: 0, color: "#111827" }}>
              A Cairo-based regional platform for criminal justice excellence
            </h2>
            <p style={{ marginTop: "22px", lineHeight: "1.9", fontSize: "18px", color: "#4b5563" }}>
              The Cairo Regional Center for Criminal Justice (CRCJ) is envisioned as a regional platform dedicated to
              advancing criminal justice education, executive training, policy dialogue, and international cooperation.
              The Center aims to serve Egypt, Africa, and the Middle East through high-quality academic and professional
              programming, strategic partnerships, and specialized capacity-building initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section style={{ padding: "0 40px 80px 40px", backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            ["Egypt", "Headquarters and institutional base"],
            ["Africa", "Regional reach and future expansion"],
            ["Middle East", "Strategic cooperation and training"],
            ["Academic + Executive", "Credit and non-credit programming"],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "24px",
              }}
            >
              <div style={{ fontSize: "24px", fontWeight: "700", color: "#111827" }}>{title}</div>
              <div style={{ marginTop: "10px", color: "#6b7280", lineHeight: "1.6", fontSize: "15px" }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Areas */}
      <section id="areas" style={{ padding: "80px 40px", backgroundColor: "#f3f4f6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: "#2563eb", fontWeight: "700", fontSize: "14px", marginBottom: "12px" }}>
              CORE AREAS
            </div>
            <h2 style={{ fontSize: "34px", margin: 0, color: "#111827" }}>Priority areas of focus</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Accredited Academic Programs",
              "Executive Education",
              "Judicial & Law Enforcement Training",
              "Research & Publications",
              "Regional Partnerships",
              "Capacity Building & Professional Development",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "24px",
                  fontWeight: "600",
                  color: "#111827",
                  minHeight: "90px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" style={{ padding: "80px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px" }}>
            <div style={{ color: "#2563eb", fontWeight: "700", fontSize: "14px", marginBottom: "12px" }}>
              PROGRAMS
            </div>
            <h2 style={{ fontSize: "34px", margin: 0, color: "#111827" }}>Academic and professional pathways</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Accredited Academic Programs",
                text: "Structured academic offerings delivered under approved partnership and accreditation frameworks.",
              },
              {
                title: "Executive and Professional Training",
                text: "Short and medium-format training programs tailored to criminal justice professionals and institutions.",
              },
              {
                title: "Specialized Regional Courses",
                text: "Focused programs on transnational crime, judicial cooperation, anti-corruption, and related themes.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "26px",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "14px", color: "#111827" }}>{card.title}</h3>
                <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.8" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 40px", backgroundColor: "#0f172a", color: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#93c5fd", fontWeight: "700", fontSize: "14px", marginBottom: "12px" }}>
            CONTACT
          </div>
          <h2 style={{ fontSize: "34px", margin: 0 }}>Get in touch</h2>
          <p style={{ marginTop: "20px", color: "#cbd5e1", fontSize: "18px" }}>info@crcj.org</p>
          <p style={{ color: "#cbd5e1", fontSize: "18px" }}>Cairo, Egypt</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          padding: "24px 40px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        © 2026 Cairo Regional Center for Criminal Justice (CRCJ)
      </footer>
    </main>
  );
}
