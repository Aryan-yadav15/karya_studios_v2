'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CORE_VALUES } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function CoreValuesGrid() {
  const [open, setOpen] = useState(null);

  const toggle = (title) => setOpen((prev) => (prev === title ? null : title));

  return (
    <section className="section">
      <div className="container _1280px">
        <div className="align-center">
          <div className="heading-block about-slider">
            <h2 className="heading-02">
              The{' '}
              <em className="heading-02 lora" style={loraStyle}>
                core values
              </em>{' '}
              we stand by
            </h2>
            <div className="slider-text-icon-wrap">
              <Image
                src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bec944039f9ab6a0b8eb25_Slider%20Text%20Icon.svg"
                alt=""
                width={96}
                height={96}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="space-60px" />

        <div className="core-values-grid">
          {CORE_VALUES.map((v) => {
            const isOpen = open === v.title;
            return (
              <motion.div
                key={v.title}
                layout
                onClick={() => toggle(v.title)}
                style={{
                  background: '#f5f2ee',
                  border: '1.5px solid #1a1a1a',
                  borderRadius: '20px',
                  padding: '40px',
                  cursor: 'pointer',
                  boxShadow: isOpen ? '4px 4px 0px #1a1a1a' : '4px 4px 0px #c8c4be',
                  transition: 'box-shadow 0.2s',
                  overflow: 'hidden',
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: v.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 28,
                    fontFamily: 'Lora, serif',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 22,
                    color: '#fff',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {v.num}
                </div>

                <div className="sub-heading-02---32px" style={{ marginBottom: 12 }}>
                  {v.title}
                </div>
                <div className="opacity-70" style={{ lineHeight: 1.6 }}>
                  {v.body}
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          marginTop: 20,
                          paddingTop: 20,
                          borderTop: '1px solid rgba(0,0,0,0.12)',
                          lineHeight: 1.7,
                          opacity: 0.75,
                          fontSize: '1rem',
                        }}
                      >
                        {v.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {isOpen ? 'Show less' : 'Read more'}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'inline-block', fontSize: '1rem' }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
