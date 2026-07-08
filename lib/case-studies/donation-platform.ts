import { CaseStudy } from "@/types/CaseStudy";

export const donationPlatform: CaseStudy = {
  slug: "donation-platform",

  category: "Payment Systems",

  industry: "Non-Profit",

  hero: {
    label: "Case Study",

    title: "Online Donation Management Platform",
    image: "/case-studies/donation/donation-banner.jpg",
  },

  overview: {
    heading: "Making Online Donations Simple, Secure & Transparent",

    image: "/case-studies/donation/overview.jpg",

    paragraphs: [
      "The client wanted to replace manual donation collection with a secure digital platform that allowed supporters to contribute directly through their website.",

      "Beyond accepting payments, the organization required a centralized dashboard to monitor donations, filter transaction records, and maintain complete transparency.",

      "Our solution combined a seamless payment experience with an intuitive administrative interface, reducing manual effort while improving donor confidence.",
    ],
  },

  challenge: {
    heading: "Client Challenge",

    paragraphs: [
      "The organization relied on manual processes to collect and verify donations, making reconciliation slow and error-prone.",

      "They required a secure payment gateway capable of handling online donations while ensuring donor information remained protected.",

      "Administrators also needed a dashboard to monitor donations, search transactions, and generate reports without depending on technical staff.",
    ],
  },

  solution: {
    heading: "Our Solution",

    paragraphs: [
      "We developed a custom donation platform using Next.js with Razorpay for secure online payment processing.",

      "Authenticated administrators can securely access a dashboard to monitor donation activity, filter transactions, and review contribution history in real time.",

      "Donation records are securely stored in Supabase, providing reliable data management while supporting future reporting and analytics.",

      "The platform offers donors a fast, secure, and user-friendly experience while giving the organization complete visibility into fundraising performance.",
    ],
  },

  features: [
    {
      title: "Secure Online Donations",
      description:
        "Accept one-time donations securely using Razorpay with a seamless checkout experience.",
      icon: "ShieldCheck",
    },
    {
      title: "Donation Dashboard",
      description:
        "Monitor donations, transaction history, and overall fundraising performance from a centralized dashboard.",
      icon: "LayoutDashboard",
    },
    {
      title: "Advanced Filters",
      description:
        "Quickly search and filter donations using donor details, payment status, or transaction dates.",
      icon: "Filter",
    },
    {
      title: "Authentication",
      description:
        "Role-based authentication ensures only authorized administrators can access donation records.",
      icon: "LockKeyhole",
    },
    {
      title: "Real-Time Data",
      description:
        "Instantly view newly received donations without manual synchronization.",
      icon: "RefreshCcw",
    },
    {
      title: "Scalable Architecture",
      description:
        "Designed to support growing fundraising campaigns while maintaining performance and security.",
      icon: "Database",
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
      name: "Supabase",
      category: "Database",
    },
    {
      name: "Supabase Auth",
      category: "Authentication",
    },
    {
      name: "Razorpay",
      category: "Payments",
    },
    {
      name: "Vercel",
      category: "Deployment",
    },
  ],

  businessImpact: [
    {
      title: "Secure Digital Donations",
      description:
        "Enabled supporters to donate online through a secure and trusted payment workflow.",
    },
    {
      title: "Reduced Administrative Work",
      description:
        "Automated donation recording and payment verification, eliminating manual processes.",
    },
    {
      title: "Improved Transparency",
      description:
        "Administrators gained complete visibility into fundraising activities through real-time dashboards.",
    },
    {
      title: "Better Donor Experience",
      description:
        "A simple and intuitive donation flow encouraged higher user confidence and engagement.",
    },
  ],

  screenshots: [
    {
      image: "/case-studies/donation/landing-page.png",
      alt: "Donation Landing Page",
    },
    {
      image: "/case-studies/donation/checkout.png",
      alt: "Secure Razorpay Checkout",
    },
    {
      image: "/case-studies/donation/dashboard.png",
      alt: "Donation Dashboard",
    },
    {
      image: "/case-studies/donation/payment.png",
      alt: "payment Success Page",
    },
    {
      image: "/case-studies/donation/donation.png",
      alt: "Donation Transactions",
    },
  ],

  relatedProjects: [
    "news-management-system",
    "ecommerce-platform",
    "crm-platform",
  ],

  cta: {
    title: "Looking to Build a Secure Donation Platform?",

    description:
      "We design secure payment solutions with dashboards, reporting, and scalable architecture tailored to your organization's needs.",

    buttonText: "Let's Build Together",

    buttonHref: "/contact",
  },
};
