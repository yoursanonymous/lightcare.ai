import "../styles/card.css";

export default function TimelineCard({ type, title, date, details }) {
  return (
    <div className="card">
      <div className="card-title">
        [{type}] {title}
      </div>
      <div style={{ fontSize: "14px", color: "#6b7280" }}>
        {date}
      </div>
      <div style={{ marginTop: "8px" }}>{details}</div>
    </div>
  );
}

