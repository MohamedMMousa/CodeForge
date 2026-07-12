/* ============================================
   CodeForge Academy — Animations (JS)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ── Scroll Reveal ──
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Count-up Animation ──
  const countElements = document.querySelectorAll('.count-up');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  countElements.forEach(el => countObserver.observe(el));

  function animateCount(el) {
    const text = el.textContent;
    // Extract number and surrounding characters
    const match = text.match(/([^\d]*)([\d.]+)([^\d]*)/);
    if (!match) return;

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes('.');
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = text; // Reset to original to preserve exact format
      }
    }

    requestAnimationFrame(update);
  }
});
