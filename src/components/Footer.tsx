import { useRef, useCallback } from "react";
import "../styles/components/Footer.css";

const Footer = () => {
    const textTop = "GET IN";
    const textBottom = "TOUCH";
    const emailRef = useRef<HTMLInputElement>(null);

    const handleCopy = useCallback(() => {
        const email = emailRef.current?.value;
        if (email) {
            navigator.clipboard.writeText(email)
                .then(() => {
                    alert("Email copied to clipboard!");
                })
                .catch(() => {
                    alert("Error copying the email.");
                });
        }
    }, []);

    const handleMailClick = useCallback(() => {
        const email = emailRef.current?.value;
        if (email) {
            window.location.href = `mailto:${email}`;
        }
    }, []);

    const currentYear = new Date().getFullYear();


    return (
        <footer aria-labelledby="footer-section">
            <div className="footer_top">
                <div className="animated-text">
                    <div className="text-row">
                        {textTop.split("").map((letter, index) => (
                            <span key={index} className={`letter ${index === 1 || index === 4 ? "wide" : ""}`}>
                                {letter}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-row">
                    {textBottom.split("").map((letter, index) => (
                        <span key={index} className={`letter ${index === 0 || index === 2 || index === 4 ? "wide" : ""}`}>
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
            <div className="footer_middle">
                <div className="footer_column">
                    <h6>MAIL ME:</h6>
                    <div className="email-container">
                        <input
                            ref={emailRef}
                            type="text"
                            value="seriveramosq@gmail.com"
                            readOnly
                            onClick={handleCopy}
                            aria-label="Email"
                            title="Click to copy"
                        />
                        <button onClick={handleMailClick}
                            aria-label="mail client" ><i className="fa-solid fa-envelope" title="Open Mail Client"></i></button>
                    </div>
                </div>
                <div className="footer_column">
                    <h6>FOLLOW ME:</h6>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/seriveramosq" aria-label="linkedin" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/dnbsammie" aria-label="github" target="_blank">GitHub</a></li>
                        <li><a href="https://codepen.io/dnbsammie" aria-label="codepen" target="_blank">Codepen</a></li>
                        <li><a href="https://colorswall.com/users/3710" aria-label="colorswall" target="_blank">Colorswall</a></li>
                        <li><a href="https://www.youtube.com/@dnbsammie" aria-label="youtube" target="_blank">Youtube</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom">
                <p className="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
