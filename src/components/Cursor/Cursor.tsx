import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isTouch, setIsTouch] = useState(false);
    const size = 30;

    useEffect(() => {
        const hasTouch =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            (navigator as any).msMaxTouchPoints > 0;

        if (hasTouch) {
            setIsTouch(true);
            return;
        }

        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power3.out",
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "power3.out" });
        };
        const handleMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
        };

        window.addEventListener("mousemove", moveCursor);

        const links = document.querySelectorAll("a, button, [data-interactive='true']");
        links.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            links.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    if (isTouch) return null;

    return (
        <div
            ref={cursorRef}
            className="customCursor"
            style={{
                width: size,
                height: size,
            }}
        />
    );
};

export default Cursor;
