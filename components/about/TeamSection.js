'use client';

import Image from 'next/image';
import { TEAM } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function TeamSection() {
  return (
    <section className="section">
      <div className="container _1280px">
        <div className="align-center">
          <div className="heading-block team">
            <h2 className="heading-02">
              Meet the{' '}
              <em className="heading-02 lora" style={loraStyle}>
                creative team
              </em>{' '}
              behind magic
            </h2>
            <div className="team-text-icon-wrap">
              <Image
                src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bfddc76f737f6b1b1eddca_Team%20Text%20Icon.svg"
                alt=""
                width={96}
                height={96}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="space-60px" />

        <div className="team-bg-wrap">
          {TEAM.map((member) => (
            <div className="team-bg-content" key={member.name}>
              <div className="team-image-wrap">
                <Image src={member.image} alt={member.name} width={600} height={720} unoptimized />
              </div>
              <div className="team-wrap">
                <div className="team-text-wrap">
                  <div className="sub-heading-03---24px">{member.name}</div>
                  <div className="opacity-70">{member.role}</div>
                </div>
                <div className="team-sicial-wrap">
                  <a
                    className="social-link"
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bfddc712d25a63d4329433_Linkedin%20Icon.svg"
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                    />
                  </a>
                  <a
                    className="social-link"
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
