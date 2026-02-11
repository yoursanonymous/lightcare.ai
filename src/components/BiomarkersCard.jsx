import React from 'react';
import "../styles/card.css";

const BiomarkersCard = () => {
    const categories = [
        { name: "Heart", status: 3, icon: "❤️" },
        { name: "Kidney", status: 1, icon: "🧪" },
        { name: "Liver", status: 5, icon: "🥩" },
        { name: "Metabolic", status: 2, icon: "⚡" },
        { name: "Blood", status: 4, icon: "🩸" },
        { name: "Immune", status: 3, icon: "🛡️" },
        { name: "Electrolytes", status: 5, icon: "🧂" }
    ];

    return (
        <div className="glass-card biomarkers-card">
            <div className="card-header">
                <h3>Biomarkers</h3>
                <span className="see-all">See All →</span>
            </div>
            <div className="biomarkers-grid">
                {categories.map((cat) => (
                    <div key={cat.name} className="biomarker-item">
                        <div className="biomarker-icon">{cat.icon}</div>
                        <div className="biomarker-info">
                            <span className="biomarker-name">{cat.name}</span>
                            <div className="status-dots">
                                {[1, 2, 3, 4, 5].map((dot) => (
                                    <span 
                                        key={dot} 
                                        className={`dot ${dot <= cat.status ? 'active' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BiomarkersCard;
