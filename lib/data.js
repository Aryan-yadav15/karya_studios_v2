// Karya ,static content used across the site.
// Karya is an upcoming digital agency based in Bhubaneswar, Odisha.
// We build websites, apps, and marketing experiences for ambitious brands.

const CDN = 'https://cdn.prod.website-files.com';

export const PROJECTS = [
  {
    slug: 'khaogully',
    featured: true,
    name: 'KhaoGully',
    tagline: 'A live food-delivery ecosystem',
    description:
      'A full-stack food-delivery platform serving 100+ orders daily in Bhubaneswar — a customer web + app, a driver app with realtime websocket tracking, and a restaurant order console, all powered by a deep admin panel.',
    stats: [
      { value: '100+', label: 'orders served daily' },
      { value: '1.5k+', label: 'app installs' },
      { value: '3', label: 'connected products' },
      { value: '200k+', label: 'lines of code' },
    ],
    modules: [
      {
        name: 'Customer Web',
        sub: 'khaoogully.com',
        href: 'https://khaoogully.com',
        icon: 'web',
      },
      {
        name: 'Customer App',
        sub: 'Android · 1.5k+ installs',
        href: 'https://play.google.com/store/apps/details?id=com.khaogully.app',
        icon: 'phone',
      },
      {
        name: 'Driver App',
        sub: 'Realtime tracking',
        href: 'https://play.google.com/store/apps/details?id=com.khaoogully.driverapp',
        icon: 'truck',
      },
      {
        name: 'Restaurant App',
        sub: 'Live order queue',
        href: 'https://play.google.com/store/apps/details?id=com.khaogully.restaurant',
        icon: 'store',
      },
    ],
    tags: ['Full-stack', 'Realtime', 'Mobile apps', 'Admin systems'],
    extraTags: 0,
    image: '/khaoogullymockup.png',
  },
  {
    slug: 'vishveshwar-oil',
    name: 'Vishveshwar Oil Landing Page',
    description:
      'A corporate website for Vishveshwar Oil & Lubricants Pvt Ltd, showcasing its petroleum products, manufacturing capabilities, global sourcing, and industry expertise, while highlighting its commitment to quality, sustainability, and reliable fuel solutions for diverse industries.',
    tags: ['Brand identity', 'Web development', 'Content' , 'Portfolio'],
    extraTags: 3,
    image: '/oil.png',
    // webstie : https://client-petrolium-web.vercel.app/
  },
  {
    slug: 'zebiops-technology',
    name: 'ZebiOps Technology',
    description:
      'This website showcases an AI-driven technology platform focused on enhancing digital lifestyles and smart living. It highlights innovative solutions like a personal AI assistant and a smart home ecosystem, designed to improve productivity, automation, and user convenience. Overall, the platform presents a forward-looking brand built around intelligent, connected experiences.',
    tags: ['Web development', 'UI/UX', 'API integrations'],
    extraTags: 3,
    image: '/ZebiOps.png',
    // website : https://ai-portfolio-client-8kkv.vercel.app/
  },
  {
    slug: 'stay-branded',
    name: 'Stay Branded',
    description:
      'A digital agency focused on helping businesses grow through a blend of creative design, modern technology, and AI-driven solutions. The website highlights services such as web development, UI/UX design, mobile app development, cloud solutions, AI integration, and digital marketing.',
    tags: ['Web development', 'UI/UX', 'Brand identity'],
    extraTags: 3,
    image: '/stayBranded.png',
    // website : https://stay-branded-web.vercel.app/
  },
  
  {
    slug: 'data-analyst-portfolio',
    name: 'Data Analyst Portfolio',
    description:
      'A personal portfolio website showcasing my data analytics projects, technical skills, and professional experience, highlighting how I use data-driven insights to solve real-world business problems.',
    tags: ['Portfolio', 'UI/UX', 'Web development'],
    extraTags: 3,
    image: '/portfolio.png',
    // webstie : https://client-portfolio-3.vercel.app/
  },
  
];

