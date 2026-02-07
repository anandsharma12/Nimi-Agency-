import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">

          <div className="header-top">
            <div className="header-top-left">
              <div className="logo">
                <img
                  src="https://dhgf5mcbrms62.cloudfront.net/116421013/header-ykyLhx/oPvdkwY-200x200.webp"
                  alt="Nimi Agency"
                />
              </div>
            </div>

            <div className="header-top-right">
              <div className="header-actions">
                <div className="search-box desktop-only">
                  <input placeholder="Search" />
                  <span className="search-icon">🔍</span>
                </div>

                <span className="icon desktop-only">👤</span>
                <span className="icon desktop-only">👜</span>

                {/* hmburger */}
                <button
                  className="hamburger mobile-only"
                  onClick={() => setMenuOpen(true)}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="header-bottom desktop-only">
            <nav className="nav">
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/course">Course</NavLink>
              <NavLink to="/management">Mnmgt</NavLink>
              <NavLink to="/products">Accounts</NavLink>
              <NavLink to="/cart">Cart</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>

        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <nav className="mobile-nav">
          <NavLink onClick={() => setMenuOpen(false)} to="/about">About Us</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/course">Course</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/management">Mnmgt</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/accounts">Accounts</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/cart">Cart</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
