export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
          Cairo Regional Center for Criminal Justice (CRCJ)
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
          A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East
        </p>

        <p style={{ marginTop: "10px", direction: "rtl", color: "#777" }}>
          مركز إقليمي لتعزيز العدالة الجنائية في مصر وأفريقيا والشرق الأوسط
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 40px", maxWidth: "900px", margin: "auto" }}>
        <h2>About CRCJ</h2>
        <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
          The Cairo Regional Center for Criminal Justice (CRCJ) is a regional platform dedicated to advancing
          criminal justice education, professional training, and international cooperation across Egypt,
          Africa, and the Middle East.
        </p>
      </section>

      {/* CORE AREAS */}
      <section style={{ padding: "60px 40px", background: "#f7f7f7" }}>
        <h2 style={{ textAlign: "center" }}>Core Areas</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          <div>Accredited Academic Programs</div>
          <div>Executive Education</div>
          <div>Judicial & Law Enforcement Training</div>
          <div>Research & Publications</div>
          <div>Regional Partnerships</div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p style={{ marginTop: "10px" }}>info@crcj.org</p>
        <p>Cairo, Egypt</p>
      </section>

    </main>
  );
}
