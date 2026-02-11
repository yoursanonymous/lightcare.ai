import "../styles/card.css";

export default function UploadCard() {
  return (
    <div className="glass-card">
      <div className="card-header">
        <h3>Upload Medical Record</h3>
      </div>

      <div
        style={{
          border: "2px dashed rgba(255,255,255,0.1)",
          borderRadius: "12px",
          padding: "32px",
          textAlign: "center",
          color: "#9CA3AF",
          cursor: "pointer",
          transition: "all 0.2s ease"
        }}
        onMouseOver={(e) => (e.currentTarget.style.borderColor = "#2DD4BF")}
        onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
      >
        <div style={{ fontSize: "24px", marginBottom: "8px" }}>📁</div>
        <p style={{ margin: 0 }}>Click or drag file to upload</p>
        <span style={{ fontSize: "12px", opacity: 0.6 }}>PDF, PNG, JPG accepted</span>
      </div>
    </div>
  );
}
