import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './components/Home';
import Auth from './components/auth';
import Profile from './components/profile';
import Features from './components/Features';
import Learn from './components/Learn';
import Quiz from './components/Quiz';
import CommunityPage from './components/CommunityPage/Community';
import Footer from './components/Footer';
import ErrorBoundary from './ErrorBoundary';
import LanguagePage from './components/LanguagePage';
import LanguageTools from './components/LanguageTools';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <div>
          <ScrollToTop />
            <Header />
            <main>
              <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/features/learn" element={<Learn />} />
                    <Route path="/features/quiz" element={<Quiz />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="/language" element={<LanguagePage />} />
                    <Route path="/language/tools" element={<LanguageTools />} />
                    <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
};

export default App;
