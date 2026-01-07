import { closeMenu } from '$lib';

export function scrollIntoView(event: MouseEvent & { currentTarget: HTMLAnchorElement }) {
    const el = document.querySelector(event.currentTarget.getAttribute('href')!);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
}
