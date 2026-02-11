import "../styles/card.css";

export default function TimelineCard({ type, title, date, details }) {
  return (
    <div className="glass-card" style={{ padding: "16px", marginBottom: "12px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: type === "LAB" ? "rgba(59,130,246,0.1)" : "rgba(16,185,129,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: type === "LAB" ? "#3B82F6" : "#10B981",
            fontSize: "18px"
          }}
        >
          {type === "LAB" ? "🔬" : "👨‍⚕️"}
        </div>
        <div>
          <div style={{ fontWeight: 600, color: "#E5E7EB" }}>{title}</div>
          <div style={{ fontSize: "12px", color: "#9CA3AF" }}>{date}</div>
          <div style={{ marginTop: "4px", fontSize: "14px", color: "#CBD5E1" }}>{details}</div>
        </div>
      </div>
    </div>
  );
}
