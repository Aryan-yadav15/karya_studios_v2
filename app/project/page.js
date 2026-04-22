import ProjectCard from '@/components/shared/ProjectCard';
import FeaturedProject from '@/components/shared/FeaturedProject';
import { PROJECTS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export const metadata = {
  title: 'Work ,Karya',
  description: 'Selected web, app and marketing work from Karya, a digital agency based in Bhubaneswar.',
};

export default function ProjectListPage() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <main>
      <section className="section _140px">
        <div className="container _1280px">
          <div className="align-center">
            <h1 className="heading-01">
              Selected{' '}
              <span className="heading-01 lora" style={loraStyle}>
                work
              </span>
            </h1>
          </div>
        </div>
      </section>

      {featured.map((p) => (
        <FeaturedProject key={p.slug} project={p} />
      ))}

      <section className="section">
        <div className="container _1280px">
          <div className="align-left" style={{ marginBottom: 32 }}>
            <div className="sub-heading-03---24px">More work</div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: 32,
            }}
          >
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
