'use client';

import Image from 'next/image';
import AnimatedText from '@/components/shared/AnimatedText';
import Counter from '@/components/shared/Counter';
import { COUNTERS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container _1280px">
        <div className="content">
          <div className="heading-content rating">
            <div className="rating-text-wrap">
              <h2 className="heading-03">About Karya</h2>
              <div className="space-14px" />
              <div>A small, hands-on digital team building for Indian founders from Bhubaneswar.</div>
              <div className="align-right">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc7ccc3dcc23923f208f9d_Rating%20Tag%20Icon.svg"
                  alt=""
                  width={120}
                  height={120}
                  unoptimized
                  className="rating-tag-image"
                />
              </div>
            </div>
            <div className="heading-block rating">
              <AnimatedText className="scroll-text scroll-highlight">
                We build{' '}
                <span className="lora" style={loraStyle}>
                  useful
                </span>{' '}
                websites, apps and marketing systems for early-stage brands ,the kind that
                turn into real business, not just nice screenshots.
              </AnimatedText>
            </div>
          </div>

          <div className="rating-wrapper">
            {COUNTERS.map((c, i) => (
              <div
                key={i}
                className={`rating-content ${c.bg ? 'bg-linear' : ''}`}
              >
                <div className="counter-number-wrap">
                  <div className="counter-number">
                    <Counter value={c.value} />
                  </div>
                  <div>{c.suffix}</div>
                </div>
                <div className="raing-tag">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
