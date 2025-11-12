// src/components/Weather.jsx
import React from 'react';

const Weather = () => {
  return (
    <div className="weather-container">
      <h2>Weather & Soil Data</h2>
      <p>Get real-time weather & soil moisture data for your farm.</p>
      {/* Sample weather data */}
      <ul>
        <li>Temperature: 25°C</li>
        <li>Humidity: 60%</li>
        <li>Soil Moisture: 30%</li>
      </ul>
    </div>
  );
};

export default Weather;
