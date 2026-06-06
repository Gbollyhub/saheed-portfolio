export type Job = {
  year: string;
  period: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
  tags: string[];
};

export type DesignProject = {
  num: string;
  slug: string;
  name: string;
  type: string;
  year: string;
  tagline: string;
  about: string[];
  tools: string[];
  figmaUrl: string; // replace with real Figma link when ready
  accent: string;
  accentText: string;
};

export type Project = {
  num: string;
  name: string;
  line: string;
  desc: string;
  stack: string[];
  status: string;
  url: string;
  slug: string;
  accent: string;
  accentText: string;
};

export type Stat = {
  number: string;
  label: string;
};

export type SkillRowData = {
  row: string[];
  label: string;
  dir: number;
};

export const NAV_LINKS = ["Work", "Experience", "About", "Contact"] as const;

/** Replace each id with the Google Drive file ID from the shareable link for that CV. */
export const RESUME_URLS = {
  frontend:  "https://drive.google.com/uc?export=download&id=1L8ULe71qEXQc8F0uWzL-x9NPlK9_QobT",
  fullstack: "https://drive.google.com/uc?export=download&id=1Ww5NL-aanLAbJW1wWNiWTCo07RYrsqdM",
};

export const TECH = [
  "React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "GraphQL", "AWS", "Docker", "Flutter", "React Native",
  "Python", "Vue.js", "Nuxt.js", "Tailwind CSS", "Prisma",
  "Redis", "Jest", "Cypress", "GitHub Actions", "CI/CD", "Storybook",
];

export const STATS: Stat[] = [
  { number: "6+", label: "Years experience" },
  { number: "3", label: "Companies worked with" },
  { number: "1k+", label: "Corporate clients served" },
  { number: "10+", label: "Products shipped" },
];

export const JOBS: Job[] = [
  {
    year: "2022",
    period: "2022 · Present",
    company: "Lumina Learning",
    role: "Full Stack Developer",
    location: "London, UK",
    bullets: [
      "Independently rewrote two core platform services, a recruitment platform and a psychometrics engine, replacing legacy monolithic code with a modern Next.js and Node.js architecture serving 200+ active users.",
      "Designed and implemented RESTful and GraphQL APIs from scratch, defining endpoint structure, error handling patterns, and versioning strategies, while making architectural decisions on schema design, data modelling with Prisma, and service boundaries.",
      "Diagnosed and fixed synchronisation bottlenecks on an existing service, reducing data processing time from hours to seconds; implemented caching with Redis and Apollo Client to reduce server load and improve response times.",
      "Built and optimised PostgreSQL database schemas, including indexing strategies, query performance tuning, and data migration scripts; planned and executed a live data migration with no data loss.",
      "Audited and improved accessibility across both platforms, implementing semantic HTML, ARIA attributes, keyboard navigation, and focus management to meet WCAG 2.1 standards.",
      "Built interactive data visualisation components using charting libraries to surface psychometric assessment results in clear, user-friendly interfaces.",
      "Introduced Dockerized deployment pipelines on AWS, reducing release friction and cutting deployment-related downtime by roughly 25%.",
      "Built and maintained a shared React and TypeScript component library; worked closely with designers to translate Figma mock-ups into pixel-perfect, production-ready UI across all product surfaces.",
      "Shaped feature priorities and technical direction alongside a 7-person cross-functional squad, contributing to code reviews, sprint planning, retrospectives, and backlog refinement using Scrum.",
    ],
    tags: ["Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL", "Redis", "AWS", "Docker", "Prisma"],
  },
  {
    year: "2020",
    period: "2020 · 2022",
    company: "Zenith Bank PLC",
    role: "Full Stack Developer",
    location: "Lagos, Nigeria",
    bullets: [
      "Built the bank's corporate card management platform from the ground up using React.js and Python, a customer-facing platform for businesses to request, manage, and track custom credit and debit cards, used by 1,000+ corporate clients.",
      "Rebuilt the frontend architecture of the payment gateway platform using Nuxt.js, implementing lazy loading and bundle optimisation techniques that improved load times and increased user engagement by 30%.",
      "Wrote comprehensive backend test suites covering unit, integration, and API contract tests using Jest and Postman to ensure reliability across deployments.",
      "Implemented error tracking and production monitoring using Sentry, improving incident response time and debugging efficiency.",
      "Implemented responsive design patterns across the product suite, ensuring a consistent and polished experience across desktop, tablet, and mobile breakpoints.",
      "Delivered end-to-end across frontend and backend in the card payments domain, from API design through to UI implementation.",
    ],
    tags: ["React.js", "Python", "Nuxt.js", "PostgreSQL", "Jest", "Postman", "Sentry", "REST APIs"],
  },
  {
    year: "2019",
    period: "2019 · 2020",
    company: "United Bank for Africa",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    bullets: [
      "Led the frontend rewrite of the bank's customer-facing omnichannel platform, migrating from a legacy stack to Nuxt.js and reducing page load times by 40% across 1,000+ daily active users.",
      "Designed the UI/UX for and built the mobile companion app using React Native, taking it from wireframes through to production.",
      "Integrated Open Banking APIs into the e-commerce layer of the platform, contributing to a 15% uplift in digital transaction volume.",
      "Optimised Core Web Vitals (LCP, CLS) through lazy loading, image optimisation, and code splitting, improving page load times and SEO performance.",
      "Implemented responsive design patterns across the product suite, ensuring a consistent and polished experience across desktop, tablet, and mobile breakpoints.",
      "Collaborated with product and engineering stakeholders to improve frontend architecture, usability, and release quality.",
    ],
    tags: ["Nuxt.js", "React Native", "JavaScript", "REST APIs", "Open Banking"],
  },
];

