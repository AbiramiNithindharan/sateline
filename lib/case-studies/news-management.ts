import { CaseStudy } from "@/types/CaseStudy";

export const newsManagement: CaseStudy = {
  slug: "news-management-system",
  category: "Content Management",

  industry: "Non-Profit",

  hero: {
    label: "Case Study",

    title: "News & Content Management System",

    image: "/case-studies/news/news-banner.jpg",
  },

  overview: {
    heading: "Modern Content Management for Faster Publishing",

    image: "/case-studies/news/overview.jpg",

    paragraphs: [
      "The client required a flexible content management system where administrators could publish news articles, blogs, annual reports, posters, and announcements independently.",

      "The platform needed to support multiple content categories while allowing non-technical staff to manage updates without relying on developers.",

      "Our solution streamlined the publishing workflow through a secure CMS dashboard powered by Sanity Studio.",
    ],
  },

  challenge: {
    heading: "Client Challenge",

    paragraphs: [
      "The organization frequently published news, reports, and announcements but depended on developers for every update.",

      "Managing different content types within a single workflow became increasingly difficult as the website expanded.",

      "They also wanted older news to be archived intelligently while keeping recent updates visible to visitors.",
    ],
  },

  solution: {
    heading: "Our Solution",

    paragraphs: [
      "We developed a custom content management system using Sanity Studio integrated with Next.js.",

      "Different content categories such as News, Blogs, Annual Reports, and Posters were modeled independently, each with its own presentation layer.",

      "Secure authentication allows authorized staff to log in, publish content, update existing articles, or remove outdated information without technical assistance.",

      "If no news is published within the last three months, the system automatically displays the latest available news entries to keep the website active and informative.",
    ],
  },

  features: [
    {
      title: "Sanity Studio CMS",
      description:
        "A customized Sanity Studio dashboard enables authorized staff to manage content without technical knowledge.",
      icon: "LayoutDashboard",
    },
    {
      title: "Multiple Content Types",
      description:
        "Manage News, Blogs, Annual Reports, Posters, and Publications through independent content models.",
      icon: "FolderTree",
    },
    {
      title: "Role-Based Authentication",
      description:
        "Secure login ensures only authorized users can create, edit, publish, or delete content.",
      icon: "ShieldCheck",
    },
    {
      title: "Automatic News Filtering",
      description:
        "If no news is published within the last three months, the platform automatically displays the latest available news articles.",
      icon: "CalendarClock",
    },
    {
      title: "Dynamic Content Rendering",
      description:
        "Every content category has its own reusable UI layout while sharing a centralized content management workflow.",
      icon: "LayoutTemplate",
    },
    {
      title: "SEO-Friendly Publishing",
      description:
        "Every article is optimized for search engines with clean URLs, metadata, and structured content.",
      icon: "Search",
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
      name: "Sanity CMS",
      category: "Content Management",
    },
    {
      name: "Sanity Studio",
      category: "CMS Dashboard",
    },
    {
      name: "NextAuth",
      category: "Authentication",
    },
    {
      name: "Vercel",
      category: "Deployment",
    },
  ],

  businessImpact: [
    {
      title: "Independent Content Management",
      description:
        "Staff can publish and manage website content without depending on developers, reducing operational delays.",
    },
    {
      title: "Faster Publishing Workflow",
      description:
        "News, blogs, reports, and announcements can be published immediately through an intuitive CMS dashboard.",
    },
    {
      title: "Consistent Website Updates",
      description:
        "Automatic filtering ensures visitors always see relevant and recent content, improving user engagement.",
    },
    {
      title: "Scalable Content Architecture",
      description:
        "The structured content model supports future content categories without redesigning the application.",
    },
  ],

  screenshots: [
    {
      image: "/case-studies/news/homepage.jpg",
      alt: "News Listing Page",
    },
    {
      image: "/case-studies/news/News-letter.png",
      alt: "News letter Details",
    },
    {
      image: "/case-studies/news/blog.jpg",
      alt: "Blog Listing",
    },
    {
      image: "/case-studies/news/sanity-dashboard.jpg",
      alt: "Sanity Studio Dashboard",
    },
    {
      image: "/case-studies/news/editor.jpg",
      alt: "Content Editor",
    },
    {
      image: "/case-studies/news/annual-report.jpg",
      alt: "Annual Reports Section",
    },
  ],

  relatedProjects: ["donation-platform", "gallery-management-system"],

  cta: {
    title: "Need a Custom CMS for Your Organization?",

    description:
      "We build scalable content management platforms tailored to your publishing workflow.",

    buttonText: "Start Your Project",

    buttonHref: "/contact",
  },
};
