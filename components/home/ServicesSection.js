'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

const FEATURES = [
  {
    title: 'Discover',
    intro: 'We start with your business, not your brief.',
    bullets: ['Kickoff call with founders', 'Audience, goals & positioning'],
    icon: 'https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc81eccd271c81af757bcb_Feature%20Icon%202.svg',
  },
  {
    title: 'Design',
    intro: 'We turn insight into a clear product and brand direction.',
    bullets: [
      'Information architecture & wireframes',
      'Visual design for web, app and ads',
    ],
    icon: 'https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc81ec59822bce06cd1b91_Feature%20Icon%203.svg',
  },
  {
    title: 'Build',
    intro: 'We ship production-grade code, not pretty prototypes.',
    bullets: [
      'Next.js websites and headless CMS setups',
      'React Native / Flutter app development',
      'Third-party integrations (payments, CRM, WhatsApp)',
    ],
    icon: 'https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc81ecc8cafb21edd18ba7_Feature%20Icon%204.svg',
  },
  {
    title: 'Grow',
    intro: "Launch is day one ,we stay on to help you scale.",
    bullets: [
      'SEO, content and landing pages',
      'Meta & Google Ads management',
      'Monthly reporting and iteration',
    ],
    icon: 'https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc81ed3fcdc7b498839d48_Feature%20Icon%205.svg',
  },
];

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="container _1280px">
        <div className="content">
          <div className="align-center">
            <div className="heading-block feature">
              <h2 className="heading-02">
                We do it all with{' '}
                <span className="heading-02 lora feature" style={loraStyle}>
                  <em>ease!</em>
                </span>
              </h2>
              <div className="feature-heading-tag-wrap hidden lg:block">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bc81ec3fcdc7b498839d2f_Feature%20Icon%201.svg"
                  alt=""
                  width={96}
                  height={96}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="feature-wrap">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="feature-content"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="align-left">
                  <div className="feature-icon-wrap">
                    <Image src={f.icon} alt="" width={64} height={64} unoptimized />
                  </div>
                </div>
                <div className="space-40px" />
                <div className="sub-heading-02---32px">{f.title}</div>
                <div className="space-24px" />
                <div className="line-block" />
                <div className="space-24px" />
                <div className="opacity-80">{f.intro}</div>
                <div className="space-18px" />
                <ul role="list" className="feature-text-list-wrap">
                  {f.bullets.map((b) => (
                    <li key={b} className="feature-text-list-content">
                      <div>{b}</div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
