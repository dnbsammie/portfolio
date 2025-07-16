// import { useState, useRef } from 'react';
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);
import AudioPlayer from "./AudioPlayer";
import "../styles/components/Header.css";

const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    // const overlayRef = useRef<HTMLDivElement>(null);

    // useGSAP(() => {
    //     if (menuOpen) {
    //         gsap.fromTo(
    //             overlayRef.current,
    //             { y: '-100%', opacity: 0 },
    //             { y: '0%', opacity: 1, duration: 0.6, ease: 'power2.out' }
    //         );
    //     } else {
    //         gsap.to(overlayRef.current, {
    //             y: '-100%',
    //             opacity: 0,
    //             duration: 0.5,
    //             ease: 'power2.in',
    //         });
    //     }
    // }, [menuOpen]);
    return (
        <header>
            <nav>
                <AudioPlayer src="#" />
                <div className="logo"><a href="./">SR</a></div>
                <div className="toggle-btn">
                    {/* <button className="burger" onClick={() => setMenuOpen(!menuOpen)}></button> */}
                </div>
            </nav>
        </header>
    )
}

export default Header