import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header({ cartCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Pixels to complete transition
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollPosition / scrollThreshold, 1);
      setScrollProgress(progress);
      
      // Set scrolled state
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  // Dynamic header styles based on scroll
  const headerStyle = {
    backgroundColor: `rgba(255, 255, 255, ${0.05 + (scrollProgress * 0.95)})`,
    backdropFilter: `blur(${scrollProgress * 20}px)`,
    boxShadow: `0 4px 30px rgba(74, 144, 226, ${scrollProgress * 0.15})`,
    borderBottom: `1px solid rgba(74, 144, 226, ${scrollProgress * 0.2})`
  };

  // Dynamic logo text color
  const logoTextStyle = {
    color: scrollProgress > 0.5 ? 'var(--primary-color)' : 'rgba(255, 255, 255, 1)'
  };

  // Dynamic nav link color
  const navLinkBaseColor = scrollProgress > 0.5 ? 'var(--text-color)' : 'rgba(255, 255, 255, 0.95)';

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} style={headerStyle}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <img 
              src="/logo.png" 
              alt="Logo Batik Tjap Tiga Negri" 
              className="logo-image"
            />
          </div>
          
          <div className="logo-text">
            <span className="logo-title" style={logoTextStyle}>Batik Tjap Tiga Negri</span>
          </div>
        </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-menu">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                style={{ color: navLinkBaseColor }}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`nav-link ${isActive('/products') ? 'active' : ''}`}
                style={{ color: navLinkBaseColor }}
              >
                Produk
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                style={{ color: navLinkBaseColor }}
              >
                Tentang
              </Link>
            </li>
          </ul>

          {/* Cart Button */}
          <Link to="/cart" className="cart-button">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && (
              <span className="cart-badge pulse">{cartCount}</span>
            )}
            <span className="cart-text">Keranjang</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li>
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🏠</span>
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🛍️</span>
                <span>Produk</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">ℹ️</span>
                <span>Tentang</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/cart" 
                className={`mobile-nav-link ${isActive('/cart') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🛒</span>
                <span>Keranjang {cartCount > 0 && `(${cartCount})`}</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </header>
  );
}

export default Header;