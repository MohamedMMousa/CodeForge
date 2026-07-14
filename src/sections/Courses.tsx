import { Check, Clock, UserRound } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { revealDelay } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

export default function Courses() {
  const { t } = useLanguage();

  return (
    <section id="courses" className="section">
      <Container>
        <SectionHeading intro={t.courses.intro} />
        <div className="courses-grid">
          {t.courses.items.map((course, i) => (
            <article className="course-card reveal" style={revealDelay(i)} key={course.id}>
              <div className="course-badges">
                {course.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
                <Badge variant={`level-${course.level}`}>{course.levelLabel}</Badge>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <div className="course-meta">
                <span>
                  <Clock size={15} aria-hidden="true" />
                  {course.duration}
                </span>
                <span>
                  <UserRound size={15} aria-hidden="true" />
                  {course.age}
                </span>
              </div>
              <p className="course-builds-label">{t.courses.buildsLabel}</p>
              <ul className="course-builds">
                {course.builds.map((build) => (
                  <li key={build}>
                    <Check size={15} aria-hidden="true" />
                    {build}
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant="secondary" className="course-cta">
                {t.courses.cta}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
