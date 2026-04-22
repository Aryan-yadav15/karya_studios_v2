'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRICING } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function PricingSection() {
  return (
    <section className="section">
      <div className="container _1280px">
        <div className="content">
          <div className="center-wrap">
            <div className="heading-block pricing">
              <h2 className="heading-02">
                Find the{' '}
                <span className="heading-02 lora" style={loraStyle}>
                  right plan
                </span>{' '}
                for your goals
              </h2>
              <div className="pricing-emoji-wrap">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bb352d5b1084aead10271f_Emoji%20Icon.svg"
                  alt=""
                  width={56}
                  height={56}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="pricing-bg-wrap">
            {PRICING.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`pricing-bg-content ${plan.variant === 'light' ? 'white' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`pricing-sub-wrap ${plan.bandColor === 'blue' ? 'blue' : ''}`}>
                  <div className="space-48px" />
                  <div className="pricing-sub-content">
                    <div className="pricing-sub-block">
                      <div className="sub-heading-03---24px">{plan.name}</div>
                      <div className="opacity-80">{plan.description}</div>
                    </div>
                    <div>
                      <span className="sub-heading-01---40px">{plan.price}</span>
                      {plan.period}
                    </div>
                  </div>
                  <div className="space-48px" />
                </div>

                <div className="space-40px" />

                <div className="pricing-list-bg-wrap">
                  <div className="align-left">
                    <div>What&rsquo;s included:</div>
                  </div>
                  <div className="space-32px" />
                  <div className="pricing-list-wrap">
                    <div className="pricing-list-content">
                      {plan.features.slice(0, 3).map((f) => (
                        <div className="pricing-list-block" key={f}>
                          <Check color={plan.bandColor} />
                          <div>{f}</div>
                        </div>
                      ))}
                    </div>
                    <div className="pricing-list-content">
                      {plan.features.slice(3).map((f, idx) => (
                        <div className="pricing-list-block" key={`${f}-${idx}`}>
                          <Check color={plan.bandColor} />
                          <div>{f}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-40px" />
                <div className="pricing-button-bg-wrap">
                  <Link
                    href="/contact"
                    className={`pricing-button ${
                      plan.buttonVariant === 'white' ? 'white' : 'black'
                    }`}
                  >
                    <div>Book a 15min Call</div>
                  </Link>
                </div>
                <div className="space-48px" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ color }) {
  const stroke = color === 'blue' ? '#4b69f0' : '#2d7864';
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
