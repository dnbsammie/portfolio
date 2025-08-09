import { useRef, useState } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useGSAP } from "@gsap/react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
gsap.registerPlugin(useGSAP, CSSRulePlugin);

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<HTMLDivElement[]>([]);
    const burgerRef = useRef<HTMLButtonElement>(null);
    const subNavRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<GSAPTimeline | null>(null);

    useGSAP(() => {
        gsap.set(menuItemsRef.current, { y: 1000 });
        gsap.set(subNavRef.current, { opacity: 0, bottom: "5%" });
        const tl = gsap.timeline({ paused: true });
        tl.to(overlayRef.current, { duration: 1.5, clipPath: "polygon(0% 0%,100% 0%, 100% 100%,0% 100%)", ease: "power4.inOut", });
        tl.to(menuItemsRef.current, { duration: 1, y: 0, stagger: 0.2, ease: "power4.inOut", }, "-=1");
        tl.to(subNavRef.current, { bottom: "10%", opacity: 1, duration: 0.5, delay: 0.5 }, "<");

        timelineRef.current = tl;
    }, []);

    const toggleMenu = () => {
        if (!timelineRef.current) return;
        if (isOpen) { timelineRef.current.reverse(); } else { timelineRef.current.play(); }
        setIsOpen(!isOpen);
    };

    const handleNavClick = (section: string) => {
        if (!timelineRef.current) return;
        setActiveItem(section);
        const rule = CSSRulePlugin.getRule(`.${styles["menu-item"]} p.${styles.active}::after`);
        if (rule) { gsap.fromTo(rule, { width: "0%" }, { width: "100%", duration: 1, ease: "power2.out" }); }

        timelineRef.current.reverse().eventCallback("onReverseComplete", () => {
            setActiveItem(null);
            if (subNavRef.current) { gsap.set(subNavRef.current, { opacity: 0, bottom: "5%", }); }
        });
        setIsOpen(false);
    };

    return (
        <>
            <nav className={styles.nav} role="navigation" aria-label="main-nav">
                <div></div>
                <div className={styles.logo}><a href="./">s. rivera</a></div>
                <div className={styles["toggle-btn"]}>
                    <button className={`${styles.burger} ${isOpen ? styles.active : ""}`} onClick={toggleMenu} ref={burgerRef} aria-label="Toggle menu"><span /> <span /><span /></button>
                </div>
            </nav>
            <div ref={overlayRef} className={styles.overlay}>
                <menu className={styles["overlay-menu"]}>
                    <div className={styles["menu-item"]} ref={(el) => { if (el) menuItemsRef.current[0] = el; }}>
                        <p className={activeItem === "hero" ? styles.active : ""}>
                            <Link to="hero" spy={true} smooth={true} duration={500} onClick={() => handleNavClick("hero")}>home</Link>
                        </p>
                    </div>
                    <div className={styles["menu-item"]} ref={(el) => { if (el) menuItemsRef.current[1] = el; }}>
                        <p className={activeItem === "projects" ? styles.active : ""}>
                            <Link to="projects" spy={true} smooth={true} duration={500} onClick={() => handleNavClick("projects")}>work</Link>
                        </p>
                    </div>
                    <div className={styles["menu-item"]} ref={(el) => { if (el) menuItemsRef.current[2] = el; }}>
                        <p className={activeItem === "footer" ? styles.active : ""}>
                            <Link to="footer" spy={true} smooth={true} duration={500} onClick={() => handleNavClick("footer")}>contact</Link>
                        </p>
                    </div>
                </menu>

                <div className={styles["sub-nav"]} ref={subNavRef}>
                    <a href="mailto:seriveramosq@gmail.com" className="fa-solid fa-paper-plane" aria-label="email"></a>
                    <a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in" target="_blank" aria-label="linkedin"></a>
                    <a href="https://github.com/dnbsammie" className="fa-brands fa-github" target="_blank" aria-label="github"></a>
                    <a href="https://codepen.io/dnbsammie" className="fa-brands fa-codepen" target="_blank" aria-label="codepen"></a>
                    <a href="https://www.youtube.com/@dnbsammie" className="fa-brands fa-youtube" target="_blank" aria-label="youtube"></a>
                </div>
            </div>
        </>
    );
};