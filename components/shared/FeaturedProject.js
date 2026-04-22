'use client';

import Image from 'next/image';
import Link from 'next/link';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

const ICONS = {
  web: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  ),
  store: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 9l1.5-5h13L20 9" />
      <path d="M4 9v11h16V9" />
      <path d="M4 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" />
    </svg>
  ),
};

/**
 * FeaturedProject — the dark "ecosystem" band used for flagship case studies
 * like KhaoGully. Rendered above the regular project grid.
 */
export default function FeaturedProject({ project }) {
  return (
    <section className="section" data-no-reveal-scope>
      <div className="featured-project">
        <div className="featured-project__grid">
          <div className="featured-project__copy">
            <div className="featured-project__eyebrow">
              <span className="featured-project__dot" />
              Featured case study
            </div>
            <h2 className="featured-project__title">
              {project.name}{' '}
              <span style={loraStyle} className="featured-project__title-accent">
                {project.tagline}
              </span>
            </h2>
            <p className="featured-project__desc">{project.description}</p>

            {project.stats?.length ? (
              <div className="featured-project__stats">
                {project.stats.map((s) => (
                  <div className="featured-project__stat" key={s.label}>
                    <div className="featured-project__stat-value">{s.value}</div>
                    <div className="featured-project__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="featured-project__cta">
              <Link href={`/project-post/${project.slug}`} className="featured-project__btn">
                Read the case study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <Link
            href={`/project-post/${project.slug}`}
            className="featured-project__visual"
            aria-label={`Open ${project.name} case study`}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={520}
              unoptimized
              priority
            />
            <span className="featured-project__visual-badge">
              View case study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </Link>
        </div>

        {project.modules?.length ? (
          <div className="featured-project__modules">
            {project.modules.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="featured-project__module"
              >
                <span className="featured-project__module-icon">{ICONS[m.icon] ?? ICONS.web}</span>
                <span className="featured-project__module-meta">
                  <span className="featured-project__module-name">{m.name}</span>
                  <span className="featured-project__module-sub">{m.sub}</span>
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
