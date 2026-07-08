import { ProcessStep } from "@/components/process/processTypes";
export const processData: ProcessStep[] = [
  {
    id: "01",
    stickyTitle: "Discover",
    title: "Turning Ideas into Clear Requirements",
    subtitle: "Understanding your business",
    stickySubtitle:
      "We listen, analyze, and identify the challenges and goals that matter most to your business.",
    description:
      "We learn about your goals, workflows, and challenges to define the right solution.",
    image: "/process/discussion.jpg",
  },

  {
    id: "02",
    stickyTitle: "Strategize",
    title: "Designing the Blueprint for Success",
    subtitle: "Designing architecture",
    stickySubtitle:
      "We transform ideas into a clear roadmap with scalable architecture and user-focused experiences.",
    description:
      "We create the roadmap, database structure, and user experience for your project.",
    image: "/process/planning.jpg",
  },

  {
    id: "03",
    stickyTitle: "Build",
    title: "Crafting Secure and Scalable Solutions",
    subtitle: "Building scalable solutions",
    stickySubtitle:
      "We build secure, high-performance software using modern technologies and best practices.",
    description:
      "We develop applications that are fast, maintainable, and ready for growth.",
    image: "/process/coding.jpg",
  },

  {
    id: "04",
    stickyTitle: "Launch",
    title: "Deploying with Confidence and Ongoing Support",
    subtitle: "Deployment and improvements",
    stickySubtitle:
      "We deploy, monitor, and continuously improve your software for long-term success.",
    description:
      "We deploy your software and provide ongoing support and enhancements.",
    image: "/process/launch.jpg",
  },
];
