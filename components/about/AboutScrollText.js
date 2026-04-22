'use client';

import { useScrollHighlight } from '@/lib/animations';

export default function AboutScrollText() {
  const ref = useScrollHighlight();

  return (
    <section className="section">
      <div className="container _1060px">
        <div className="align-center">
          <div className="heading-block">
            <div className="video-heading-wrap">
              <div className="blue-text">[What drives us]</div>
            </div>
            <div className="space-24px" />
            <div className="video-heading-wrap">
              <div className="scroll-text scroll-highlight" ref={ref}>
                Karya is a Bhubaneswar-based digital studio specialising in web, mobile apps
                and performance marketing. We build modern digital experiences for ambitious
                Indian brands and founders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
