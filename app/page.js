export default function Page() {
  const focusAreas = [
    {
      title: "Transnational Crime and Security",
      text: "Addressing organized crime, trafficking networks, and cross-border criminal activities through training, research, and international cooperation initiatives.",
    },
    {
      title: "Illicit Financial Flows and Anti-Corruption",
      text: "Focusing on financial crime, money laundering, asset recovery, and anti-corruption frameworks to strengthen financial integrity and institutional resilience.",
    },
    {
      title: "Violent Extremism and Prevention",
      text: "Supporting prevention strategies, rehabilitation frameworks, and policy responses to counter violent extremism and related threats.",
    },
    {
      title: "Cybercrime and Emerging Technologies",
      text: "Addressing the criminal use of technology, including cybercrime, digital evidence, and the implications of emerging technologies such as artificial intelligence.",
    },
    {
      title: "Rule of Law and Access to Justice",
      text: "Promoting legal frameworks, judicial capacity, and access to justice, including institutional strengthening and governance mechanisms.",
    },
    {
      title: "Security Governance and Risk Mitigation",
      text: "Enhancing institutional preparedness, risk assessment, and governance approaches to address evolving security challenges.",
    },
  ];

  const publications = [
    {
      title: "Research and Policy Papers",
      text: "Analytical publications addressing emerging criminal justice issues, regional trends, and policy frameworks.",
    },
    {
      title: "Reports and Briefings",
      text: "Targeted reports and thematic briefings supporting decision-makers, institutions, and practitioners.",
    },
    {
      title: "Events and Knowledge Exchange",
      text: "Workshops, seminars, and expert dialogues fostering regional cooperation and knowledge sharing.",
    },
  ];

  const programCards = [
    {
      title: "Accredited Credit-Hour Programs",
      text: "Accredited credit-hour programs delivered under approved academic partnership frameworks, designed to provide structured academic content in criminal justice and related fields. Academic credit is awarded in accordance with the requirements and accreditation of the relevant partner institution and the applicable program framework.",
    },
    {
      title: "Non-Credit Professional Programs",
      text: "Non-credit professional programs, including executive education, short courses, and specialized training modules, designed to support practitioners, institutions, and sector stakeholders across the criminal justice ecosystem through targeted, practice-oriented learning.",
    },
    {
      title: "Capacity Building and Specialized Training",
      text: "Capacity-building and specialized training initiatives developed to support institutional strengthening, regional cooperation, and operational effectiveness across justice, enforcement, and regulatory sectors, addressing emerging and priority criminal justice challenges.",
    },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#ffffff", color: "#0f172a" }}>
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "16px 36px",
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
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img src="/logo.png" alt="CRCJ Logo" style={{ height: "58px" }} />
            <div style={{ lineHeight: "1.25" }}>
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  color: "#2563eb",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                CRCJ
              </div>
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a" }}>
                Cairo Regional Center for Criminal Justice
              </div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: "24px", fontSize: "14px", flexWrap: "wrap" }}>
            <a href="#about" style={{ color: "#334155", textDecoration: "none" }}>About</a>
            <a href="#areas" style={{ color: "#334155", textDecoration: "none" }}>What We Do</a>
            <a href="#publications" style={{ color: "#334155", textDecoration: "none" }}>Publications</a>
            <a href="#programs" style={{ color: "#334155", textDecoration: "none" }}>Education & Training</a>
            <a href="#newsletter" style={{ color: "#334155", textDecoration: "none" }}>Newsletter</a>
            <a href="#contact" style={{ color: "#334155", textDecoration: "none" }}>Contact</a>
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
            maxWidth: "1240px",
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
              Regional Platform for Criminal Justice, Security, and Rule of Law
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

            <p style={{ marginTop: "16px", fontSize: "17px", lineHeight: "1.8", color: "#dbeafe", maxWidth: "760px" }}>
              CRCJ brings together education, training, and policy engagement to address evolving criminal justice challenges across Egypt, Africa, and the Middle East.
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
      <section id="about" style={{ padding: "88px 40px", backgroundColor: "#ffffff" }}>
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
            About CRCJ
          </div>

          <h2 style={{ fontSize: "38px", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
            A Cairo-based platform for criminal justice excellence
          </h2>

          <p style={{ marginTop: "24px", fontSize: "18px", lineHeight: "1.9", color: "#475569", maxWidth: "940px" }}>
            The Cairo Regional Center for Criminal Justice (CRCJ) is a Cairo-based regional platform established to advance criminal justice through education, professional training, policy engagement, and strategic cooperation. Serving Egypt, Africa, and the Middle East, CRCJ seeks to support justice-sector institutions, professionals, and partners through accredited credit-hour programs, non-credit professional training, and specialized capacity-building initiatives in areas of regional and international relevance.
          </p>
        </div>
      </section>

      {/* STRATEGIC HIGHLIGHTS */}
      <section style={{ padding: "0 40px 88px 40px", backgroundColor: "#ffffff" }}>
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
            ["Egypt", "Institutional base and headquarters"],
            ["Africa", "Regional reach and future expansion"],
            ["Middle East", "Strategic engagement and cooperation"],
            ["Credit + Non-Credit", "Academic and professional pathways"],
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

      {/* WHAT WE DO */}
      <section
        id="areas"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          padding: "88px 40px",
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
              What We Do
            </div>

            <h2 style={{ fontSize: "38px", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
              Areas of focus
            </h2>

            <p style={{ marginTop: "18px", maxWidth: "860px", marginInline: "auto", color: "#dbeafe", lineHeight: "1.8", fontSize: "17px" }}>
              CRCJ operates across a set of core thematic areas addressing priority criminal justice challenges at the national, regional, and international levels.
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

      {/* PUBLICATIONS */}
      <section id="publications" style={{ padding: "88px 40px", backgroundColor: "#ffffff" }}>
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
            Publications and Insights
          </div>

          <h2 style={{ fontSize: "38px", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
            Knowledge development and policy dialogue
          </h2>

          <p style={{ marginTop: "20px", fontSize: "17px", lineHeight: "1.8", color: "#475569", maxWidth: "940px" }}>
            CRCJ contributes to knowledge development and policy dialogue through publications, research outputs, and analytical work addressing key criminal justice challenges.
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

      {/* EDUCATION AND PROFESSIONAL TRAINING */}
      <section id="programs" style={{ padding: "88px 40px", backgroundColor: "#ffffff" }}>
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
            Education and Professional Training
          </div>

          <h2 style={{ fontSize: "38px", marginTop: "14px", marginBottom: 0, lineHeight: "1.25" }}>
            Program pathways
          </h2>

          <p style={{ marginTop: "20px", fontSize: "17px", lineHeight: "1.8", color: "#475569", maxWidth: "940px" }}>
            CRCJ delivers accredited credit-hour and non-credit programs in criminal justice through structured academic and professional frameworks designed to support regional capacity and institutional development.
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
            Academic credit, certification, and any formal recognition are subject to the requirements, approval processes, and accreditation frameworks of the relevant partner institutions.
          </p>
        </div>
      </section>

      {/* NEWSLETTER / TALK TO US */}
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
            backgroundImage: "url('/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "760px",
            backgroundPosition: "left center",
            opacity: 0.08,
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
          <div style={{ padding: "60px 40px" }}>
            <h2 style={{ fontSize: "30px", margin: 0, marginBottom: "8px" }}>Newsletter</h2>
            <p style={{ fontSize: "16px", margin: 0, marginBottom: "22px", color: "#eaf4ff" }}>
              Receive updates straight into your mailbox.
            </p>

            <input
              type="email"
              placeholder="Email Address"
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
              Submit
            </button>
          </div>

          <div
            style={{
              padding: "60px 40px",
              borderLeft: "2px solid rgba(255,255,255,0.25)",
            }}
          >
            <h2 style={{ fontSize: "30px", margin: 0, marginBottom: "8px" }}>Talk to us</h2>
            <p style={{ margin: 0, marginBottom: "24px", color: "#eaf4ff" }}>
              Connect with us on our socials and keep up to date.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {["▶", "X", "f", "in"].map((icon) => (
                <div
                  key={icon}
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#ffffff",
                    color: "#1d4ed8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "88px 40px",
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
            Contact
          </div>

          <h2 style={{ fontSize: "38px", marginTop: "14px", marginBottom: 0 }}>
            Connect with CRCJ
          </h2>

          <p style={{ marginTop: "20px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.8" }}>
            For institutional partnerships, program participation, and general inquiries, please contact:
          </p>

          <p style={{ fontSize: "18px", color: "#cbd5e1", marginTop: "18px" }}>info@crcj.org</p>
          <p style={{ fontSize: "18px", color: "#cbd5e1" }}>Cairo, Arab Republic of Egypt</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "24px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          lineHeight: "1.8",
        }}
      >
        <div>© 2026 Cairo Regional Center for Criminal Justice (CRCJ). All rights reserved.</div>
        <div>CRCJ is a regional platform dedicated to advancing criminal justice through education, training, and cooperation.</div>
      </footer>
    </main>
  );
}
