import { CaseStudy } from "@/types/CaseStudy";

export const galleryManagement: CaseStudy = {
  slug: "gallery-management-system",

  category: "Digital Asset Management",

  industry: "Tourism & Hospitality",

  hero: {
    label: "Case Study",

    title: "Multi-Level Gallery Management System",

    image: "/case-studies/gallery/gallery-banner.jpg",
  },

  overview: {
    heading:
      "Organizing Large Image Collections with an Intuitive Gallery Experience",

    image: "/case-studies/gallery/overview.jpg",

    paragraphs: [
      "The client required a modern photo gallery capable of presenting a large collection of images across multiple categories without overwhelming visitors.",

      "The gallery needed to support a unique navigation structure while allowing administrators to continuously add new images as events and activities evolved.",

      "We designed a scalable gallery architecture that combines structured content organization with an engaging user experience.",
    ],
  },

  challenge: {
    heading: "Client Challenge",

    paragraphs: [
      "The organization managed thousands of photographs covering accommodations, tourism activities, nature, wildlife, events, and visitor experiences.",

      "Displaying every image on a single page created poor usability, slow navigation, and difficult content management.",

      "They wanted a gallery that was visually engaging while making it easy for visitors to locate specific image collections.",
    ],
  },

  solution: {
    heading: "Our Solution",

    paragraphs: [
      "We designed a custom gallery management system using a multi-level category architecture instead of a traditional image gallery.",

      "Six primary categories each contain four dedicated subcategories, allowing visitors to navigate naturally through related image collections.",

      "Every category has its own dedicated route, creating a clean URL structure while improving navigation and scalability.",

      "The modular architecture makes it simple for administrators to expand the gallery as new content becomes available.",
    ],
  },

  features: [
    {
      title: "Six Main Categories",
      description:
        "Images are organized into six primary collections for intuitive browsing.",
      icon: "FolderTree",
    },
    {
      title: "Nested Subcategories",
      description:
        "Each category contains dedicated subcategories that organize related images efficiently.",
      icon: "Folders",
    },
    {
      title: "Dedicated Gallery Routes",
      description:
        "Every gallery category has its own page, improving navigation and search engine visibility.",
      icon: "Route",
    },
    {
      title: "Optimized Image Loading",
      description:
        "Images load efficiently using Next.js optimization techniques for faster performance.",
      icon: "Image",
    },
    {
      title: "Scalable Architecture",
      description:
        "The gallery structure supports future expansion without redesigning the application.",
      icon: "Database",
    },
    {
      title: "Responsive Gallery Experience",
      description:
        "Visitors enjoy a seamless browsing experience across desktop, tablet, and mobile devices.",
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
      name: "Next/Image",
      category: "Tools",
    },
    {
      name: "Vercel",
      category: "Deployment",
    },
  ],

  businessImpact: [
    {
      title: "Improved User Navigation",
      description:
        "Visitors can quickly locate image collections through a structured category hierarchy.",
    },
    {
      title: "Better Content Organization",
      description:
        "Thousands of images are organized into logical groups that simplify browsing.",
    },
    {
      title: "Scalable Gallery Management",
      description:
        "New galleries and image collections can be added without changing the application's structure.",
    },
    {
      title: "Enhanced Visitor Experience",
      description:
        "The clean visual design encourages users to explore more content and spend longer on the website.",
    },
  ],

  screenshots: [
    {
      image: "/case-studies/gallery/homepage.png",
      alt: "Gallery Homepage",
    },
    {
      image: "/case-studies/gallery/categories.jpg",
      alt: "Gallery Categories",
    },
    {
      image: "/case-studies/gallery/sub-categories.jpg",
      alt: "Gallery Subcategories",
    },
    {
      image: "/case-studies/gallery/image-grid.png",
      alt: "Image Grid",
    },
    {
      image: "/case-studies/gallery/image-view.jpg",
      alt: "Gallery Detail View",
    },
  ],

  relatedProjects: [
    "news-management-system",
    "booking-management-system",
    "ecommerce-platform",
  ],

  cta: {
    title: "Need a Custom Gallery Platform?",

    description:
      "We create scalable gallery systems with structured navigation, optimized performance, and intuitive user experiences tailored to your content.",

    buttonText: "Let's Build Your Gallery",

    buttonHref: "/contact",
  },
};
