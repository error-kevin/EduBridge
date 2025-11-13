import React from "react";
import "../styles/Dashboard.css";   // ✅ FIXED CSS IMPORT PATH
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: localStorage.getItem("username") || "Student",
    email: localStorage.getItem("useremail") || "example@gmail.com",
    preferredLanguage: localStorage.getItem("preferredLanguage") || "English",
  };

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <div className="dashboard-sidebar">
        <h2 className="dash-logo">EduBridge</h2>

        <ul>
          <li><Link to="/dashboard">🏠 Dashboard Overview</Link></li>
          <li><Link to="/features/learn">📘 Start Learning</Link></li>
          <li><Link to="/features/quiz">🎯 AI Quiz Zone</Link></li>
          <li><Link to="/language/tools">🌐 Language Converter</Link></li>
          <li><Link to="/community">👥 Community Hub</Link></li>
        </ul>

        <button className="logout-btn">Sign Out</button>
      </div>

      {/* MAIN CONTENT */}
      <div className="dashboard-main">
        <h1>Welcome, {user.name} 👋</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Preferred Language:</strong> {user.preferredLanguage}</p>

        <div className="dash-cards">
          <div className="dash-card">📚 Continue Learning</div>
          <div className="dash-card">✨ AI Recommendations</div>
          <div className="dash-card">🎮 Take Quiz</div>
          <div className="dash-card">🌍 Language Converter</div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
