// src/components/PestDetection.jsx
import React from 'react';

const PestDetection = () => {
  return (
    <div className="pest-detection-container">
      <h2>AI Pest Detection</h2>
      <p>Upload images to detect pests and get treatment suggestions.</p>
      <input type="file" accept="image/*" />
      <button>Detect Pest</button>
      {/* Sample image display */}
      <div className="detected-pest">
        <h3>Detected Pest: None</h3>
      </div>
    </div>
  );
};

export default PestDetection;
