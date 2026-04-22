'use client';

import { useCounter } from '@/lib/animations';

/**
 * Counter ,animates a number to `value` when scrolled into view.
 */
export default function Counter({ value, className = '' }) {
  const ref = useCounter(value);
  return (
    <span ref={ref} className={`counter ${className}`}>
      0
    </span>
  );
}
