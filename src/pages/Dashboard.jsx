import { useState } from "react";
import { getToken, removeToken } from "../utils/authStorage";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/header";  
import AISummaryCard from "../components/AISummaryCard";
import SummaryCard from "../components/SummaryCard";
import UploadCard from "../components/UploadCard";
import TimelineCard from "../components/TimelineCard";
import BiomarkersCard from "../components/BiomarkersCard";
import InsightsCard from "../components/InsightsCard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Today");
  const token = getToken();
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const renderView = () => {
    switch (activeTab) {
      case "Today":
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px" }}>
            <div className="main-col">
              <AISummaryCard />
              <SummaryCard />
              <BiomarkersCard />
            </div>
            <div className="side-col">
               <InsightsCard />
               <UploadCard />
            </div>
          </div>
        );
      case "Insights":
        return <InsightsCard />;
      case "Biomarkers":
        return <BiomarkersCard />;
      case "Records":
        return (
          <>
            <UploadCard />
            <section>
                <h2 style={{ color: "#E5E7EB", marginBottom: "16px" }}>Medical Timeline</h2>
                <TimelineCard
                type="LAB"
                title="HbA1c Test"
                date="01 Dec 2024"
                details="Value: 7.2%"
                />
                <TimelineCard
                type="VISIT"
                title="General Physician Visit"
                date="10 Jan 2025"
                details="Complaint: Fatigue"
                />
            </section>
          </>
        );
      case "Profile":
        return (
          <div style={{ color: "#CBD5E1", textAlign: "center", padding: "40px" }}>
            <div className="glass-card" style={{ maxWidth: "500px", margin: "0 auto" }}>
                <div style={{ fontSize: "64px", marginBottom: "16px" }}>👤</div>
                <h2>User Profile</h2>
                <p>Welcome back! Your health data is securely encrypted.</p>
                <button className="header-btn" style={{ marginTop: "20px" }}>Edit Profile</button>
            </div>
          </div>
        );
      default:
        return (
          <div style={{ color: "#CBD5E1", textAlign: "center", padding: "40px" }}>
            <div className="glass-card">
                <h2>{activeTab}</h2>
                <p>This section is currently being developed.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "32px 16px",
        minHeight: "100vh",
        background: "#06121C",
        color: "#F9FAFB"
      }}
    >
      <Header currentTab={activeTab} onTabChange={setActiveTab} />
      
      <div style={{ marginTop: "32px" }}>
        {renderView()}
      </div>
    </div>
  );
}



