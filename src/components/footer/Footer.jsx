import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow footer-glow--left"></div>
      <div className="footer-glow footer-glow--right"></div>

      <div className="footer-top-line"></div>

      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-logo-text">TA</span>
            <div>
              <p className="footer-name">Temurbek Alisherov</p>
              <p className="footer-role">Frontend Developer</p>
            </div>
          </div>
          <p className="footer-bio">
            Building clean, fast and creative web experiences. Always learning, always growing.
          </p>
          <span className="footer-copy">
            © 2026 — Designed & Developed by Alisherov Temurbek
          </span>
        </div>

        {/* MIDDLE — NAV */}
        <div className="footer-nav">
          <p className="footer-section-label">// navigate</p>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT — CONTACT */}
        <div className="footer-right">
          <p className="footer-section-label">// contact</p>

          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span className="fc-icon">✉</span>
              <span>temurbekalisherov82@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">📞</span>
              <span>+998 93 703 11 21</span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon">📍</span>
              <span>Urgut, Samarkand</span>
            </div>
          </div>

          <div className="socials">
            <a className="soc-link" href="https://t.me/alisherovdev" target="_blank" rel="noopener noreferrer">
              <div className="a-soci"></div>
            </a>
            <a className="soc-link" href="https://www.instagram.com/alisherov.dev?igsh=MXg2aDB1M3RqdXdvcw==" target="_blank" rel="noopener noreferrer">
              <div className="a-soci2"></div>
            </a>
            <a className="soc-link" href="https://tiktok.com/@yshnvic" target="_blank" rel="noopener noreferrer">
              <div className="a-soci3"></div>
            </a>
            <a className="soc-link" href="https://github.com/TemurbekCode" target="_blank" rel="noopener noreferrer">
              <div className="a-soci4"></div>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-line"></div>
        <div className="footer-bottom-inner">
          <span className="footer-status">
            <span className="status-dot"></span>
            Available for work
          </span>
          <span className="footer-made">
            Made with <span className="heart">♥</span> in Uzbekistan
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;