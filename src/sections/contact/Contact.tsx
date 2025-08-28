import { Link } from 'react-scroll';
import styles from "./Contact.module.css";

const Contact = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section id="contact" aria-labelledby="contact-section" className={styles.contact}>
            <div className={styles.left}>
                <div className={styles.split}>
                    <h1 className="vertical_text">get in<br />touch</h1>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.split}>
                    <small>samuel rivera</small>
                    <h4>Do you have an idea or project in mind?<br /> Let's talk about it.</h4>
                    <div className={styles.email}>
                        <h5>Email:</h5>
                        <a href="mailto:seriveramosq@gmail.com" className={styles.email_text} target="_blank" rel="noopener noreferrer">seriveramosq@gmail.com</a>
                    </div>
                    <hr />
                    <a href="https://codepen.io/dnbsammie" className="hoverable" target="_blank" aria-label="codepen">Codepen</a>
                    <a href="https://colorswall.com/users/3710" className='hoverable' target="_blank" aria-label="youtube">ColorsWall</a>
                    <a href="https://github.com/dnbsammie" className='hoverable' target="_blank" aria-label="github">Github</a>
                    <a href="https://www.linkedin.com/in/seriveramosq" className='hoverable' target="_blank" aria-label="linkedin">LinkedIn</a>
                    <hr />
                    <footer className={styles.footer}>
                        <small className="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera.</small>
                        <Link to="hero" smooth={true} duration={600} className="back-top" aria-label="back to top">Back to Top</Link>
                    </footer>
                </div>
            </div>
        </section>
    )
}

export default Contact