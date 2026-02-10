import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import '../styles/Products.css';

function Products({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim() !== '') {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory]);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="products-page">
      {/* Header Section */}
      <section className="products-header">
        <div className="products-header-bg"></div>
        <div className="container">
          <div className={`products-header-content ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="products-title">Koleksi Batik Kami</h1>
            <p className="products-subtitle">
              Jelajahi beragam produk batik tjap berkualitas premium dengan motif tradisional Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="products-filters-section">
        <div className="container">
          <div className="filters-wrapper">
            {/* Search Bar */}
            <div className={`search-box ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="search-icon">🔍</div>
              <input
                type="text"
                className="search-input"
                placeholder="Cari produk batik..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className={`category-filter ${isVisible ? 'slide-in-right' : ''}`}>
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''} stagger-${index + 1}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === 'All' ? '🏷️ Semua' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Info */}
          <div className="filter-info fade-in">
            <p className="results-count">
              Menampilkan <strong>{filteredProducts.length}</strong> dari <strong>{products.length}</strong> produk
            </p>
            {(searchTerm || selectedCategory !== 'All') && (
              <button className="clear-filters-btn" onClick={clearFilters}>
                <span>🔄</span> Reset Filter
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className={`product-item scale-in stagger-${(index % 4) + 1}`}
                >
                  <ProductCard 
                    product={product} 
                    onAddToCart={onAddToCart}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results fade-in">
              <div className="no-results-icon">😔</div>
              <h3 className="no-results-title">Produk Tidak Ditemukan</h3>
              <p className="no-results-text">
                Maaf, tidak ada produk yang sesuai dengan pencarian "{searchTerm}".
                Coba kata kunci lain atau lihat semua produk.
              </p>
              <button className="btn btn-primary" onClick={clearFilters}>
                Lihat Semua Produk
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;