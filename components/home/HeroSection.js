'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function HeroSection() {
  return (
    <section className="section _140px">
      <div className="container">
        <motion.div
          className="align-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-tag-wrap">
            <div>Digital agency</div>
            <Image
              src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc1e97f44fbde92994253c_Hero%20Tag%20Icon.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
            />
            <div>based in Bhubaneswar</div>
          </div>
        </motion.div>

        <div className="space-24px" />

        <div className="align-center">
          <div className="hero-heading-wrap">
            <motion.div
              className="heading-block home-hero top"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="hero-text-wrap">
                <h1 className="heading-01">
                  We{' '}
                  <span className="heading-01 lora" style={loraStyle}>
                    build
                  </span>
                </h1>
                <div className="hero-emoji-wrap">
                  <Image
                    src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bb352d5b1084aead10271f_Emoji%20Icon.svg"
                    alt=""
                    width={72}
                    height={72}
                    unoptimized
                  />
                </div>
              </div>
              <div className="hero-heading-image-wrap">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc236759822bce06bf11f2_Hero%20Eye%20Emoji.svg"
                  alt=""
                  width={96}
                  height={64}
                  unoptimized
                />
              </div>
              <h1 className="heading-01">brands</h1>
            </motion.div>

            <motion.div
              className="heading-block home-hero bottom"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="heading-01">that stand out</h1>
              <div className="hero-heading-image-wrap bottom">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc259d6cdd2e175ab4d92e_Hero%20Heading%20Icon.svg"
                  alt=""
                  width={72}
                  height={72}
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="space-24px" />

        <motion.div
          className="align-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <div className="hero-text">
            <div className="opacity-80">
              Karya is a Bhubaneswar-based digital agency building websites, mobile apps and
              marketing that help Indian brands actually grow.
            </div>
          </div>
        </motion.div>

        <div className="space-40px" />

        <motion.div
          className="align-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <Button href="/contact" variant="red">
            Book a call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
