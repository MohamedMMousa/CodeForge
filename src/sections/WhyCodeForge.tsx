import { Compass, Cpu, FolderGit2, Hammer, Users, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { revealDelay } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { FeatureId } from '../types';

const FEATURE_ICONS: Record<FeatureId, LucideIcon> = {
  live: Video,
  groups: Users,
  projects: Hammer,
  career: Compass,
  tech: Cpu,
  portfolio: FolderGit2,
};

export default function WhyCodeForge() {
  const { t } = useLanguage();

  return (
    <section id="why" className="section">
      <Container>
        <SectionHeading intro={t.why.intro} />
        <div className="why-grid">
          {t.why.features.map((feature, i) => {
            const Icon = FEATURE_ICONS[feature.id];
            return (
              <article className="why-card reveal" style={revealDelay(i)} key={feature.id}>
                <span className="icon-tile" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3 className="why-card-title">{feature.title}</h3>
                <p className="why-card-text">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
