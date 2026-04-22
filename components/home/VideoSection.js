'use client';

export default function VideoSection() {
  return (
    <section className="section _140px">
      <div className="container _1360px">
        <div className="image-wrap hero" style={{ width: '100%' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0%2F696f5b12ecbaac77b6211021_Modern%20Cylindrical%20Design_poster.0000000.jpg"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          >
            <source
              src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0%2F696f5b12ecbaac77b6211021_Modern%20Cylindrical%20Design_mp4.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0%2F696f5b12ecbaac77b6211021_Modern%20Cylindrical%20Design_webm.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
