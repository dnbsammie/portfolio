import { Link } from 'react-scroll';
import styles from "./Footer.module.css"

export const Footer = () => {
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('seriveramosq@gmail.com');
            alert('¡Email copied to clipboard!');
        } catch (err) {
            console.error('Error copying the email: ', err);
        }
    };
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer" className={styles.contact} aria-labelledby="footer-section">
            <hr />
            <div className={styles.f_head} id="footer_head">
                <h1>get in touch</h1>
            </div>
            <div className={styles.f_content} id="footer_content">
                <div className={styles.f_column} id="footer_column">
                    <p>Do you have an idea or project in mind?<br /> Let's talk about it.</p>
                    <div className={styles.email_btn} tabIndex={0}>
                        <a href="mailto:seriveramosq@gmail.com" className={styles.email_text} target="_blank" rel="noopener noreferrer">seriveramosq@gmail.com</a>
                        <div className={styles.email_copy} onClick={handleCopyEmail} role="button" tabIndex={0}>
                            <i className="fa-solid fa-copy"></i>
                        </div>

                    </div>
                </div>
                <div className={styles.f_column} id="footer_column">
                    <div className={styles.f_lists} id="footer_social">
                        <h5>social:</h5>
                        <ul>
                            <li><a href="https://codepen.io/dnbsammie" target="_blank" aria-label="codepen">Codepen</a></li>
                            <hr />
                            <li><a href="https://colorswall.com/users/3710" target="_blank" aria-label="youtube">ColorsWall</a></li>
                            <hr />
                            <li><a href="https://github.com/dnbsammie" target="_blank" aria-label="github">Github</a></li>
                            <hr />
                            <li><a href="https://www.linkedin.com/in/seriveramosq" target="_blank" aria-label="linkedin">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className={styles.f_lists} id="footer_sitemap">
                        <h5>sitemap:</h5>
                        <ul>
                            <li><Link to="hero" smooth={true} duration={800} aria-label="back to top">Home</Link></li>
                            <hr />
                            <li><Link to="projects" smooth={true} duration={700} aria-label="back to top">Work</Link></li>
                            <hr />
                            <li><Link to="projects" smooth={true} duration={600} aria-label="back to top">About</Link></li>
                            <hr />
                            <li><Link to="projects" smooth={true} duration={500} aria-label="back to top">Services</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <div className={styles.f_foot} id='footer-foot'>
                <p className="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera.</p>
                <Link to="hero" smooth={true} duration={600} className="fa-solid fa-chevron-up" aria-label="back to top"></Link>
            </div>
        </footer >
    )
}