export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", color: "#0f172a" }}>

      {/* NAVBAR */}
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
          {/* LOGO + NAME */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo.png" alt="CRCJ Logo" style={{ height: "64px" }} />
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a" }}>
              CRCJ
            </div>
          </div>

          {/* NAV LINKS */}
          <nav style={{ display: "flex", gap: "22px", flexWrap: "wrap", fontSize: "14px" }}>
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
          padding: "90px 40px",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* LOGO IN HERO */}
          <div style={{ marginBottom: "24px" }}>
            <img src="/logo.png" alt="CRCJ Logo" style={{ height: "110px" }} />
          </div>

          <h1 style={{ fontSize: "42px", lineHeight: "1.3", margin: 0 }}>
            Cairo Regional Center for Criminal Justice (CRCJ)
          </h1>

          <p style={{ marginTop: "20px", fontSize: "20px", lineHeight: "1.7", color: "#dbeafe" }}>
            A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East
          </p>

          <p style={{ marginTop: "10px", fontSize: "18px", direction: "rtl", color: "#e2e8f0" }}>
            مركز إقليمي لتعزيز العدالة الجنائية في مصر وأفريقيا والشرق الأوسط
          </p>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px" }}>About CRCJ</h2>
          <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.9", color: "#475569" }}>
            The Cairo Regional Center for Criminal Justice is a regional platform dedicated to advancing criminal justice
            education, professional training, and international cooperation across Egypt, Africa, and the Middle East.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus" style={{ padding: "80px 40px", backgroundColor: "#f1f5f9" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "30px" }}>Core Areas</h2>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Criminal Justice Education",
              "Executive Training",
              "Judicial Cooperation",
              "Research & Publications",
              "Regional Partnerships",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  fontWeight: "600",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={{ padding: "80px 40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px" }}>Programs</h2>

          <div style={{ marginTop: "30px", display: "grid", gap: "20px" }}>
            <div style={{ padding: "20px", border: "1px solid #e2e8f0", borderRadius: "10px" }}>
              Accredited Academic Programs
            </div>
            <div style={{ padding: "20px", border: "1px solid #e2e8f0", borderRadius: "10px" }}>
              Executive and Professional Training
            </div>
            <div style={{ padding: "20px", border: "1px solid #e2e8f0", borderRadius: "10px" }}>
              Specialized Regional Courses
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 40px", backgroundColor: "#0f172a", color: "#ffffff", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px" }}>Contact</h2>
        <p style={{ marginTop: "15px" }}>info@crcj.org</p>
        <p>Cairo, Egypt</p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>
        © 2026 CRCJ
      </footer>

    </main>
  );
}
