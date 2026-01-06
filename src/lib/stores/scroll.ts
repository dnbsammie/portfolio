export function scrollIntoView(event: MouseEvent & { currentTarget: HTMLAnchorElement }) {
    const el = document.querySelector(event.currentTarget.getAttribute('href')!);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
}