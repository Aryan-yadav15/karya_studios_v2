'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/data';
import Button from '@/components/shared/Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div role="banner" className="navbar">
      <div className="nav-container">
        <div className="nav-logo-wrapper">
          <Link href="/" aria-label="Karya ,home">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Image
                src="/karya-logo.png"
                alt="Karya"
                width={120}
                height={120}
                unoptimized
                priority
                style={{ height: 36, width: 'auto', display: 'block' }}
              />
              <span
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 800,
                  fontSize: 22,
                  letterSpacing: '-0.5px',
                  color: '#1a1a1a',
                }}
              >
                Karya
              </span>
            </span>
          </Link>
        </div>

        <nav className="nav-link-wrap">
          <div className="nav-link-content">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="link-content">
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
          <button
            aria-label="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center border border-black rounded-full"
          >
            <span className="block w-4 h-[2px] bg-black mb-1" />
            <span className="block w-4 h-[2px] bg-black" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[88px] z-40 bg-grayish-orange p-8 flex flex-col gap-6 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-epilogue font-extrabold"
              >
                {l.label}
              </Link>
            ))}
            <Button href="/contact" variant="red" onClick={() => setOpen(false)}>
              Book a call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
