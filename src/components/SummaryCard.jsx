import "../styles/card.css";

export default function SummaryCard() {
  return (
    <div className="card">
      <div className="card-title">Health Summary</div>
      <p>
        • Elevated HbA1c observed in December 2024 <br />
        • Fatigue reported during general physician visit <br />
        • Blood tests were advised
      </p>
    </div>
  );
}

