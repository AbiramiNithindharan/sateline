import { ServiceDetail } from "@/types/services";

export const mobileAppDevelopment: ServiceDetail = {
  slug: "mobile-app-development",
  card: {
    title: "Android and IOS app development",
    subtitle: "Want solutions within hands?",
    description:
      "We develop mobile apps for your business, for role based access, customer account signup and login, scalable high performant Android and Ios app for business.",
    image: "/mobile-app/mobile-app-1.jpg",
  },

  hero: {
    label: "Mobile App Development",

    title: "Custom Mobile Applications",

    image: "/mobile-app/mobile-app-banner.jpg",
  },

  overview: {
    heading: "Transform Your Business with Mobile Applications",

    image: "/mobile-app/mobile-app-overview.jpg",

    paragraphs: [
      "Today's customers expect businesses to be accessible from their smartphones. A well-designed mobile application improves customer engagement, simplifies daily operations, and strengthens your digital presence.",

      "Whether you need a customer-facing app, an employee management solution, or a business automation platform, we build mobile applications tailored to your unique business requirements.",
    ],
  },

  features: [
    {
      title: "Cross-Platform Development",
      description:
        "Develop applications that deliver a consistent experience across Android and iOS devices.",
      icon: "Smartphone",
    },
    {
      title: "Secure User Authentication",
      description:
        "Protect user accounts with secure login, registration, and role-based access control.",
      icon: "ShieldCheck",
    },
    {
      title: "Push Notifications",
      description:
        "Keep customers informed with instant notifications for updates, reminders, and promotions.",
      icon: "Bell",
    },
    {
      title: "Real-Time Data",
      description:
        "Display live information by synchronizing your application with cloud databases and APIs.",
      icon: "RefreshCw",
    },
    {
      title: "Offline Support",
      description:
        "Allow users to continue accessing important features even with limited internet connectivity.",
      icon: "WifiOff",
    },
    {
      title: "Admin Dashboard Integration",
      description:
        "Connect your mobile application with a powerful web dashboard for complete business management.",
      icon: "LayoutDashboard",
    },
  ],

  technologies: [
    {
      name: "Flutter",
      category: "Mobile",
    },
    {
      name: "Dart",
      category: "Mobile",
    },
    {
      name: "Firebase",
      category: "Backend Services",
    },
    {
      name: "Supabase",
      category: "Database",
    },
    {
      name: "REST API",
      category: "API",
    },
    {
      name: "Node.js",
      category: "Backend",
    },
    {
      name: "Next.js Dashboard",
      category: "Admin Panel",
    },
    {
      name: "Google Play Store",
      category: "Deployment",
    },
    {
      name: "Apple App Store",
      category: "Deployment",
    },
  ],

  faqs: [
    {
      question: "Can you build apps for both Android and iPhone?",
      answer:
        "Yes. We develop cross-platform applications that provide a consistent experience across Android and iOS devices.",
    },
    {
      question: "Can the mobile app connect to my existing website?",
      answer:
        "Absolutely. We can integrate your mobile application with your existing website, APIs, CRM, booking system, or business software.",
    },
    {
      question: "Will I have an admin panel?",
      answer:
        "Yes. Every mobile application can be paired with a secure web-based administration dashboard for managing users, content, reports, and business operations.",
    },
    {
      question: "Can you publish the app to the App Store and Play Store?",
      answer:
        "Yes. We assist with preparing and publishing applications to both Google Play Store and Apple App Store.",
    },
  ],
  cta: {
    title: "Gain Complete Visibility Into Your Business",
    description:
      "Empower your team with custom mobile apps that transform data into meaningful business insights.",
    buttonText: "Build My Mobile App",
    buttonHref: "/contact",
  },
};
