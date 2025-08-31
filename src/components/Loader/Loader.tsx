import { useEffect, useRef, useState } from "react";
import styles from "./Loader.module.css";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9,0,0.1,1");

interface LoaderProps {
    onComplete?: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
    const loaderRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (count < 99) {
            interval = setInterval(() => {
                setCount((prev) => (prev < 99 ? prev + 1 : prev));
            }, 10);
        }
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        if (count === 99 && loaderRef.current) {
            const tl = gsap.timeline({
                delay: 0.3,
                defaults: { ease: "hop" },
            });

            tl.to(`.${styles.counter}`, {
                opacity: 0,
                duration: 0.5,
            });

            tl.to(`#word_1 h3`, { y: "0%", duration: 1 }, "<");
            tl.to(`#word_2 h3`, { y: "0%", duration: 1 }, "<0.2");

            tl.to(`.${styles.divider}`, {
                scaleY: 1,
                duration: 1,
                transformOrigin: "top center",
            });

            tl.to(`#word_1 h3`, { y: "100%", duration: 1, delay: 0.3 });
            tl.to(`#word_2 h3`, { y: "-100%", duration: 1 }, "<");

            tl.fromTo(
                `.${styles.block}`,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 1,
                    stagger: 0.1,
                    delay: 0.75,
                    ease: "hop",
                    onComplete: () => {
                        gsap.to(loaderRef.current, {
                            opacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                if (onComplete) onComplete();
                            },
                        });
                    },
                },
                "<"
            );

        }
    }, [count, onComplete]);

    return (
        <div className={styles.loader} ref={loaderRef}>
            <div className={styles.overlay}>
                <div className={styles.block}></div>
                <div className={styles.block}></div>

                <div className={styles.intro_logo}>
                    <div className={styles.word} id="word_1">
                        <h3>samuel</h3>
                    </div>
                    <div className={styles.word} id="word_2">
                        <h3>rivera</h3>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.counter}>
                    <h6>{count}</h6>
                </div>
            </div>
        </div>
    );
};
