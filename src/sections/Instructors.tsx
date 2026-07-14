import { BriefcaseBusiness } from 'lucide-react';
import Badge from '../components/Badge';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { revealDelay } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function Instructors() {
  const { t } = useLanguage();

  return (
    <section id="instructors" className="section">
      <Container>
        <SectionHeading intro={t.instructors.intro} />
        <div className="instructors-grid">
          {t.instructors.items.map((person, i) => (
            <article className="instructor-card reveal" style={revealDelay(i)} key={person.id}>
              <span className="avatar avatar-lg" aria-hidden="true">
                {person.name.charAt(0)}
              </span>
              <h3 className="instructor-name">{person.name}</h3>
              <p className="instructor-role">{person.role}</p>
              <p className="instructor-exp">
                <BriefcaseBusiness size={15} aria-hidden="true" />
                {person.experience}
              </p>
              <p className="instructor-bio">{person.bio}</p>
              <div className="instructor-skills">
                {person.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
