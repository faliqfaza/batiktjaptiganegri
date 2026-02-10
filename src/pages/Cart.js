import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cart, onUpdateQuantity, onRemoveItem }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Keranjang Anda kosong!');
      return;
    }

    // Format pesan WhatsApp
    let message = '*PESANAN BATIK TJAP TIGA NEGRI*%0A%0A';
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}%0A`;
      message += `   Jumlah: ${item.quantity}%0A`;
      message += `   Harga: ${formatPrice(item.price)}%0A`;
      message += `   Subtotal: ${formatPrice(item.price * item.quantity)}%0A%0A`;
    });
    message += `*TOTAL: ${formatPrice(calculateTotal())}*%0A%0A`;
    message += 'Mohon konfirmasi pesanan ini. Terima kasih!';

    // Ganti nomor WhatsApp di bawah ini dengan nomor bisnis Anda
    const phoneNumber = '6281234567890'; // Format: 62xxx (tanpa + dan -)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="container">
          <div className="empty-cart-content fade-in">
            <div className="empty-cart-icon">🛒</div>
            <h2 className="empty-cart-title">Keranjang Belanja Kosong</h2>
            <p className="empty-cart-text">
              Belum ada produk di keranjang Anda. Yuk, mulai belanja batik berkualitas!
            </p>
            <Link to="/products" className="btn btn-primary">
              <span>🛍️</span>
              Belanja Sekarang
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header fade-in">
          <h1 className="cart-title">Keranjang Belanja</h1>
          <p className="cart-subtitle">{cart.length} produk dalam keranjang</p>
        </div>

        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={item.id} className={`cart-item slide-in-left stagger-${(index % 3) + 1}`}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-price">{formatPrice(item.price)}</p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label="Hapus item"
                  >
                    <span>🗑️</span> Hapus
                  </button>
                </div>

                <div className="cart-item-subtotal">
                  <p className="subtotal-label">Subtotal:</p>
                  <p className="subtotal-value">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary scale-in">
            <h3 className="summary-title">Ringkasan Belanja</h3>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal ({cart.length} produk)</span>
                <span>{formatPrice(calculateTotal())}</span>
              </div>
              <div className="summary-row">
                <span>Biaya Pengiriman</span>
                <span className="shipping-note">Dihitung di WhatsApp</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span className="total-price">{formatPrice(calculateTotal())}</span>
              </div>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              <span>💬</span> Checkout via WhatsApp
            </button>

            <Link to="/products" className="continue-shopping">
              ← Lanjut Belanja
            </Link>

            <div className="payment-info">
              <p className="info-title">📌 Informasi:</p>
              <ul className="info-list">
                <li>✓ Pembayaran via Transfer Bank</li>
                <li>✓ Konfirmasi pesanan via WhatsApp</li>
                <li>✓ Pengiriman ke seluruh Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;