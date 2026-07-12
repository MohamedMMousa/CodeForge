import React, { useState, useEffect, useRef } from 'react';

// Translation Content Dictionary
const translations = {
  ar: {
    // Navbar
    navFeatures: "ماذا نعلّم",
    navCourses: "البرامج",
    navHowItWorks: "كيف نعمل",
    navResults: "النتائج",
    navAbout: "من نحن",
    navCta: "سجّل الآن",

    // Hero
    heroEyebrow: "🚀 التسجيل مفتوح الآن",
    heroTitle1: "لا تتعلم التكنولوجيا فقط...",
    heroTitle2: "ابنِها.",
    heroSubtitle: "أكاديمية متخصصة تعلّم البرمجة والذكاء الاصطناعي للمراهقين من ١٥ إلى ١٨ سنة من خلال مشاريع حقيقية وحصص مباشرة.",
    heroCta1: "سجّل الآن",
    heroCta2: "اعرف أكثر",

    // Features
    featuresBadge: "ماذا نعلّم",
    featuresTitle: "ثلاثة مسارات لبناء المستقبل",
    featuresSubtitle: "نركّز على المهارات التقنية الأكثر طلباً في سوق العمل العالمي",
    feature1Title: "الذكاء الاصطناعي",
    feature1Desc: "تعلّم أساسيات تعلّم الآلة والشبكات العصبية وابنِ مشاريع ذكاء اصطناعي حقيقية باستخدام Python.",
    feature2Title: "البرمجة",
    feature2Desc: "من الصفر حتى بناء تطبيقات حقيقية — Python، تطوير الويب، حل المشكلات البرمجية.",
    feature3Title: "تطوير البرمجيات",
    feature3Desc: "مشاريع حقيقية باستخدام أدوات الصناعة: Git، قواعد البيانات، العمل الجماعي، وأفضل الممارسات.",

    // How it works
    howBadge: "كيف نعمل",
    howTitle: "ابدأ رحلتك في ثلاث خطوات",
    howSubtitle: "عملية تسجيل بسيطة وسريعة",
    step1Title: "سجّل عبر واتساب",
    step1Desc: "تواصل معنا عبر واتساب وسنرد خلال ٢٤ ساعة",
    step2Title: "انضم لمجموعتك",
    step2Desc: "نحدد المستوى المناسب وتنضم لمجموعة مباشرة مع مدربين محترفين",
    step3Title: "ابدأ البناء",
    step3Desc: "تبدأ رحلتك في بناء مشاريع حقيقية مع فريقك",

    // Courses
    coursesBadge: "البرامج التعليمية",
    coursesTitle: "برامجنا المتخصصة",
    coursesSubtitle: "برامج مصممة خصيصاً للمراهقين مع التركيز على التطبيق العملي",
    course1Title: "أساسيات بايثون",
    course1Age: "١٥-١٦ سنة",
    course1Duration: "١٢ أسبوع",
    course1Topics: ["المتغيرات والحلقات التكرارية", "الدوال والبرمجة الكائنية", "مشاريع تطبيقية عملية", "حل المشكلات البرمجية"],
    course2Title: "تطوير المواقع",
    course2Age: "١٥-١٨ سنة",
    course2Duration: "١٦ أسبوع",
    course2Topics: ["HTML، CSS، JavaScript", "بناء مواقع تفاعلية", "تصميم واجهات المستخدم", "نشر المواقع على الإنترنت"],
    course3Title: "الذكاء الاصطناعي",
    course3Age: "١٦-١٨ سنة",
    course3Duration: "١٦ أسبوع",
    course3Topics: ["تحليل البيانات", "نماذج تعلّم الآلة", "الشبكات العصبية", "مشاريع AI حقيقية"],
    course4Title: "تطوير التطبيقات",
    course4Age: "١٦-١٨ سنة",
    course4Duration: "٢٠ أسبوع",
    course4Topics: ["تطبيقات الويب الكاملة", "قواعد البيانات و APIs", "إدارة المشاريع البرمجية", "مشروع تخرج متكامل"],
    coursesCta: "سجّل الآن",

    // Results
    resultsBadge: "النتائج",
    resultsTitle: "أرقام تتحدث",
    resultsSubtitle: "نتائج حقيقية من طلابنا",
    stat1Label: "طالب مسجّل",
    stat2Label: "مشروع منجز",
    stat3Label: "رضا أولياء الأمور",
    stat4Label: "تقييم الطلاب",
    outcome1Title: "مشاريع حقيقية",
    outcome1Text: "طلابنا يبنون chatbots، مواقع ويب، وتطبيقات ذكاء اصطناعي حقيقية خلال البرنامج.",
    outcome2Title: "مهارات جاهزة للعمل",
    outcome2Text: "يتعلم الطلاب أدوات وتقنيات مستخدمة في الشركات التقنية الكبرى حول العالم.",
    outcome3Title: "شهادات معتمدة",
    outcome3Text: "يحصل كل طالب على شهادة إتمام معتمدة بعد إنهاء البرنامج ومشروع التخرج.",

    // About
    aboutBadge: "من نحن",
    aboutTitle: "نبني جيل المستقبل التقني",
    aboutDesc: "CodeForge Academy هي أكاديمية مصرية متخصصة في تعليم البرمجة والذكاء الاصطناعي للمراهقين. نؤمن أن كل مراهق يمكنه أن يصبح مبتكراً في عالم التكنولوجيا.",
    aboutF1Title: "حصص مباشرة",
    aboutF1Text: "تعلّم تفاعلي مع مدربين محترفين",
    aboutF2Title: "مجموعات صغيرة",
    aboutF2Text: "اهتمام شخصي لكل طالب",
    aboutF3Title: "مشاريع حقيقية",
    aboutF3Text: "تعلّم عملي من خلال البناء",
    aboutF4Title: "بيئة آمنة",
    aboutF4Text: "منصة موثوقة ومراقبة لراحة الأهل",

    // Footer
    footerDesc: "أكاديمية مصرية متخصصة في تعليم البرمجة والذكاء الاصطناعي للمراهقين من ١٥ إلى ١٨ سنة.",
    footerLinksTitle: "روابط سريعة",
    footerContactTitle: "تواصل معنا",
    footerSocialTitle: "تابعنا",
    footerEmail: "info@codeforge.academy",
    footerPhone: "واتساب",
    footerLocation: "مصر",
    footerCopyright: "© ٢٠٢٦ CodeForge Academy. جميع الحقوق محفوظة.",

    // WhatsApp
    whatsappText: "تواصل معنا",
    whatsappMessage: "مرحباً، أنا مهتم بالتسجيل في أكاديمية CodeForge 🚀",
  },

  en: {
    // Navbar
    navFeatures: "What We Teach",
    navCourses: "Programs",
    navHowItWorks: "How It Works",
    navResults: "Results",
    navAbout: "About",
    navCta: "Register Now",

    // Hero
    heroEyebrow: "🚀 Registration is now open",
    heroTitle1: "Don't just learn technology.",
    heroTitle2: "Build it.",
    heroSubtitle: "A specialized academy teaching Programming & AI to teenagers aged 15–18 through real projects and live classes.",
    heroCta1: "Register Now",
    heroCta2: "Learn More",

    // Features
    featuresBadge: "What We Teach",
    featuresTitle: "Three Paths to Build the Future",
    featuresSubtitle: "We focus on the most in-demand technical skills in the global job market",
    feature1Title: "Artificial Intelligence",
    feature1Desc: "Learn the fundamentals of machine learning, neural networks, and build real AI projects using Python.",
    feature2Title: "Programming",
    feature2Desc: "From zero to building real applications — Python, web development, and problem solving.",
    feature3Title: "Software Development",
    feature3Desc: "Real-world projects using industry tools: Git, databases, teamwork, and best practices.",

    // How it works
    howBadge: "How It Works",
    howTitle: "Start Your Journey in Three Steps",
    howSubtitle: "A simple and fast registration process",
    step1Title: "Register via WhatsApp",
    step1Desc: "Contact us on WhatsApp and we'll respond within 24 hours",
    step2Title: "Join Your Cohort",
    step2Desc: "We assess your level and match you with a live group and professional instructors",
    step3Title: "Start Building",
    step3Desc: "Begin your journey building real projects with your team",

    // Courses
    coursesBadge: "Programs",
    coursesTitle: "Our Specialized Programs",
    coursesSubtitle: "Programs designed specifically for teenagers with focus on hands-on application",
    course1Title: "Python Foundations",
    course1Age: "15-16 years",
    course1Duration: "12 weeks",
    course1Topics: ["Variables and loops", "Functions and OOP", "Hands-on projects", "Problem solving"],
    course2Title: "Web Development",
    course2Age: "15-18 years",
    course2Duration: "16 weeks",
    course2Topics: ["HTML, CSS, JavaScript", "Interactive websites", "UI/UX design", "Deploying live sites"],
    course3Title: "Artificial Intelligence",
    course3Age: "16-18 years",
    course3Duration: "16 weeks",
    course3Topics: ["Data analysis", "ML models", "Neural networks", "Real AI projects"],
    course4Title: "App Development",
    course4Age: "16-18 years",
    course4Duration: "20 weeks",
    course4Topics: ["Full-stack web apps", "Databases & APIs", "Project management", "Capstone project"],
    coursesCta: "Register Now",

    // Results
    resultsBadge: "Results",
    resultsTitle: "Numbers That Speak",
    resultsSubtitle: "Real results from our students",
    stat1Label: "Students Enrolled",
    stat2Label: "Projects Completed",
    stat3Label: "Parent Satisfaction",
    stat4Label: "Student Rating",
    outcome1Title: "Real Projects",
    outcome1Text: "Our students build chatbots, websites, and real AI applications during the program.",
    outcome2Title: "Job-Ready Skills",
    outcome2Text: "Students learn tools and technologies used by major tech companies worldwide.",
    outcome3Title: "Certified Completion",
    outcome3Text: "Every student receives a certified completion certificate after finishing the program and capstone project.",

    // About
    aboutBadge: "About Us",
    aboutTitle: "Building the Future Tech Generation",
    aboutDesc: "CodeForge Academy is an Egyptian academy specializing in teaching programming and AI to teenagers. We believe every teenager can become an innovator in the world of technology.",
    aboutF1Title: "Live Classes",
    aboutF1Text: "Interactive learning with professional instructors",
    aboutF2Title: "Small Groups",
    aboutF2Text: "Personal attention for every student",
    aboutF3Title: "Real Projects",
    aboutF3Text: "Hands-on learning through building",
    aboutF4Title: "Safe Environment",
    aboutF4Text: "Trusted and monitored platform for parents' peace of mind",

    // Footer
    footerDesc: "An Egyptian academy specializing in teaching programming and AI to teenagers aged 15 to 18.",
    footerLinksTitle: "Quick Links",
    footerContactTitle: "Contact Us",
    footerSocialTitle: "Follow Us",
    footerEmail: "info@codeforge.academy",
    footerPhone: "WhatsApp",
    footerLocation: "Egypt",
    footerCopyright: "© 2026 CodeForge Academy. All rights reserved.",

    // WhatsApp
    whatsappText: "Chat with us",
    whatsappMessage: "Hello, I'm interested in registering at CodeForge Academy 🚀",
  }
};

