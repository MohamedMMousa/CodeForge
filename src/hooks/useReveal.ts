import { useEffect, type CSSProperties } from 'react';
import { prefersReducedMotion } from './reducedMotion';

/** Inline style helper for staggered reveals: sets the CSS delay variable. */
export const revealDelay = (index: number, stepMs = 60): CSSProperties =>
  ({ '--reveal-delay': `${index * stepMs}ms` }) as CSSProperties;

/**
 * Observes every `.reveal` element in the document with a single
 * IntersectionObserver and adds `.visible` the first time it enters
 * the viewport. Elements are unobserved after revealing.
 */
export function useReveal(deps: readonly unknown[] = []): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.visible)'));
    if (els.length === 0) return;

    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
