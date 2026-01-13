// place files you want to import through the `$lib` alias in this folder.
// ───── TS ──────
export * from './stores/bg-config';
export * from './stores/i18n';
export * from './stores/menu';
export * from './stores/scroll'
export * from './stores/time';
export * from './three/background';
export * from './utils/i18n-helpers';
export * from './utils/lenis-wrapper';

// ──── Icons ────
import favicon from './assets/icon/favicon.svg'
// ───── Img ─────
import img1 from './assets/img/project-1.webp';
import img2 from './assets/img/project-2.webp';
import img3 from './assets/img/project-3.webp';
import img4 from './assets/img/project-4.webp';
import img5 from './assets/img/project-5.webp';

export { favicon, img1, img2, img3, img4, img5 };