import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./Hero.module.css";

const Hero = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.max(1 - scrollY / 400, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section id="hero" aria-labelledby="hero-section" className={styles.hero} style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}>
            <div className={styles.hero_sides}>
                <ul>
                    <li><a href="mailto:seriveramosq@gmail.com" className="fa-solid fa-paper-plane" aria-label="email"></a></li>
                    <li><a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in" target="_blank" aria-label="linkedin"></a></li>
                    <li><a href="https://github.com/dnbsammie" className="fa-brands fa-github" target="_blank" aria-label="github"></a></li>
                    <li><a href="https://codepen.io/dnbsammie" className="fa-brands fa-codepen" target="_blank" aria-label="codepen"></a></li>
                    <li><a href="https://www.youtube.com/@dnbsammie" className="fa-brands fa-youtube" target="_blank" aria-label="youtube"></a></li>
                </ul>
            </div>
            <div className={styles.hero_title}>
                <h5>Hi, I'm Samuel</h5>
                <h1>I craft <span className="text_accent">Experiences</span><br />that Matter</h1>
            </div>
            <div className={styles.hero_sides}>
                <Link to="projects" smooth={true} duration={600} className={styles.vertical_link}>SCROLL DOWN</Link>
                <i className="fa-solid fa-arrow-down-long"></i>
            </div>
        </section>
    );
};

export default Hero;