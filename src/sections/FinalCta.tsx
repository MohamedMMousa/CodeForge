import { MessageCircle } from 'lucide-react';
import Container from '../components/Container';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import ContactForm from './ContactForm';

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section final-cta">
      <Container className="final-cta-inner">
        <div className="final-cta-copy reveal">
          <h2 className="final-cta-title">{t.finalCta.title}</h2>
          <p className="final-cta-subtitle">{t.finalCta.subtitle}</p>
          <a
            className="final-cta-alt"
            href={buildWhatsAppUrl(t.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" />
            {t.finalCta.whatsappAlt}
          </a>
        </div>
        <div className="contact-card reveal">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
