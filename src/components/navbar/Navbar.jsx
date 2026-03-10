import "./Navbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { t, i18n } = useTranslation();

    const closeAll = () => {
        setMenuOpen(false);
    }

    return (
        <div className="nav">
            <div className="navContainer">
                <Link to="/" onClick={closeAll}>
                    <h1 className="logo">&lt; TA /&gt;</h1>
                </Link>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/" className="nav-link" onClick={closeAll}>
                        {t("home")}
                    </Link>
                    <Link to="/about" className="nav-link" onClick={closeAll}>
                        {t("about")}
                    </Link>
                    <Link to="/" className="nav-link" onClick={closeAll}>
                        {t("projects")}
                    </Link>
                    <Link to="/" className="nav-link" onClick={closeAll}>
                        {t("skill")}
                    </Link>
                    <Link to="/" className="nav-link" onClick={closeAll}>
                        {t("services")}
                    </Link>
                </div>

                <div className="nav-right">
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                    <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
                </div>

                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </div>
        </div>
    )
}

export default Navbar;