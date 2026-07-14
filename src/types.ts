export type Lang = 'ar' | 'en';

export type SectionId =
  | 'why'
  | 'journey'
  | 'courses'
  | 'projects'
  | 'instructors'
  | 'parents'
  | 'faq'
  | 'contact';

export interface NavLink {
  id: SectionId;
  label: string;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export interface TrustItem {
  id: 'trial' | 'groups' | 'live';
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trust: TrustItem[];
}

export interface Stat {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export type FeatureId = 'live' | 'groups' | 'projects' | 'career' | 'tech' | 'portfolio';

export interface Feature {
  id: FeatureId;
  title: string;
  description: string;
}

export interface JourneyStage {
  id: string;
  title: string;
  description: string;
  soon?: boolean;
}

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Course {
  id: string;
  title: string;
  tech: string[];
  level: CourseLevel;
  levelLabel: string;
  age: string;
  duration: string;
  builds: string[];
}

export type ProjectKind = 'app' | 'game' | 'site' | 'dashboard' | 'bot' | 'store';

export interface Project {
  id: string;
  kind: ProjectKind;
  title: string;
  student: string;
  tech: string[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  skills: string[];
}

export type ParentPointId = 'safety' | 'progress' | 'instructors' | 'practical' | 'communication';

export interface ParentPoint {
  id: ParentPointId;
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FormContent {
  nameLabel: string;
  namePlaceholder: string;
  nameError: string;
  ageLabel: string;
  agePlaceholder: string;
  parentOption: string;
  ageError: string;
  courseLabel: string;
  coursePlaceholder: string;
  notSureOption: string;
  courseError: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  success: string;
  /** WhatsApp message template with {name} {age} {course} {message} placeholders */
  waTemplate: string;
}

export interface SiteContent {
  nav: { links: NavLink[]; cta: string };
  hero: HeroContent;
  socialProof: { stats: Stat[]; intro: SectionIntro; testimonials: Testimonial[] };
  why: { intro: SectionIntro; features: Feature[] };
  journey: { intro: SectionIntro; soonLabel: string; stages: JourneyStage[] };
  courses: { intro: SectionIntro; buildsLabel: string; cta: string; items: Course[] };
  projects: { intro: SectionIntro; items: Project[] };
  instructors: { intro: SectionIntro; items: Instructor[] };
  parents: {
    intro: SectionIntro;
    points: ParentPoint[];
    cta: string;
    report: { title: string; student: string; rows: { label: string; value: string }[] };
  };
  faq: { intro: SectionIntro; items: FaqItem[] };
  finalCta: { title: string; subtitle: string; whatsappAlt: string; form: FormContent };
  footer: {
    tagline: string;
    linksTitle: string;
    contactTitle: string;
    email: string;
    location: string;
    whatsappLabel: string;
    copyright: string;
  };
  whatsapp: { label: string; nudge: string; defaultMessage: string };
  skipToContent: string;
}
