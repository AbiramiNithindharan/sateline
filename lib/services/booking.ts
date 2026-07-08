import { ServiceDetail } from "@/types/services";

export const bookingSystems: ServiceDetail = {
  slug: "booking-systems",

  card: {
    title: "Booking Systems",
    subtitle: "Still managing bookings manually?",
    description:
      "Automate reservations, appointments, and scheduling with a secure online booking platform designed specifically for your business.",
    image: "/booking-systems/booking-5.jpg",
  },

  hero: {
    label: "Booking Systems",
    title: "Online Booking Platforms That Save Time and Increase Revenue",
    image: "/booking-systems/booking-5.jpg",
  },

  overview: {
    heading: "Smarter Booking Experiences for Modern Businesses",
    image: "/booking-systems/booking-3.jpg",
    paragraphs: [
      "Managing appointments manually often leads to missed bookings, scheduling conflicts, and unnecessary administrative work.",
      "We develop custom booking systems that allow customers to schedule appointments online, receive instant confirmations, make secure payments, and manage reservations from any device.",
    ],
  },

  features: [
    {
      title: "Real-Time Availability",
      description:
        "Customers can instantly view available dates and book appointments online.",
      icon: "CalendarDays",
    },
    {
      title: "Automated Notifications",
      description:
        "Email and SMS reminders reduce missed appointments and improve customer engagement.",
      icon: "BellRing",
    },
    {
      title: "Online Payments",
      description:
        "Collect deposits or full payments securely during the booking process.",
      icon: "CreditCard",
    },
    {
      title: "Admin Dashboard",
      description:
        "Manage appointments, staff schedules, customers, and reports from one place.",
      icon: "LayoutDashboard",
    },
    {
      title: "Customer Portal",
      description:
        "Allow customers to reschedule, cancel, or manage their bookings anytime.",
      icon: "Users",
    },
    {
      title: "Multi-Location Support",
      description:
        "Manage bookings across multiple branches or service locations from one platform.",
      icon: "Building2",
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
      name: "Stripe",
      category: "Payments",
    },
  ],

  faqs: [
    {
      question: "Can customers book appointments online 24/7?",
      answer:
        "Yes. Your booking platform will be available around the clock, allowing customers to schedule appointments whenever it's convenient for them.",
    },
    {
      question: "Can payments be collected during booking?",
      answer:
        "Absolutely. We can integrate secure payment gateways to collect deposits or full payments during the reservation process.",
    },
    {
      question: "Can staff manage their own schedules?",
      answer:
        "Yes. Staff members can access role-based dashboards to manage availability, appointments, and customer information.",
    },
  ],

  cta: {
    title: "Ready to Modernize Your Booking Process?",
    description:
      "Let's build an online booking platform that saves time, improves customer experience, and helps your business grow.",
    buttonText: "Book a Consultation",
    buttonHref: "/contact",
  },
};
