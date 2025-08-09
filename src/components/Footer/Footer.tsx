import { Link } from 'react-scroll';
import styles from "./Footer.module.css"

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer" className={styles.contact} aria-labelledby="footer-section">
            <div className={styles.f_head} id="footer_head">
                <h1>get in touch</h1>
            </div>
            <div className={styles.f_content} id="footer_content">
                <div className={styles.f_column} id="footer_column">
                    <p>Do you have an idea or project in mind? Write to me and let's create something amazing together.</p>
                    <a href="mailto:seriveramosq@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.email_link}>seriveramosq@gmail.com</a>
                </div>
                <div className={styles.f_column} id="footer_column">
                    <h5>follow me</h5>
                    <ul>
                        <li><a href="https://codepen.io/dnbsammie" target="_blank" aria-label="codepen">Codepen</a></li>
                        <li><a href="https://www.youtube.com/@dnbsammie" target="_blank" aria-label="youtube">ColorsWall</a></li>
                        <li><a href="https://github.com/dnbsammie" target="_blank" aria-label="github">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/seriveramosq" target="_blank" aria-label="linkedin">LinkedIn</a></li>
                        <li><a href="https://www.youtube.com/@dnbsammie" target="_blank" aria-label="youtube">Youtube</a></li>
                    </ul>
                </div>
                <div className={styles.f_column} id="footer_column">
                    <h5>sitemap</h5>
                    <ul>
                        <li><Link to="hero" smooth={true} duration={800} aria-label="back to top">Home</Link></li>
                        <li><Link to="projects" smooth={true} duration={800} aria-label="back to top">Work</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.f_foot} id='footer-foot'>
                <p className="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera.</p>
                <Link to="hero" smooth={true} duration={600} className="fa-solid fa-arrow-up" aria-label="back to top"></Link>
            </div>
        </footer >
    )
}