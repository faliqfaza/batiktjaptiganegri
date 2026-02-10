import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ cartCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">🎨</div>
          <h1>Batik Tjap Tiga Negri</h1>
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Beranda</Link>
          <Link to="/products" className="nav-link" onClick={closeMobileMenu}>Produk</Link>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>Tentang</Link>
          <Link to="/cart" className="cart-link" onClick={closeMobileMenu}>
            🛒 Keranjang
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;