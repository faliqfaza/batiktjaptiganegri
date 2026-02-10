import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import '../styles/Home.css';

function Home({ onAddToCart }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? 'slide-in-left' : ''}`}>
              <span className="hero-badge">✨ Premium Batik Collection</span>
              <h1 className="hero-title">
                Warisan Budaya Indonesia dalam
                <span className="text-gradient"> Setiap Helai Kain</span>
              </h1>
              <p className="hero-description">
                Temukan koleksi batik tjap berkualitas tinggi dengan motif tradisional yang dikerjakan
                oleh pengrajin berpengalaman. Setiap produk adalah karya seni yang memadukan warisan budaya
                dengan keindahan modern.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  <span>🛍️</span>
                  Lihat Koleksi
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  <span>ℹ️</span>
                  Tentang Kami
                </Link>
              </div>
              
              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item slide-in-bottom stagger-1">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Pelanggan Puas</p>
                </div>
                <div className="stat-item slide-in-bottom stagger-2">
                  <h3 className="stat-number">50+</h3>
                  <p className="stat-label">Motif Batik</p>
                </div>
                <div className="stat-item slide-in-bottom stagger-3">
                  <h3 className="stat-number">100%</h3>
                  <p className="stat-label">Kualitas Premium</p>
                </div>
              </div>
            </div>
            
            <div className={`hero-image ${isVisible ? 'slide-in-right' : ''}`}>
              <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop"
                  alt="Batik Premium"
                  className="hero-img"
                />
                <div className="hero-image-decoration decoration-1"></div>
                <div className="hero-image-decoration decoration-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--light-color)"></path>
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-badge">🌟 Koleksi Pilihan</span>
            <h2 className="section-title">Produk Unggulan Kami</h2>
            <p className="section-subtitle">
              Temukan batik tjap terbaik dengan motif klasik yang penuh makna
            </p>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`scale-in stagger-${index + 1}`}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
          </div>

          <div className="featured-cta fade-in">
            <Link to="/products" className="btn btn-primary">
              Lihat Semua Produk →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card slide-in-bottom stagger-1">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Kualitas Premium</h3>
              <p className="feature-description">
                Batik tjap berkualitas tinggi dengan pewarnaan alami dan kain pilihan terbaik
              </p>
            </div>

            <div className="feature-card slide-in-bottom stagger-2">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Motif Tradisional</h3>
              <p className="feature-description">
                Beragam motif klasik Indonesia yang sarat makna dan filosofi mendalam
              </p>
            </div>

            <div className="feature-card slide-in-bottom stagger-3">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Pengrajin Berpengalaman</h3>
              <p className="feature-description">
                Dikerjakan oleh pengrajin lokal berpengalaman yang telah turun-temurun
              </p>
            </div>

            <div className="feature-card slide-in-bottom stagger-4">
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Pengiriman Aman</h3>
              <p className="feature-description">
                Pengiriman ke seluruh Indonesia dengan kemasan aman dan terpercaya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text fade-in">
              <h2 className="cta-title">Lestarikan Budaya, Kenakan Batik</h2>
              <p className="cta-description">
                Jadilah bagian dari gerakan melestarikan warisan budaya Indonesia dengan
                mengenakan batik berkualitas dari Batik Tjap Tiga Negri
              </p>
            </div>
            <div className="cta-button scale-in">
              <Link to="/products" className="btn btn-primary btn-large">
                Mulai Berbelanja Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;