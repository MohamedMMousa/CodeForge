import { CalendarCheck, Users, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '../components/Button';
import CodeWindow from '../components/CodeWindow';
import Container from '../components/Container';
import { useLanguage } from '../i18n/LanguageContext';
import type { TrustItem } from '../types';

const TRUST_ICONS: Record<TrustItem['id'], LucideIcon> = {
  trial: CalendarCheck,
  groups: Users,
  live: Video,
};

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />
      <Container className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            {hero.title} <span className="hero-title-accent">{hero.titleAccent}</span>
          </h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-ctas">
            <Button href="#contact" size="lg">
              {hero.ctaPrimary}
            </Button>
            <Button href="#courses" variant="secondary" size="lg">
              {hero.ctaSecondary}
            </Button>
          </div>
          <ul className="hero-trust">
            {hero.trust.map((item) => {
              const Icon = TRUST_ICONS[item.id];
              return (
                <li key={item.id}>
                  <Icon size={16} aria-hidden="true" />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hero-visual">
          <CodeWindow />
        </div>
      </Container>
    </section>
  );
}
