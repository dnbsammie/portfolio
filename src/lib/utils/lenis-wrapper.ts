import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.08,
        });
    }
    return lenis;
}

export function stopLenis() {
    lenis?.stop();
}

export function startLenis() {
    lenis?.start();
}

export function getLenis() {
    return lenis;
}