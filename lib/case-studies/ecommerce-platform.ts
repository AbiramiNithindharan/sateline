import { CaseStudy } from "@/types/CaseStudy";

export const ecommercePlatform: CaseStudy = {
  slug: "ecommerce-platform",

  category: "E-Commerce",

  industry: "Retail",

  hero: {
    label: "Case Study",

    title: "Custom E-Commerce Platform",

    image: "/case-studies/e-com/e-com-banner.jpg",
  },

  overview: {
    heading: "Building an Online Store That Converts Visitors into Customers",

    image: "/case-studies/e-com/overview.jpg",

    paragraphs: [
      "The client wanted a modern online shopping platform that could showcase products, simplify purchasing, and provide customers with a smooth checkout experience.",

      "The system needed to support product browsing, shopping cart management, promotional pricing, secure payments, and an intuitive administrative workflow.",

      "Our solution delivered a scalable e-commerce application optimized for performance, user experience, and future business growth.",
    ],
  },

  challenge: {
    heading: "Client Challenge",

    paragraphs: [
      "The client lacked a centralized platform to manage products, pricing, and customer orders efficiently.",

      "Customers needed a fast shopping experience with clear pricing, discounts, and a secure checkout process.",

      "The business also required an administration system to manage products, inventory, pricing updates, and customer orders.",
    ],
  },

  solution: {
    heading: "Our Solution",

    paragraphs: [
      "We developed a custom e-commerce platform using Next.js with Razorpay integration for secure online payments.",

      "Customers can browse products, add items to their shopping cart, view promotional discounts, and complete purchases through a seamless checkout process.",

      "Administrators can manage products, pricing, product availability, and customer orders through a centralized dashboard.",

      "The platform was designed with scalability in mind, allowing the business to expand its product catalog without affecting performance.",
    ],
  },

  features: [
    {
      title: "Product Catalog",
      description:
        "Display products with detailed information, pricing, images, and categories.",
      icon: "Package",
    },
    {
      title: "Shopping Cart",
      description:
        "Customers can add, update, or remove products before completing checkout.",
      icon: "ShoppingCart",
    },
    {
      title: "Discount Management",
      description:
        "Automatically calculate promotional offers and discounted pricing.",
      icon: "BadgePercent",
    },
    {
      title: "Secure Checkout",
      description:
        "Provide a smooth checkout experience with Razorpay payment integration.",
      icon: "CreditCard",
    },
    {
      title: "Order Management",
      description:
        "Track customer orders, payment status, and order history from the admin dashboard.",
      icon: "ClipboardList",
    },
    {
      title: "Responsive Shopping Experience",
      description:
        "Optimized for desktop, tablet, and mobile shopping with fast page performance.",
      icon: "MonitorSmartphone",
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
      title: "Expanded Online Sales",
      description:
        "Enabled customers to purchase products online through a fast and intuitive shopping experience.",
    },
    {
      title: "Simplified Order Management",
      description:
        "Centralized product listings, pricing, and customer orders into one easy-to-manage platform.",
    },
    {
      title: "Improved Customer Experience",
      description:
        "Delivered a smooth purchasing journey from product discovery to secure checkout.",
    },
    {
      title: "Scalable Digital Commerce",
      description:
        "Built a platform capable of supporting future product expansion and business growth.",
    },
  ],

  screenshots: [
    {
      image: "/case-studies/e-com/product-list.jpg",
      alt: "Product Listing Page",
    },
    {
      image: "/case-studies/e-com/product-detail.jpg",
      alt: "Product Details Page",
    },
    {
      image: "/case-studies/e-com/cartItem.jpg",
      alt: "Shopping Cart",
    },
    {
      image: "/case-studies/e-com/checkout.jpg",
      alt: "Checkout Page",
    },
    {
      image: "/case-studies/e-com/dashboard.jpg",
      alt: "Admin Dashboard",
    },
    {
      image: "/case-studies/e-com/payment.jpg",
      alt: "Payment Screen",
    },
  ],

  relatedProjects: ["donation-platform", "booking-system", "crm-platform"],

  cta: {
    title: "Planning to Launch Your Online Store?",

    description:
      "We build secure, high-performance e-commerce platforms with custom workflows, online payments, and scalable architecture tailored to your business.",

    buttonText: "Start Your E-Commerce Project",

    buttonHref: "/contact",
  },
};
