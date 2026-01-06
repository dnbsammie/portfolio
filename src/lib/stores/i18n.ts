import { writable, derived } from 'svelte/store';
import { resolveKey } from '$lib';
import es from '../locales/es.json';
import en from '../locales/en.json';

export type Lang = 'en' | 'es';

const DEFAULT_LANG: Lang = 'es'

const dictionary: Record<Lang, Record<string, any>> = {
    en, es
};

function getInitialLang(): Lang {
    if (typeof localStorage === 'undefined') return DEFAULT_LANG;

    const stored = localStorage.getItem('lang') as Lang | null;
    return stored && dictionary[stored] ? stored : DEFAULT_LANG;
}

export const lang = writable<Lang>(getInitialLang());

lang.subscribe((value) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', value);
        document.documentElement.lang = value;
    }
});

export const t = derived(lang, ($lang) => {
    const dict = dictionary[$lang];

    return (key: string): string => {
        return resolveKey(dict, key);
    };
});