🔧 Plumbing Services Website
A professional, multi-page business website built for a local plumbing company. Designed to convert visitors into customers through clear service presentation, social proof, and strong calls-to-action.
A clean, responsive plumbing services site with multi-page routing, testimonials, service area coverage, and a contact form — built to serve as a real-world client deliverable.

✨ Features

Multi-page routing — Dedicated pages for each service via Nuxt's file-based router
Service pages — Emergency Plumbing, Drain Cleaning, Leak Repairs, and Water Heater Installation
Testimonials section — Customer reviews to build trust and social proof
Service area coverage — Lists locations served across the region
Contact form — Lets visitors reach out directly from the site
Calls-to-action — "Call Now" and "Schedule a Service" prompts throughout
Fully responsive — Optimised for mobile, tablet, and desktop
Navigation with anchor links — Smooth scroll to About, Services, and Contact sections


🛠️ Tech Stack
TechnologyPurposeNuxt 3SSR framework & file-based routingVue 3UI component frameworkTypeScriptType-safe developmentTailwind CSSUtility-first stylingVercelDeployment & hosting

📁 Project Structure
plumbing-website/
├── app/
│   ├── pages/
│   │   ├── index.vue                          # Homepage
│   │   └── services/
│   │       ├── emergency-plumbing.vue
│   │       ├── drain-cleaning.vue
│   │       ├── leak-repairs.vue
│   │       └── water-heater-installation.vue
│   └── components/                            # Reusable UI components
├── public/                                    # Static assets
├── nuxt.config.ts                             # Nuxt configuration
├── tailwind.config.ts                         # Tailwind configuration
└── tsconfig.json                              # TypeScript configuration

🚀 Getting Started
Prerequisites

Node.js 18+
npm, pnpm, yarn, or bun

Installation

Clone the repository

bashgit clone https://github.com/onisodumeya/plumbing-website.git
cd plumbing-website

Install dependencies

bashnpm install

Start the development server

bashnpm run dev

Open your browser at http://localhost:3000

Build for Production
bashnpm run build
Preview Production Build
bashnpm run preview

📄 Pages & Routes
RouteDescription/Homepage — hero, services overview, testimonials, contact form/services/emergency-plumbingEmergency Plumbing service page/services/drain-cleaningDrain Cleaning service page/services/leak-repairsLeak Repairs service page/services/water-heater-installationWater Heater Installation service page

💡 Key Concepts

File-based routing — Nuxt automatically generates routes from the pages/ directory structure, keeping navigation logic clean and scalable
Component composition — Shared UI elements (navbar, footer, CTA blocks) are abstracted into reusable components
Type safety — TypeScript throughout ensures predictable, maintainable code
Utility-first styling — Tailwind CSS enables rapid, consistent UI development without custom CSS bloat


🎯 Purpose
This project was built as a real-world client-facing deliverable, demonstrating the ability to translate a service business's needs into a functional, professional web presence. It reflects practical frontend skills including multi-page routing, responsive layout, and conversion-focused UI design.

👨‍💻 Author
Onisodumeya Mazi

GitHub: @onisodumeya
LinkedIn: linkedin.com/in/onisodumeya
Portfolio: onisodumeya.vercel.app
