import React, { useState } from "react";
import "../styles/Quiz.css";

const defaultDummyQuizzes = [
  {
    question: "What does AI stand for?",
    options: ["Automated Internet", "Artificial Intelligence", "Auto Input", "Applied Informatics"],
    answer: "Artificial Intelligence",
    explanation: "AI simulates human intelligence in machines."
  },
  {
    question: "Which is NOT a cloud service?",
    options: ["IaaS", "PaaS", "SaaS", "HTTP"],
    answer: "HTTP",
    explanation: "IaaS, PaaS, SaaS are cloud services; HTTP is a protocol."
  },
  {
    question: "Which technology is related to IoT?",
    options: ["Sensors", "Blockchain", "Cloud", "All of these"],
    answer: "All of these",
    explanation: "IoT integrates sensors, cloud computing, and sometimes blockchain."
  }
];

const suggestedTopics = [
  { name: "Artificial Intelligence", icon: "🤖" },
  { name: "Cloud Computing", icon: "☁️" },
  { name: "Blockchain", icon: "⛓️" },
  { name: "Machine Learning", icon: "📊" },
  { name: "Internet of Things", icon: "📡" }
];

const Quiz = () => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState(defaultDummyQuizzes);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleGenerateQuiz = async (customTopic) => {
    const chosenTopic = customTopic || topic;
    if (!chosenTopic.trim()) {
      setQuiz(defaultDummyQuizzes); // fallback dummy
      return;
    }

    setLoading(true);
    setQuiz([]);
    setSelected({});
    setSubmitted(false);

    try {
      // Simulate API call (replace with real backend call)
      const res = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Generate 3-question quiz for topic: ${chosenTopic} in JSON format.` }),
      });
      if (!res.ok) throw new Error("Server Error");
      const data = await res.json();
      let aiQuiz = [];
      try { aiQuiz = JSON.parse(data.answer); } catch { aiQuiz = defaultDummyQuizzes; }
      setQuiz(aiQuiz.length ? aiQuiz : defaultDummyQuizzes);
    } catch (err) {
      console.error(err);
      setQuiz(defaultDummyQuizzes);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (qIndex, option) => {
    if (!submitted) setSelected({ ...selected, [qIndex]: option });
  };

  const handleSubmit = () => setSubmitted(true);
  const score = quiz.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0);

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        <h1 className="quiz-title">Quiz 🎓</h1>

        <div className="topic-input">
          <input
            type="text"
            placeholder="Enter a topic to generate quiz"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerateQuiz()}
          />
          <button onClick={() => handleGenerateQuiz()}>Generate Quiz</button>
        </div>

        {loading && <div className="loading">⏳ Generating quiz...</div>}

        <div className="quiz-cards">
          {quiz.map((q, i) => (
            <div key={i} className="quiz-card">
              <h3 className="question">{i + 1}. {q.question}</h3>
              <div className="options">
                {q.options.map((opt, idx) => {
                  let state = "";
                  if (submitted) {
                    if (opt === q.answer) state = "correct";
                    else if (selected[i] === opt) state = "wrong";
                  } else if (selected[i] === opt) state = "selected";
                  return (
                    <button key={idx} className={`option-btn ${state}`} onClick={() => handleSelect(i, opt)}>{opt}</button>
                  );
                })}
              </div>
              {submitted && <div className="explanation">💡 {q.explanation || "No explanation available."}</div>}
            </div>
          ))}
        </div>

        {!submitted && <button className="submit-btn" onClick={handleSubmit}>Submit Answers</button>}
        {submitted && <div className="score-card">✅ Your Score: {score} / {quiz.length}</div>}

        <div className="quiz-actions">
          <button className="action-btn" onClick={() => window.location.href="/community"}>Ask Community</button>
          <button className="action-btn" onClick={() => window.location.href="/learn"}>Learn More</button>
          <button className="action-btn retry-btn" onClick={() => handleGenerateQuiz(topic)}>Retry Quiz</button>
          <button className="action-btn" onClick={() => window.location.href="/Learn"}>Learn More</button>

        </div>

        {!quiz.length && !loading && (
          <div className="suggestions-wrapper">
            <h3>Popular Topics to Explore</h3>
            <div className="suggestions-cards">
              {suggestedTopics.map((t, i) => (
                <div key={i} className="suggestion-card" onClick={() => handleGenerateQuiz(t.name)}>
                  <span className="icon">{t.icon}</span>
                  <span className="topic-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
