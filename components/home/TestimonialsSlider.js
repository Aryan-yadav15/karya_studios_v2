'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function TestimonialsSlider() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.8;
    trackRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="section">
      <div className="container full">
        <div className="align-center">
          <div className="container _1280px">
            <div className="heading-block slider-text">
              <h2 className="heading-02">
                Read the{' '}
                <em className="heading-02 lora" style={loraStyle}>
                  love
                </em>{' '}
                notes
              </h2>
              <div className="slider-text-tag-wrap hidden md:block">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bfddc76f737f6b1b1eddca_Team%20Text%20Icon.svg"
                  alt=""
                  width={80}
                  height={80}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-40px" />

        <div className="slider-bg-content">
          <div
            className="canvass-slider"
            style={{ maxWidth: 1280, width: '100%', padding: '0 40px', position: 'relative' }}
          >
            <div
              className="canvass-slider-track"
              ref={trackRef}
              style={{ gap: 24 }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="canvass-slide"
                  style={{ flex: '0 0 min(510px, 100%)', scrollSnapAlign: 'start' }}
                >
                  <div className="slider-slide-wrapper">
                    <div className={`slider-star-wrapper ${t.color}`}>
                      <Image
                        src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68c26c7f8658a5612ac40215_Slider%20Star%20Icon.svg"
                        alt=""
                        width={56}
                        height={56}
                        unoptimized
                      />
                    </div>
                    <div className="slider-bg-wrap">
                      <div className="sub-heading-02---32px">{t.quote}</div>
                      <div className="space-40px" />
                      <div className="slider-clients-wrapper">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={56}
                          height={56}
                          unoptimized
                        />
                        <div className="slider-clients-content">
                          <div className="body-01---18px-medium">{t.name}</div>
                          <div className="opacity-70">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous testimonial"
              className="slider-arrow left"
              onClick={() => scroll(-1)}
              style={{ left: -24 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="slider-arrow right"
              onClick={() => scroll(1)}
              style={{ right: -24 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                <path d="M5 12h14M13 19l7-7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