const WHATSAPP_NUMBER = "201234567890";

// Count Up Stat Component
const CountUpStat = ({ target, prefix = '', suffix = '', label, isArabic }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let startTimestamp = null;
        const duration = 1500;
        
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(eased * target);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        window.requestAnimationFrame(step);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [target]);

  const formatNumber = (num) => {
    const formatted = target % 1 === 0 ? Math.floor(num).toString() : num.toFixed(1);
    if (!isArabic) return formatted;
    
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return formatted
      .replace(/[0-9]/g, (w) => arabicDigits[+w])
      .replace(/\./g, '٫');
  };

  const formattedSuffix = suffix === '%' && isArabic ? '٪' : suffix;

  return (
    <div className="stat-item" ref={elementRef}>
      <div className="stat-number">
        {prefix}{formatNumber(count)}{formattedSuffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('codeforge-lang') || 'ar';
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const t = translations[lang];
  const isArabic = lang === 'ar';

  const getWhatsAppUrl = () => {
    const msg = encodeURIComponent(t.whatsappMessage);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  // Sync lang & dir attribute to html tag
  useEffect(() => {
    localStorage.setItem('codeforge-lang', lang);
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  }, [lang, isArabic]);

  // Handle Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Scroll Reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [lang]); // Re-observe on translation layout re-render

  // Handle Active Navigation Link on Scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id') || '');
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    });

    sections.forEach(s => observer.observe(s));
    return () => {
      sections.forEach(s => observer.unobserve(s));
    };
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" onClick={(e) => handleNavLinkClick(e, 'root')}>
            <img src="/images/logo.png" alt="CodeForge Logo" style={{ height: '60px', width: 'auto' }} />
            <span className="navbar-logo-text">CodeForge</span>
          </a>

          <div className="navbar-links">
            <a href="#features" className={`navbar-link ${activeSection === 'features' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'features')}>{t.navFeatures}</a>
            <a href="#courses" className={`navbar-link ${activeSection === 'courses' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'courses')}>{t.navCourses}</a>
            <a href="#how-it-works" className={`navbar-link ${activeSection === 'how-it-works' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'how-it-works')}>{t.navHowItWorks}</a>
            <a href="#results" className={`navbar-link ${activeSection === 'results' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'results')}>{t.navResults}</a>
            <a href="#about" className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavLinkClick(e, 'about')}>{t.navAbout}</a>
          </div>

          <div className="navbar-actions">
            <div className="lang-toggle">
              <button className={`lang-toggle-btn ${isArabic ? 'active' : ''}`} onClick={() => setLang('ar')}>عربي</button>
              <button className={`lang-toggle-btn ${!isArabic ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
            <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t.navCta}</a>
            <button className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#features" className="navbar-link" onClick={(e) => handleNavLinkClick(e, 'features')}>{t.navFeatures}</a>
        <a href="#courses" className="navbar-link" onClick={(e) => handleNavLinkClick(e, 'courses')}>{t.navCourses}</a>
        <a href="#how-it-works" className="navbar-link" onClick={(e) => handleNavLinkClick(e, 'how-it-works')}>{t.navHowItWorks}</a>
        <a href="#results" className="navbar-link" onClick={(e) => handleNavLinkClick(e, 'results')}>{t.navResults}</a>
        <a href="#about" className="navbar-link" onClick={(e) => handleNavLinkClick(e, 'about')}>{t.navAbout}</a>
        <a href={getWhatsAppUrl()} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer" style={{ marginTop: 'var(--space-4)' }}>{t.navCta}</a>
      </div>

      {/* ── HERO SECTION ── */}
      <header className="hero">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-grid"></div>
        <div className="container hero-content">
          <div className="hero-text reveal">
            <div className="hero-eyebrow">{t.heroEyebrow}</div>
            <h1 className="hero-title">
              <span>{t.heroTitle1}</span><br/>
              <span className="highlight">{t.heroTitle2}</span>
            </h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <div className="hero-buttons">
              <a href={getWhatsAppUrl()} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">{t.heroCta1}</a>
              <a href="#features" className="btn btn-secondary btn-lg" onClick={(e) => handleNavLinkClick(e, 'features')}>{t.heroCta2}</a>
            </div>
          </div>

          <div className="hero-visual reveal" style={{ transitionDelay: '200ms' }}>
            <div className="code-window">
              <div className="code-window-header">
                <span className="code-window-dot red"></span>
                <span className="code-window-dot yellow"></span>
                <span className="code-window-dot green"></span>
                <span className="code-window-title">codeforge_academy.py</span>
              </div>
              <div className="code-window-body">
                <span className="code-line"><span className="code-keyword">import</span> academy, artificial_intelligence</span>
                <span className="code-line"><span class="code-keyword">class</span> <span className="code-function">TeenStudent</span><span className="code-bracket">(</span>academy.Student<span className="code-bracket">)</span>:</span>
                <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">def</span> <span className="code-function">learn_to_code</span><span className="code-bracket">(</span>self<span class="code-bracket">)</span>:</span>
                <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.build_projects<span className="code-bracket">(</span><span className="code-string">"AI Chatbot"</span><span className="code-bracket">)</span></span>
                <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.create_future<span className="code-bracket">(</span><span className="code-bracket">)</span></span>
                <span className="code-line"><span className="code-comment"># CodeForge Academy - 15 to 18 Years Old</span></span>
                <span className="code-line">student = TeenStudent<span className="code-bracket">(</span>age=16<span class="code-bracket">)</span></span>
                <span className="code-line">student.learn_to_code<span className="code-bracket">(</span><span className="code-bracket">)</span></span>
                <span className="code-line"><span className="code-keyword">print</span><span className="code-bracket">(</span><span className="code-string">"Ready to build real technology!"</span><span className="code-bracket">)</span></span>
              </div>
            </div>
            {/* Floating Badges */}
            <div className="floating-badge floating-badge-1">
              <span className="code-orange">&lt;/&gt;</span> Python
            </div>
            <div className="floating-badge floating-badge-2">
              <span className="code-orange">🧠</span> AI & ML
            </div>
            <div className="floating-badge floating-badge-3">
              <span className="code-orange">🌐</span> Web Dev
            </div>
          </div>
        </div>
      </header>

      {/* ── WHAT WE TEACH SECTION ── */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">{t.featuresBadge}</span>
            <h2 className="section-title">{t.featuresTitle}</h2>
            <p className="section-subtitle">{t.featuresSubtitle}</p>
          </div>

          <div className="grid-3 reveal-stagger">
            {/* Feature 1: AI */}
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
                </svg>
              </div>
              <h3 className="card-title">{t.feature1Title}</h3>
              <p className="card-description">{t.feature1Desc}</p>
            </div>

            {/* Feature 2: Programming */}
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3 className="card-title">{t.feature2Title}</h3>
              <p className="card-description">{t.feature2Desc}</p>
            </div>

            {/* Feature 3: Software Dev */}
            <div className="card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <h3 className="card-title">{t.feature3Title}</h3>
              <p className="card-description">{t.feature3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS SECTION ── */}
      <section id="how-it-works" class="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">{t.howBadge}</span>
            <h2 className="section-title">{t.howTitle}</h2>
            <p className="section-subtitle">{t.howSubtitle}</p>
          </div>

          <div className="steps-wrapper reveal-stagger">
            {/* Step 1 */}
            <div className="step-item">
              <div className="step-number">1</div>
              <h3 class="step-title">{t.step1Title}</h3>
              <p className="step-description">{t.step1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">{t.step2Title}</h3>
              <p className="step-description">{t.step2Desc}</p>
            </div>

            {/* Step 3 */}
            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">{t.step3Title}</h3>
              <p className="step-description">{t.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES SECTION ── */}
      <section id="courses" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">{t.coursesBadge}</span>
            <h2 className="section-title">{t.coursesTitle}</h2>
            <p className="section-subtitle">{t.coursesSubtitle}</p>
          </div>

          <div className="grid-2 reveal-stagger">
            {/* Course 1 */}
            <div className="course-card">
              <div className="course-card-header">
                <div className="course-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title">{t.course1Title}</h3>
                  <div className="course-card-meta">
                    <span className="badge">{t.course1Age}</span>
                    <span className="badge badge-orange">{t.course1Duration}</span>
                  </div>
                </div>
              </div>
              <ul className="course-card-topics">
                {t.course1Topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t.coursesCta}</a>
            </div>

            {/* Course 2 */}
            <div className="course-card">
              <div className="course-card-header">
                <div className="course-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title">{t.course2Title}</h3>
                  <div className="course-card-meta">
                    <span className="badge">{t.course2Age}</span>
                    <span className="badge badge-orange">{t.course2Duration}</span>
                  </div>
                </div>
              </div>
              <ul className="course-card-topics">
                {t.course2Topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t.coursesCta}</a>
            </div>

            {/* Course 3 */}
            <div className="course-card">
              <div className="course-card-header">
                <div className="course-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    <path d="M2 12h20"/>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title">{t.course3Title}</h3>
                  <div className="course-card-meta">
                    <span className="badge">{t.course3Age}</span>
                    <span className="badge badge-orange">{t.course3Duration}</span>
                  </div>
                </div>
              </div>
              <ul className="course-card-topics">
                {t.course3Topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t.coursesCta}</a>
            </div>

            {/* Course 4 */}
            <div className="course-card">
              <div className="course-card-header">
                <div className="course-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title">{t.course4Title}</h3>
                  <div className="course-card-meta">
                    <span className="badge">{t.course4Age}</span>
                    <span className="badge badge-orange">{t.course4Duration}</span>
                  </div>
                </div>
              </div>
              <ul className="course-card-topics">
                {t.course4Topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t.coursesCta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS / SOCIAL PROOF ── */}
      <section id="results" className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">{t.resultsBadge}</span>
            <h2 className="section-title">{t.resultsTitle}</h2>
            <p className="section-subtitle">{t.resultsSubtitle}</p>
          </div>

          {/* Stats Bar */}
          <div className="stats-grid reveal">
            <CountUpStat target={200} prefix="+" label={t.stat1Label} isArabic={isArabic} />
            <CountUpStat target={50} prefix="+" label={t.stat2Label} isArabic={isArabic} />
            <CountUpStat target={95} suffix="%" label={t.stat3Label} isArabic={isArabic} />
            <CountUpStat target={4.9} label={t.stat4Label} isArabic={isArabic} />
          </div>

          {/* Outcome Highlights */}
          <div className="outcomes-grid reveal-stagger">
            <div className="outcome-card">
              <div className="outcome-icon">🚀</div>
              <h4 className="outcome-title">{t.outcome1Title}</h4>
              <p className="outcome-text">{t.outcome1Text}</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon">💻</div>
              <h4 className="outcome-title">{t.outcome2Title}</h4>
              <p className="outcome-text">{t.outcome2Text}</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon">🎓</div>
              <h4 className="outcome-title">{t.outcome3Title}</h4>
              <p className="outcome-text">{t.outcome3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-block reveal">
              <span className="section-badge">{t.aboutBadge}</span>
              <h2 className="about-title">{t.aboutTitle}</h2>
              <p className="about-description">{t.aboutDesc}</p>
            </div>

            <div className="about-features-grid reveal-stagger">
              {/* Feature 1 */}
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <div>
                  <h4 className="about-feature-title">{t.aboutF1Title}</h4>
                  <p className="about-feature-text">{t.aboutF1Text}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4 className="about-feature-title">{t.aboutF2Title}</h4>
                  <p className="about-feature-text">{t.aboutF2Text}</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div>
                  <h4 className="about-feature-title">{t.aboutF3Title}</h4>
                  <p className="about-feature-text">{t.aboutF3Text}</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="about-feature-title">{t.aboutF4Title}</h4>
                  <p className="about-feature-text">{t.aboutF4Text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#" className="navbar-logo" onClick={(e) => handleNavLinkClick(e, 'root')}>
              <img src="/images/logo.png" alt="CodeForge Logo" style={{ height: '42px', width: 'auto' }} />
              <span className="navbar-logo-text">CodeForge</span>
            </a>
            <p className="footer-brand-desc">{t.footerDesc}</p>
          </div>

          <div>
            <h4 className="footer-heading">{t.footerLinksTitle}</h4>
            <a href="#features" className="footer-link" onClick={(e) => handleNavLinkClick(e, 'features')}>{t.navFeatures}</a>
            <a href="#courses" className="footer-link" onClick={(e) => handleNavLinkClick(e, 'courses')}>{t.navCourses}</a>
            <a href="#how-it-works" className="footer-link" onClick={(e) => handleNavLinkClick(e, 'how-it-works')}>{t.navHowItWorks}</a>
            <a href="#about" className="footer-link" onClick={(e) => handleNavLinkClick(e, 'about')}>{t.navAbout}</a>
          </div>

          <div>
            <h4 className="footer-heading">{t.footerContactTitle}</h4>
            <span className="footer-link">{t.footerEmail}</span>
            <a href={getWhatsAppUrl()} className="footer-link" target="_blank" rel="noopener noreferrer">{t.footerPhone}</a>
            <span className="footer-link">{t.footerLocation}</span>
          </div>

          <div>
            <h4 className="footer-heading">{t.footerSocialTitle}</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="footer-copyright">{t.footerCopyright}</div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <a href={getWhatsAppUrl()} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <div className="whatsapp-pulse"></div>
        <div className="whatsapp-float-inner">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.428 2.026 13.968 1 11.4 1c-5.408 0-9.813 4.358-9.817 9.78-.002 1.81.49 3.57 1.42 5.148l-.946 3.454 3.57-.927zm10.743-6.224c-.29-.145-1.716-.848-1.982-.945-.266-.096-.46-.145-.654.145-.193.29-.75.946-.919 1.139-.17.194-.339.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.447-1.72-1.616-2.011-.17-.29-.018-.447.127-.592.13-.13.29-.339.435-.508.145-.17.193-.29.29-.484.096-.193.048-.363-.024-.508-.073-.145-.654-1.573-.896-2.153-.235-.568-.475-.491-.654-.5h-.56c-.193 0-.508.073-.774.363-.266.29-1.016.992-1.016 2.42 0 1.428 1.04 2.806 1.185 2.999.145.193 2.046 3.125 4.958 4.382.692.299 1.233.478 1.654.611.696.222 1.33.19 1.83.116.557-.081 1.716-.701 1.958-1.378.242-.677.242-1.258.17-1.378-.073-.12-.266-.193-.557-.339z"/>
          </svg>
          <span className="whatsapp-float-text">{t.whatsappText}</span>
        </div>
      </a>
    </>
  );
}
