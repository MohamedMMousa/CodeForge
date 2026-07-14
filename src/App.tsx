import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useReveal } from './hooks/useReveal';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import Courses from './sections/Courses';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';
import Hero from './sections/Hero';
import LearningJourney from './sections/LearningJourney';
import Parents from './sections/Parents';
import SocialProof from './sections/SocialProof';
import WhyCodeForge from './sections/WhyCodeForge';

function Page() {
  const { lang, t } = useLanguage();
  useReveal([lang]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <Navbar />
      <main id="main">
        {/* Projects & Instructors sections exist in src/sections/ but are
            currently hidden — re-add them here to bring them back. */}
        <Hero />
        <SocialProof />
        <WhyCodeForge />
        <LearningJourney />
        <Courses />
        <Parents />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
