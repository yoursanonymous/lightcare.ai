import "../styles/card.css";

export default function SummaryCard() {
  return (
    <div className="glass-card">
      <div className="card-header">
        <h3>Summary</h3>
      </div>
      <p style={{ fontSize: "14px", color: "#E5E7EB", lineHeight: "1.6" }}>
        Your health summary is a human-readable interpretation of your data.
        Currently, you are in stable condition with consistent laboratory
        results.
      </p>
    </div>
  );
}
