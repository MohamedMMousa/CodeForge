import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import Container from './Container';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <a href="#main" className="brand">
            <img
              src="/images/logo.png"
              alt=""
              width={32}
              height={28}
              loading="lazy"
              className="brand-logo"
            />
            <span className="brand-name">CodeForge</span>
          </a>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <nav aria-label={t.footer.linksTitle}>
          <h3 className="footer-heading">{t.footer.linksTitle}</h3>
          <ul className="footer-links">
            {t.nav.links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="footer-heading">{t.footer.contactTitle}</h3>
          <ul className="footer-links footer-contact">
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${t.footer.email}`} className="footer-link">
                {t.footer.email}
              </a>
            </li>
            <li>
              <MessageCircle size={16} aria-hidden="true" />
              <a
                href={buildWhatsAppUrl(t.whatsapp.defaultMessage)}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.whatsappLabel}
              </a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{t.footer.location}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="footer-bottom">
        <Container>
          <p>{t.footer.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
