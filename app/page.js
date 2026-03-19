export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#ffffff", color: "#0f172a" }}>

      {/* HEADER */}
      <header style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "18px 40px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <img src="/logo.png" alt="CRCJ Logo" style={{ height: "55px" }} />

          <nav style={{ display: "flex", gap: "28px", fontSize: "14px" }}>
            <a href="#about" style={{ color: "#374151", textDecoration: "none" }}>About</a>
            <a href="#areas" style={{ color: "#374151", textDecoration: "none" }}>What We Do</a>
            <a href="#programs" style={{ color: "#374151", textDecoration: "none" }}>Programs</a>
            <a href="#contact" style={{ color: "#374151", textDecoration: "none" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "120px 40px"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

          <h1 style={{ fontSize: "46px", lineHeight: "1.3", margin: 0 }}>
            Cairo Regional Center for Criminal Justice
          </h1>

          <p style={{ marginTop: "22px", fontSize: "20px", lineHeight: "1.8", color: "#cbd5e1" }}>
            A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East
          </p>

          <p style={{ marginTop: "12px", direction: "rtl", fontSize: "18px", color: "#e2e8f0" }}>
            مركز إقليمي لتعزيز العدالة الجنائية في مصر وأفريقيا والشرق الأوسط
          </p>

          <div style={{ marginTop: "30px" }}>
            <a href="#programs" style={{
              backgroundColor: "#2563eb",
              padding: "12px 20px",
              borderRadius: "6px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "700"
            }}>
              Explore Programs
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>About CRCJ</h2>

          <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.9", color: "#475569" }}>
            The Cairo Regional Center for Criminal Justice (CRCJ) is a regional platform dedicated to advancing
            criminal justice education, professional training, and international cooperation. Based in Cairo,
            the Center serves Egypt, Africa, and the Middle East through structured academic delivery,
            executive education, and specialized capacity-building programs.
          </p>
        </div>
      </section>

      {/* WHAT WE DO (UNICRI STYLE) */}
      <section id="areas" style={{ backgroundColor: "#f8fafc", padding: "90px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center", fontSize: "32px" }}>
            Areas of Focus
          </h2>

          <div style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}>
            {[
              "Transnational Crime and Security",
              "Illicit Financial Flows and Anti-Corruption",
              "Violent Extremism and Prevention",
              "Cybercrime and Emerging Technologies",
              "Rule of Law and Access to Justice",
              "Security Governance and Risk Mitigation"
            ].map((item) => (
              <div key={item} style={{
                backgroundColor: "#ffffff",
                padding: "24px",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                fontWeight: "600"
              }}>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROGRAMS (IMPORTANT LEGAL STRUCTURE) */}
      <section id="programs" style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2 style={{ fontSize: "32px" }}>Education and Professional Training</h2>

          <div style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px"
          }}>

            {/* CREDIT */}
            <div style={{ border: "1px solid #e5e7eb", padding: "26px", borderRadius: "10px" }}>
              <h3 style={{ marginTop: 0 }}>Accredited Credit-Hour Programs</h3>
              <p style={{ lineHeight: "1.8", color: "#475569" }}>
                Programs delivered under approved academic partnership frameworks, offering credit hours
                recognized subject to the requirements and accreditation of the relevant partner institution.
              </p>
            </div>

            {/* NON CREDIT */}
            <div style={{ border: "1px solid #e5e7eb", padding: "26px", borderRadius: "10px" }}>
              <h3 style={{ marginTop: 0 }}>Non-Credit Professional Programs</h3>
              <p style={{ lineHeight: "1.8", color: "#475569" }}>
                Executive education, short courses, and specialized professional training tailored to
                criminal justice practitioners, institutions, and sector stakeholders.
              </p>
            </div>

            {/* CAPACITY */}
            <div style={{ border: "1px solid #e5e7eb", padding: "26px", borderRadius: "10px" }}>
              <h3 style={{ marginTop: 0 }}>Capacity Building and Specialized Training</h3>
              <p style={{ lineHeight: "1.8", color: "#475569" }}>
                Targeted programs supporting institutional development, regional cooperation,
                and operational readiness across justice and enforcement sectors.
              </p>
            </div>

          </div>

          {/* LEGAL DISCLAIMER */}
          <p style={{
            marginTop: "30px",
            fontSize: "14px",
            color: "#64748b"
          }}>
            Academic credit, certification, and recognition are subject to the requirements and approval of the
            relevant accredited partner institutions and applicable program frameworks.
          </p>

        </div>
      </section>

      {/* NEWSLETTER (UNCHANGED GOOD SECTION) */}
      <section style={{ backgroundColor: "#1177c9", color: "#ffffff" }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        }}>

          <div style={{ padding: "50px 40px" }}>
            <h2>Newsletter</h2>
            <p>Receive updates straight into your mailbox.</p>

            <input placeholder="Email Address" style={{
              width: "100%",
              padding: "14px",
              borderRadius: "6px",
              border: "none",
              marginBottom: "15px"
            }} />

            <button style={{
              width: "100%",
              padding: "14px",
              borderRadius: "6px",
              border: "none",
              fontWeight: "700"
            }}>
              Submit
            </button>
          </div>

          <div style={{
            padding: "50px 40px",
            borderLeft: "1px solid rgba(255,255,255,0.3)"
          }}>
            <h2>Talk to us</h2>
            <p>Connect with us and stay updated.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "25px",
        textAlign: "center",
        color: "#6b7280",
        fontSize: "14px"
      }}>
        © 2026 CRCJ
      </footer>

    </main>
  );
}
