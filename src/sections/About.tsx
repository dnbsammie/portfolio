import { useLanguage } from "../i18n/LanguageContext";
import "../styles/sections/About.css";

const About = () => {
    const { t } = useLanguage();
    return (
        <section className="about" id="about" aria-labelledby='about-section'>
            <div className="about-left">
                <h2>{t("about.title")}</h2>
                <hr />
                <div className="about-info">
                    <h5>{t("about.bio")}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui soluta voluptatum repellat dolor numquam magnam doloremque error aperiam delectus quos nemo neque similique nesciunt laudantium, ad atque corporis. Eveniet, fugit?</p>
                </div>
                <hr />
                <div className="about-info">
                    <h5>{t("about.aproach")}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui soluta voluptatum repellat dolor numquam magnam doloremque error aperiam delectus quos nemo neque similique nesciunt laudantium, ad atque corporis. Eveniet, fugit?</p>
                </div>
            </div>
            <div className="about-right">

            </div>
        </section>
    )
}

export default About;