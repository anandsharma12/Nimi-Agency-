import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-center">
        <p className="footer-title">nimi-agency</p>
        <p className="footer-link underline-animate">Report Abuse</p>
        <p className="footer-muted underline-animate">Powered by Lightspeed</p>
      </div>

      {/* CHAT ICON */}
      <div className="chat-widget">
        <span className="chat-icon">💬</span>
      </div>
    </footer>
  );
};

export default Footer;
