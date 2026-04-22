'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="project-bg-wrap">
      <Link href={`/project-post/${project.slug}`} className="project-image-wrap">
        <Image
          src={project.image}
          alt={project.name}
          width={1440}
          height={900}
          unoptimized
          sizes="(max-width: 991px) 100vw, 720px"
        />
      </Link>
      <div className="project-bg-content">
        <div className="project-title-row">
          <Link href={`/project-post/${project.slug}`} className="heading-03">{project.name}</Link>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer noopener"
              className="project-live-btn"
              aria-label={`Visit ${project.name} live site`}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
        <div className="space-16px" />
        <div>{project.description}</div>
        <div className="space-40px" />
        <div className="project-tag-wrap">
          <div className="project-tag-content">
            {project.tags.slice(0, 2).map((t) => (
              <div key={t} className="project-tag">
                {t}
              </div>
            ))}
          </div>
          <div className="project-tag-content">
            {project.tags.slice(2).map((t) => (
              <div key={t} className="project-tag">
                {t}
              </div>
            ))}
            {project.extraTags ? (
              <div className="project-tag">+{project.extraTags}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
