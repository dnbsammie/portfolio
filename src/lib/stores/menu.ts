import { writable } from 'svelte/store';
import { stopLenis, startLenis } from '$lib';

export const isMenuOpen = writable(false);
export const isMenuAnimating = writable(false);

function lockScroll() {
    document.body.style.overflow = 'hidden';
    stopLenis();
}

function unlockScroll() {
    document.body.style.overflow = '';
    startLenis();
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
        if (v) {
            unlockScroll();
        } else {
            lockScroll();
        }
        return !v;
    });
}

export function finishMenuAnimation() {
    isMenuAnimating.set(false);
}
