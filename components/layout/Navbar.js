'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/data';
import Button from '@/components/shared/Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div role="banner" className="navbar">
      <div className="nav-container">
        <div className="nav-logo-wrapper">
          <Link href="/" aria-label="Karya, home" onClick={() => setOpen(false)}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              {/* <Image
                src="/karya-logo.png"
                alt="Karya"
                width={120}
                height={120}
                unoptimized
                priority
                style={{ height: 32, width: 'auto', display: 'block' }}
              /> */}
              <span
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 800,
                  fontSize: 20,
                  letterSpacing: '-0.5px',
                  color: '#1a1a1a',
                }}
              >
                Karya Studios
              </span>
            </span>
          </Link>
        </div>

        <nav className="nav-link-wrap">
          <div className="nav-link-content">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`link-content${pathname === l.href ? ' active' : ''}`}
              >
                <div className="link-text-1">{l.label}</div>
                <div className="link-text-1" aria-hidden>
                  {l.label}
                </div>
              </Link>
            ))}
            <Button href="/contact" className="ml-2">
              Book a call
            </Button>
          </div>
        </nav>

        <div className="nav-menu-wrapper">
          {/* Mobile Book a call — tablet only */}
          <Link href="/contact" className="nav-cta-mobile" onClick={() => setOpen(false)}>
            Book a call
          </Link>
          {/* Hamburger / close */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="nav-hamburger"
          >
            <motion.span
              className="nav-hamburger-line"
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="nav-hamburger-line"
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="nav-mobile-menu"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`nav-mobile-link${pathname === l.href ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 8 }}>
              <Button href="/contact" variant="red" onClick={() => setOpen(false)}>
                Book a call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
