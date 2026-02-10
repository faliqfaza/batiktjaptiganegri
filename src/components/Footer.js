import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <svg viewBox="0 0 50 50" className="logo-svg">
                    <defs>
                      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#4A90E2' }} />
                        <stop offset="100%" style={{ stopColor: '#357ABD' }} />
                      </linearGradient>
                    </defs>
                    <circle cx="25" cy="25" r="23" fill="url(#footerLogoGrad)" />
                    <text x="25" y="33" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">B</text>
                  </svg>
                </div>
                <h3 className="footer-brand">Batik Tjap Tiga Negri</h3>
              </div>
              <p className="footer-description">
                Melestarikan warisan budaya Indonesia melalui batik berkualitas tinggi dengan teknik tjap tradisional.
              </p>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <span className="social-icon">📘</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <span className="social-icon">💬</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-title">Menu Cepat</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Beranda</Link></li>
                <li><Link to="/products" className="footer-link">Produk</Link></li>
                <li><Link to="/about" className="footer-link">Tentang Kami</Link></li>
                <li><Link to="/cart" className="footer-link">Keranjang</Link></li>
              </ul>
            </div>

            {/* Information */}
            <div className="footer-column">
              <h4 className="footer-title">Informasi</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Cara Pemesanan</a></li>
                <li><a href="#" className="footer-link">Metode Pembayaran</a></li>
                <li><a href="#" className="footer-link">Kebijakan Privasi</a></li>
                <li><a href="#" className="footer-link">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h4 className="footer-title">Hubungi Kami</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:info@batiktjaptiganegri.com" className="contact-link">
                    info@batiktjaptiganegri.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+6281234567890" className="contact-link">
                    +62 812-3456-7890
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-text">
                    Jl. Batik No. 123, Jakarta, Indonesia
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">⏰</span>
                  <span className="contact-text">
                    Senin - Sabtu: 09:00 - 18:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Batik Tjap Tiga Negri. Made with ❤️ for Indonesian Culture
            </p>
            <p className="developer">
              Powered by <span className="developer-name">Batik Tjap Tiga Negri Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;