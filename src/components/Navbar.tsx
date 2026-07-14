import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrolled } from '../hooks/useScrolled';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuLabel = lang === 'ar' ? 'القائمة' : 'Menu';
  const langLabel = lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';
  const themeLabel =
    theme === 'dark'
      ? lang === 'ar'
        ? 'الوضع الفاتح'
        : 'Switch to light mode'
      : lang === 'ar'
        ? 'الوضع الداكن'
        : 'Switch to dark mode';

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      menuBtnRef.current?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <nav className="container navbar-inner" aria-label={menuLabel}>
        <a href="#main" className="brand" onClick={closeMenu}>
          <img src="/images/logo.png" alt="" width={36} height={32} className="brand-logo" />
          <span className="brand-name">CodeForge</span>
        </a>

        <ul className="nav-links">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={themeLabel}>
            {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
          <button type="button" className="lang-toggle" onClick={toggleLang} aria-label={langLabel}>
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <Button href="#contact" className="nav-cta">
            {t.nav.cta}
          </Button>
          <button
            type="button"
            ref={menuBtnRef}
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuLabel}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={menuLabel}
      >
        <ul className="mobile-menu-links">
          {t.nav.links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="mobile-menu-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-actions">
          <Button href="#contact" size="lg" onClick={closeMenu}>
            {t.nav.cta}
          </Button>
          <button type="button" className="lang-toggle" onClick={toggleLang} aria-label={langLabel}>
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>
      </div>
    </header>
  );
}
