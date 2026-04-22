'use client';

import Image from 'next/image';
import { CLIENT_LOGOS } from '@/lib/data';

export default function LogoMarquee() {
  return (
    <section className="section _140px">
      <div className="container full">
        <div className="content">
          <div className="align-center">
            <div className="sub-heading-03---24px">The company we keep</div>
          </div>
          <div className="logo-marquee-wrap">
            <div className="marquee-track">
              {/* Duplicate the block so the loop is seamless */}
              {[0, 1].map((dup) => (
                <div className="logo-marquee-block" key={dup} aria-hidden={dup === 1}>
                  {CLIENT_LOGOS.map((src, i) => (
                    <div className="logo-marquee" key={`${dup}-${i}`}>
                      <Image
                        src={src}
                        alt=""
                        width={120}
                        height={40}
                        unoptimized
                        style={{ height: 40, width: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