export const PROJECTS: Project[] = [
  {
    num: "01",
    name: "CrossPay",
    line: "Cross-border payments platform · UK to Africa",
    desc: "Removes traditional intermediary banking channels for UK–Africa transfers. Built a settlement architecture using locally held accounts (Stripe, Flutterwave) in both countries, enabling near-instant transfers while handling exchange rate calculation and reconciliation on the backend.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "REST APIs", "Stripe", "Flutterwave"],
    status: "Live",
    url: "https://mycrosspay.vercel.app/",
    slug: "crosspay",
    accent: "#1a2a1a",
    accentText: "#4ade80",
  },
  {
    num: "02",
    name: "AuthPlug",
    line: "Plug-and-play authentication service",
    desc: "A drop-in auth service developers can integrate into any application via REST API or frontend, with two-factor authentication out of the box. Designed to be framework-agnostic with minimal setup, handling secure token management, session handling, and 2FA workflows.",
    stack: ["Next.js", "Node.js", "REST APIs", "2FA", "JWT"],
    status: "Live",
    url: "https://authplug.vercel.app/",
    slug: "authplug",
    accent: "#1a1a2a",
    accentText: "#818cf8",
  },
  {
    num: "03",
    name: "BlockUI",
    line: "Open-source React component library",
    desc: "Production-ready, accessible, and themeable UI components installable via npm. Documented with Storybook for interactive component browsing, prop exploration, and usage examples, making adoption straightforward for other developers.",
    stack: ["React", "TypeScript", "Storybook", "npm"],
    status: "Open Source",
    url: "https://blockui-storybook.vercel.app/",
    slug: "blockui",
    accent: "#2a1a1a",
    accentText: "#fb923c",
  },
];

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    num: "01",
    slug: "zenith-banking",
    name: "Zenith Bank Dashboard",
    type: "Web Dashboard · Banking",
    year: "2022",
    tagline: "A complete visual overhaul of Zenith Bank's online banking platform, reimagined with Apple's Liquid Glass design language",
    about: [
      "The brief from stakeholders was clear: the existing online banking interface was outdated and generic, the kind of flat, bordered design that every Nigerian bank had at the time. They wanted something modern, distinctive, and premium-feeling, the kind of interface that signals trust and quality the moment a customer logs in.",
      "I proposed applying Apple's Liquid Glass visual language, translucent layered panels, soft blur effects, depth created through frosted surfaces, and light that feels like it passes through the interface rather than sitting on top of it. For a banking product, this was a deliberate choice: glass conveys clarity, precision, and transparency, values that matter in financial services and that the existing design completely failed to communicate.",
      "The full dashboard covered account overview, real-time transaction history, domestic and international transfer flows, and loan management. The translucent panel system meant that content hierarchy could be communicated through depth and blur intensity rather than hard borders, a far more sophisticated approach than the flat, table-heavy designs common across the sector. Every state, from loading to empty to error, was designed within the same glass vocabulary to keep the experience consistent throughout.",
    ],
    tools: ["Figma", "Auto Layout", "Component Library", "Glassmorphism", "Prototyping"],
    figmaUrl: "https://www.figma.com/proto/XWk6BniaMCc0BmIvlaxtP4/Zenith-Internet-Banking?node-id=1431-1&p=f&t=nNVYt7NUGQwe5EkH-0&scaling=min-zoom&content-scaling=fixed&page-id=1431%3A0&starting-point-node-id=1801%3A14825",
    accent: "#080e1a",
    accentText: "#93c5fd",
  },
  {
    num: "02",
    slug: "coop-admin",
    name: "Cooperative Admin",
    type: "Admin Dashboard · Finance",
    year: "2023",
    tagline: "A purpose-built admin interface for cooperative societies, contributions, loans, withdrawals, and repayments in one place",
    about: [
      "Cooperative societies across Nigeria are largely managed on spreadsheets or through fragile legacy tools that weren't designed for the job. The brief was to design a proper administrative interface, one that could handle the full lifecycle of a member's financial relationship with the cooperative, from their first contribution to loan repayment and eventual withdrawal.",
      "The core workflows driving the design were: tracking member contributions (both recurring and lump-sum), processing loan applications and managing the approval queue, handling withdrawal requests, and monitoring repayment schedules against outstanding loan balances. Each of these domains has its own data model and user intent, so the design needed clear separation between them without creating a navigation maze that overwhelmed a single cooperative officer managing everything.",
      "I designed around a permission-layered admin view where the primary role, the cooperative officer, lands on a health dashboard showing pending approvals, overdue repayments, total pooled funds, and recent member activity at a glance. Every approval action required a confirmation state and an audit note, building a paper trail into the design rather than treating it as an afterthought. The result was an interface that gave small financial institutions the kind of operational clarity that previously only large banks could afford.",
    ],
    tools: ["Figma", "FigJam", "Design Systems", "User Flows", "Wireframing"],
    figmaUrl: "https://www.figma.com/proto/AoTignGbjhqs9yAk2kdaiV/BUCICS?node-id=790-584&p=f&t=2jfruQ3O0OVT5bz9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A227",
    accent: "#081a0f",
    accentText: "#4ade80",
  },
  {
    num: "03",
    slug: "paysure-core",
    name: "Paysure Core",
    type: "Admin Dashboard · Fintech Infrastructure",
    year: "2023",
    tagline: "The operational nerve centre for Paysure's fintech infrastructure, APIs, products, and service providers managed from one interface",
    about: [
      "Paysure Core is a fintech infrastructure layer, the kind of product that sits underneath consumer and business applications and handles the routing, processing, and orchestration that makes financial products work. The dashboard needed to give administrators full control over everything: the APIs exposed to partners, the service providers (payment processors, telcos, data aggregators) integrated into the stack, and the products built on top of that infrastructure.",
      "The design challenge was scale and operational risk. A single admin view spans multiple business domains simultaneously, and any mistake in this interface, a misconfigured API endpoint, a disabled service provider, a mispriced product, can cascade into failures for every downstream user and client. Every design decision had to balance information density against cognitive clarity, making the interface powerful without being overwhelming.",
      "I designed around three primary navigation pillars: Products, Providers, and APIs. The homepage surfaced system health at a glance, uptime indicators, request volumes, error rates, and provider status, so administrators could assess the state of the entire platform in seconds. Configuration flows were deliberately step-by-step with explicit confirmation gates, diff previews before applying changes, and a full audit log accessible from every entity. The design system used a dark, high-density visual language consistent with infrastructure tooling, prioritising information over decoration.",
    ],
    tools: ["Figma", "Component Library", "Information Architecture", "Prototyping", "Design Systems"],
    figmaUrl: "https://www.figma.com/proto/M5JDqL1WkYPHE0Q3sCLZxA/Paysure-Digital?node-id=28-92&p=f&t=W8B1azIwJNNXv9Wj-0&scaling=min-zoom&content-scaling=fixed&page-id=2%3A0&starting-point-node-id=7%3A1",
    accent: "#0e0b1e",
    accentText: "#818cf8",
  },
  {
    num: "04",
    slug: "coolpay-kids",
    name: "CoolPay Kids",
    type: "Mobile App · Fintech · EdTech",
    year: "2024",
    tagline: "A mobile app that teaches children how to earn, save, and manage money through tasks set by their parents",
    about: [
      "Most children grow up with no real experience of money until they're expected to manage it independently. CoolPay Kids was designed to bridge that gap, a GoHenry-style product built for the Nigerian and broader African market, where financial literacy is rarely taught systematically at home or in schools. The proposition is simple: parents set tasks with monetary rewards, children complete them, earn their allowance, and learn to manage what they've earned.",
      "The app has two entirely distinct interfaces sharing the same product. The parent view is structured and controlled, task creation, reward amounts, spending approvals, savings goals, and a full view of the child's account activity. The child view is built to be opened willingly, with playful illustrations, animated celebrations for task completion, a balance display that feels more like a game score than a bank statement, and a savings jar that visually fills as goals get closer. Designing both within a single coherent product without either feeling like a compromise was the central design challenge.",
      "The child interface required the most iteration. It needed to feel like an app kids actually want to open, not a financial product dressed up with cartoon characters. I used a bold, high-contrast colour palette anchored in warm amber and coral tones, oversized typography for all monetary amounts, and micro-interactions that reward completion with satisfying animations. Every screen was tested against a simple question: would a ten-year-old understand this without help? The adult logic, interest, budgeting categories, spending limits, is present in the parent layer only, surfacing to children only as the simple fact of what they've earned and what they're saving for.",
    ],
    tools: ["Figma", "Prototyping", "Motion Design", "User Testing", "Illustration"],
    figmaUrl: "https://www.figma.com/proto/7e7rEAlI3SdaWutNENBLqU/CoolPayKids?node-id=268-2048&p=f&t=8gOJz4REWitWuiw7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=268%3A2048",
    accent: "#1a1200",
    accentText: "#fbbf24",
  },
];

export const SKILL_ROWS: SkillRowData[] = [
  {
    row: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    label: "Frontend",
    dir: 1,
  },
  {
    row: ["Node.js", "GraphQL", "REST APIs", "Python", "Prisma", "PostgreSQL", "Redis", "MongoDB", "SQL"],
    label: "Backend",
    dir: -1,
  },
  {
    row: ["Docker", "AWS EC2", "AWS S3", "AWS Lambda", "Azure", "GitHub Actions", "CI/CD", "Git", "Bitbucket", "GitLab"],
    label: "DevOps & Cloud",
    dir: 1,
  },
  {
    row: ["Flutter", "React Native", "Jest", "Mocha", "Cypress", "Postman", "Storybook", "Jira", "Trello"],
    label: "Mobile & Tooling",
    dir: -1,
  },
];