export const TEAM = [
  {
    name: 'Aryan Yadav',
    role: 'Co founder & CTO',
    image: '/aryan.jpeg',
    linkedin: 'https://www.linkedin.com/in/aryanyadav-dev',
    email: 'aryanyadav.devop@gmail.com',
  },
  {
    name: 'Priya Sahoo',
    role: 'Design Lead',
    image: '/harshit.jpeg',
    linkedin: 'https://www.linkedin.com/in/harshit806/',
    email: 'harshit.m@outlook.in',
  },
  {
    name: 'Rohit Panda',
    role: 'Tech Lead',
    image: '/archit.jpeg',
    linkedin: 'https://www.linkedin.com/in/archit-shankar-815756262/',
    email: 'ashankar637@gmail.com',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      '“Karya rebuilt our site and our Instagram funnel. Bookings are up and we finally sound like ourselves online.”',
    name: 'Prasant S B',
    role: 'Founder & CEO ZebiOps',
    image: '/Testimonials/zebi.png',
    color: 'green',
  },
  {
    quote:
      '“They shipped our MVP in six weeks. Clean code, clean design, and no drama ,exactly what an early-stage team needs.”',
    name: 'Stay Branded',
    role: 'Founder',
    image: '/Testimonials/brand.png',
    color: 'blue',
  },
  {
    quote:
      '“Our new website actually reflects the brand now. Page speeds are great and leads from Google have doubled.”',
    name: 'Komal Suryan',
    role: 'Marketing Head, Neela Living',
    image: '/Testimonials/komal.png',
    color: 'orange',
  },
  {
    quote:
      '“Felt like an in-house team, not an agency. Karya gets startups ,they think about the business, not just the pixels.”',
    name: 'Vishweshwar Oil',
    role: 'CEO ',
    image: '/Testimonials/oil.png',
    color: 'dark-pink',
  },
];

export const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: "It depends on scope, but most website projects take 4–8 weeks, a basic mobile app MVP 8–12 weeks, and a brand identity sprint about 3–4 weeks. You'll get a clear timeline in our first call.",
  },
  {
    q: "What's your design and build process like?",
    a: "We start with a discovery call to understand your goals and audience, then move through strategy, design, build, and launch. You're in the loop at every step with weekly check-ins over Google Meet or WhatsApp.",
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Absolutely ,most of our clients are early-stage founders and D2C brands. We tailor scope and pricing to fit real startup budgets without cutting corners on craft.',
  },
  {
    q: 'Do you offer monthly marketing retainers?',
    a: 'Yes. After launch, a lot of our clients stay on for monthly retainers covering SEO, performance ads, content, and ongoing website updates. We keep it flexible ,no long lock-ins.',
  },
  {
    q: 'Do you provide support after the site or app goes live?',
    a: 'Yes. We offer maintenance plans for hosting, bug fixes, and feature updates, so you never have to scramble when something breaks or your business grows.',
  },
  {
    q: 'Where is Karya based? Do you work with clients outside Bhubaneswar?',
    a: "We're based in Bhubaneswar, Odisha, and work with founders across India and a few clients abroad. Most of the work happens remotely ,we only meet in person when it's genuinely useful.",
  },
];

export const BLOG_POSTS = [
  {
    slug: '3',
    title: 'How we build websites that actually bring in leads',
    category: 'Web',
    date: 'April 2, 2026',
    image: `${CDN}/68c012d68a2d798fcf337251/68c074265718f9ffb1fbc9fc_Blog%20Image%203.avif`,
    excerpt:
      'A peek inside our web process ,from positioning and wireframes through launch ,and the small decisions that quietly compound into results.',
  },
  {
    slug: '4',
    title: 'What we tell every founder before building an app',
    category: 'App',
    date: 'March 18, 2026',
    image: `${CDN}/68c012d68a2d798fcf337251/68c0740c160507e3f7d11656_Blog%20Image%204.avif`,
    excerpt:
      "The honest conversation we have with every first-time founder about MVPs, timelines, and the one feature you probably don't need in v1.",
  },
  {
    slug: '5',
    title: 'Marketing for Indian D2C brands that actually works',
    category: 'Marketing',
    date: 'February 27, 2026',
    image: `${CDN}/68c012d68a2d798fcf337251/68c073ff1111732f196e96b5_Blog%20Image%205.avif`,
    excerpt:
      'What we see working right now for homegrown D2C brands ,from Meta ads to organic content ,and the traps most new brands fall into.',
  },
];

export const SERVICES = [
  { name: 'Web Development', blur: 12 },
  { name: 'App Development', blur: 6 },
  { name: 'UI/UX Design', blur: 3 },
  { name: 'Brand Identity', blur: 0 },
  { name: 'Performance Marketing', blur: 3 },
  { name: 'SEO & Content', blur: 6 },
  { name: 'Maintenance', blur: 12 },
];

export const PRICING = [
  {
    name: 'Starter Website',
    description: 'A fast, modern website to get your brand online and start bringing in leads.',
    price: '₹49,999',
    period: ' one-time',
    variant: 'dark',
    bandColor: 'green',
    buttonVariant: 'white',
    features: [
      'Up to 5 pages, fully responsive',
      'Custom design ,no templates',
      'Basic on-page SEO setup',
      'Contact form + WhatsApp integration',
      'Google Analytics & Search Console',
      'Delivery in 3–4 weeks',
    ],
  },
  {
    name: 'Growth Partner',
    description: 'A full website + ongoing marketing retainer for brands serious about growth.',
    price: '₹39,999',
    period: '/month',
    variant: 'light',
    bandColor: 'blue',
    buttonVariant: 'black',
    features: [
      'Custom website design & development',
      'Monthly SEO & content updates',
      'Meta & Google Ads management',
      'Landing pages for campaigns',
      'Monthly reporting & strategy call',
      'Priority support & fast turnarounds',
    ],
  },
];

