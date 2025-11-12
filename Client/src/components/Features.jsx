import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ClipboardCheck } from 'lucide-react'; // Import icons
import '../styles/Features.css'; 

function Features() {
  return (
    <div className="features-container">
      {/* Page Header */}
      <div className="features-header">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Features
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your path to knowledge. Whether you want to learn something new
          or test your skills, we have the tools for you.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        
        {/* Learn Card */}
        <Link 
          to="/features/learn" 
          className="feature-card"
        >
          <div className="flex flex-col h-full">
            <div className="mb-6">
              {/* Icon */}
              <BookOpen className="feature-icon text-green-700 mx-auto md:mx-0" strokeWidth={1.5} />
            </div>
            <h2 className="feature-title">
              Learn
            </h2>
            <p className="feature-description">
              Access interactive lessons, articles, and AI-powered tutorials. 
              Learn at your own pace, anytime, anywhere.
            </p>
            {/* Button-like element pushed to the bottom */}
            <div className="mt-auto text-center md:text-left">
              <span className="feature-button">
                Start Learning
              </span>
            </div>
          </div>
        </Link>

        {/* Quiz Card */}
        <Link 
          to="/features/quiz" 
          className="feature-card"
        >
          <div className="flex flex-col h-full">
            <div className="mb-6">
              {/* Icon */}
              <ClipboardCheck className="feature-icon text-blue-700 mx-auto md:mx-0" strokeWidth={1.5} />
            </div>
            <h2 className="feature-title">
              Quiz
            </h2>
            <p className="feature-description">
              Test your knowledge with adaptive assessments and gamified quizzes. 
              Track your progress and challenge your peers.
            </p>
            {/* Button-like element pushed to the bottom */}
            <div className="mt-auto text-center md:text-left">
              <span className="feature-button">
                Take a Quiz
              </span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Features;
