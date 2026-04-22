'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';
import { NAV_LINKS } from '@/lib/data';

/**
 * Footer ,mirrors the dark CTA + footer block at the bottom of the Canvass
 * pages. Rendered inside a `black-bg-wrap cta` section so it shares the
 * background with the CTA above it.
 */
export default function Footer() {
  return (
    <footer className="section">
      <div className="black-bg-wrap cta">
        <div className="container _1280px">
          <div className="content _80px">
            {/* CTA block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="cta-wrap"
            >
              <div className="align-left">
                <div className="cta-tag-wrap">
                  <div>Ready to tackle your biggest challenge?</div>
                </div>
              </div>
              <div className="space-24px" />
              <h2 className="heading-02">
                Let&rsquo;s{' '}
                <span
                  className="heading-02 lora"
                  style={{ fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 }}
                >
                  <em>make it happen</em>
                </span>{' '}
                together.
              </h2>
              <div className="space-24px" />
              <div className="opacity-80 cta">
                We help Indian founders and brands ship websites, apps and marketing that
                actually move the needle ,from our studio in Bhubaneswar, Odisha.
              </div>
              <div className="space-40px" />
              <div className="align-left">
                <Button href="/contact" variant="red">
                  Book a call
                </Button>
              </div>
              <div className="cta-emoji-sticker-wrap">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bb352d5b1084aead10271f_Emoji%20Icon.svg"
                  width={96}
                  height={96}
                  alt=""
                  unoptimized
                />
              </div>
              <div className="cta-sticker-wrap">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bb3590fde3e7f02cc7ee6e_CTA%20Icon%201.png"
                  width={692}
                  height={500}
                  alt=""
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Footer nav */}
            <div className="footer-wrap">
              {NAV_LINKS.map((l) => (
                <div key={l.href} className="footer-content">
                  <div className="footer-block" />
                  <Link href={l.href} className="link-content white footer">
                    <div className="link-text-1">{l.label}</div>
                    <div className="link-text-1" aria-hidden>
                      {l.label}
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="cr-wrap">
              <div className="cr-logo-wrap">
                <div
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(64px, 14vw, 220px)',
                    letterSpacing: '-6px',
                    lineHeight: 0.9,
                    color: '#fff',
                  }}
                >
                  KARYA
                </div>
              </div>
              <div className="cr-content">
                <div className="cr-link-wrap">
                  <Link href="#" className="link-content white footer">
                    <div className="link-text-1">Style Guide</div>
                    <div className="link-text-1" aria-hidden>
                      Style Guide
                    </div>
                  </Link>
                  <Link href="#" className="link-content white footer">
                    <div className="link-text-1">Licensing</div>
                    <div className="link-text-1" aria-hidden>
                      Licensing
                    </div>
                  </Link>
                  <Link href="#" className="link-content white footer">
                    <div className="link-text-1">Changelog</div>
                    <div className="link-text-1" aria-hidden>
                      Changelog
                    </div>
                  </Link>
                </div>
                <div className="cr-text">© {new Date().getFullYear()} Karya ,Bhubaneswar, Odisha</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
