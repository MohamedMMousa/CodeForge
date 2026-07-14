import type { SiteContent } from '../types';

export const en: SiteContent = {
  nav: {
    links: [
      { id: 'why', label: 'Why CodeForge?' },
      { id: 'journey', label: 'Learning Journey' },
      { id: 'courses', label: 'Programs' },
      { id: 'faq', label: 'FAQ' },
    ],
    cta: 'Book a Free Class',
  },

  hero: {
    eyebrow: 'Online coding academy for teens aged 13–18',
    title: 'Build real software.',
    titleAccent: 'Not just coding skills.',
    subtitle:
      'A project-based curriculum with live classes, professional engineers, and small groups — so your teen graduates with a real portfolio, not just a certificate.',
    ctaPrimary: 'Book a Free Trial Class',
    ctaSecondary: 'Explore Programs',
    trust: [
      { id: 'trial', label: 'Free trial class' },
      { id: 'groups', label: 'Max 8 students per group' },
      { id: 'live', label: '100% live classes' },
    ],
  },

  socialProof: {
    stats: [
      { id: 'students', value: 200, prefix: '+', label: 'Students taught' },
      { id: 'projects', value: 350, prefix: '+', label: 'Projects built' },
      { id: 'instructors', value: 12, prefix: '+', label: 'Professional instructors' },
      { id: 'satisfaction', value: 95, suffix: '%', label: 'Parent satisfaction' },
    ],
    intro: {
      eyebrow: 'Testimonials',
      title: 'Families who trusted us',
      subtitle: 'Real experiences from students and parents who chose CodeForge.',
    },
    testimonials: [
      {
        name: 'Mona El-Sherif',
        role: 'Parent of a student',
        quote:
          "My son used to spend all his time playing games — now he builds his own! The change in his confidence and thinking is unbelievable.",
      },
      {
        name: 'Youssef Adel',
        role: 'Student — 16 years old',
        quote:
          'I built my first chatbot after just 8 weeks. The instructors explain things in a simple, fun way, and we build something new every class.',
      },
      {
        name: 'Ahmed Samy',
        role: 'Parent of a student',
        quote:
          'The small groups made a huge difference. My daughter gets real attention, and we receive a progress report every two weeks.',
      },
    ],
  },

  why: {
    intro: {
      eyebrow: 'Why CodeForge?',
      title: 'Education that produces developers, not memorizers',
      subtitle: 'Every part of our curriculum is designed so students practice coding the way tech companies do.',
    },
    features: [
      {
        id: 'live',
        title: 'Live classes with instructors',
        description: 'Interactive learning with engineers who work in the industry — no pre-recorded videos.',
      },
      {
        id: 'groups',
        title: 'Small groups',
        description: 'A maximum of eight students per group, so every student gets real attention.',
      },
      {
        id: 'projects',
        title: 'Project-based learning',
        description: 'Students learn by building: every new concept turns immediately into a working project.',
      },
      {
        id: 'career',
        title: 'Early career guidance',
        description: 'We help students discover their technical strengths and map their career path early.',
      },
      {
        id: 'tech',
        title: 'Modern technologies',
        description: 'Python, JavaScript, and the same AI tools used in the real job market.',
      },
      {
        id: 'portfolio',
        title: 'A real portfolio',
        description: 'Students graduate with projects published online — ready to show any university or employer.',
      },
    ],
  },

  journey: {
    intro: {
      eyebrow: 'Learning Journey',
      title: 'From zero to capstone project',
      subtitle: 'A clearly mapped path that takes students step by step toward mastery.',
    },
    soonLabel: 'Soon',
    stages: [
      { id: 'start', title: 'Beginner', description: 'Free assessment session to set the level' },
      { id: 'fundamentals', title: 'Programming Fundamentals', description: 'Logic and problem solving' },
      { id: 'python', title: 'Python', description: 'A first real programming language' },
      { id: 'web', title: 'Web Development', description: 'Interactive sites with HTML, CSS & JS' },
      { id: 'backend', title: 'Backend', description: 'Building servers and APIs' },
      { id: 'databases', title: 'Databases', description: 'Storing and managing data with SQL' },
      { id: 'ai', title: 'Artificial Intelligence', description: 'Machine learning and models', soon: true },
      { id: 'capstone', title: 'Capstone Project', description: 'A complete product presented to parents' },
    ],
  },

  courses: {
    intro: {
      eyebrow: 'Programs',
      title: 'Programs designed for teenagers',
      subtitle: "Every program ends with real projects added to the student's portfolio.",
    },
    buildsLabel: 'What students build',
    cta: 'Start with this program',
    items: [
      {
        id: 'python',
        title: 'Python Foundations',
        tech: ['Python'],
        level: 'beginner',
        levelLabel: 'Beginner',
        age: 'Ages 13–15',
        duration: '12 weeks',
        builds: ['Interactive quiz game', 'Smart calculator', 'Text adventure game'],
      },
      {
        id: 'web',
        title: 'Web Development',
        tech: ['HTML', 'CSS', 'JavaScript'],
        level: 'beginner',
        levelLabel: 'Beginner',
        age: 'Ages 14–16',
        duration: '16 weeks',
        builds: ['Personal portfolio site', 'Interactive landing page', 'Mini web app'],
      },
      {
        id: 'backend',
        title: 'Backend & Databases',
        tech: ['Node.js', 'SQL'],
        level: 'intermediate',
        levelLabel: 'Intermediate',
        age: 'Ages 15–17',
        duration: '16 weeks',
        builds: ['Complete REST API', 'Secure login system', 'Database-driven app'],
      },
      {
        id: 'ai',
        title: 'Intro to Artificial Intelligence',
        tech: ['Python', 'ML'],
        level: 'advanced',
        levelLabel: 'Advanced',
        age: 'Ages 16–18',
        duration: '16 weeks',
        builds: ['Smart chatbot', 'Image classifier', 'Data analysis dashboard'],
      },
    ],
  },

  projects: {
    intro: {
      eyebrow: 'Student Projects',
      title: 'Projects our students actually built',
      subtitle: "Every project here started as a student's idea and ended as a working product.",
    },
    items: [
      { id: 'calc', kind: 'app', title: 'Scientific Calculator', student: 'Youssef, 14', tech: ['Python'] },
      { id: 'quiz', kind: 'game', title: 'Speed Quiz Game', student: 'Malak, 15', tech: ['Python'] },
      { id: 'portfolio', kind: 'site', title: 'Personal Portfolio', student: 'Omar, 16', tech: ['HTML', 'CSS'] },
      { id: 'weather', kind: 'dashboard', title: 'Weather Dashboard', student: 'Jana, 16', tech: ['JavaScript'] },
      { id: 'bot', kind: 'bot', title: 'Telegram Study Bot', student: 'Karim, 17', tech: ['Python'] },
      { id: 'store', kind: 'store', title: 'E-commerce Storefront', student: 'Salma, 17', tech: ['React'] },
    ],
  },

  instructors: {
    intro: {
      eyebrow: 'Instructors',
      title: 'Engineers from the heart of the industry',
      subtitle: 'Our instructors work at real tech companies — and teach what they practice every day.',
    },
    items: [
      {
        id: 'ahmed',
        name: 'Ahmed Hassan',
        role: 'Senior Software Engineer',
        experience: '8+ years of experience',
        bio: 'Led development teams at regional tech companies; oversees the Python and backend curricula.',
        skills: ['Python', 'Django', 'APIs'],
      },
      {
        id: 'sara',
        name: 'Sara Mostafa',
        role: 'Frontend Engineer',
        experience: '6+ years of experience',
        bio: 'Specializes in modern user interfaces; leads the web development track.',
        skills: ['React', 'TypeScript', 'UI/UX'],
      },
      {
        id: 'omar',
        name: 'Omar Khaled',
        role: 'Machine Learning Engineer',
        experience: '5+ years of experience',
        bio: 'Works on applied AI projects; leads the upcoming artificial intelligence track.',
        skills: ['Python', 'TensorFlow', 'Data'],
      },
    ],
  },

  parents: {
    intro: {
      eyebrow: 'For Parents',
      title: "A safe investment in your child's future",
      subtitle: "We know your questions before you ask them — here's how we put your mind at ease.",
    },
    points: [
      {
        id: 'safety',
        title: 'Safe, monitored environment',
        description: 'All classes are recorded and monitored, with no private contact between instructors and students off-platform.',
      },
      {
        id: 'progress',
        title: 'Regular progress reports',
        description: "A detailed report every two weeks covering your child's level, attendance, and projects.",
      },
      {
        id: 'instructors',
        title: 'Professional instructors',
        description: 'Engineers actively working in the industry, carefully selected and vetted.',
      },
      {
        id: 'practical',
        title: 'Practical education, not memorization',
        description: 'Students build real projects that stay in their portfolio — no rote learning.',
      },
      {
        id: 'communication',
        title: 'Direct communication with you',
        description: 'An open channel with the academy via WhatsApp for any question, any time.',
      },
    ],
    cta: 'Talk to us directly',
    report: {
      title: 'Progress Report — Biweekly',
      student: 'Youssef · Python Program',
      rows: [
        { label: 'Attendance', value: '100%' },
        { label: 'Projects completed', value: '3 of 4' },
        { label: 'Overall rating', value: 'Excellent' },
      ],
    },
  },

  faq: {
    intro: {
      eyebrow: 'FAQ',
      title: 'Got a question? The answer is here',
      subtitle: 'The questions parents ask most before enrolling.',
    },
    items: [
      {
        q: 'How much do the programs cost and how do I pay?',
        a: "Pricing depends on the program and its duration, and we offer flexible installment plans. Message us on WhatsApp and we'll send full pricing details within 24 hours.",
      },
      {
        q: 'What equipment does my child need?',
        a: 'Just a regular computer or laptop with a stable internet connection. All the tools we use are free, and we help every student set them up in the first class.',
      },
      {
        q: 'Does my child need prior coding experience?',
        a: "Not at all. Our programs are designed to start from zero, and we assess each student's level in a free evaluation session before joining.",
      },
      {
        q: 'What if the schedule conflicts with school?',
        a: 'We offer evening and weekend groups, and every class is recorded so students can catch up on anything they miss at any time.',
      },
      {
        q: "How do I follow my child's progress?",
        a: 'You receive a detailed progress report every two weeks, plus regular meetings with the instructor and a project showcase at the end of each program.',
      },
      {
        q: 'Does my child get a certificate?',
        a: 'Yes — a certified completion certificate after each program. More importantly: a real portfolio of projects published online that stays with the student.',
      },
      {
        q: 'What language are classes taught in?',
        a: 'Classes are taught in Arabic in a simple style, using English technical terms as they appear in the job market — so students get used to them from day one.',
      },
    ],
  },

  finalCta: {
    title: 'Ready for your teen to start coding?',
    subtitle: "Fill in the form and we'll reach out on WhatsApp within 24 hours to arrange a free trial class.",
    whatsappAlt: 'Or message us directly on WhatsApp',
    form: {
      nameLabel: 'Name',
      namePlaceholder: "Student's or parent's name",
      nameError: 'Please enter a name',
      ageLabel: "Student's age",
      agePlaceholder: 'Select age',
      parentOption: "I'm a parent",
      ageError: 'Please select an age',
      courseLabel: 'Program',
      coursePlaceholder: 'Select a program',
      notSureOption: 'Not sure yet',
      courseError: 'Please select a program',
      messageLabel: 'Your message (optional)',
      messagePlaceholder: 'Tell us any extra details…',
      submit: 'Send via WhatsApp',
      success: 'Your message is ready — WhatsApp will open now to complete sending.',
      waTemplate: "Hello, I'm {name}. Age: {age}. Interested in the {course} program. {message}",
    },
  },

  footer: {
    tagline: 'An Egyptian online academy teaching teenagers aged 13–18 to build software through real projects.',
    linksTitle: 'Quick Links',
    contactTitle: 'Contact Us',
    email: 'info@codeforge.academy',
    location: 'Cairo, Egypt',
    whatsappLabel: 'WhatsApp',
    copyright: '© 2026 CodeForge Academy. All rights reserved.',
  },

  whatsapp: {
    label: 'Chat with us',
    nudge: 'Questions? Chat with us 👋',
    defaultMessage: "Hello, I'd like to know more about CodeForge programs",
  },

  skipToContent: 'Skip to main content',
};
