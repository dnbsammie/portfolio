import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Preloader.module.css";

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const textsRef = useRef<HTMLHeadingElement[]>([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            onComplete: onComplete,
        });

        gsap.set(textsRef.current, { y: 225, opacity: 0 });

        tl.to(textsRef.current, {
            y: 0,
            opacity: 1,
            stagger: 0.25,
            duration: 1.2,
        });

        tl.to(
            textsRef.current,
            {
                y: -200,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
            },
            "+=1.5"
        );

        tl.to(
            preloaderRef.current,
            {
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                duration: 1.5,
            },
            "-=0.8"
        );
    }, []);

    return (
        <div ref={preloaderRef} className={styles.preloader}>
            <h2 ref={(el) => { if (el) textsRef.current[0] = el; }}>Loading</h2>
            <h2 ref={(el) => { if (el) textsRef.current[1] = el; }}>Your</h2>
            <h2 ref={(el) => { if (el) textsRef.current[2] = el; }}>Experience</h2>
        </div>
    );
};