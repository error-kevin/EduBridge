import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Auth from './components/auth';
import Features from './components/Features';
import Learn from './components/Learn';
import Quiz from './components/Quiz';
import CommunityPage from './components/CommunityPage/Community';
import Footer from './components/Footer'; 
import ErrorBoundary from './ErrorBoundary'; 

// Existing Language Page
import LanguagePage from './components/LanguagePage';

// ⭐ NEW: AI Language Tools Page
import LanguageTools from './components/LanguageTools';

const App = () => {
    return (
        <div>
            <Header />
            <main>
              <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/features/learn" element={<Learn />} />
                    <Route path="/features/quiz" element={<Quiz />} />
                    <Route path="/community" element={<CommunityPage />} />

                    {/* Language Settings Page */}
                    <Route path="/language" element={<LanguagePage />} />

                    {/* ⭐ AI Language Converter Page */}
                    <Route path="/language/tools" element={<LanguageTools />} />

                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
        </div>
    );
};

export default App;
