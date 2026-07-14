import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';

const NUDGE_KEY = 'codeforge-nudge-shown';

export default function WhatsAppFloat() {
  const { t, lang } = useLanguage();
  const [showNudge, setShowNudge] = useState(false);
  const dismissLabel = lang === 'ar' ? 'إغلاق' : 'Dismiss';

  useEffect(() => {
    if (sessionStorage.getItem(NUDGE_KEY)) return;
    const timer = setTimeout(() => {
      setShowNudge(true);
      sessionStorage.setItem(NUDGE_KEY, '1');
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="whatsapp-wrap">
      {showNudge && (
        <span className="whatsapp-nudge" role="status">
          {t.whatsapp.nudge}
          <button
            type="button"
            className="whatsapp-nudge-close"
            aria-label={dismissLabel}
            onClick={() => setShowNudge(false)}
          >
            <X size={14} aria-hidden="true" />
          </button>
        </span>
      )}
      <a
        href={buildWhatsAppUrl(t.whatsapp.defaultMessage)}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp.label}
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
