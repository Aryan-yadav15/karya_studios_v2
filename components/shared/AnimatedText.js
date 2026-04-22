'use client';

import { useScrollHighlight } from '@/lib/animations';

/**
 * AnimatedText ,wraps a headline and animates each character from faded
 * to full opacity as it scrolls into view.
 */
export default function AnimatedText({ children, className = '' }) {
  const ref = useScrollHighlight();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
