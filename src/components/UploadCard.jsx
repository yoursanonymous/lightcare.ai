import "../styles/card.css";

export default function UploadCard() {
  return (
    <div className="card">
      <div className="card-title">Add Medical Record</div>

      <p style={{ fontSize: "14px", color: "#6b7280" }}>
        Upload lab reports, prescriptions, or visit documents.
      </p>

      <div
        style={{
          border: "2px dashed #d1d5db",
          borderRadius: "8px",
          padding: "24px",
          textAlign: "center",
          marginTop: "12px"
        }}
      >
        <p style={{ marginBottom: "12px" }}>
          Drag and drop files here
        </p>
        <p style={{ marginBottom: "12px" }}>or</p>
        <button disabled style={{ opacity: 0.6 }}>
          Upload (Coming Soon)
        </button>
      </div>
    </div>
  );
}
