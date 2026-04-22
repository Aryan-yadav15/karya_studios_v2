import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/shared/ProjectCard';
import { PROJECTS } from '@/lib/data';

const loraStyle = { fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500 };

const CHAPTERS = [
  {
    eyebrow: 'Overview',
    title: 'A live food-delivery ecosystem built in Bhubaneswar',
    lead:
      'KhaoGully is a full-stack, hyperlocal food-delivery product — one backend, four connected surfaces, one admin console. What started as a single customer app grew into an ecosystem serving 100+ orders a day, with every layer built in-house.',
    features: [
      { title: '200k+ lines of code', body: 'Across web, three mobile apps, the admin panel and backend services.' },
      { title: '3 connected products', body: 'Customer, Driver and Restaurant surfaces all talking to one shared backend.' },
      { title: 'Realtime by default', body: 'Websocket-powered order state, live driver tracking, instant kitchen updates.' },
    ],
    placeholder: 'KhaoGully · Ecosystem Overview',
  },
  {
    eyebrow: 'Customer Web + App',
    title: 'The front door ,browse, order, track',
    lead:
      'A fast, mobile-first storefront on the web and a native-feel Android app. Menu browsing, cart, address management, payments, coupons, and realtime order tracking — all tuned for small-screen, slow-network India.',
    features: [
      { title: 'Offline-tolerant cart', body: 'Nothing is lost if the signal drops between Jaydev Vihar and Patia.' },
      { title: 'Live order tracking', body: 'From "accepted" to "out for delivery" to "at your door" with ETA.' },
      { title: 'Repeat-order flow', body: 'One-tap re-order of your last meal — designed for nightly regulars.' },
    ],
    cta: { label: 'khaoogully.com', href: 'https://khaoogully.com' },
    cta2: { label: 'Customer app on Play Store', href: 'https://play.google.com/store/apps/details?id=com.khaogully.app' },
    placeholder: 'KhaoGully · Customer Web + App',
  },
  {
    eyebrow: 'Driver App',
    title: 'Built for the people on the bikes',
    lead:
      'A dedicated Android app for delivery partners with a single job: make their shift easier. Live job assignment, turn-by-turn routing, auto-status updates and an earnings dashboard that updates as soon as a drop is confirmed.',
    features: [
      { title: 'Websocket job push', body: 'New orders arrive without a refresh — accept or skip in under 3 seconds.' },
      { title: 'Continuous GPS ping', body: 'Powers the customer-side live map while respecting battery life.' },
      { title: 'Daily earnings view', body: 'Partners see exactly what they made and what they are owed, in real time.' },
    ],
    cta: { label: 'Driver app on Play Store', href: 'https://play.google.com/store/apps/details?id=com.khaoogully.driverapp' },
    placeholder: 'KhaoGully · Driver App',
  },
  {
    eyebrow: 'Restaurant App',
    title: 'The kitchen\u2019s order console',
    lead:
      'A tablet-first app that lives next to the cook. Incoming orders are accepted or rejected with a tap, prep timers keep the queue honest, and a clean daily report drops in every morning.',
    features: [
      { title: 'Audible new-order alert', body: 'Cuts through a noisy kitchen, pauses on acknowledgement.' },
      { title: 'Prep-time dial', body: 'Restaurants set their own ready-by ETA per order, per shift.' },
      { title: 'Daily reconciliation', body: 'Sales, commission and payouts in one no-nonsense view.' },
    ],
    cta: { label: 'Restaurant app on Play Store', href: 'https://play.google.com/store/apps/details?id=com.khaogully.restaurant' },
    placeholder: 'KhaoGully · Restaurant App',
  },
  {
    eyebrow: 'Admin Panel',
    title: 'Operations, in one window',
    lead:
      'A dense, ops-first admin panel that runs the business. Live order board, driver roster, restaurant onboarding, coupons, refunds, finance and support — all in a single interface designed for the team that keeps the platform alive after midnight.',
    features: [
      { title: 'Live ops board', body: 'Every active order, driver and kitchen visible on one screen.' },
      { title: 'Manual override', body: 'Re-assign a driver, refund a customer, nudge a restaurant — all from one row.' },
      { title: 'Role-based access', body: 'Support, finance and founders each see exactly what they need.' },
    ],
    placeholder: 'KhaoGully · Admin Panel',
  },
  {
    eyebrow: 'Under the hood',
    title: 'Tech, architecture, and the websocket layer',
    lead:
      'The whole ecosystem is stitched together by a shared backend and a websocket gateway that keeps every surface in sync. When a customer places an order, the kitchen, the driver pool and the ops team all hear about it in the same second.',
    features: [
      { title: 'Backend', body: 'Node.js services, PostgreSQL for transactional data, Redis for queues and presence.' },
      { title: 'Realtime', body: 'A dedicated websocket gateway fans out order and location events to 4 client types.' },
      { title: 'Mobile', body: 'Three Android apps sharing a common design system and auth layer.' },
      { title: 'Infra', body: 'Containerised services behind a single API gateway, continuous deploys, daily backups.' },
    ],
    placeholder: 'KhaoGully · Architecture diagram',
  },
];

export default function KhaoGullyCaseStudy({ project }) {
  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="section _140px">
        <div className="container _1280px">
          <div className="align-center">
            <div className="hero-tag-wrap">
              <div>Flagship case study</div>
            </div>
          </div>
          <div className="space-24px" />
          <div className="align-center">
            <h1 className="heading-01">
              {project.name}{' '}
              <span className="heading-01 lora" style={loraStyle}>
                {project.tagline}
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
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          {project.stats?.length ? (
            <>
              <div className="space-40px" />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${project.stats.length}, minmax(0, 1fr))`,
                  gap: 24,
                  borderTop: '1px solid rgba(0,0,0,0.1)',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  padding: '28px 0',
                }}
              >
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 700,
                        fontSize: 32,
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.6)', marginTop: 6 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* Chapters */}
      <section className="section">
        <div className="container _840px">
          {CHAPTERS.map((c, idx) => (
            <article className="case-chapter" key={c.eyebrow}>
              <div className="case-chapter__eyebrow">
                {String(idx + 1).padStart(2, '0')} · {c.eyebrow}
              </div>
              <h2 className="case-chapter__title">{c.title}</h2>
              <p className="case-chapter__lead">{c.lead}</p>
              <div className="case-placeholder">{c.placeholder}</div>
              {c.features?.length ? (
                <div className="case-chapter__features">
                  {c.features.map((f) => (
                    <div className="case-chapter__feature" key={f.title}>
                      <div className="case-chapter__feature-title">{f.title}</div>
                      <div className="case-chapter__feature-body">{f.body}</div>
                    </div>
                  ))}
                </div>
              ) : null}
              {c.cta ? (
                <div>
                  <a href={c.cta.href} target="_blank" rel="noreferrer" className="case-chapter__cta">
                    {c.cta.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              ) : null}
              {c.cta2 ? (
                <div>
                  <a href={c.cta2.href} target="_blank" rel="noreferrer" className="case-chapter__cta">
                    {c.cta2.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Related */}
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
