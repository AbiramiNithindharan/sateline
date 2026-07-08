import { ServiceDetail } from "@/types/services";

export const crmSolutions: ServiceDetail = {
  slug: "crm-solutions",

  card: {
    title: "CRM Solutions",
    subtitle: "Struggling to manage customer relationships?",
    description:
      "Centralize customer information, manage leads, automate follow-ups, and strengthen customer relationships with a CRM tailored to your business.",
    image: "/CRM-Software/CRM-Software-1.jpg",
  },

  hero: {
    label: "CRM Solutions",
    title: "Build Stronger Customer Relationships with a Custom CRM",
    image: "/CRM-Software/CRM-Software-2.jpg",
  },

  overview: {
    heading: "One Platform for Your Entire Customer Journey",
    image: "/CRM-Software/CRM-Software-3.jpg",
    paragraphs: [
      "Managing customer information across spreadsheets, emails, and multiple applications often leads to missed opportunities and inefficient workflows.",
      "We build custom CRM solutions that centralize customer data, automate routine tasks, and give your team the tools they need to build lasting customer relationships.",
    ],
  },

  features: [
    {
      title: "Customer Management",
      description:
        "Store and manage complete customer profiles, communication history, and business interactions.",
      icon: "Users",
    },
    {
      title: "Lead Management",
      description:
        "Capture, organize, qualify, and track leads throughout the sales pipeline.",
      icon: "UserPlus",
    },
    {
      title: "Sales Pipeline",
      description:
        "Visualize every stage of your sales process and monitor deal progress with ease.",
      icon: "GitBranch",
    },
    {
      title: "Task & Follow-Up Automation",
      description:
        "Automate reminders, follow-ups, and recurring tasks to improve productivity.",
      icon: "Workflow",
    },
    {
      title: "Reports & Analytics",
      description:
        "Track sales performance, customer engagement, and business growth with interactive reports.",
      icon: "BarChart3",
    },
    {
      title: "Role-Based Access",
      description:
        "Securely manage permissions so every team member accesses only the information they need.",
      icon: "ShieldCheck",
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
    {
      name: "JWT",
      category: "Authentication",
    },
    {
      name: "Clerk",
      category: "Authentication",
    },
  ],

  faqs: [
    {
      question: "Can the CRM be customized for my business?",
      answer:
        "Yes. Every CRM we build is tailored to your business processes, sales workflow, and operational requirements rather than using a one-size-fits-all solution.",
    },
    {
      question: "Can multiple employees use the CRM simultaneously?",
      answer:
        "Absolutely. Your team can securely access the CRM based on their roles and permissions from anywhere.",
    },
    {
      question: "Can the CRM automate follow-ups and reminders?",
      answer:
        "Yes. We can automate follow-up emails, task reminders, notifications, and other repetitive workflows to improve productivity.",
    },
    {
      question: "Can the CRM integrate with existing business systems?",
      answer:
        "Yes. We can integrate your CRM with websites, payment systems, email platforms, accounting software, and other third-party services.",
    },
  ],

  cta: {
    title: "Grow Your Business with a Smarter CRM",
    description:
      "Let's build a CRM solution that helps your team manage customers efficiently, improve collaboration, and increase sales.",
    buttonText: "Build My CRM",
    buttonHref: "/contact",
  },
};
