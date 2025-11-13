import React, { useState } from "react";
import "../styles/Learn.css";

const Learn = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // Dummy questions and quick explanations
  const dummyQuestions = [
    { q: "What is Artificial Intelligence?", a: "AI is the simulation of human intelligence in machines." },
    { q: "Explain Cloud Computing.", a: "Cloud computing provides computing services over the internet." },
    { q: "What is the Internet of Things?", a: "IoT connects devices to the internet for data exchange." },
    { q: "Difference between Machine Learning and Deep Learning.", a: "ML uses algorithms to learn from data, DL uses neural networks." },
    { q: "What is Blockchain Technology?", a: "Blockchain is a distributed ledger technology for secure transactions." }
  ];

  const handleSearch = async (customQuery) => {
    const question = customQuery || query;
    if (!question.trim()) return;

    // First, check if it’s in dummy questions for faster response
    const dummy = dummyQuestions.find(item => item.q === question);
    if (dummy) {
      setAnswer(dummy.a);
      return;
    }

    // Else, call API
    setLoading(true);
    setAnswer("");
    setQuery(question);

    try {
      const res = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question }),
      });

      if (!res.ok) throw new Error("Server Error");

      const data = await res.json();
      setAnswer(data.answer || "No response received.");
    } catch (err) {
      console.error("Error:", err);
      setAnswer("⚠️ Unable to fetch response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="learn-wrapper">
      <div className="learn-box">
        <h1 className="learn-heading">📘 EduBridge Learn Assistant</h1>
        <p className="learn-tagline">
          Ask questions and explore simplified AI explanations for your studies.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Type a topic or question (e.g., What is AI?)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>

        <div className="suggestions">
          {dummyQuestions.map((item, i) => (
            <span key={i} onClick={() => handleSearch(item.q)}>
              {item.q}
            </span>
          ))}
        </div>

        {loading && <div className="loading">⏳ Thinking...</div>}

        {!loading && answer && (
          <div className="result">
            <h3>✨ Explanation:</h3>
            <p className="answer-text">{answer}</p>

            <div className="link-section">
              <div className="link-box">
                <h4>📖 Study Resources</h4>
                <a
                  href={`https://www.google.com/search?q=${query}+study+material`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore on Google
                </a>
              </div>
              <div className="link-box">
                <h4>🎥 Video Tutorials</h4>
                <a
                  href={`https://www.youtube.com/results?search_query=${query}+tutorial`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
