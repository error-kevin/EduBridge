import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Auth from './components/auth';
import Features from './components/Features';
import Learn from './components/Learn'
import Quiz from './components/Quiz'
import CommunityPage from './components/Community';
import Footer from './components/Footer'; 
import ErrorBoundary from './ErrorBoundary'; 

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
                    <Route path="/" element={<Home />} />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
        </div>
    );
};

export default App;
