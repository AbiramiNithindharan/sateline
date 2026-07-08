import { ServiceDetail } from "@/types/services";

export const businessDashboards: ServiceDetail = {
  slug: "business-dashboards",

  card: {
    title: "Business Dashboards",
    subtitle: "Struggling to track business performance?",
    description:
      "Monitor your business with real-time dashboards that provide actionable insights, reports, and complete visibility into your operations.",
    image: "/dashboard/dashboard-4.jpg",
  },

  hero: {
    label: "Business Dashboards",
    title: "Real-Time Business Dashboards for Smarter Decisions",
    image: "/dashboard/dashboard-4.jpg",
  },

  overview: {
    heading: "Your Business Data, Simplified",
    image: "/dashboard/dashboard-2.jpg",
    paragraphs: [
      "Growing businesses generate large amounts of data, but without the right tools it's difficult to understand what that data means.",
      "We build interactive dashboards that bring all your important business information into one place, helping you track KPIs, monitor operations, and make faster business decisions.",
    ],
  },

  features: [
    {
      title: "Interactive Dashboards",
      description:
        "Visualize business performance with charts, graphs, and customizable widgets.",
      icon: "LayoutDashboard",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Monitor live business metrics and operational data as it happens.",
      icon: "Activity",
    },
    {
      title: "Custom Reports",
      description: "Generate detailed reports tailored to your business needs.",
      icon: "FileBarChart",
    },
    {
      title: "Role-Based Access",
      description:
        "Provide secure dashboard access based on user roles and responsibilities.",
      icon: "ShieldCheck",
    },
    {
      title: "Data Integration",
      description:
        "Connect multiple business systems into one unified dashboard.",
      icon: "Database",
    },
    {
      title: "Performance Monitoring",
      description:
        "Track KPIs, sales, customer activity, and operational performance from one platform.",
      icon: "TrendingUp",
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
      name: "Chart.js",
      category: "Frontend",
    },
    {
      name: "Recharts",
      category: "Frontend",
    },
  ],

  faqs: [
    {
      question: "Can dashboards display live business data?",
      answer:
        "Yes. We build real-time dashboards that update automatically as your business data changes.",
    },
    {
      question: "Can dashboards connect to existing software?",
      answer:
        "Yes. We can integrate dashboards with CRMs, ERPs, payment systems, APIs, and other business applications.",
    },
    {
      question: "Can different employees see different information?",
      answer:
        "Absolutely. Role-based access ensures users only see the information relevant to their responsibilities.",
    },
    {
      question: "Can reports be exported?",
      answer:
        "Yes. Reports can be exported in formats such as PDF, Excel, or CSV depending on your requirements.",
    },
  ],

  cta: {
    title: "Gain Complete Visibility Into Your Business",
    description:
      "Empower your team with custom dashboards that transform data into meaningful business insights.",
    buttonText: "Build My Dashboard",
    buttonHref: "/contact",
  },
};
