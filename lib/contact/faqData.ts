import type { FAQSectionData } from "@/types/ContactPage";

export const faqData: FAQSectionData = {
  heading: "Frequently Asked Questions",

  description:
    "Find answers to the most common questions about our software development services, project timelines, pricing, and collaboration process.",

  faqs: [
    {
      question: "How long does a software project take?",
      answer:
        "The timeline depends on the project's complexity. Small business websites may take a few weeks, while custom software, SaaS platforms, or enterprise applications typically require several months. We'll provide a detailed timeline during the planning phase.",
    },

    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes. We work with startups, small businesses, and established organizations, helping them build scalable digital solutions that fit their business goals and budget.",
    },

    {
      question: "Can you redesign or improve existing software?",
      answer:
        "Absolutely. We can modernize existing websites, web applications, dashboards, and business systems while preserving valuable data and functionality wherever possible.",
    },

    {
      question: "Which technologies do you use?",
      answer:
        "Our primary stack includes Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, Tailwind CSS, and modern cloud deployment platforms. We always choose technologies based on project requirements.",
    },

    {
      question: "How do you estimate project pricing?",
      answer:
        "Project pricing is based on project scope, complexity, features, integrations, and estimated development effort. After understanding your requirements, we'll provide a transparent proposal with a detailed quotation.",
    },
  ],
};
