import { ServiceDetail } from "@/types/services";

export const aiChatbots: ServiceDetail = {
  slug: "ai-chatbots",

  card: {
    title: "AI Chatbots",
    subtitle: "Need 24/7 customer support?",
    description:
      "Provide instant customer support, qualify leads, and automate conversations with intelligent AI-powered chatbots tailored to your business.",
    image: "/chat-bot/chat-bot-1.jpg",
  },

  hero: {
    label: "AI Chatbots",
    title: "Intelligent AI Assistants That Work Around the Clock",
    image: "/chat-bot/chat-bot-1.jpg",
  },

  overview: {
    heading: "Smarter Conversations. Better Customer Experiences.",
    image: "/chat-bot/chat-bot-2.jpg",
    paragraphs: [
      "Customers expect instant responses at any time of the day. Delayed replies often lead to lost opportunities and dissatisfied customers.",
      "We build AI-powered chatbots that answer questions, capture leads, schedule appointments, and automate customer interactions while allowing your team to focus on higher-value work.",
    ],
  },

  features: [
    {
      title: "24/7 Customer Support",
      description:
        "Provide instant responses to customer enquiries any time of the day.",
      icon: "Bot",
    },
    {
      title: "Lead Generation",
      description:
        "Capture customer information and qualify potential leads automatically.",
      icon: "UserPlus",
    },
    {
      title: "Knowledge Base Integration",
      description:
        "Answer questions using your business documents, FAQs, and product information.",
      icon: "BookOpen",
    },
    {
      title: "Appointment Scheduling",
      description:
        "Allow customers to book meetings and appointments directly through the chatbot.",
      icon: "CalendarDays",
    },
    {
      title: "Multi-Channel Support",
      description:
        "Deploy chatbots across websites and popular messaging platforms.",
      icon: "MessageSquare",
    },
    {
      title: "Conversation Analytics",
      description:
        "Track chatbot performance, customer interactions, and engagement metrics.",
      icon: "BarChart3",
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
      name: "OpenAI API",
      category: "AI",
    },
    {
      name: "LangChain",
      category: "AI",
    },
    {
      name: "Pinecone",
      category: "AI",
    },
    {
      name: "Vercel AI SDK",
      category: "AI",
    },
  ],

  faqs: [
    {
      question: "Can the chatbot answer questions about my business?",
      answer:
        "Yes. We can train the chatbot using your FAQs, documentation, product information, and business knowledge.",
    },
    {
      question: "Can the chatbot collect customer leads?",
      answer:
        "Absolutely. It can capture customer information, qualify leads, and forward them to your sales team.",
    },
    {
      question: "Will customers know they're chatting with AI?",
      answer:
        "The chatbot is transparent about being an AI assistant while providing natural, helpful, and accurate responses.",
    },
    {
      question: "Can the chatbot integrate with my website?",
      answer:
        "Yes. We seamlessly integrate AI chatbots into your website and can also connect them with your existing business systems.",
    },
  ],

  cta: {
    title: "Transform Customer Support with AI",
    description:
      "Let's build an intelligent AI assistant that improves customer satisfaction, captures more leads, and supports your business around the clock.",
    buttonText: "Build My AI Chatbot",
    buttonHref: "/contact",
  },
};
