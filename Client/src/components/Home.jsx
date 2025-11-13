import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./../styles/Home.css";
import LearningBoy from "../assets/Learning-cuate.svg";
import AboutEdu from "../assets/Coding workshop-pana.svg"

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleButtonClick = (path) => {
    if (user) navigate(path);
    else navigate("/auth");
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Unlock Your Potential with <span>Edu-Bridge</span>
          </h1>
          <p>
            Learn smarter, not harder — an AI-powered platform that bridges
            knowledge, community, and technology.
          </p>
          <button
            className="cta-btn"
            onClick={() => handleButtonClick("/dashboard")}
          >
            {user ? "Go to Dashboard" : "Sign Up / Login"}
          </button>
        </div>
        <div className="hero-visual">
          <img
            src={LearningBoy}
            alt="Learning"
          />
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="divider"></div>

      {/* Features */}
      <section className="features">
        <h2>Explore What You Can Do</h2>
        <div className="features-grid">
          <div
            className="feature-card"
            onClick={() => handleButtonClick("/features/quiz")}
          >
            <div className="icon">🧠</div>
            <h3>AI-Powered Quizzes</h3>
            <p>
              Challenge yourself with smart quizzes that adapt to your
              performance.
            </p>
          </div>
          <div
            className="feature-card"
            onClick={() => handleButtonClick("/features/learn")}
          >
            <div className="icon">📚</div>
            <h3>Smart Learning</h3>
            <p>
              Personalized study recommendations with interactive materials.
            </p>
          </div>
          <div
            className="feature-card"
            onClick={() => handleButtonClick("/community")}
          >
            <div className="icon">💬</div>
            <h3>Community</h3>
            <p>
              Connect with learners worldwide and grow together through
              discussions.
            </p>
          </div>
          <div
            className="feature-card"
            onClick={() => handleButtonClick("/language")}
          >
            <div className="icon">🌍</div>
            <h3>Language Learning</h3>
            <p>
              Learn in your preferred language with AI-powered translation and
              voice support.
            </p>
        </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="about-text">
          <h2>Empowering Learners Everywhere</h2>
          <p>
            Edu-Bridge brings together innovation, collaboration, and
            accessibility to revolutionize how education works.
          </p>
          <ul>
            <li>🌟 Personalized AI assistance</li>
            <li>🌍 Offline-ready learning</li>
            <li>🤝 Collaborative study spaces</li>
            <li>⚡ Real-time progress tracking</li>
          </ul>
        </div>
        <div className="about-image">
          <img
            src={AboutEdu}
            alt="About EduBridge"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Start Learning Today</h2>
        <p>
          Join thousands of learners making their journey easier with
          Edu-Bridge.
        </p>
        <button
          className="cta-main-btn"
          onClick={() => handleButtonClick("/auth")}
        >
          {user ? "Go to Dashboard" : "Join Now"}
        </button>
      </section>
    </div>
  );
};

export default Home;
