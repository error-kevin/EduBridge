import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './components/Home';
import Auth from './components/auth';
import Features from './components/Features';
import Learn from './components/Learn';
import Quiz from './components/Quiz';

// ✅ Correct Community import (file name is Community.jsx)
import CommunityPage from './components/CommunityPage/Community';

import Footer from './components/Footer';
import ErrorBoundary from './ErrorBoundary';

// Language Pages
import LanguagePage from './components/LanguagePage';
import LanguageTools from './components/LanguageTools';

// ⭐ Dashboard
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />

      <main>
        <ErrorBoundary>
          <Routes>

            {/* Home + Login/Signup */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />

            {/* Features */}
            <Route path="/features" element={<Features />} />
            <Route path="/features/learn" element={<Learn />} />
            <Route path="/features/quiz" element={<Quiz />} />

            {/* Community */}
            <Route path="/community" element={<CommunityPage />} />

            {/* Language Section */}
            <Route path="/language" element={<LanguagePage />} />
            <Route path="/language/tools" element={<LanguageTools />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
};

export default App;
