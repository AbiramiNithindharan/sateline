import { ServiceDetail } from "@/types/services";

export const ecommerceSolutions: ServiceDetail = {
  slug: "ecommerce-solutions",

  card: {
    title: "E-Commerce Solutions",
    subtitle: "Want to grow your sales online?",
    description:
      "Launch a fast, secure, and conversion-focused online store that delivers exceptional shopping experiences and drives business growth.",
    image: "/e-com/e-com-7.jpg",
  },

  hero: {
    label: "E-Commerce Solutions",
    title: "Powerful Online Stores Built to Sell More",
    image: "/e-com/e-com-7.jpg",
  },

  overview: {
    heading: "Sell Smarter with a Custom E-Commerce Platform",
    image: "/e-com/e-com-3.jpg",
    paragraphs: [
      "Customers expect a fast, secure, and seamless shopping experience across every device. A poorly designed online store can lead to abandoned carts and lost revenue.",
      "We build high-performance e-commerce solutions that make it easy to manage products, process orders, accept payments, and deliver an outstanding customer experience.",
    ],
  },

  features: [
    {
      title: "Product Management",
      description:
        "Easily add, edit, organize, and manage products, categories, pricing, and inventory.",
      icon: "Package",
    },
    {
      title: "Secure Checkout",
      description:
        "Provide customers with a fast, secure, and frictionless checkout experience.",
      icon: "ShoppingCart",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Accept online payments through trusted payment providers with complete security.",
      icon: "CreditCard",
    },
    {
      title: "Order Management",
      description:
        "Track orders, shipping status, returns, and customer purchases from a centralized dashboard.",
      icon: "ClipboardList",
    },
    {
      title: "Inventory Management",
      description:
        "Monitor stock levels, product availability, and inventory movements in real time.",
      icon: "Boxes",
    },
    {
      title: "Sales Analytics",
      description:
        "Gain valuable insights into customer behavior, sales performance, and revenue trends.",
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
      name: "Stripe",
      category: "Payments",
    },
    {
      name: "Razorpay",
      category: "Payments",
    },
    {
      name: "Cloudinary",
      category: "Cloud",
    },
  ],

  faqs: [
    {
      question: "Can you build a custom online store for my business?",
      answer:
        "Yes. We develop fully customized e-commerce platforms tailored to your products, customers, and business goals.",
    },
    {
      question: "Will my store work on mobile devices?",
      answer:
        "Absolutely. Every e-commerce solution we build is fully responsive and optimized for mobile, tablet, and desktop users.",
    },
    {
      question: "Can multiple payment gateways be integrated?",
      answer:
        "Yes. We support integration with providers such as Stripe, Razorpay, PayPal, and other trusted payment gateways.",
    },
    {
      question: "Can I manage products without technical knowledge?",
      answer:
        "Yes. You'll receive an easy-to-use admin dashboard where you can manage products, orders, customers, and inventory.",
    },
  ],

  cta: {
    title: "Ready to Grow Your Online Business?",
    description:
      "Let's build an e-commerce platform that delivers exceptional shopping experiences and helps your business sell more online.",
    buttonText: "Start Your Online Store",
    buttonHref: "/contact",
  },
};
