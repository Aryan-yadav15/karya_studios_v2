'use client';

import { useEffect, useRef } from 'react';

/**
 * useScrollHighlight
 * Animates characters from faded (opacity 0.2) to full opacity as the
 * element scrolls through the viewport. Mirrors the Canvass homepage
 * "We create meaningful brand experiences..." effect.
 */
export function useScrollHighlight() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let ctx;
    let splitInstance;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const SplitType = (await import('split-type')).default;

      gsap.registerPlugin(ScrollTrigger);
      splitInstance = new SplitType(ref.current, { types: 'chars,words' });

      ctx = gsap.context(() => {
        gsap.fromTo(
          splitInstance.chars,
          { opacity: 0.2 },
          {
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            },
          }
        );
      }, ref);
    })();

    return () => {
      if (ctx) ctx.revert();
      if (splitInstance) splitInstance.revert();
    };
  }, []);

  return ref;
}

/**
 * useCounter
 * Animates a number from 0 to `target` when it scrolls into view.
 * Attach the returned ref to the element that holds the number text.
 */
export function useCounter(target, duration = 1.2) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let ctx;
    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const state = { val: 0 };
        gsap.to(state, {
          val: target,
          duration,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            if (ref.current) ref.current.textContent = Math.round(state.val);
          },
        });
      }, ref);
    })();

    return () => ctx && ctx.revert();
  }, [target, duration]);

  return ref;
}

/**
 * useFadeInUp
 * Reveal an element with a small translateY + opacity transition on scroll.
 */
export function useFadeInUp(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let ctx;
    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: options.duration ?? 0.9,
            ease: 'power2.out',
            delay: options.delay ?? 0,
            scrollTrigger: {
              trigger: ref.current,
              start: options.start ?? 'top 85%',
              once: true,
            },
          }
        );
      }, ref);
    })();

    return () => ctx && ctx.revert();
  }, [options.duration, options.delay, options.start]);

  return ref;
}
