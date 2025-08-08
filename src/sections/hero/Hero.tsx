import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./Hero.module.css";

const Hero = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsHidden(scrollY > 1000);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className={`${styles.hero} ${isHidden ? styles.hidden : ''}`} id="hero" aria-labelledby="hero-section">
            <div className={styles.hero_sides}>
                <ul>
                    <li><a href="mailto:seriveramosq@gmail.com" className="fa-solid fa-paper-plane" aria-label="email"></a></li>
                    <li><a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in" target="_blank" aria-label="linkedin"></a></li>
                    <li><a href="https://github.com/dnbsammie" className="fa-brands fa-github" target="_blank" aria-label="github"></a></li>
                    <li><a href="https://codepen.io/dnbsammie" className="fa-brands fa-codepen" target="_blank" aria-label="codepen"></a></li>
                    <li><a href="https://www.youtube.com/@dnbsammie" className="fa-brands fa-youtube" target="_blank" aria-label="youtube"></a></li>
                    {/* <a href="#" className="fa-brands fa-spotify" target="_blank" aria-label="spotify"></a>
                        <a href="#" className="fa-brands fa-soundcloud" target="_blank" aria-label="soundcloud"></a> */}
                </ul>
            </div>
            <div className={styles.hero_title}>
                <h5>Hi, I'm Samuel</h5>
                <h2>I craft <span className="text_accent">Experiences</span><br />that Matter</h2>
            </div>
            <div className={styles.hero_sides}>
                <Link to="projects" smooth={true} duration={400} className={styles.vertical_link}>SCROLL DOWN</Link>
                <i className="fa-solid fa-arrow-down-long"></i>
            </div>
        </section>
    );
};

export default Hero;