'use client';

import Image from 'next/image';
import BlogCard from '@/components/shared/BlogCard';
import { BLOG_POSTS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

export default function BlogPreview() {
  return (
    <section className="section">
      <div className="container _1060px">
        <div className="content">
          <div className="align-center">
            <div className="heading-block blog-hero">
              <h2 className="heading-02">
                The{' '}
                <span className="heading-02 lora" style={loraStyle}>
                  studio
                </span>{' '}
                journal
              </h2>
              <div className="blog-heading-icon-wrap home hidden md:block">
                <Image
                  src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68c1653201328db29665f867_Blog%20Text%20Icon.svg"
                  alt=""
                  width={96}
                  height={96}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="blog-cms-bg-wrap">
            <div className="blog-collection-list">
              {BLOG_POSTS.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
