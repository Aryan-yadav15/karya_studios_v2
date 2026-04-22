'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/project-post/${project.slug}`} className="project-bg-wrap">
      <div className="project-image-wrap">
        <Image
          src={project.image}
          alt={project.name}
          width={1440}
          height={900}
          unoptimized
          sizes="(max-width: 991px) 100vw, 720px"
        />
      </div>
      <div className="project-bg-content">
        <div className="heading-03">{project.name}</div>
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
    </Link>
  );
}
