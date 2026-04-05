import "./Register.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_a8d852d";
const TEMPLATE_ID = "template_bqk9d0f";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
            <div className="register-container">

                {/* LEFT */}
                <div className="register-left">
                    <h2>{t("Call To Action")}</h2>

                    <div className="contact-box">
                        <div>
                            <strong>Email:</strong>
                            <p>temurbeka82@gmail.com</p>
                        </div>

                        <div>
                            <strong>{t("Phone")}:</strong>
                            <p>+998 93 703 11 21</p>
                        </div>

                        <div>
                            <strong>{t("Adress")}:</strong>
                            <p>Urgut, Samarkand</p>
                        </div>

                        <div className="socials">
                            <h2>My Socials:</h2>
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

                {/* RIGHT */}
                <form className="register-form" onSubmit={sendEmail}>
                    <h3>{t("Any Questions?")}</h3>

                    <label>Your Full Name:</label>
                    <input type="text" name="from_name" placeholder="Full Name" required />
                    <label>Your Social:</label>
                    <input type="tel" name="from_phone" placeholder="Telegram or Instagram" required />
                    <label>Email Adress:</label>
                    <input type="email" name="from_email" placeholder="example@gmail.com" required />
                    <label>Questions Here: 👇🏻</label>
                    <textarea name="message" placeholder="Ask Anything Here" rows="4" />

                    <button type="submit">{t("subrequest")}</button>
                </form>

            </div>
        </section>
    );
}

export default Register;