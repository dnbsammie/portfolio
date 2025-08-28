// import { Link } from 'react-scroll';
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section id="hero" aria-labelledby="hero-section" className={styles.hero}>
            <div className={styles.left}>
                <div className={styles.split}>
                    <h1>SAMUEL <br /> RIVERA</h1>
                    <h5>software developer</h5>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.split}>
                    <p>Passionate about web development, I combine a solid foundation in Java and TypeScript with experience in React, Angular, and Spring Boot to create solutions that work as well as they look. I focus on building smooth, scalable products designed for the end user.</p>
                    <div className={styles.socials}>
                        <a href="mailto:seriveramosq@gmail.com" className="fa-solid fa-paper-plane " aria-label="email"></a>
                        <a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in " target="_blank" aria-label="linkedin"></a>
                        <a href="https://github.com/dnbsammie" className="fa-brands fa-github " target="_blank" aria-label="github"></a>
                        <a href="https://codepen.io/dnbsammie" className="fa-brands fa-codepen " target="_blank" aria-label="codepen"></a>
                        <a href="https://www.youtube.com/@dnbsammie" className="fa-brands fa-youtube " target="_blank" aria-label="youtube"></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;