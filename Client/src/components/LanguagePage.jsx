import React, { useState } from "react";
import { Link } from "react-router-dom";   // ⭐ Added import
import "../styles/LanguagePage.css";

const LanguagePage = () => {
  const [selectedLang, setSelectedLang] = useState("English");
  const [isVoiceMode, setVoiceMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem("preferredLanguage", lang);
    alert(`Language set to ${lang} 🌐`);
  };

  const toggleVoiceMode = () => {
    setVoiceMode(!isVoiceMode);
  };

  const increaseFontSize = () => {
    const newSize = fontSize + 2;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}px`;
  };

  return (
    <div className="language-container" style={{ fontSize: `${fontSize}px` }}>
      <h2 className="language-title">Learn in Your Language</h2>
      <p className="language-subtext">Education should speak your language</p>

      <div className="language-options">
        {[
          { code: "EN", label: "English" },
          { code: "IN", label: "हिंदी" },
          { code: "IN", label: "தமிழ்" },
          { code: "IN", label: "বাংলा" },
          { code: "IN", label: "मराठी" },
        ].map((lang, index) => (
          <button
            key={index}
            className={`language-btn ${
              selectedLang === lang.label ? "active" : ""
            }`}
            onClick={() => handleLanguageChange(lang.label)}
          >
            <span className="flag">{lang.code}</span> {lang.label}
          </button>
        ))}
      </div>

      <div className="toggle-buttons">
        <button
          className={`toggle-btn ${isVoiceMode ? "active" : ""}`}
          onClick={toggleVoiceMode}
        >
          🔊 {isVoiceMode ? "Voice Mode On" : "Voice Mode"}
        </button>

        <button className="toggle-btn" onClick={increaseFontSize}>
          +A Font Size
        </button>
      </div>

      {/* ⭐ AI Language Converter button */}
      <Link to="/language/tools">
        <button className="toggle-btn" style={{ marginTop: "15px" }}>
          AI Language Converter ✨
        </button>
      </Link>

      <p className="selected-lang">
        🌍 Selected Language: <strong>{selectedLang}</strong>
      </p>
    </div>
  );
};

export default LanguagePage;
