import { BadgeCheck, Hammer, MessageCircle, ShieldCheck, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import type { ParentPointId } from '../types';

const POINT_ICONS: Record<ParentPointId, LucideIcon> = {
  safety: ShieldCheck,
  progress: TrendingUp,
  instructors: BadgeCheck,
  practical: Hammer,
  communication: MessageCircle,
};

export default function Parents() {
  const { t } = useLanguage();
  const { intro, points, cta, report } = t.parents;

  return (
    <section id="parents" className="section parents">
      <Container>
        <div className="parents-panel reveal">
          <div className="parents-copy">
            <span className="eyebrow eyebrow-invert">{intro.eyebrow}</span>
            <h2 className="parents-title">{intro.title}</h2>
            {intro.subtitle && <p className="parents-subtitle">{intro.subtitle}</p>}
            <ul className="parents-points">
              {points.map((point) => {
                const Icon = POINT_ICONS[point.id];
                return (
                  <li key={point.id}>
                    <Icon size={20} aria-hidden="true" className="parents-point-icon" />
                    <div>
                      <h3 className="parents-point-title">{point.title}</h3>
                      <p className="parents-point-text">{point.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button
              href={buildWhatsAppUrl(t.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta}
            </Button>
          </div>

          <aside className="parents-report" aria-hidden="true">
            <div className="report-card">
              <p className="report-title">{report.title}</p>
              <p className="report-student">{report.student}</p>
              <ul className="report-rows">
                {report.rows.map((row) => (
                  <li key={row.label}>
                    <span className="report-label">{row.label}</span>
                    <span className="report-value">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
