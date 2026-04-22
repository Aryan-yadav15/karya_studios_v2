'use client';

import Image from 'next/image';
import { AWARDS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function AwardsSection() {
  return (
    <section className="section">
      <div className="container _1280px">
        <div className="align-center">
          <div className="heading-block awward">
            <h2 className="heading-02">
              Recognition for our{' '}
              <em className="heading-02 lora" style={loraStyle}>
                creative
              </em>{' '}
              excellence
            </h2>
            <div className="awward-text-icon-wrap">
              <Image
                src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bfe9498ce1e443202edf8f_Awwards%20Text%20Icon.svg"
                alt=""
                width={96}
                height={96}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="space-60px" />

        <div className="awward-bg-wrap">
          {AWARDS.map((a, i) => (
            <div className="awward-bg-content" key={`${a.provider}-${i}`}>
              <div className="awward-sub-content">
                <div className="awward-sub-wrap">
                  <div className="sub-heading-01---40px">{a.provider}</div>
                </div>
                <div className="awward-sub-wrap">
                  <div className="opacity-70">{a.label}</div>
                </div>
              </div>
              <div className="awward-text-wrap">
                <div>{a.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
