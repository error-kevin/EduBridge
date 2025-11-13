import React from "react";
import "../styles/Dashboard.css";   // ✅ Correct path
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
      <aside className="dashboard-sidebar">
        <h2 className="dash-logo">EduBridge</h2>

        <nav>
          <ul>
            <li><Link to="/dashboard">🏠 Dashboard Overview</Link></li>
            <li><Link to="/features/learn">📘 Start Learning</Link></li>
            <li><Link to="/features/quiz">🎯 AI Quiz Zone</Link></li>
            <li><Link to="/language/tools">🌐 Language Converter</Link></li>
            <li><Link to="/community">👥 Community Hub</Link></li>
          </ul>
        </nav>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          🚪 Logout
        </button>
      </aside>

      {/* MAIN SECTION */}
      <main className="dashboard-main">
        <h1 className="dash-welcome">Welcome, {user.name} 👋</h1>

        <div className="user-details">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Preferred Language:</strong> {user.preferredLanguage}</p>
        </div>

        {/* DASHBOARD CARDS */}
        <div className="dash-cards">
          <div className="dash-card">
            📚 <h3>Continue Learning</h3>
            <p>Pick up where you left off</p>
          </div>

          <div className="dash-card">
            ✨ <h3>AI Recommendations</h3>
            <p>Lessons tailored for you</p>
          </div>

          <div className="dash-card">
            🎮 <h3>Take Quiz</h3>
            <p>Challenge your skills</p>
          </div>

          <div className="dash-card">
            🌐 <h3>Language Converter</h3>
            <p>Translate notes instantly</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
