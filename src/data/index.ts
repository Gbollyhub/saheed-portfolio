export type Job = {
  year: string;
  period: string;
  company: string;
  role: string;
  location: string;
  bullets: string[];
  tags: string[];
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

export const TECH = [
  "React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "GraphQL", "AWS", "Docker", "Flutter", "React Native",
  "Python", "Vue.js", "Nuxt.js", "Tailwind CSS", "Prisma",
  "Jest", "Cypress", "GitHub Actions", "CI/CD", "Storybook",
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
      "Independently rewrote two core platform services (a recruitment platform and a psychometrics engine), replacing legacy monolithic code with a modern Next.js and Node.js architecture serving 200+ active users.",
      "Designed and built the GraphQL API layer and backend for both services, making architectural decisions on schema design, data modelling, and service boundaries.",
      "Diagnosed and fixed synchronisation bottlenecks on an existing service, reducing data processing time from hours to seconds.",
      "Planned and executed a live data migration with no data loss and minimal disruption to existing users.",
      "Introduced Dockerized deployment pipelines on AWS, reducing release friction and cutting deployment-related downtime by roughly 25%.",
      "Built and maintained a shared React and TypeScript component library used across the frontend team.",
    ],
    tags: ["Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL", "AWS", "Docker"],
  },
  {
    year: "2020",
    period: "2020 · 2022",
    company: "Zenith Bank PLC",
    role: "Full Stack Developer",
    location: "Lagos, Nigeria",
    bullets: [
      "Built the bank's corporate card management platform from the ground up using React.js and Python, used by 1,000+ corporate clients to request, manage, and track custom credit and debit cards.",
      "Rebuilt the frontend architecture of the payment gateway platform using Nuxt.js, improving load times and increasing user engagement by 30%.",
      "Developed features for the bank's Flutter-based mobile application, contributing to a 15% increase in monthly active users.",
      "Delivered end-to-end across frontend and backend in the card payments domain, from API design to UI implementation.",
    ],
    tags: ["React.js", "Python", "Nuxt.js", "Flutter", "PostgreSQL"],
  },
  {
    year: "2019",
    period: "2019 · 2020",
    company: "United Bank for Africa",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    bullets: [
      "Led the frontend rewrite of the bank's omnichannel platform, migrating from a legacy stack to Nuxt.js and reducing page load times by 40% across 1,000+ daily active users.",
      "Designed the UI/UX for and built the mobile companion app using React Native, taking it from wireframes to production.",
      "Integrated Open Banking APIs into the e-commerce layer of the platform, contributing to a 15% uplift in digital transaction volume.",
      "Streamlined team delivery using Trello and Bitbucket workflows, cutting integration issues and shortening sprint cycle times by 20%.",
    ],
    tags: ["Nuxt.js", "React Native", "JavaScript", "REST APIs", "Bitbucket"],
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

export const SKILL_ROWS: SkillRowData[] = [
  {
    row: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    label: "Frontend",
    dir: 1,
  },
  {
    row: ["Node.js", "GraphQL", "REST APIs", "Python", "Java", "Prisma", "PostgreSQL", "MongoDB", "SQL"],
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
