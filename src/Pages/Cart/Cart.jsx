import React from "react";
import { courses } from "../../data/courses";
import "./Cart.css";
import BottomNav from "../../Components/BottomNav/BottomNav";

const Cart = () => {
  // Static data based on your image
  const cartItem = courses.find((c) => c.id === 3) || {
    title: "OF Script Pack",
    subtitle: "[All Incl]",
    price: 52.0,
    image: "https://via.placeholder.com/80",
  };

  const subtotal = cartItem.price;
  const tip = 7.8; // 15% as per image
  const total = 59.8;

  return (
    <div className="page-viewport">
      <section className="cart-container">
        <div className="cart-grid">
          {/* LEFT COLUMN */}
          <div className="column-left">
            <h1 className="main-title">Shopping cart</h1>
            <nav className="breadcrumb-nav">Home / Store / Shopping cart</nav>

            <div className="product-row">
              <div className="product-info">
                <img
                  src={cartItem.image}
                  alt="product"
                  className="product-thumb"
                />
                <div className="product-text">
                  <div className="title-wrapper">
                    <span className="product-name">
                      {cartItem.title} {cartItem.subtitle}
                    </span>
                    <button className="remove-item">×</button>
                  </div>
                  <div className="qty-dropdown">
                    <div>
                      Qty: 1 <span className="chevron">⌄</span>
                    </div>
                    <div>
                      <span className="item-price-display">
                        ${cartItem.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Tip (15%)</span>
                <span>${tip.toFixed(2)}</span>
              </div>
              <div className="price-row total-row">
                <span>TOTAL</span>
                <span className="grand-total">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="footer-actions">
              <p>
                Have a promo coupon?{" "}
                <span className="text-link">Redeem your coupon</span>
              </p>
              <p>
                Looking for more?{" "}
                <span className="text-link">Continue shopping</span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="column-right">
            <h2 className="main-title">Checkout</h2>
            <p className="helper-text">
              Enter your email address. This address will be used to send you
              order status updates.
            </p>

            <div className="input-field-wrapper">
              <input
                type="email"
                className="checkout-input"
                defaultValue="mranandsharma003@gmail.com"
              />
            </div>

            <div className="checkout-actions">
              <div className="button-with-lock">
                <button className="btn-primary">Checkout</button>
              </div>

              <button className="btn-link-pay">
                Pay with <span className="link-brand">link</span>
              </button>
              <div>
                <p>
                  🔒 All data is transmitted encrypted via a secure TLS
                  connection
                </p>
              </div>
            </div>

            <div className="next-steps-section">
              <h3 className="next-header">Next</h3>
              <div className="step">
                <p className="step-label">Payment information</p>
                <p className="step-sub">
                  Choose a payment method and enter your payment details.
                </p>
              </div>
              <div className="step">
                <p className="step-label">Order confirmation</p>
                <p className="step-sub">
                  Place your order and receive a confirmation email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Cart;
