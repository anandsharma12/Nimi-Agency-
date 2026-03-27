import { useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/lunaezella/new-meeting",
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-center">
        <p className="footer-title">nimi-agency</p>
        <p className="footer-link underline-animate">Report Abuse</p>
        <p className="footer-muted underline-animate">Powered by Lightspeed</p>
      </div>

      {/* CHAT ICON */}
      <div className="chat-widget" onClick={openCalendly}>
        <button className="calendly-float-btn" type="button">
          <svg viewBox="0 0 24 24">
            <path d="M6 4.5 h11 c1.4 0 2.5 1.2 2.5 2.6 v5.3 c0 1.4 -1.1 2.6 -2.5 2.6 h-6 l-4 3.5 v-3.5 h-1 c-1.4 0 -2.5 -1.2 -2.5 -2.6 v-5.3 c0 -1.4 1.1 -2.6 2.5 -2.6 z" />
            <line x1="8" y1="8.2" x2="15.2" y2="8.2" />
            <line x1="8" y1="11" x2="13.4" y2="11" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
