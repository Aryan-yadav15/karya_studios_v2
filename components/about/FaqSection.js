'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section">
      <div className="container _1060px">
        <div className="align-center">
          <div className="heading-block faq">
            <h2 className="heading-02">
              <em className="heading-02 lora" style={loraStyle}>
                Everything
              </em>{' '}
              you need to know
            </h2>
            <div className="faq-text-icon-wrap">
              <Image
                src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68beb6aae70e6b65a307c326_FAQ%20Text%20Icon.svg"
                alt=""
                width={96}
                height={96}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="space-60px" />

        <div className="faq-wrap">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className="faq-content" key={item.q}>
                <div
                  className="faq-qus-wrapper"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setOpen(isOpen ? -1 : i);
                  }}
                >
                  <div>{item.q}</div>
                  <div className={`faq-icon-wrap${isOpen ? ' open' : ''}`}>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: 'inline-block', lineHeight: 1 }}
                    >
                      +
                    </motion.span>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-ans-wrapper"
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-ans-content">
                        <div className="opacity-70">{item.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
