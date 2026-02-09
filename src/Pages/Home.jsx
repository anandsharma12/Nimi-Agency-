import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Header from "../Components/Header/Header";
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="overlay">
          <NavLink to="/contact">
            <button className="contact-btn">Contact</button>
          </NavLink>
        </div>
      </section>
      <section className="second-section">
        <div className="second-overlay">
          <div className="content">
            <p>
              - Be on the front of a 100K member NSFW <br /> subreddit - all you
              need to do is contact us.
            </p>
            <p>
              - Never ending supply of accounts / Logic DRIVEN <br />
              scaling methods to scale you with organic real <br /> methods.
              Reddit API-user checker (views, who clicked)
            </p>
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className="third-content">
          <span className="highlight">Reddit / OF. 20×.</span>
          <br />
          If you want to make your brand / OF / OFM scale with organic seo -
          contact us. We backlink your brand, link,
          <br /> nsfw profile on subs that get views, talk with mods, use AI /
          API dev auto methods that get best SEO results. <br />
          We manage you on what really works on Reddit. You can buy accounts -
          guides - free audit on how it works.
          <br />
          We are an agency based in France, UK, US. We're a team of multiple
          success-driven devs, managers, and <br />
          more. We do Reddit SEO, 10K–100K+ karma accounts, and subs that really
          work and more link-clicks.
        </div>
      </section>
      <section className="cta-section">
        <button className="shop-btn">Shop Now</button>
      </section>
      <section className="fifth-section">
        <div className="fifth-overlay">{/* content can go here later */}</div>
      </section>
      <section className="sixth-section">
        <div className="sixth-content">
          Have more accounts / info not on the shop accounts <br /> page. We can
          give a free audit on call. Feel free to <br />
          contact by email and inquire about what you want.
        </div>
      </section>
      <section className="seventh-section">
        <div className="seventh-overlay">{/* future content */}</div>
      </section>
      <section className="clients-section">
        <h2 className="clients-title">Our Clients</h2>

        <div className="clients-grid">
          <div className="client-card">
            <p className="client-text">
              I have more fans now &lt;3 a lot on the weekend. I love their
              Reddit marketing.
            </p>

            <div className="stars">★★★★★</div>
            <span className="client-name">lily</span>
          </div>

          <div className="client-card">
            <p className="client-text">
              Thank you very much, everything logged in successfully.
            </p>

            <div className="stars">★★★★★</div>
            <span className="client-name">ben</span>
          </div>

          <div className="client-card">
            <p className="client-text">thx i'll come again</p>

            <div className="stars">★★★★★</div>
            <span className="client-name">zain</span>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2 className="contact-title">Contact</h2>

        <p className="contact-email">info@nini-agency.com</p>

        <div class="social-icons">
          <a href="#" class="icons whatsapp">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#" class="icons telegram">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="#" class="icons instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
