import "../styles/card.css";

export default function AISummaryCard() {
  return (
    <div className="glass-card" style={{ borderLeft: "4px solid #3b82f6" }}>
      <div className="card-header">
        <h3>✨ AI Health Summary</h3>
      </div>

      <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.6" }}>
        This summary is generated from your stored medical records. It is not a
        diagnosis or medical advice.
      </p>

      <div style={{ marginTop: "12px", fontSize: "14px", color: "#E5E7EB" }}>
        • Elevated HbA1c levels were observed in recent laboratory tests.<br />
        • Fatigue was reported during a general physician visit.<br />
        • Follow-up blood tests were advised.
      </div>

      <div
        style={{
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          fontSize: "12px",
          color: "#9CA3AF"
        }}
      >
        <strong>Sources used:</strong> Lab Reports, Doctor Visits<br />
        <strong>Last updated:</strong> 10 Jan 2025
      </div>

      <button
        disabled
        className="header-btn"
        style={{
          marginTop: "16px",
          opacity: 0.5,
          width: "auto",
          fontSize: "12px"
        }}
      >
        Regenerate Summary (Coming Soon)
      </button>
    </div>
  );
}
