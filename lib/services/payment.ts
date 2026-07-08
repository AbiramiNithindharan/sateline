import { ServiceDetail } from "@/types/services";

export const paymentIntegration: ServiceDetail = {
  slug: "payment-integration",

  card: {
    title: "Payment Integration",
    subtitle: "Need a secure way to collect payments?",
    description:
      "Accept online payments securely with trusted payment gateway integrations, recurring billing, and seamless checkout experiences.",
    image: "/payment/payment-6.jpg",
  },

  hero: {
    label: "Payment Integration",
    title: "Secure Payment Solutions for Modern Businesses",
    image: "/payment/payment-6.jpg",
  },

  overview: {
    heading: "Fast, Secure & Reliable Payment Experiences",
    image: "/payment/payment-3.jpg",
    paragraphs: [
      "Customers expect a smooth and secure payment experience. Complicated or unreliable payment systems often lead to abandoned transactions and lost revenue.",
      "We build secure payment solutions that integrate seamlessly into your website or application, helping you accept payments confidently while ensuring customer trust.",
    ],
  },

  features: [
    {
      title: "Secure Payment Gateway",
      description:
        "Integrate trusted payment providers for safe and reliable online transactions.",
      icon: "ShieldCheck",
    },
    {
      title: "Recurring Billing",
      description:
        "Automate subscription payments, renewals, and recurring invoices.",
      icon: "RefreshCw",
    },
    {
      title: "Multiple Payment Methods",
      description:
        "Support credit cards, debit cards, UPI, wallets, and international payment methods.",
      icon: "Wallet",
    },
    {
      title: "Transaction Dashboard",
      description:
        "Monitor payments, refunds, settlements, and transaction history in one place.",
      icon: "LayoutDashboard",
    },
    {
      title: "Invoice Management",
      description:
        "Automatically generate invoices and maintain payment records for customers.",
      icon: "Receipt",
    },
    {
      title: "Fraud Protection",
      description:
        "Reduce fraudulent transactions with secure verification and payment monitoring.",
      icon: "ShieldAlert",
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
    {
      name: "Razorpay",
      category: "Payments",
    },
    {
      name: "PayPal",
      category: "Payments",
    },
  ],

  faqs: [
    {
      question: "Which payment gateways can you integrate?",
      answer:
        "We can integrate popular payment providers such as Stripe, Razorpay, PayPal, and other gateways depending on your business requirements and target market.",
    },
    {
      question: "Can you build recurring subscription payments?",
      answer:
        "Yes. We develop secure subscription systems with recurring billing, automated renewals, and payment management.",
    },
    {
      question: "Is the payment process secure?",
      answer:
        "Absolutely. We follow industry best practices and integrate trusted payment providers that offer secure transaction processing.",
    },
    {
      question: "Can customers receive invoices automatically?",
      answer:
        "Yes. We can automate invoice generation, payment confirmations, and transaction records.",
    },
  ],

  cta: {
    title: "Ready to Accept Payments Online?",
    description:
      "Let's build a secure payment solution that simplifies transactions and improves your customers' checkout experience.",
    buttonText: "Talk to Our Team",
    buttonHref: "/contact",
  },
};
