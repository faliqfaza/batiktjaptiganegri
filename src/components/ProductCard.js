import React, { useState } from 'react';
import '../styles/ProductCard.css';
import '../styles/Home.css';

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        <div className="product-overlay">
          <button 
            className={`quick-view-btn ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {isAdded ? '✓ Ditambahkan' : '+ Tambah ke Keranjang'}
          </button>
        </div>
        
        {/* Badges */}
        <div className="product-badges">
          <span className="category-badge">{product.category}</span>
          {product.stock < 5 && product.stock > 0 && (
            <span className="stock-badge low-stock">Stok Terbatas</span>
          )}
          {product.stock === 0 && (
            <span className="stock-badge out-of-stock">Habis</span>
          )}
          {product.featured && (
            <span className="featured-badge">★ Pilihan</span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="price-label">Harga:</span>
            <span className="price-value">{formatPrice(product.price)}</span>
          </div>
          
          <div className="product-stock">
            <span className="stock-icon">📦</span>
            <span className="stock-text">Stok: {product.stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;