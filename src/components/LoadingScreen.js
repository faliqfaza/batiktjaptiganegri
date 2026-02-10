import React, { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo Animated */}
        <div className="loading-logo">
          <div className="logo-circle pulse">
            <svg viewBox="0 0 100 100" className="logo-svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4A90E2', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#357ABD', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
              <text x="50" y="65" fontSize="50" fill="white" textAnchor="middle" fontWeight="bold">B</text>
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="loading-title fade-in">
          Batik Tjap <span className="text-gradient">Tiga Negri</span>
        </h1>
        <p className="loading-subtitle fade-in">Warisan Budaya Indonesia</p>

        {/* Progress Bar */}
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">{progress}%</p>
        </div>

        {/* Decorative Elements */}
        <div className="loading-decorations">
          <div className="decoration-dot dot-1"></div>
          <div className="decoration-dot dot-2"></div>
          <div className="decoration-dot dot-3"></div>
          <div className="decoration-dot dot-4"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;