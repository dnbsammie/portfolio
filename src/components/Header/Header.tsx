import { Link as ScrollLink } from "react-scroll";
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Header.module.css";
import AudioPlayer from "../AudioPlayer";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLParagraphElement[]>([]);
    const subNavRef = useRef<HTMLDivElement>(null);
    const activeLineRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        itemsRef.current.forEach(item => gsap.set(item, { y: 225 }));
        gsap.set(subNavRef.current, { bottom: "5%", opacity: 0 });
        gsap.set(activeLineRef.current, { width: 0 });

        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to(menuRef.current, {
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%,0% 100%)",
                duration: 1.5,
                ease: "power4.inOut",
            })
            .to(
                itemsRef.current,
                {
                    y: 0,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power4.inOut",
                },
                "-=1"
            )
            .to(
                activeLineRef.current,
                {
                    width: "100%",
                    duration: 1,
                    ease: "power4.out",
                },
                "<"
            )
            .to(
                subNavRef.current,
                {
                    bottom: "10%",
                    opacity: 1,
                    duration: 0.5,
                },
                "<"
            );
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (tl.current) {
            menuOpen ? tl.current.reverse() : tl.current.play();
        }
    };

    const handleNavClick = () => {
        if (menuOpen) toggleMenu();
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Main navigation">
                <div className={styles.audioToggle}>
                    <AudioPlayer src="#" />
                </div>
                <div className={styles.logo}>
                    <a href="./">SR</a>
                </div>
                <div className={styles.toggleBtn}>
                    <button
                        aria-label="Toggle menu"
                        className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
                        onClick={toggleMenu}
                    ></button>
                </div>
            </nav>

            <div className={styles.overlay} ref={menuRef}>
                <menu className={styles.overlayMenu}>
                    {["home", "work", "about"].map((text, i) => (
                        <div className={styles.menuItem} key={text}>
                            <p
                                ref={el => {
                                    if (el) itemsRef.current[i] = el;
                                }}
                                className={text === "home" ? styles.active : ""}
                            >
                                <ScrollLink
                                    to={text}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={handleNavClick}
                                >
                                    {text}
                                </ScrollLink>
                                {text === "home" && <span ref={activeLineRef} className={styles.activeLine}></span>}
                            </p>
                        </div>
                    ))}
                </menu>
                <div className={styles.subNav} ref={subNavRef}>
                </div>
            </div>
        </header>
    );
}
