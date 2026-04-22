'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function AboutHero() {
  return (
    <div className="about-hero-bg-wrap">
      <section className="section about-hero">
        <div className="container _1280px">
          <div className="about-hero-bg-content">
            <div className="align-left">
              <motion.div
                className="cta-tag-wrap"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="">
                  <div>Why partner with Karya?</div>
                </div>
              </motion.div>
            </div>

            <div className="space-24px" />

            <div className="about-hero-heading-wrap">
              <motion.h1
                className="heading-01 white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                A small{' '}
                <span className="heading-01 lora white" style={loraStyle}>
                  digital team
                </span>{' '}
                from Bhubaneswar
              </motion.h1>
              <div className="about-hero-emoji-wrap">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bb352d5b1084aead10271f_Emoji%20Icon.svg"
                  alt=""
                  width={80}
                  height={80}
                  unoptimized
                />
              </div>
            </div>

            <div className="space-24px" />

            <motion.div
              className="opacity-80 cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              We&rsquo;re an upcoming digital agency building websites, mobile apps and
              marketing for Indian founders and D2C brands ,one honest project at a time.
            </motion.div>

            <div className="space-40px" />

            <div className="align-left">
              <Button href="/contact" variant="red">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
