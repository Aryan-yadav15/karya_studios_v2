'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog-post/${post.slug}`} className="blog-cms-link">
      <div className="blog-image-wrap">
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={460}
          unoptimized
          sizes="(max-width: 991px) 100vw, 360px"
        />
      </div>
      <div className="blog-wrap">
        <div className="blog-tag-wrap">
          <div>{post.category} -</div>
          <div>{post.date}</div>
        </div>
        <div className="space-16px" />
        <div className="sub-heading-01---40px">{post.title}</div>
        <div className="space-24px" />
        <div className="align-left">
          <span className="button-link raad-more">
            <span className="button-text-wrap read-more">
              <span className="button-text-top">Read more</span>
              <span className="button-text-bottom" aria-hidden>
                Read more
              </span>
            </span>
            <span className="button-icon-block">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
