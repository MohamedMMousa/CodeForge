import { useMemo } from 'react';
import Badge from '../components/Badge';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { revealDelay } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function LearningJourney() {
  const { t, lang } = useLanguage();
  const fmt = useMemo(() => new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US'), [lang]);

  return (
    <section id="journey" className="section section-alt">
      <Container>
        <SectionHeading intro={t.journey.intro} />
        <ol className="journey">
          {t.journey.stages.map((stage, i) => (
            <li className="journey-stage reveal" style={revealDelay(i)} key={stage.id}>
              <span className={`journey-node${stage.soon ? ' journey-node-soon' : ''}`} aria-hidden="true">
                {fmt.format(i + 1)}
              </span>
              <div className="journey-body">
                <h3 className="journey-title">
                  {stage.title}
                  {stage.soon && <Badge variant="soon">{t.journey.soonLabel}</Badge>}
                </h3>
                <p className="journey-desc">{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
