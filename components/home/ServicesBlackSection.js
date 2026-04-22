'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';
import { SERVICES } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

/**
 * The original "services" section lives inside a black-bg wrap and includes
 * both the heading/lead copy on the left and the blurred service pill stack
 * on the right. We keep the same layout here.
 */
export default function ServicesBlackSection() {
  return (
    <section className="section">
      <div className="black-bg-wrap">
        <div className="container full">
          <div className="testimonial-bg-wrap">
            <div className="center-wrap">
              <div className="container _1280px">
                <div className="testimonial-wrap">
                  <div className="heading-block services">
                    <div className="services-text-wrap">
                      <h2 className="heading-02 home">How can we</h2>
                      <div className="services-text-content">
                        <div className="services-text-image-wrap">
                          <Image
                            src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68c1c9c07df3a91751ae066e_Testimonial%20Image.png"
                            alt=""
                            width={120}
                            height={80}
                            unoptimized
                          />
                        </div>
                        <h2 className="heading-02 lora home" style={loraStyle}>
                          help you?
                        </h2>
                      </div>
                      <div className="services-text-image-content">
                        <Image
                          src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68c1ca40dbbb5e8bf55ab336_Testimonial%20Icon%201.svg"
                          alt=""
                          width={70}
                          height={70}
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="space-24px" />
                    <div className="services-text-block">
                      <div className="opacity-80">
                        Real conversations, not just contact forms. Get in touch to talk about
                        your website, app idea, or marketing ,or to peek at what we&rsquo;ve
                        been building.
                      </div>
                    </div>
                    <div className="space-40px" />
                    <div className="align-left">
                      <Button href="/contact" variant="red">
                        Book a call
                      </Button>
                    </div>
                    <div className="services-content-image-wrap">
                      <Image
                        src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68c1ca4030418e834f5af086_Testimonial%20Icon%202.svg"
                        alt=""
                        width={120}
                        height={120}
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="services-wrap">
                    {SERVICES.map((s, i) => (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                      >
                        <Link
                          href="/contact"
                          className={`services-link-wrap ${s.blur ? `blur-effect-${s.blur}` : ''}`}
                        >
                          <div>{s.name}</div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
