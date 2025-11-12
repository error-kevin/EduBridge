import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Auth from './components/auth';
import Market from './components/Market';
import PestDetection from './components/PestDetection';
import Weather from './components/Weather';
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
                    <Route path="/market-prices" element={<Market />} />
                    <Route path="/pest-detection" element={<PestDetection />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/" element={<Home />} />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
        </div>
    );
};

export default App;
