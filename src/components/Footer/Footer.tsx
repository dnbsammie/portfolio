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
                    <h4>follow me</h4>
                    <a href="https://www.linkedin.com/in/seriveramosq" target="_blank" aria-label="linkedin">linkedin</a>
                    <a href="https://github.com/dnbsammie" target="_blank" aria-label="github">github</a>
                    <a href="https://codepen.io/dnbsammie" target="_blank" aria-label="codepen">codepen</a>
                    <a href="https://www.youtube.com/@dnbsammie" target="_blank" aria-label="youtube">youtube</a>
                    {/* <a href="#" className="fa-brands fa-spotify" target="_blank" aria-label="spotify"></a>
                        <a href="#" className="fa-brands fa-soundcloud" target="_blank" aria-label="soundcloud"></a> */}
                </div>
                <div className={styles.f_column} id="footer_column">
                    <h4>sitemap</h4>
                    <Link to="hero" smooth={true} duration={800} aria-label="back to top">HOME</Link>
                    <Link to="projects" smooth={true} duration={800} aria-label="back to top">WORK</Link>
                </div>
            </div>
            <div className={styles.f_foot} id='footer-foot'>
                <p className="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera. All Rights Reserved.</p>
                <Link to="hero" duration={800} className="fa-solid fa-arrow-up" aria-label="back to top"></Link>
            </div>
        </footer >
    )
}