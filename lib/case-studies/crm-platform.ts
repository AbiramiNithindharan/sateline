import { CaseStudy } from "@/types/CaseStudy";

export const crmPlatform: CaseStudy = {
  slug: "crm-platform",

  category: "Business Automation",

  industry: "Enterprise",

  hero: {
    label: "Case Study",

    title: "Custom CRM & Business Management Platform",

    image: "/case-studies/crm/crm-banner.jpg",
  },

  overview: {
    heading: "Connecting Customer Management with Business Operations",

    image: "/case-studies/crm/overview.jpg",

    paragraphs: [
      "The client required a centralized system to manage customer information, daily operations, employee activities, and business workflows from a single platform.",

      "Instead of using multiple disconnected applications, they wanted one secure dashboard capable of streamlining the entire business process.",

      "We developed a custom CRM platform that combines customer management, workflow automation, reporting, and administration into one scalable solution.",
    ],
  },

  challenge: {
    heading: "Client Challenge",

    paragraphs: [
      "Customer information was scattered across spreadsheets, emails, and manual records, making it difficult to track communication and business activities.",

      "Managers lacked real-time visibility into ongoing operations, pending tasks, and employee performance.",

      "Manual workflows resulted in duplicated work, missed follow-ups, and inefficient business processes.",

      "The client required a secure internal system that could scale with future business growth.",
    ],
  },

  solution: {
    heading: "Our Solution",

    paragraphs: [
      "We designed and developed a custom CRM platform tailored to the client's internal workflow rather than forcing them to adapt to off-the-shelf software.",

      "The platform centralizes customer records, business activities, notifications, reporting, and administrative tools within a secure dashboard.",

      "Role-based authentication ensures employees only access information relevant to their responsibilities.",

      "Workflow automation minimizes repetitive manual tasks while improving communication across departments.",
    ],
  },

  features: [
    {
      title: "Customer Management",
      description:
        "Store, organize, and manage customer information in one centralized system.",
      icon: "Users",
    },
    {
      title: "Lead & Inquiry Tracking",
      description:
        "Track customer inquiries from initial contact through successful conversion.",
      icon: "UserPlus",
    },
    {
      title: "Role-Based Access",
      description:
        "Provide different dashboard permissions for administrators, managers, and employees.",
      icon: "ShieldCheck",
    },
    {
      title: "Business Dashboard",
      description:
        "Monitor business activities, customer statistics, and operational performance in real time.",
      icon: "LayoutDashboard",
    },
    {
      title: "Workflow Automation",
      description:
        "Reduce repetitive manual work through automated task management and notifications.",
      icon: "Workflow",
    },
    {
      title: "Reports & Analytics",
      description:
        "Generate meaningful reports to support better business decisions.",
      icon: "BarChart3",
    },
    {
      title: "Activity Logs",
      description:
        "Track important business actions for transparency and accountability.",
      icon: "History",
    },
    {
      title: "Secure Authentication",
      description:
        "Protect sensitive business data with secure user authentication and authorization.",
      icon: "LockKeyhole",
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
      name: "Supabase",
      category: "Database",
    },
    {
      name: "Supabase Auth",
      category: "Authentication",
    },
    {
      name: "Vercel",
      category: "Deployment",
    },
  ],

  businessImpact: [
    {
      title: "Centralized Business Operations",
      description:
        "Unified customer management, workflows, and reporting into a single business platform.",
    },
    {
      title: "Improved Team Productivity",
      description:
        "Automation reduced manual processes and allowed employees to focus on higher-value tasks.",
    },
    {
      title: "Better Decision Making",
      description:
        "Real-time dashboards and analytics provided management with actionable business insights.",
    },
    {
      title: "Scalable Enterprise Solution",
      description:
        "The architecture supports future expansion as business operations continue to grow.",
    },
    {
      title: "Enhanced Data Security",
      description:
        "Role-based access and secure authentication protect sensitive customer and business information.",
    },
  ],

  screenshots: [
    {
      image: "/case-studies/crm/payment-1.jpg",
      alt: "CRM Dashboard",
    },
    {
      image: "/case-studies/crm/payment-1.jpg",
      alt: "Customer Management",
    },
    {
      image: "/case-studies/crm/payment-1.jpg",
      alt: "Lead Tracking",
    },
    {
      image: "/case-studies/crm/payment-1.jpg",
      alt: "Business Reports",
    },
    {
      image: "/case-studies/crm/payment-1.jpg",
      alt: "Administration Settings",
    },
  ],

  relatedProjects: [
    "booking-management-system",
    "news-management-system",
    "donation-platform",
  ],

  cta: {
    title: "Ready to Streamline Your Business Operations?",

    description:
      "We build custom CRM platforms that automate workflows, improve collaboration, and provide complete visibility into your business processes.",

    buttonText: "Build Your CRM",

    buttonHref: "/contact",
  },
};
