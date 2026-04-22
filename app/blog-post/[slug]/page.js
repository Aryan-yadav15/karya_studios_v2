import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Journal ,Karya' };
  return { title: `${post.title} ,Karya`, description: post.excerpt };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main>
      <section className="section _140px">
        <div className="container _840px">
          <div className="align-center">
            <div className="hero-tag-wrap">
              <div>{post.category}</div>
              <div>·</div>
              <div>{post.date}</div>
            </div>
          </div>
          <div className="space-24px" />
          <div className="align-center">
            <h1 className="heading-02">{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container _1060px">
          <div className="image-wrap hero" style={{ width: '100%' }}>
            <Image
              src={post.image}
              alt={post.title}
              width={1060}
              height={600}
              unoptimized
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container _840px">
          <div className="content">
            <div className="sub-heading-01---40px">{post.excerpt}</div>
            <div className="space-24px" />
            <div className="opacity-80">
              In this piece we dig into the craft that shapes great digital products ,the
              research, the sketching, the iteration, and the careful edits that turn a good
              idea into something that actually works in market. It&rsquo;s a glimpse into how
              we work at Karya, and the lessons we keep coming back to on every project.
            </div>
            <div className="space-40px" />
            <Link href="/blog" className="link-content">
              <div className="link-text-1">
                <span style={loraStyle}>Back</span> to the journal
              </div>
              <div className="link-text-1" aria-hidden>
                <span style={loraStyle}>Back</span> to the journal
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
