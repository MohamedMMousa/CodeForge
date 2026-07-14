import type { SectionIntro } from '../types';

export default function SectionHeading({ intro }: { intro: SectionIntro }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{intro.eyebrow}</span>
      <h2 className="section-title">{intro.title}</h2>
      {intro.subtitle && <p className="section-subtitle">{intro.subtitle}</p>}
    </div>
  );
}
