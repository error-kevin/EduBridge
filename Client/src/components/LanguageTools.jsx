import React, { useState } from "react";
import "../styles/LanguageTools.css"; 

const LanguageTools = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectedLang, setSelectedLang] = useState("hi");
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "mr", label: "मराठी" },
    { code: "bn", label: "বাংলা" },
    { code: "ta", label: "தமிழ்" },
  ];

  const handleTranslate = () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    setLoading(true);

    // Backend will be added later
    setTimeout(() => {
      setOutputText(
        `🔄 (Demo Output) This text will be translated into ${selectedLang} using AI.`
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="tool-container">
      <h2 className="tool-title">AI Language Converter</h2>
      <p className="tool-subtext">
        Convert any notes or paragraphs into your preferred language.
      </p>

      <textarea
        className="tool-input"
        placeholder="Paste your notes, paragraphs, or explanations here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <div className="tool-lang-select">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`tool-lang-btn ${
              selectedLang === lang.code ? "active" : ""
            }`}
            onClick={() => setSelectedLang(lang.code)}
          >
            {lang.label}
          </button>
        ))}
      </div>

      <button className="tool-translate-btn" onClick={handleTranslate}>
        {loading ? "Translating..." : "Translate ✨"}
      </button>

      {outputText && (
        <div className="tool-output-box">
          <h3>Translated Output:</h3>
          <p>{outputText}</p>
        </div>
      )}
    </div>
  );
};

export default LanguageTools;
