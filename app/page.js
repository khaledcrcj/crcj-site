export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#ffffff", color: "#111827" }}>

      {/* NAVBAR */}
      <header style={{
        padding: "20px 40px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontWeight: "700" }}>
          CRCJ
        </div>
        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <span>About</span>
          <span>Programs</span>
          <span>Contact</span>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "100px 40px", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ fontSize: "36px", lineHeight: "1.3" }}>
          Cairo Regional Center for Criminal Justice (CRCJ)
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#4b5563" }}>
          A Regional Hub for Advancing Criminal Justice Across Egypt, Africa, and the Middle East
        </p>

        <p style={{ marginTop: "10px", direction: "rtl", color: "#6b7280" }}>
          مركز إقليمي لتعزيز العدالة الجنائية في مصر وأفريقيا والشرق الأوسط
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 40px", background: "#f9fafb" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2>About</h2>
          <p style={{ marginTop: "15px", lineHeight: "1.7", color: "#4b5563" }}>
            CRCJ is a regional platform based in Cairo dedicated to advancing criminal justice education,
            training, and cooperation across Egypt, Africa, and the Middle East.
          </p>
        </div>
      </section>

      {/* AREAS */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2>Core Areas</h2>

          <ul style={{ marginTop: "20px", lineHeight: "2" }}>
            <li>Accredited Academic Programs</li>
            <li>Executive Training</li>
            <li>Judicial Cooperation</li>
            <li>Research & Publications</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 40px", background: "#111827", color: "white", textAlign: "center" }}>
        <h2>Contact</h2>
        <p style={{ marginTop: "10px" }}>info@crcj.org</p>
        <p>Cairo, Egypt</p>
      </section>

    </main>
  );
}
