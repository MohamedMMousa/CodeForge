import Badge from '../components/Badge';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { revealDelay } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { ProjectKind } from '../types';

/** Pure-CSS skeleton screens standing in for project screenshots. */
function MockupBody({ kind }: { kind: ProjectKind }) {
  switch (kind) {
    case 'site':
      return (
        <>
          <i className="sk sk-wide" />
          <i className="sk sk-line" />
          <div className="sk-cols">
            <i className="sk" />
            <i className="sk" />
          </div>
        </>
      );
    case 'app':
      return (
        <div className="sk-tiles">
          <i className="sk" />
          <i className="sk sk-accent" />
          <i className="sk" />
          <i className="sk" />
        </div>
      );
    case 'dashboard':
      return (
        <div className="sk-chart">
          <i style={{ height: '40%' }} />
          <i style={{ height: '72%' }} className="sk-accent" />
          <i style={{ height: '55%' }} />
          <i style={{ height: '85%' }} />
          <i style={{ height: '32%' }} />
        </div>
      );
    case 'game':
      return (
        <>
          <i className="sk sk-circle sk-accent" />
          <i className="sk sk-line" />
          <i className="sk sk-line sk-short" />
        </>
      );
    case 'bot':
      return (
        <div className="sk-chat">
          <i className="sk sk-bubble" />
          <i className="sk sk-bubble sk-me sk-accent" />
          <i className="sk sk-bubble" />
        </div>
      );
    case 'store':
      return (
        <div className="sk-tiles sk-three">
          <i className="sk" />
          <i className="sk sk-accent" />
          <i className="sk" />
        </div>
      );
  }
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section section-alt">
      <Container>
        <SectionHeading intro={t.projects.intro} />
        <div className="projects-grid">
          {t.projects.items.map((project, i) => (
            <article className="project-card reveal" style={revealDelay(i)} key={project.id}>
              <div className="mockup" aria-hidden="true">
                <div className="mockup-frame">
                  <div className="mockup-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="mockup-body">
                    <MockupBody kind={project.kind} />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-student">{project.student}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
