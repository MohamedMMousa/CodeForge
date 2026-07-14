import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'codeforge-theme';

/**
 * The inline script in index.html resolves the initial theme
 * (stored choice, else system preference) before first paint and
 * stamps it on <html data-theme>. This hook reads that attribute
 * as its initial state so both stay in sync.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
