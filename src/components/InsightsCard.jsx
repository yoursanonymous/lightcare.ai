import React from 'react';
import "../styles/card.css";

const InsightsCard = () => {
    const insights = [
        { title: "Sleep Efficiency", description: "Your deep sleep has improved by 12% this week.", trend: "up", color: "#2DD4BF" },
        { title: "Heart Rate Variability", description: "HRV is higher than your 30-day average. Recovery is good.", trend: "up", color: "#3B82F6" },
        { title: "Activity Levels", description: "Step count is down 20%. Try a short walk this evening.", trend: "down", color: "#F43F5E" }
    ];

    return (
        <div className="glass-card insights-card">
            <div className="card-header">
                <h3>Health Insights</h3>
            </div>
            <div className="insights-list">
                {insights.map((insight) => (
                    <div key={insight.title} className="insight-item">
                        <div className="insight-header">
                            <span className="insight-title">{insight.title}</span>
                            <span className={`insight-trend ${insight.trend}`} style={{ color: insight.color }}>
                                {insight.trend === 'up' ? '↑' : '↓'}
                            </span>
                        </div>
                        <p className="insight-description">{insight.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsightsCard;
