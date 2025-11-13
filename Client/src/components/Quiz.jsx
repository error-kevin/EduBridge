import React, { useState } from "react";
import "../styles/Quiz.css";

const dummyQuizzes = {
  "Artificial Intelligence": [
    {
      question: "What does AI stand for?",
      options: ["Automated Internet", "Artificial Intelligence", "Auto Input", "Applied Informatics"],
      answer: "Artificial Intelligence",
      explanation: "AI simulates human intelligence in machines."
    },
    {
      question: "Which is a common AI technique?",
      options: ["Machine Learning", "HTML", "CSS", "SQL"],
      answer: "Machine Learning",
      explanation: "Machine Learning allows systems to learn from data."
    }
  ],
  "Cloud Computing": [
    {
      question: "Which service is NOT part of Cloud Computing?",
      options: ["IaaS", "PaaS", "SaaS", "HTTP"],
      answer: "HTTP",
      explanation: "IaaS, PaaS, SaaS are cloud services; HTTP is a protocol."
    }
  ]
};

const Quiz = () => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleGenerateQuiz = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setQuiz([]);
    setSelected({});
    setSubmitted(false);

    try {
      // Dummy first
      if (dummyQuizzes[topic]) {
        setQuiz(dummyQuizzes[topic]);
      } else {
        // Call AI API
        const res = await fetch("http://127.0.0.1:5000/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: `Generate a 3-question multiple choice quiz for the topic: ${topic} in JSON format with question, options, answer, explanation.` }),
        });

        if (!res.ok) throw new Error("Server Error");

        const data = await res.json();
        const aiQuiz = JSON.parse(data.answer);
        setQuiz(aiQuiz);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Unable to generate quiz. Try a different topic.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (qIndex, option) => {
    setSelected({ ...selected, [qIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = quiz.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0);

  return (
    <div className="quiz-wrapper">
      <div className="quiz-box">
        <h1 className="quiz-heading">📝 EduBridge Quiz</h1>
        <p className="quiz-tagline">Enter a topic to generate a quiz or test your knowledge.</p>

        <div className="topic-bar">
          <input
            type="text"
            placeholder="Enter topic (e.g., Artificial Intelligence)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerateQuiz()}
          />
          <button onClick={handleGenerateQuiz}>Generate Quiz</button>
        </div>

        {loading && <div className="loading">⏳ Generating Quiz...</div>}

        {!loading && quiz.length > 0 && (
          <>
            <div className="quiz-list">
              {quiz.map((q, i) => (
                <div key={i} className="quiz-card">
                  <h3>{i + 1}. {q.question}</h3>
                  <div className="options">
                    {q.options.map((opt, idx) => (
                      <button
                        key={idx}
                        className={`option-btn ${
                          submitted
                            ? opt === q.answer
                              ? "correct"
                              : selected[i] === opt
                                ? "wrong"
                                : ""
                            : selected[i] === opt
                              ? "selected"
                              : ""
                        }`}
                        onClick={() => !submitted && handleSelect(i, opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {submitted && (
                    <div className="explanation">
                      <strong>💡 Explanation:</strong> {q.explanation || "No explanation provided."}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {!submitted && (
              <button className="submit-btn" onClick={handleSubmit}>
                Submit Answers
              </button>
            )}
            {submitted && (
              <div className="score-card">
                <h3>✅ Your Score: {score} / {quiz.length}</h3>
              </div>
            )}
          </>
        )}

        {quiz.length > 0 && (
          <div className="quiz-actions">
            <button onClick={() => window.location.href="/community"} className="action-btn">Ask (Community)</button>
            <button onClick={() => window.location.href="/learn"} className="action-btn">Learn More</button>
            <button onClick={handleGenerateQuiz} className="action-btn retry-btn">Retry Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
