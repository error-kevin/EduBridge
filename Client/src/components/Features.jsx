import '../styles/Features.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ClipboardCheck } from 'lucide-react';


function Features() {
  return (
    <div className="features-container min-h-screen py-16 px-6 md:px-12">
      
      {/* Page Header */}
      <div className="features-header text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm">
          Explore Our Features
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Choose your path to knowledge. Whether you want to learn something new
          or test your skills, we have the tools for you.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        {/* Learn Card */}
        <Link
          to="/features/learn"
          className="feature-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 no-underline hover:no-underline"
          style={{ textDecoration: "none" }}
        >
          <div className="flex flex-col h-full">
            <div className="mb-6 text-center md:text-left">
              <BookOpen
                className="feature-icon text-green-600 w-14 h-14 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="feature-title text-2xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
              Learn
            </h2>
            <p className="feature-description text-gray-600 leading-relaxed mb-6">
              Access interactive lessons, articles, and AI-powered tutorials. 
              Learn at your own pace, anytime, anywhere.
            </p>
            <div className="mt-auto text-center md:text-left">
              <span className="feature-button inline-block bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                Start Learning
              </span>
            </div>
          </div>
        </Link>

        {/* Quiz Card */}
        <Link
          to="/features/quiz"
          className="feature-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 no-underline hover:no-underline"
          style={{ textDecoration: "none" }}
        >
          <div className="flex flex-col h-full">
            <div className="mb-6 text-center md:text-left">
              <ClipboardCheck
                className="feature-icon text-blue-600 w-14 h-14 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="feature-title text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              Quiz
            </h2>
            <p className="feature-description text-gray-600 leading-relaxed mb-6">
              Test your knowledge with adaptive assessments and gamified quizzes. 
              Track your progress and challenge your peers.
            </p>
            <div className="mt-auto text-center md:text-left">
              <span className="feature-button inline-block bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
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