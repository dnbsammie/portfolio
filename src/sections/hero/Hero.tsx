import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import NeonButton from '../../components/NeonButton/NeonButton';
import styles from "./Hero.module.css";

const Hero = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.max(1 - scrollY / 100, 0);
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
                <Link to="projects" smooth={true} duration={700} className={styles.vertical_link}>SCROLL DOWN</Link>
            </div>
            <div className={styles.hero_title}>
                <h5>Hi, I'm Samuel</h5>
                <h1>I craft <span className="text_accent">Experiences</span><br />that Matter</h1>
                {/* <NeonButton
                    text="SEE MY WORK"
                    href="#projects"
                    hsl={{ h: 0, s: "0%", l: "94%" }}
                    textHsl={{ h: 0, s: "0%", l: "6%" }}
                /> */}
            </div>
        </section>
    );
};

export default Hero;