import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './reducedMotion';

/**
 * Counts from 0 to `target` (ease-out cubic) the first time the returned
 * ref enters the viewport. Runs once; respects prefers-reduced-motion.
 */
export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    if (prefersReducedMotion()) {
      done.current = true;
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        io.disconnect();

        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(eased * target);
          if (progress < 1) requestAnimationFrame(step);
          else setValue(target);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}
