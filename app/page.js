export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", color: "#0f172a" }}>
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
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
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img src="/logo.png" alt="CRCJ Logo" style={{ height: "58px" }} />
            <div style={{ lineHeight: "1.3" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#2563eb", fontWeight: "700" }}>
                CRCJ
              </div>
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a" }}>
                Cairo Regional Center for Criminal Justice
              </div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "14px" }}>
            <a href="#about" style={{ textDecoration: "none", color: "#475569" }}>About</a>
            <a href="#focus" style={{ textDecoration: "none", color: "#475569" }}>Focus Areas</a>
            <a href="#programs" style={{ textDecoration: "none", color: "#475569" }}>Programs</a>
            <a href="#contact" style={{ textDecoration: "none", color: "#475569" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          color: "#ffffff",
          padding: "110px 40px 100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
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
                marginBottom: "24px",
              }}
            >
              Regional Academic and Professional Platform
            </div>

            <h1 style={{ fontSize: "48px", lineHeight: "1.2", margin: 0, fontWeight: "700" }}>
              Cairo Regional Center for Criminal Justice
            </h1>

            <p style={{ marginTop: "22px", fontSize: "22px", lineHeight: "1.7", color: "#dbeafe" }}>
              A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East
            </p>

            <p style={{ marginTop: "14px", fontSize: "19px", direction: "rtl", color: "#e2e8f0" }}>
              مركز إقليمي لتعزيز العدالة الجنائية في مصر وأفريقيا والشرق الأوسط
            </p>

            <div style={{ marginTop: "32px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#about"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  textDecoration: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "700",
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
                  fontWeight: "700",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/logo.png"
              alt="CRCJ Logo"
              style={{
                maxWidth: "100%",
                width: "320px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "90px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ color: "#2563eb", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
            ABOUT CRCJ
          </div>
          <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: "0" }}>
            A Cairo-based platform for criminal justice excellence
          </h2>
          <p style={{ marginTop: "24px", maxWidth: "920px", fontSize: "18px", lineHeight: "1.9", color: "#475569" }}>
            The Cairo Regional Center for Criminal Justice (CRCJ) is envisioned as a regional platform dedicated to
            criminal justice education, professional training, strategic cooperation, and policy dialogue. Based in Cairo,
            the Center is positioned to serve Egypt, Africa, and the Middle East through academic programming, executive
            education, and specialized capacity-building initiatives.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section style={{ padding: "0 40px 90px 40px", backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            ["Egypt", "Institutional base and headquarters"],
            ["Africa", "Regional reach and future expansion"],
            ["Middle East", "Strategic engagement and cooperation"],
            ["Academic + Professional", "Credit and non-credit pathways"],
          ].map((item) => (
            <div
              key={item[0]}
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
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

      {/* FOCUS */}
      <section id="focus" style={{ padding: "90px 40px", backgroundColor: "#f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#2563eb", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
              FOCUS AREAS
            </div>
            <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: "0" }}>
              Core areas of activity
            </h2>
          </div>

          <div
            style={{
              marginTop: "38px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Criminal Justice Education",
              "Executive and Professional Training",
              "Judicial and Law Enforcement Cooperation",
              "Research and Publications",
              "Regional Partnerships",
              "Capacity Building and Policy Dialogue",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "24px",
                  fontWeight: "700",
                  color: "#0f172a",
                  minHeight: "88px",
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

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: "90px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ color: "#2563eb", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
            PROGRAMS
          </div>
          <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: "0" }}>
            Academic and professional pathways
          </h2>

          <div
            style={{
              marginTop: "36px",
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
                title: "Executive Education",
                text: "Short and medium-format professional programs tailored to criminal justice stakeholders and institutions.",
              },
              {
                title: "Specialized Regional Courses",
                text: "Focused offerings on judicial cooperation, organized crime, anti-corruption, cybercrime, and related themes.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "26px",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "21px", color: "#0f172a" }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0, lineHeight: "1.8", color: "#64748b" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "90px 40px", backgroundColor: "#0f172a", color: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#93c5fd", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
            CONTACT
          </div>
          <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: "0" }}>
            Connect with CRCJ
          </h2>
          <p style={{ marginTop: "20px", fontSize: "18px", color: "#cbd5e1" }}>info@crcj.org</p>
          <p style={{ fontSize: "18px", color: "#cbd5e1" }}>Cairo, Egypt</p>
        </div>
      </section>

      {/* NEWSLETTER + SOCIAL */}
      <section style={{ backgroundColor: "#1177c9", color: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <div style={{ padding: "50px 40px" }}>
            <h2 style={{ fontSize: "28px", margin: 0, marginBottom: "8px" }}>Newsletter</h2>
            <p style={{ fontSize: "16px", margin: 0, marginBottom: "22px", color: "#eaf4ff" }}>
              Receive updates straight into your mailbox.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "16px 18px",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                marginBottom: "18px",
                boxSizing: "border-box",
              }}
            />

            <button
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "14px 18px",
                backgroundColor: "#f3f4f6",
                color: "#111827",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>

          <div
            style={{
              padding: "50px 40px",
              borderLeft: "2px solid rgba(255,255,255,0.28)",
            }}
          >
            <h2 style={{ fontSize: "28px", margin: 0, marginBottom: "8px" }}>Talk to us</h2>
            <p style={{ fontSize: "16px", margin: 0, marginBottom: "26px", color: "#eaf4ff" }}>
              Connect with us on our socials and keep up to date.
            </p>

            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
              {["▶", "X", "f", "in", "●●"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff",
                    color: "#1177c9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e2e8f0",
          padding: "24px 40px",
          textAlign: "center",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        © 2026 Cairo Regional Center for Criminal Justice (CRCJ)
      </footer>
    </main>
  );
}
