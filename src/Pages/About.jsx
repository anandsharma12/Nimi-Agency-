import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">
        <div className="about-section-wrapper">
          <div className="about-section-content">
            {/* Left title */}
            <div className="about-title">
              <h2>About us</h2>
            </div>

            {/* Right content */}
            <div className="about-content">
              <p>
                - Have your link on the bio of high member NSFW subreddits. Be
                on front, more clicks.
              </p>
              <p>
                - Buy accounts, course and guides on Reddit that will boost you,
                drive, scale your OF / OFM. We do B2B but also we manage Reddit
                to drive real subs and use working subreddits, and use dev API
                tools to scale Reddit. We use time on what works. Not just post
                but actual results and Reddit seo methods that works.
              </p>
              <p>
                - Manage OnlyFans. 5× / about 20 subs min /day. (No-limit subs –
                20× more than that after time). We post content ON REAL working
                subs, dev API methods, mod-help via contacts, drive more subs,
                and help with Reddit seo. We can do video call and we'll send
                calendly link to know how it's going for you, what works for you
                and what don't – free audit and advice. – contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}
      <section className="about-second-section">
        <div className="about-image-wrapper">
          <img
            src="https://dhgf5mcbrms62.cloudfront.net/116421013/slider-BASQ4Z/j2DKSFx-2000x2000.webp"
            alt="Second Section"
            className="about-image"
          />
          <div className="overlay"></div>
        </div>
      </section>

      {/* ================= THIRD SECTION ================= */}
      <section className="about-third-section">
        <div className="about-third-container">
          <p className="about-third-text">
            If you want to make your brand / OF / OFM scale with organic seo -
            contact us. We backlink your brand, link, nsfw profile on subs that
            get views, talk with mods, use AI / API dev auto methods that get
            best SEO results. We manage you on what really works on Reddit. You
            can buy accounts - guides - free audit on how it works. We are an
            agency based in France, UK, US. We're a team of multiple success
            driven devs, managers, and more. We do Reddit seo, 10K-100K+ karma
            accounts, and subs that really works and more link-clicks.
          </p>
        </div>
      </section>

      {/* ================= FOURTH SECTION ================= */}
      <section className="about-fourth-section">
        <div className="about-image-wrapper">
          <img
            src="https://dhgf5mcbrms62.cloudfront.net/116421013/slider-AGY7pV/9v68qtt-2000x2000.webp"
            alt="Fourth Section"
            className="about-image"
          />
          <div className="overlay"></div>
        </div>
      </section>

      {/* ================= FIFTH SECTION ================= */}
      <section className="about-fifth-section">
        <div className="about-image-wrapper">
          <img
            src="https://dhgf5mcbrms62.cloudfront.net/116421013/image-text-PhmfXW/sq3UZy2-2000x2000.webp"
            alt="Fifth Section"
            className="about-image"
          />
          <div className="overlay"></div>
        </div>
        <div className="about-fifth-text-below">Contact us / Apply now</div>
      </section>
    </div>
  );
};

export default About;
