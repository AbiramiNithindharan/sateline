import { CaseStudy } from "@/types/CaseStudy";

export const bookingSystem: CaseStudy = {
  slug: "booking-management-system",

  category: "Booking & Reservations",

  industry: "Tourism & Hospitality",

  hero: {
    label: "Case Study",

    title: "Multi-Resource Booking Management System",
    image: "/case-studies/booking/booking-banner.jpg",
  },

  overview: {
    heading: "Managing Complex Reservations Through a Single Unified Platform",

    image: "/case-studies/booking/overview.jpg",

    paragraphs: [
      "The client required a centralized booking platform capable of managing different accommodation types, recreational activities, and tour packages through one system.",

      "Each booking category followed its own reservation rules, pricing model, and availability calculations, making traditional booking software unsuitable.",

      "We engineered a fully customized booking platform that automates reservations, resource allocation, online payments, and administrative management.",
    ],
  },

  challenge: {
    heading: "Client Challenge",

    paragraphs: [
      "The organization managed multiple accommodation types and tourism activities using manual booking processes.",

      "Each service required different reservation logic. Suites, Eco Huts, and Trek Sheds followed room-based booking rules, while Dormitories required individual bed allocation.",

      "Coracle rides operated with fixed daily capacity limits, whereas Eco Tour Packages needed to reserve multiple resources simultaneously for the selected travel dates.",

      "The client wanted one unified platform that simplified operations while preventing double bookings and resource conflicts.",
    ],
  },

  solution: {
    heading: "Our Solution",

    paragraphs: [
      "We designed a custom reservation engine tailored to the client's business workflow instead of relying on generic booking software.",

      "Each booking category was implemented with independent business rules while sharing a unified user experience and centralized administration dashboard.",

      "Secure authentication, Razorpay payment integration, and Supabase-powered data management ensured reliable bookings and efficient operational control.",

      "Administrators can manage reservations, monitor resource availability, track payments, and oversee customer bookings from a single dashboard.",
    ],
  },

  features: [
    {
      title: "Room Booking Engine",
      description:
        "Supports Suites, Eco Huts, and Trek Sheds with date-based availability and reservation management.",
      icon: "Hotel",
    },
    {
      title: "Dormitory Bed Allocation",
      description:
        "Allows customers to reserve individual beds instead of entire rooms while preventing overbooking.",
      icon: "BedDouble",
    },
    {
      title: "Activity Capacity Management",
      description:
        "Automatically limits Coracle Ride bookings based on daily ride capacity and passenger availability.",
      icon: "ShipWheel",
    },
    {
      title: "Package Reservation Logic",
      description:
        "Eco Tour Packages reserve multiple resources together to avoid scheduling conflicts.",
      icon: "Map",
    },
    {
      title: "Secure Online Payments",
      description:
        "Integrated Razorpay for fast, secure online booking payments.",
      icon: "CreditCard",
    },
    {
      title: "Booking Dashboard",
      description:
        "Administrators can manage bookings, monitor availability, review payments, and track reservations from one place.",
      icon: "LayoutDashboard",
    },
    {
      title: "Authentication & User Management",
      description:
        "Secure administrator access with authenticated dashboards and protected booking management.",
      icon: "ShieldCheck",
    },
    {
      title: "Real-Time Availability",
      description:
        "Availability updates instantly after every successful booking to prevent duplicate reservations.",
      icon: "CalendarCheck",
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
      title: "Unified Reservation Platform",
      description:
        "Replaced multiple manual booking workflows with a single centralized reservation system.",
    },
    {
      title: "Reduced Booking Errors",
      description:
        "Automated availability calculations significantly reduced double bookings and scheduling conflicts.",
    },
    {
      title: "Improved Customer Experience",
      description:
        "Visitors can easily check availability, book resources, and complete secure online payments.",
    },
    {
      title: "Operational Efficiency",
      description:
        "Administrators gained complete visibility over accommodations, activities, payments, and reservations from one dashboard.",
    },
    {
      title: "Scalable Booking Architecture",
      description:
        "The platform is designed to support additional accommodation types, activities, and booking rules as the business grows.",
    },
  ],

  screenshots: [
    {
      image: "/case-studies/booking/landing-page.png",
      alt: "Booking Homepage",
    },
    {
      image: "/case-studies/booking/suite-png",
      alt: "Suite Booking",
    },

    {
      image: "/case-studies/booking/coracle-ride.png",
      alt: "Coracle Ride Booking",
    },

    {
      image: "/case-studies/booking/booking.png",
      alt: "Secure Payment",
    },
  ],

  relatedProjects: ["ecommerce-platform", "donation-platform", "crm-platform"],

  cta: {
    title: "Need a Custom Booking Platform?",

    description:
      "We build intelligent booking systems tailored to your business rules, resource availability, online payments, and operational workflows.",

    buttonText: "Build Your Booking System",

    buttonHref: "/contact",
  },
};