export const CLIENT_LOGOS = [
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a91296bcb32b8b8ac85_Logo%20Icon%201.svg`,
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a913dcc23923f148c57_Logo%20Icon%202.svg`,
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a91fc334376ef712b47_Logo%20Icon%203.svg`,
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a91b354943c23768836_Logo%20Icon%204.svg`,
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a91d95f81619ac5fc1b_Logo%20Icon%205.svg`,
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a91f3d104c70034c3d6_Logo%20Icon%206.svg`,
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a915ba5fbacdf4fa7a1_Logo%20Icon%207.svg`,
  `${CDN}/68b8742bd9cfcab78f7642c0/68bc2a91f3d104c70034c3ed_Logo%20Icon%208.svg`,
];

export const AWARDS = [
  { provider: 'Clutch', label: 'Recognition', description: 'Top Emerging Web Agency ,East India, 2026' },
  { provider: 'GoodFirms', label: 'Listed', description: 'Trusted Digital Agency ,Bhubaneswar' },
  { provider: 'DesignRush', label: 'Featured', description: 'Rising Agencies to Watch ,2026' },
  { provider: 'Awwwards', label: 'Submission', description: 'Site of the Day ,Nominee' },
  { provider: 'Startup Odisha', label: 'Recognised', description: 'Registered Startup ,Govt. of Odisha' },
];

export const CORE_VALUES = [
  {
    title: 'Built for founders',
    body:
      'We work the way startups do ,fast, flexible, and close to the business. No 40-page decks, no account managers in the way.',
    detail:
      "Most of our clients are first-time founders or small teams wearing ten hats. We know the drill: budgets are tight, timelines are tighter, and every decision has to pay back. So we skip the theatre. You talk directly to the people building your site or app, we ship in small pieces you can actually review, and we tell you honestly when something isn't worth doing yet.",
    icon: `https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bf20f051e20c88f3db52a6_Slider%20Icon.svg`,
    num: '01',
    color: '#1a7a5e',
  },
  {
    title: 'Design for humans',
    body:
      'We design for real people on real phones ,not moodboards. Every detail is there to help someone understand, trust, and take the next step.',
    detail:
      "Most of your users are on a budget Android phone with patchy 4G. That changes everything. We test on slow devices, keep interfaces obvious, and refuse to ship anything that would make your mom abandon the checkout. Pretty is good. Pretty that converts is the point.",
    icon: `https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bf20f07a455f4733927b2b_Slider%20Icon%202.svg`,
    num: '02',
    color: '#3d4fcf',
  },
  {
    title: "Don't be boring",
    body:
      'Indian brands deserve better than stock photos and safe beige layouts. We push for work that sounds like you and looks like nobody else.',
    detail:
      "There's a template-shaped hole in the Indian agency market and we are not filling it. If your brand has a point of view, we will find it and amplify it. If it doesn't yet, we'll help you build one. Either way, nothing we make for you should feel like it could belong to any other company with a light find-and-replace.",
    icon: `https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bf20f0c4dafd11fd90160a_Slider%20Icon%203.svg`,
    num: '03',
    color: '#e05a2b',
  },
  {
    title: 'Progress over process',
    body:
      "We have a process, but we'd rather ship a working v1 on Monday than a perfect deck on Friday. Momentum is a feature.",
    detail:
      "We track projects properly, run weekly check-ins, and keep everything in one Notion board you can actually see. But when a brief changes ,and it always does ,we adapt instead of arguing. Our favourite metric isn't 'followed the plan', it's 'the thing works and the client is happy'. Usually, both.",
    icon: `https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/68bf20f0c77dec91d251600a_Slider%20Icon%204.svg`,
    num: '04',
    color: '#8e2252',
  },
];

export const COUNTERS = [
  { value: 24, suffix: '+', label: 'Projects shipped across web, app & marketing', bg: true },
  { value: 18, suffix: '+', label: 'Happy founders and brand teams', bg: false },
  { value: 4, suffix: '', label: 'Cities we currently serve across India', bg: true },
  { value: 100, suffix: '%', label: 'Projects delivered on or before time', bg: false },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Work' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];
// Karya ,static content used across the site.
// Karya is an upcoming digital agency based in Bhubaneswar, Odisha.
// We build websites, apps, and marketing experiences for ambitious brands.
