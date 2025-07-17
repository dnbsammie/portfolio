import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from "react";
import en from "./en.json";
import es from "./es.json";

const translations = { en, es };

type Lang = "en" | "es";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>(() => {
        const stored = localStorage.getItem("lang");
        return stored === "es" || stored === "en" ? stored : "en";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const t = (key: string): string => {
        const keys = key.split(".");
        let value: any = translations[lang];

        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                if (import.meta.env.DEV) {
                    console.warn(`[i18n] Missing key "${key}" in "${lang}"`);
                }
                return key;
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};
