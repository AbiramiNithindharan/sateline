import { ServiceDetail } from "@/types/services";
export const customWeb: ServiceDetail = {
  slug: "custom-web-application",

  card: {
    title: "Custom Web Applications",
    subtitle: "Can't find software that fits your workflow?",
    description:
      "We build custom applications tailored to your processes, helping your business operate more efficiently and scale confidently.",
    image: "/web-app/web-app-5.jpg",
  },

  hero: {
    label: "Custom Web Applications",
    title: "Tailor-Made Software Built Around Your Business",
    image: "/web-app/web-app-5.jpg",
  },

  overview: {
    heading: "Software That Fits the Way You Work",
    image: "/web-app/web-app-4.jpg",
    paragraphs: [
      "Every business has unique workflows that off-the-shelf software can't fully support.",
      "We design and develop custom web applications that automate processes, improve productivity, and grow with your business.",
    ],
  },

  features: [
    {
      title: "Custom Dashboards",
      description:
        "Manage your business with a centralized dashboard tailored to your workflow.",
      icon: "LayoutDashboard",
    },
    {
      title: "Role-Based Access",
      description:
        "Secure access control for administrators, staff, and customers.",
      icon: "ShieldCheck",
    },
    {
      title: "Workflow Automation",
      description:
        "Reduce manual work with automated processes and notifications.",
      icon: "Workflow",
    },
    {
      title: "Scalable Architecture",
      description:
        "Applications designed to support your business as it grows.",
      icon: "Layers3",
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
      name: "MongoDB",
      category: "Database",
    },
    {
      name: "PostgreSQL",
      category: "Database",
    },
  ],
  faqs: [
    {
      question: "Can you build software specific to my business?",
      answer:
        "Yes. Every application is designed around your business processes rather than forcing you to adapt to generic software.",
    },
    {
      question: "Will the application be scalable?",
      answer:
        "Absolutely. We build modern architectures that can grow with your users and business requirements.",
    },
    {
      question: "Can existing systems be integrated?",
      answer:
        "Yes. We can integrate payment gateways, CRMs, ERPs, third-party APIs, and other business tools.",
    },
  ],

  cta: {
    title: "Let's Build Your Custom Software",
    description:
      "Tell us about your business and we'll design a solution tailored to your goals.",
    buttonText: "Start Your Project",
    buttonHref: "/contact",
  },
};
