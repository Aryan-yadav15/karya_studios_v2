import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectCard from '@/components/shared/ProjectCard';
import KhaoGullyCaseStudy from '@/components/shared/KhaoGullyCaseStudy';
import { PROJECTS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Work ,Karya' };
  return { title: `${project.name} ,Karya`, description: project.description };
}

export default function ProjectPostPage({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  if (project.slug === 'khaogully') {
    return <KhaoGullyCaseStudy project={project} />;
  }

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const parts = project.name.split(' ');
  const last = parts.pop();
  const first = parts.join(' ');

  return (
    <main>
      <section className="section _140px">
        <div className="container _1280px">
          <div className="align-center">
            <div className="hero-tag-wrap">
              <div>Brand identity</div>
            </div>
          </div>
          <div className="space-24px" />
          <div className="align-center">
            <h1 className="heading-01">
              {first ? `${first} ` : ''}
              <span className="heading-01 lora" style={loraStyle}>
                {last}
              </span>
            </h1>
          </div>
          <div className="space-40px" />
          <div className="image-wrap hero" style={{ width: '100%' }}>
            <Image
              src={project.image}
              alt={project.name}
              width={1280}
              height={720}
              unoptimized
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container _840px">
          <div className="content">
            <div className="sub-heading-01---40px">{project.description}</div>
            <div className="space-24px" />
            <div className="opacity-80">
              Karya partnered with the team to ship a cohesive visual system, a new brand
              voice, and a set of digital touchpoints that launched together as one release —
              designed, built and marketed from our studio in Bhubaneswar.
            </div>
            <div className="space-40px" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {project.tags?.map((t) => (
                <div key={t} className="project-tag-content">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container _1280px">
          <div className="align-center">
            <h2 className="heading-02">
              More{' '}
              <span className="heading-02 lora" style={loraStyle}>
                work
              </span>
            </h2>
          </div>
          <div className="space-40px" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24,
            }}
          >
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="space-40px" />
          <div className="align-center">
            <Link href="/project" className="link-content">
              <div className="link-text-1">View all projects</div>
              <div className="link-text-1" aria-hidden>
                View all projects
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
