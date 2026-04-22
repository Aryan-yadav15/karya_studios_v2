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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
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
