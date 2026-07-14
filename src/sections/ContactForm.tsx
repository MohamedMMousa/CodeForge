import { useMemo, useRef, useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl, fillTemplate } from '../lib/whatsapp';

const AGES = [13, 14, 15, 16, 17, 18];

interface Errors {
  name?: string;
  age?: string;
  course?: string;
}

export default function ContactForm() {
  const { t, lang } = useLanguage();
  const f = t.finalCta.form;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLSelectElement>(null);
  const courseRef = useRef<HTMLSelectElement>(null);

  const fmt = useMemo(() => new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US'), [lang]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = f.nameError;
    if (!age) next.age = f.ageError;
    if (!course) next.course = f.courseError;
    setErrors(next);

    if (next.name) return nameRef.current?.focus();
    if (next.age) return ageRef.current?.focus();
    if (next.course) return courseRef.current?.focus();

    const text = fillTemplate(f.waTemplate, {
      name: name.trim(),
      age,
      course,
      message: message.trim(),
    }).trim();
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="cf-name">{f.nameLabel}</label>
        <input
          id="cf-name"
          ref={nameRef}
          type="text"
          autoComplete="name"
          placeholder={f.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
        />
        {errors.name && (
          <p id="cf-name-error" className="form-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-age">{f.ageLabel}</label>
          <select
            id="cf-age"
            ref={ageRef}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            aria-invalid={errors.age ? true : undefined}
            aria-describedby={errors.age ? 'cf-age-error' : undefined}
          >
            <option value="" disabled>
              {f.agePlaceholder}
            </option>
            {AGES.map((n) => (
              <option key={n} value={fmt.format(n)}>
                {fmt.format(n)}
              </option>
            ))}
            <option value={f.parentOption}>{f.parentOption}</option>
          </select>
          {errors.age && (
            <p id="cf-age-error" className="form-error">
              {errors.age}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="cf-course">{f.courseLabel}</label>
          <select
            id="cf-course"
            ref={courseRef}
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            aria-invalid={errors.course ? true : undefined}
            aria-describedby={errors.course ? 'cf-course-error' : undefined}
          >
            <option value="" disabled>
              {f.coursePlaceholder}
            </option>
            {t.courses.items.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
            <option value={f.notSureOption}>{f.notSureOption}</option>
          </select>
          {errors.course && (
            <p id="cf-course-error" className="form-error">
              {errors.course}
            </p>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-message">{f.messageLabel}</label>
        <textarea
          id="cf-message"
          rows={3}
          placeholder={f.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="form-submit">
        <Send size={17} aria-hidden="true" />
        {f.submit}
      </Button>

      {sent && (
        <p className="form-success" role="status">
          {f.success}
        </p>
      )}
    </form>
  );
}
