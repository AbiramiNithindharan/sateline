import type { ProcessSectionData } from "@/types/ContactPage";

export const processData: ProcessSectionData = {
  heading: "Our Development Process",

  description:
    "We follow a transparent and collaborative process to ensure every project is delivered on time, within budget, and aligned with your business goals.",

  steps: [
    {
      id: 1,
      title: "Share Your Requirements",
      description:
        "Tell us about your business, challenges, and project goals through our contact form or an initial discussion.",
    },
    {
      id: 2,
      title: "Consultation & Planning",
      description:
        "We analyze your requirements, discuss the best technical approach, and define the project scope and timeline.",
    },
    {
      id: 3,
      title: "Proposal & Approval",
      description:
        "You'll receive a detailed proposal with estimated cost, milestones, and delivery schedule before development begins.",
    },
    {
      id: 4,
      title: "Development & Delivery",
      description:
        "Once approved, We starts development, provides regular updates, testing, and delivers a high-quality solution.",
    },
  ],
};
