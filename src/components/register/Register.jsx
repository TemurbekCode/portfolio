import "./Register.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_a8d852d";
const TEMPLATE_ID = "template_bqk9d0f";
const PUBLIC_KEY = "jUy_y9jB4kOIDYW3O";

function Register() {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully ✔️");
        e.target.reset();
      })
      .catch(() => {
        alert("Something went wrong ❌");
      });
  };

  return (
    <section className="register">
      <div className="reg-noise"></div>

      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="register-container">
        {/* LEFT */}
        <div className="register-left">
          <span className="reg-tag">// contact</span>
          <h2 className="reg-title">{t("Call To Action")}</h2>
          <p className="reg-subtitle">
            Have a project in mind? Let's build something great together.
          </p>

          <div className="contact-box">
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">temurbeka82@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">{t("Phone")}</p>
                <p className="contact-value">+998 93 703 11 21</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <p className="contact-label">{t("Adress")}</p>
                <p className="contact-value">Urgut, Samarkand</p>
              </div>
            </div>
          </div>

          <div className="socials-wrap">
            <p className="socials-label">Find me on</p>
            <div className="socials">
              <a className="soc-link" href="https://t.me/alisherovdev" target="_blank" rel="noopener noreferrer">
                <div className="a-soci"></div>
                <span>Telegram</span>
              </a>
              <a className="soc-link" href="https://www.instagram.com/alisherov.dev?igsh=MXg2aDB1M3RqdXdvcw==" target="_blank" rel="noopener noreferrer">
                <div className="a-soci2"></div>
                <span>Instagram</span>
              </a>
              <a className="soc-link" href="https://tiktok.com/@yshnvic" target="_blank" rel="noopener noreferrer">
                <div className="a-soci3"></div>
                <span>TikTok</span>
              </a>
              <a className="soc-link" href="https://github.com/TemurbekCode" target="_blank" rel="noopener noreferrer">
                <div className="a-soci4"></div>
                <span>GitHub</span>
              </a>
              <a className="soc-link" href="https://www.linkedin.com/in/temurbek-alisherov-42a5b23b3?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                <div className="a-soci5"></div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="form-wrap">
          <div className="form-header">
            <span className="form-tag">new message</span>
            <h3 className="form-title">{t("Any Questions?")}</h3>
          </div>

          <form className="register-form" onSubmit={sendEmail}>
            <div className="field-group">
              <div className="field">
                <label>Full Name</label>
                <input type="text" name="from_name" placeholder="Temur Alisherov" required />
              </div>
              <div className="field">
                <label>Telegram / Instagram</label>
                <input type="tel" name="from_phone" placeholder="@username" required />
              </div>
            </div>

            <div className="field">
              <label>Email Address</label>
              <input type="email" name="from_email" placeholder="example@gmail.com" required />
            </div>

            <div className="field">
              <label>Your Message</label>
              <textarea name="message" placeholder="Tell me about your project..." rows="5" />
            </div>

            <button type="submit" className="reg-btn">
              <span>{t("subrequest")}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;