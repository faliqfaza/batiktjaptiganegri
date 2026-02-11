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
            <img 
                src="/logo.png" 
                alt="Batik Tjap Tiga Negri" 
                className="loading-logo-image" 
            />
            </div>
        </div>

        {/* Brand Name */}
        <h1 className="loading-title fade-in">
        Batik Tjap Tiga Negri
        </h1>
        <p className="loading-subtitle fade-in">Warisan Budaya Indonesia</p>

        {/* Progress Bar & Sisanya tetap sama */}
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