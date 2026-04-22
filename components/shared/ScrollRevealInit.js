'use client';

import { useEffect } from 'react';

/**
 * Global scroll-reveal initializer.
 *
 * - Tags common content elements (headings, sub-headings, body copy, CTAs)
 *   with data-reveal="up" so they fade in + slide up when they enter view.
 * - Tags decorative stickers / emoji / icon wrappers with data-reveal="sticker"
 *   for a slightly softer rise + rotate + scale reveal.
 * - Auto-staggers siblings inside the same parent so sections reveal in a
 *   pleasing cascade instead of all at once.
 *
 * Elements that already animate themselves (framer-motion) should set
 * `data-no-reveal` on the wrapper they live under — we skip those.
 *
 * Honours `prefers-reduced-motion`.
 */

const CONTENT_SELECTORS = [
  '.heading-01',
  '.heading-02',
  '.heading-03',
  '.sub-heading-01---40px',
  '.sub-heading-02---32px',
  '.sub-heading-03---24px',
  '.body-01---18px-medium',
  '.hero-tag-wrap',
  '.cta-tag-wrap',
  '.blue-text',
  '.scroll-text',
  '.opacity-80',
  '.opacity-70',
  '.button-link',
  '.contact-submit-button',
  '.pricing-button',
  '.feature-content',
  '.rating-content',
  '.awward-bg-content',
  '.faq-content',
  '.blog-cms-link',
  '.project-bg-wrap',
  '.team-bg-content',
  '.slider-slide-wrapper',
].join(',');

const STICKER_SELECTORS = [
  '[class*="emoji-wrap"]',
  '[class*="sticker"]',
  '[class*="-icon-wrap"]',
  '.rating-tag-image',
].join(',');

export default function ScrollRevealInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tag = (el, kind) => {
      if (el.dataset.reveal) return;
      if (el.hasAttribute('data-no-reveal')) return;
      if (el.closest('[data-no-reveal-scope]')) return;
      // Skip elements living inside a framer-motion animated node — framer
      // writes an inline `style="opacity:..."` which fights our CSS.
      if (el.closest('[style*="opacity"]')) return;
      el.dataset.reveal = kind;
    };

    document.querySelectorAll(CONTENT_SELECTORS).forEach((el) => tag(el, 'up'));
    document.querySelectorAll(STICKER_SELECTORS).forEach((el) => tag(el, 'sticker'));

    // Stagger delay by sibling order within parent (cap so long lists
    // don't wait forever).
    const byParent = new Map();
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    nodes.forEach((el) => {
      const parent = el.parentElement || document.body;
      const i = byParent.get(parent) ?? 0;
      el.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
      byParent.set(parent, i + 1);
    });

    // Flip the html flag AFTER tagging so CSS only hides tagged elements
    // once we're ready to animate them (prevents FOUC on no-JS / slow nets).
    document.documentElement.setAttribute('data-reveal-ready', '');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    nodes.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      document.documentElement.removeAttribute('data-reveal-ready');
    };
  }, []);

  return null;
}
