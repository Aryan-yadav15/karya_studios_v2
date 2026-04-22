'use client';

import { useRef } from 'react';
import Image from 'next/image';
import ProjectCard from '@/components/shared/ProjectCard';
import { PROJECTS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function ProjectSlider() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="section">
      <div className="container _1280px">
        <div className="content">
          <div className="align-center">
            <div className="heading-block project home">
              <h2 className="heading-02">
                We do some{' '}
                <span className="heading-02 lora" style={loraStyle}>
                  great
                </span>{' '}
                work
              </h2>
              <div className="blog-text-icon-wrap home hidden md:block">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bec944039f9ab6a0b8eb25_Slider%20Text%20Icon.svg"
                  alt=""
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="canvass-slider">
            <div className="canvass-slider-track" ref={trackRef}>
              {PROJECTS.filter((p) => !p.featured).map((p) => (
                <div className="canvass-slide" key={p.slug}>
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous project"
              className="slider-arrow left"
              onClick={() => scroll(-1)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next project"
              className="slider-arrow right"
              onClick={() => scroll(1)}
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
