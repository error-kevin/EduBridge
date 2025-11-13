import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: localStorage.getItem("username") || "Student",
    email: localStorage.getItem("useremail") || "example@gmail.com",
    preferredLanguage: localStorage.getItem("preferredLanguage") || "English",
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <h2 className="dash-logo">Edu-Bridge</h2>

        <ul>
          <li><Link to="/dashboard">🏠 Dashboard</Link></li>
          <li><Link to="/features/learn">📘 Start Learning</Link></li>
          <li><Link to="/features/quiz">🎯 AI Quiz</Link></li>
          <li><Link to="/language/tools">🌐 AI Language Tools</Link></li>
          <li><Link to="/community">👥 Community</Link></li>
        </ul>

        <button className="logout-btn" onClick={() => alert("Logout soon")}>
          Logout
        </button>
      </div>

      <div className="dashboard-main">
        <h1>Welcome, {user.name} 👋</h1>
        <p>Email: {user.email}</p>
        <p>Preferred Language: {user.preferredLanguage}</p>

        <div className="dash-cards">
          <div className="dash-card">📚 Continue Learning</div>
          <div className="dash-card">✨ AI Recommendation</div>
          <div className="dash-card">🎮 Play Quiz</div>
          <div className="dash-card">🌐 AI Language Converter</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
