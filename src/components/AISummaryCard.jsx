import "../styles/card.css";

export default function AISummaryCard() {
  return (
    <div className="card" style={{ borderLeft: "4px solid #3b82f6" }}>
      <div className="card-title">AI Health Summary</div>

      <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>
        This summary is generated from your stored medical records. It is not a
        diagnosis or medical advice.
      </p>

      <div style={{ marginTop: "12px", fontSize: "14px" }}>
        • Elevated HbA1c levels were observed in recent laboratory tests.<br />
        • Fatigue was reported during a general physician visit.<br />
        • Follow-up blood tests were advised.
      </div>

      <div
        style={{
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "1px solid #e5e7eb",
          fontSize: "12px",
          color: "#6b7280"
        }}
      >
        <strong>Sources used:</strong> Lab Reports, Doctor Visits<br />
        <strong>Last updated:</strong> 10 Jan 2025
      </div>

      <button
        disabled
        style={{
          marginTop: "16px",
          opacity: 0.6
        }}
      >
        Regenerate Summary (Coming Soon)
      </button>
    </div>
  );
}
