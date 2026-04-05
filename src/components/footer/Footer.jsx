import "./Footer.css";

function Footer() {

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
                    <h1>Contact Me</h1>
                    <p><Email:p>temurbeka82@gmail.com</Email:p></p>
                    <p><Phone:p>+998 93 703 11 21</Phone:p></p>
                    <div className="socials">
                        <a className="a-soc" href="https://t.me/ysnvch" target="_blank" rel="noopener noreferrer">
                            <div className="a-soci"></div>
                        </a>
                        <a className="a-soc" href="https://instagram.com/yshnvic" target="_blank" rel="noopener noreferrer">
                            <div className="a-soci2"></div>
                        </a>
                        <a className="a-soc" href="https://tiktok.com/@yshnvic" target="_blank" rel="noopener noreferrer">
                            <div className="a-soci3"></div>
                        </a>
                        <a className="a-soc" href="https://github.com/TemurbekCode" target="_blank" rel="noopener noreferrer">
                            <div className="a-soci4"></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;