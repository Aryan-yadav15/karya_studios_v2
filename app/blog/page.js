import BlogCard from '@/components/shared/BlogCard';
import { BLOG_POSTS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export const metadata = {
  title: 'Journal ,Karya',
  description: 'Notes, playbooks and case studies from the Karya team on web, apps and marketing for Indian brands.',
};

export default function BlogListPage() {
  return (
    <main>
      <section className="section _140px">
        <div className="container _1060px">
          <div className="align-center">
            <h1 className="heading-01">
              The{' '}
              <span className="heading-01 lora" style={loraStyle}>
                studio
              </span>{' '}
              journal
            </h1>
          </div>
          <div className="space-40px" />
          <div className="blog-cms-bg-wrap">
            <div className="blog-collection-list">
              {BLOG_POSTS.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
