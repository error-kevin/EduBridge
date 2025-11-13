import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Auth from './components/auth';
import Features from './components/Features';
import Learn from './components/Learn';
import Quiz from './components/Quiz';
import CommunityPage from './components/Community';
import Footer from './components/Footer'; 
import ErrorBoundary from './ErrorBoundary'; 

// ⭐ You MUST have this import
import LanguagePage from './components/LanguagePage';

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

                    {/* ⭐ Language Page Route */}
                    <Route path="/language" element={<LanguagePage />} />

                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
        </div>
    );
};

export default App;
