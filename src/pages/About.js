import React, { useEffect, useState } from 'react';
import '../styles/About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <div className={`about-hero-content ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="about-title">Tentang Batik Tjap Tiga Negri</h1>
            <p className="about-subtitle">
              Melestarikan Warisan Budaya Indonesia Melalui Batik Berkualitas Tinggi
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className={`story-text ${isVisible ? 'slide-in-left' : ''}`}>
              <h2 className="section-title">Cerita Kami</h2>
              <p className="story-paragraph">
                <strong>Batik Tjap Tiga Negri</strong> adalah usaha yang didedikasikan untuk melestarikan 
                dan mempromosikan warisan budaya Indonesia melalui batik berkualitas tinggi. Kami percaya 
                bahwa setiap helai kain batik memiliki cerita dan filosofi yang mendalam.
              </p>
              <p className="story-paragraph">
                Dengan teknik tjap tradisional yang telah turun-temurun, kami menghadirkan batik dengan 
                motif klasik yang sarat makna. Setiap produk kami dikerjakan dengan penuh dedikasi oleh 
                pengrajin berpengalaman yang telah menggeluti dunia batik selama puluhan tahun.
              </p>
              <p className="story-paragraph">
                Kami menggunakan bahan berkualitas premium dan pewarnaan alami untuk menghasilkan batik 
                yang tidak hanya indah, tetapi juga ramah lingkungan dan nyaman digunakan.
              </p>
            </div>
            <div className={`story-image ${isVisible ? 'slide-in-right' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop" 
                alt="Batik Making Process" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title text-center">Nilai-Nilai Kami</h2>
          <div className="values-grid">
            <div className="value-card scale-in stagger-1">
              <div className="value-icon">🎨</div>
              <h3 className="value-title">Kualitas Premium</h3>
              <p className="value-description">
                Kami hanya menggunakan bahan berkualitas tinggi dan proses pembuatan yang teliti 
                untuk menghasilkan batik terbaik.
              </p>
            </div>

            <div className="value-card scale-in stagger-2">
              <div className="value-icon">🌱</div>
              <h3 className="value-title">Ramah Lingkungan</h3>
              <p className="value-description">
                Pewarnaan alami dan proses produksi yang memperhatikan kelestarian lingkungan 
                adalah prioritas kami.
              </p>
            </div>

            <div className="value-card scale-in stagger-3">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Pemberdayaan Pengrajin</h3>
              <p className="value-description">
                Kami bekerja sama dengan pengrajin lokal untuk memberdayakan dan melestarikan 
                keahlian tradisional.
              </p>
            </div>

            <div className="value-card scale-in stagger-4">
              <div className="value-icon">📚</div>
              <h3 className="value-title">Edukasi Budaya</h3>
              <p className="value-description">
                Kami berkomitmen untuk mengedukasi masyarakat tentang makna dan filosofi 
                di balik setiap motif batik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="about-vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card fade-in">
              <div className="vm-icon">🎯</div>
              <h3 className="vm-title">Visi Kami</h3>
              <p className="vm-text">
                Menjadi brand batik terdepan yang dikenal dengan kualitas premium, inovasi desain, 
                dan komitmen terhadap pelestarian budaya Indonesia di tingkat nasional maupun 
                internasional.
              </p>
            </div>

            <div className="vm-card fade-in">
              <div className="vm-icon">🚀</div>
              <h3 className="vm-title">Misi Kami</h3>
              <ul className="vm-list">
                <li>Menghadirkan batik berkualitas tinggi dengan harga terjangkau</li>
                <li>Melestarikan teknik tjap tradisional</li>
                <li>Memberdayakan pengrajin batik lokal</li>
                <li>Mengedukasi generasi muda tentang budaya batik</li>
                <li>Mengembangkan inovasi desain yang modern namun tetap tradisional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-contact-cta">
        <div className="container">
          <div className="cta-box scale-in">
            <h2 className="cta-title">Mari Bergabung dengan Kami</h2>
            <p className="cta-text">
              Ingin tahu lebih lanjut tentang produk kami atau ingin bekerja sama? 
              Jangan ragu untuk menghubungi kami!
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <span>💬</span> Hubungi via WhatsApp
              </a>
              <a href="mailto:info@batiktjaptiganegri.com" className="btn btn-secondary">
                <span>📧</span> Email Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default About;