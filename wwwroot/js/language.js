/* ============================================
   CodeForge Academy — Language System
   ============================================ */

const content = {
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
    stat1Number: "+٢٠٠",
    stat1Label: "طالب مسجّل",
    stat2Number: "+٥٠",
    stat2Label: "مشروع منجز",
    stat3Number: "٩٥٪",
    stat3Label: "رضا أولياء الأمور",
    stat4Number: "٤.٩",
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
    stat1Number: "+200",
    stat1Label: "Students Enrolled",
    stat2Number: "+50",
    stat2Label: "Projects Completed",
    stat3Number: "95%",
    stat3Label: "Parent Satisfaction",
    stat4Number: "4.9",
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

// Placeholder WhatsApp number — replace with real one
const WHATSAPP_NUMBER = "201234567890";

function getWhatsAppUrl(lang) {
  const msg = encodeURIComponent(content[lang].whatsappMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// Initialize language
let currentLang = localStorage.getItem('codeforge-lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('codeforge-lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (content[lang][key] !== undefined) {
      el.textContent = content[lang][key];
    }
  });

  // Update all translatable HTML elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (content[lang][key] !== undefined) {
      el.innerHTML = content[lang][key];
    }
  });

  // Update WhatsApp links
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = getWhatsAppUrl(lang);
  });

  // Update course topics (lists)
  document.querySelectorAll('[data-i18n-list]').forEach(ul => {
    const key = ul.dataset.i18nList;
    const topics = content[lang][key];
    if (topics) {
      ul.innerHTML = topics.map(t => `<li>${t}</li>`).join('');
    }
  });
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Set up toggle handlers
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Apply initial language
  setLanguage(currentLang);
});
