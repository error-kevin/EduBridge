import React from "react";
import "../styles/Learn.css";

function LearnPage() {
  const courses = [
    {
      title: "Introduction to AI",
      description: "Learn the basics of Artificial Intelligence and its real-world applications.",
      image: "https://cdn-icons-png.flaticon.com/512/4712/4712101.png",
    },
    {
      title: "Web Development",
      description: "Master HTML, CSS, and JavaScript to create responsive websites.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721299.png",
    },
    {
      title: "Machine Learning",
      description: "Understand supervised and unsupervised learning with hands-on projects.",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    },
    {
      title: "Cloud Computing",
      description: "Explore the world of cloud platforms like AWS and Google Cloud.",
      image: "https://cdn-icons-png.flaticon.com/512/3208/3208676.png",
    },
  ];

  return (
    <div className="learn-container">
      <header className="learn-header">
        <h1>Welcome to EduBridge Learning Hub</h1>
        <p>Learn. Grow. Achieve — Anytime, Anywhere 🌱</p>
      </header>

      <section className="courses-section">
        <h2>Explore Our Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="enroll-btn">Start Learning</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="learn-footer">
        <p>© 2025 EduBridge | Empowering Learners Everywhere</p>
      </footer>
    </div>
  );
}

export default LearnPage;
