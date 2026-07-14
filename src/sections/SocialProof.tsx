import { useMemo } from 'react';
import Container from '../components/Container';
import { useCountUp } from '../hooks/useCountUp';
import { useLanguage } from '../i18n/LanguageContext';
import type { Stat } from '../types';

const TECH_PILLS = [
  'Python',
  'JavaScript',
  'React',
  'AI & ML',
  'HTML & CSS',
  'Git & GitHub',
  'SQL',
  'Node.js',
  'Data Science',
  'APIs',
];

function StatItem({ stat }: { stat: Stat }) {
  const { lang } = useLanguage();
  const { ref, value } = useCountUp(stat.value);
  const fmt = useMemo(
    () => new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US', { maximumFractionDigits: 0 }),
    [lang],
  );

  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        <span aria-hidden="true">
          {stat.prefix}
          {fmt.format(Math.round(value))}
          {stat.suffix}
        </span>
        <span className="sr-only">
          {stat.prefix}
          {fmt.format(stat.value)}
          {stat.suffix}
        </span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function SocialProof() {
  const { t } = useLanguage();
  const { stats } = t.socialProof;

  return (
    <section className="section section-alt social-proof">
      <Container>
        {/* Testimonials ("Families who trusted us") are currently hidden —
            the content still lives in t.socialProof for when they return. */}
        <div className="stats-grid reveal">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </Container>

      <div className="marquee">
        <div className="marquee-track">
          <ul className="marquee-list">
            {TECH_PILLS.map((tech) => (
              <li className="marquee-pill" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
          <ul className="marquee-list" aria-hidden="true">
            {TECH_PILLS.map((tech) => (
              <li className="marquee-pill" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
