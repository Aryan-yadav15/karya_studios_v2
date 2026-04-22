'use client';

import Link from 'next/link';

/**
 * Button ,matches the Canvass .button-link markup with the sliding text
 * hover effect. Pass `variant` to pick styling ("default" | "red" | "black").
 */
export default function Button({
  children,
  href = '#',
  variant = 'default',
  className = '',
  external = false,
  ...rest
}) {
  const classes = [
    'button-link',
    variant === 'red' && 'red',
    variant === 'black' && 'black',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <span className="button-text-wrap">
      <span className="button-text-top">{children}</span>
      <span className="button-text-bottom" aria-hidden="true">
        {children}
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}
