import "./Footer.css";
import { Github, Instagram, Send, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-left">
                    <img src="/logo.png" alt="logo" className="footer-logo" />
                    <p>© 2026 Portfolio</p>
                    <span className="developer">
                        Designed & Developed by Alisherov Temurbek
                    </span>
                </div>

                <div className="footer-right">
                    <div className="footer-contact">
                        <Phone size={20} />
                        <span>+998 93 703 11 21</span>
                    </div>

                    <div className="footer-contact">
                        <Mail size={20} />
                        <span>temurbeka82@gmail.com</span>
                    </div>

                    <div className="footer-contact">
                        <MapPin size={20} />
                        <span>Urgut, Samarkand</span>
                    </div>

                    <div className="footer-socials">
                        <Github size={18} />
                        <Instagram size={18} />
                        <Send size={18} />
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;