import Accordion from '../components/Accordion';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export default function Faq() {
  const { t, lang } = useLanguage();

  return (
    <section id="faq" className="section section-alt">
      <Container className="faq-container">
        <SectionHeading intro={t.faq.intro} />
        <div className="reveal">
          {/* key resets the open item when the language flips */}
          <Accordion key={lang} items={t.faq.items} />
        </div>
      </Container>
    </section>
  );
}
