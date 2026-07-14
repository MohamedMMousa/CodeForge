import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, SiteContent } from '../types';
import { content } from '../content';

export type Dir = 'rtl' | 'ltr';

interface LanguageValue {
  lang: Lang;
  dir: Dir;
  t: SiteContent;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageValue | null>(null);

const STORAGE_KEY = 'codeforge-lang';

const getInitialLang = (): Lang => (localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar');

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const dir: Dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      dir,
      t: content[lang],
      toggleLang: () => setLang((current) => (current === 'ar' ? 'en' : 'ar')),
    }),
    [lang, dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
