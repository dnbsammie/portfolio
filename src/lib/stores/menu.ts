import { writable } from 'svelte/store';
import { stopLenis, startLenis, getLenis } from '$lib';

export const isMenuOpen = writable(false);
export const isMenuAnimating = writable(false);

let scrollY = 0;

function lockScroll() {
    if (typeof window === 'undefined') return;

    const l = getLenis();
    scrollY = l ? l.scroll : window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    stopLenis();
}

function unlockScroll() {
    if (typeof window === 'undefined') return;

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';

    const l = getLenis();

    if (l) {
        requestAnimationFrame(() => {
            l.scrollTo(scrollY, { immediate: true, force: true });
            l.resize();
            l.start();
        });
    } else {
        window.scrollTo(0, scrollY);
    }
}



export function openMenu() {
    isMenuAnimating.set(true);
    isMenuOpen.set(true);
    lockScroll();
}

export function closeMenu() {
    isMenuAnimating.set(true);
    isMenuOpen.set(false);
    unlockScroll();
}

export function toggleMenu() {
    isMenuAnimating.set(true);
    isMenuOpen.update(v => {
        if (v) unlockScroll();
        else lockScroll();
        return !v;
    });
}


export function finishMenuAnimation() {
    isMenuAnimating.set(false);
}
