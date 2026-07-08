import { ServiceDetail } from "@/types/services";

export const saasPlatforms: ServiceDetail = {
  slug: "saas-platforms",

  card: {
    title: "SaaS Platforms",
    subtitle: "Ready to launch your software product?",
    description:
      "Build scalable SaaS applications with secure authentication, subscriptions, dashboards, and cloud infrastructure designed for long-term growth.",
    image: "/saas/Saas-6.jpg",
  },

  hero: {
    label: "SaaS Platforms",
    title: "Scalable SaaS Products Built for Growth",
    image: "/saas/Saas-6.jpg",
  },

  overview: {
    heading: "From Idea to Successful SaaS Product",
    image: "/saas/Saas-4.jpg",
    paragraphs: [
      "Launching a SaaS product requires more than great ideas—it demands secure architecture, exceptional user experience, and infrastructure that can support future growth.",
      "At Sateline Software Technologies, we design and develop custom SaaS platforms that help startups and businesses launch confidently, acquire customers, and scale efficiently.",
    ],
  },

  features: [
    {
      title: "Secure User Authentication",
      description:
        "Protect user accounts with modern authentication, role-based access, and secure authorization.",
      icon: "ShieldCheck",
    },
    {
      title: "Subscription & Billing",
      description:
        "Automate recurring subscriptions, invoicing, upgrades, and payment management.",
      icon: "CreditCard",
    },
    {
      title: "Customer Dashboard",
      description:
        "Provide users with an intuitive dashboard to manage their account, data, and services.",
      icon: "LayoutDashboard",
    },
    {
      title: "Admin Panel",
      description:
        "Monitor users, subscriptions, payments, analytics, and platform performance from one place.",
      icon: "Settings",
    },
    {
      title: "Multi-Tenant Architecture",
      description:
        "Serve multiple customers securely using a scalable multi-tenant SaaS architecture.",
      icon: "Building2",
    },
    {
      title: "Analytics & Reports",
      description:
        "Track user engagement, subscriptions, revenue, and business growth through interactive dashboards.",
      icon: "BarChart3",
    },
  ],

  technologies: [
    {
      name: "Next.js",
      category: "Frontend",
    },
    {
      name: "React",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
    },
    {
      name: "Node.js",
      category: "Backend",
    },
    {
      name: "Express.js",
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      category: "Database",
    },
    {
      name: "MongoDB",
      category: "Database",
    },
    {
      name: "Clerk",
      category: "Authentication",
    },
    {
      name: "Stripe",
      category: "Payments",
    },
    {
      name: "AWS",
      category: "Cloud",
    },
    {
      name: "Docker",
      category: "DevOps",
    },
  ],

  faqs: [
    {
      question: "Can you build a SaaS platform from scratch?",
      answer:
        "Yes. We handle the complete development process—from planning and UI/UX design to development, deployment, and long-term maintenance.",
    },
    {
      question: "Can my SaaS platform support recurring subscriptions?",
      answer:
        "Absolutely. We integrate secure payment gateways to manage subscriptions, recurring billing, invoices, and plan upgrades.",
    },
    {
      question: "Will my SaaS application scale as my business grows?",
      answer:
        "Yes. We build scalable architectures that support increasing users, data, and business requirements without compromising performance.",
    },
    {
      question: "Can different users have different permissions?",
      answer:
        "Yes. We implement role-based access control, allowing administrators, staff, and customers to access only the features relevant to them.",
    },
  ],

  cta: {
    title: "Launch Your SaaS Product with Confidence",
    description:
      "Whether you're building a startup MVP or a full-scale SaaS platform, we'll help you create secure, scalable software that grows with your business.",
    buttonText: "Start Your SaaS Project",
    buttonHref: "/contact",
  },
};
