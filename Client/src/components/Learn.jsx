import React from "react";
import "../styles/Learn.css";

const Learn = () => {
  const courses = [
    { id: 1, title: "Mathematics Basics", desc: "Build your foundation in numbers and equations." },
    { id: 2, title: "Science Explorer", desc: "Understand the world with easy science experiments." },
    { id: 3, title: "English Skills", desc: "Improve grammar, comprehension, and vocabulary." },
  ];

  return (
    <div className="learn-page">
      <div className="learn-hero">
        <h1>📘 Welcome to EduBridge Learn</h1>
        <p>Personalized learning designed for every student — even with low internet connectivity.</p>
      </div>

      <div className="course-section">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.desc}</p>
            <button>Start Learning</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
