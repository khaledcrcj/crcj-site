export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#ffffff", color: "#0f172a" }}>
      {/* HEADER */}
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
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img src="/logo.png" alt="CRCJ Logo" style={{ height: "60px" }} />
            <div style={{ lineHeight: "1.3" }}>
              <div style={{ fontSize: "12px", letterSpacing: "2px", color: "#2563eb", fontWeight: "700" }}>
                CRCJ
              </div>
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a" }}>
                Cairo Regional Center for Criminal Justice
              </div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: "28px", fontSize: "14px", flexWrap: "wrap" }}>
            <a href="#about" style={{ color: "#374151", textDecoration: "none" }}>About</a>
            <a href="#areas" style={{ color: "#374151", textDecoration: "none" }}>What We Do</a>
            <a href="#programs" style={{ color: "#374151", textDecoration: "none" }}>Programs</a>
            <a href="#contact" style={{ color: "#374151", textDecoration: "none" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          color: "#ffffff",
          padding: "120px 40px 110px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
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
                letterSpacing: "0.5px",
              }}
            >
              Regional Platform for Criminal Justice Education and Cooperation
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
              Cairo • Egypt • Africa • Middle East
            </div>

            <h1 style={{ fontSize: "50px", lineHeight: "1.2", margin: 0, fontWeight: "700", maxWidth: "720px" }}>
              Cairo Regional Center for Criminal Justice
            </h1>

            <p style={{ marginTop: "22px", fontSize: "21px", lineHeight: "1.8", color: "#dbeafe", maxWidth: "760px" }}>
              A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East
            </p>

            <p style={{ marginTop: "12px", direction: "rtl", fontSize: "18px", color: "#e2e8f0", maxWidth: "760px" }}>
              مركز إقليمي لتعزيز العدالة الجنائية في مصر وأفريقيا والشرق الأوسط
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
                Explore Programs
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
                Learn More
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/logo.png"
              alt="CRCJ Logo"
              style={{
                width: "430px",
                maxWidth: "100%",
                height: "auto",
                filter: "drop-shadow(0 18px 35px rgba(0,0,0,0.25))",
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "95px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ color: "#2563eb", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
            ABOUT CRCJ
          </div>

          <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: 0 }}>
            A Cairo-based platform for criminal justice excellence
          </h2>

          <p style={{ marginTop: "24px", fontSize: "18px", lineHeight: "1.9", color: "#475569", maxWidth: "920px" }}>
            The Cairo Regional Center for Criminal Justice (CRCJ) is a regional platform dedicated to advancing
            criminal justice education, professional training, strategic cooperation, and policy dialogue. Based in Cairo,
            the Center is positioned to serve Egypt, Africa, and the Middle East through structured academic delivery,
            executive education, and specialized capacity-building initiatives.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section style={{ padding: "0 40px 95px 40px", backgroundColor: "#ffffff" }}>
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
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "24px",
                boxShadow: "0 1px 2px rgba(15,23,42,0.03)",
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

      {/* WHAT WE DO */}
      <section id="areas" style={{ backgroundColor: "#f8fafc", padding: "95px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#2563eb", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
              WHAT WE DO
            </div>

            <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: 0 }}>
              Areas of focus
            </h2>
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Transnational Crime and Security",
              "Illicit Financial Flows and Anti-Corruption",
              "Violent Extremism and Prevention",
              "Cybercrime and Emerging Technologies",
              "Rule of Law and Access to Justice",
              "Security Governance and Risk Mitigation",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  fontWeight: "600",
                  boxShadow: "0 1px 2px rgba(15,23,42,0.03)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: "95px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ color: "#2563eb", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
            EDUCATION AND PROFESSIONAL TRAINING
          </div>

          <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: 0 }}>
            Program pathways
          </h2>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid #e5e7eb",
                padding: "28px",
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "14px" }}>Accredited Credit-Hour Programs</h3>
              <p style={{ lineHeight: "1.8", color: "#475569", margin: 0 }}>
                Programs delivered under approved academic partnership frameworks, offering credit hours recognized
                subject to the requirements and accreditation of the relevant partner institution.
              </p>
            </div>

            <div
              style={{
                border: "1px solid #e5e7eb",
                padding: "28px",
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "14px" }}>Non-Credit Professional Programs</h3>
              <p style={{ lineHeight: "1.8", color: "#475569", margin: 0 }}>
                Executive education, short courses, and specialized professional training tailored to criminal justice
                practitioners, institutions, and sector stakeholders.
              </p>
            </div>

            <div
              style={{
                border: "1px solid #e5e7eb",
                padding: "28px",
                borderRadius: "12px",
                backgroundColor: "#f8fafc",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "14px" }}>Capacity Building and Specialized Training</h3>
              <p style={{ lineHeight: "1.8", color: "#475569", margin: 0 }}>
                Targeted programs supporting institutional development, regional cooperation, and operational readiness
                across justice and enforcement sectors.
              </p>
            </div>
          </div>

          <p style={{ marginTop: "28px", fontSize: "14px", color: "#64748b", lineHeight: "1.8" }}>
            Academic credit, certification, and recognition are subject to the requirements and approval of the relevant
            accredited partner institutions and applicable program frameworks.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "95px 40px", backgroundColor: "#0f172a", color: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#93c5fd", fontSize: "13px", fontWeight: "700", letterSpacing: "1px" }}>
            CONTACT
          </div>

          <h2 style={{ fontSize: "36px", marginTop: "14px", marginBottom: 0 }}>
            Connect with CRCJ
          </h2>

          <p style={{ marginTop: "20px", fontSize: "18px", color: "#cbd5e1" }}>info@crcj.org</p>
          <p style={{ fontSize: "18px", color: "#cbd5e1" }}>Cairo, Egypt</p>
        </div>
      </section>

      {/* NEWSLETTER / TALK TO US */}
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
          padding: "25px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
          backgroundColor: "#ffffff",
        }}
      >
        © 2026 Cairo Regional Center for Criminal Justice (CRCJ)
      </footer>
    </main>
  );
}
