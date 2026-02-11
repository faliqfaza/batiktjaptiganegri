import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import {products} from '../data/products';
import '../styles/Home.css';

function Home({ onAddToCart }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);

  }, []);

  const featuredProducts = products.filter(product => product.featured);


  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* Animated Background with Particles */}
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
              <span className="hero-badge bounce-in">
                <span className="badge-icon">✨</span>
                Premium Batik Collection
              </span>
              <h1 className="hero-title">
                <span className="title-line">Warisan Budaya</span>
                <span className="title-line">Indonesia dalam</span>
                <span className="title-highlight">Setiap Helai Kain</span>
              </h1>
              <p className="hero-description">
                Temukan koleksi batik tjap berkualitas tinggi dengan motif tradisional 
                yang dikerjakan oleh pengrajin berpengalaman. Setiap produk adalah karya 
                seni yang memadukan warisan budaya dengan keindahan modern.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary btn-glow">
                  <span className="btn-icon">🛍️</span>
                  <span className="btn-text">Lihat Koleksi</span>
                  <span className="btn-shine"></span>
                </Link>
                <Link to="/about" className="btn btn-secondary btn-outline">
                  <span className="btn-icon">ℹ️</span>
                  <span className="btn-text">Tentang Kami</span>
                </Link>
              </div>
              
              {/* Enhanced Stats */}
              <div className="hero-stats">
                <div className="stat-item" style={{ animationDelay: '0.2s' }}>
                  <div className="stat-icon">👥</div>
                  <h3 className="stat-number" data-target="500">0</h3>
                  <p className="stat-label">Pelanggan Puas</p>
                </div>
                <div className="stat-item" style={{ animationDelay: '0.4s' }}>
                  <div className="stat-icon">🎨</div>
                  <h3 className="stat-number" data-target="50">0</h3>
                  <p className="stat-label">Motif Batik</p>
                </div>
                <div className="stat-item" style={{ animationDelay: '0.6s' }}>
                  <div className="stat-icon">⭐</div>
                  <h3 className="stat-number">100%</h3>
                  <p className="stat-label">Kualitas Premium</p>
                </div>
              </div>
            </div>
            
            <div className={`hero-image ${isVisible ? 'zoom-in' : ''}`}>
              <div className="hero-image-wrapper">
                <div className="image-frame">
                  <img 
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop"
                    alt="Batik Premium"
                    className="hero-img"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="floating-badge badge-1">
                  <span className="badge-text">🌟 Premium Quality</span>
                </div>
                <div className="floating-badge badge-2">
                  <span className="badge-text">🎨 Traditional Art</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="mouse-wheel"></div>
          </div>
          <p className="scroll-text">Scroll untuk melihat lebih</p>
        </div>

      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-icon">✅</div>
              <span className="trust-text">Produk Original</span>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">🚚</div>
              <span className="trust-text">Gratis Ongkir</span>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">🔒</div>
              <span className="trust-text">Pembayaran Aman</span>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">⚡</div>
              <span className="trust-text">Pengiriman Cepat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge shine">
              <span className="badge-sparkle">✨</span>
              Koleksi Pilihan
            </span>
            <h2 className="section-title">Produk Unggulan Kami</h2>
            <p className="section-subtitle">
              Temukan batik tjap terbaik dengan motif klasik yang penuh makna
            </p>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-wrapper"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>

          <div className="featured-cta">
            <Link to="/products" className="btn btn-primary btn-glow">
              <span className="btn-text">Lihat Semua Produk</span>
              <span className="btn-arrow">→</span>
              <span className="btn-shine"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-title">Mengapa Memilih Kami?</h2>
            <p className="features-subtitle">Komitmen kami terhadap kualitas dan kepuasan pelanggan</p>
          </div>
          <div className="features-grid">
            <div className="feature-card" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">✨</div>
              </div>
              <h3 className="feature-title">Kualitas Premium</h3>
              <p className="feature-description">
                Batik tjap berkualitas tinggi dengan pewarnaan alami dan kain pilihan terbaik
              </p>
              <div className="feature-accent"></div>
            </div>

            <div className="feature-card" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🎨</div>
              </div>
              <h3 className="feature-title">Motif Tradisional</h3>
              <p className="feature-description">
                Beragam motif klasik Indonesia yang sarat makna dan filosofi mendalam
              </p>
              <div className="feature-accent"></div>
            </div>

            <div className="feature-card" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">👥</div>
              </div>
              <h3 className="feature-title">Pengrajin Berpengalaman</h3>
              <p className="feature-description">
                Dikerjakan oleh pengrajin lokal berpengalaman yang telah turun-temurun
              </p>
              <div className="feature-accent"></div>
            </div>

            <div className="feature-card" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🚚</div>
              </div>
              <h3 className="feature-title">Pengiriman Aman</h3>
              <p className="feature-description">
                Pengiriman ke seluruh Indonesia dengan kemasan aman dan terpercaya
              </p>
              <div className="feature-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="testimonial-title">Apa Kata Mereka?</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Kualitas batiknya luar biasa! Motifnya detail dan warnanya tahan lama. 
                Sangat puas dengan pembelian saya."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <p className="author-name">Ibu Sari</p>
                  <p className="author-location">Jakarta</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Pelayanan ramah dan pengiriman cepat. Batiknya asli buatan tangan, 
                sangat recommended!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <p className="author-name">Pak Budi</p>
                  <p className="author-location">Bandung</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Pertama kali beli batik online dan tidak mengecewakan. 
                Kualitas sesuai gambar, bahkan lebih bagus!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <p className="author-name">Ibu Dewi</p>
                  <p className="author-location">Surabaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">Lestarikan Budaya, Kenakan Batik</h2>
              <p className="cta-description">
                Jadilah bagian dari gerakan melestarikan warisan budaya Indonesia dengan
                mengenakan batik berkualitas dari Batik Tjap Tiga Negri
              </p>
            </div>
            <div className="cta-button">
              <Link to="/products" className="btn btn-light btn-large">
                <span className="btn-text">Mulai Berbelanja Sekarang</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;