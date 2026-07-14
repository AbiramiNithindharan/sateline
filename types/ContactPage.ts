import type { FeatureIconName } from "@/components/ui/featureIcon";
export interface ContactInfoCard {
  title: string;
  value: string;
  description: string;
  icon: FeatureIconName;
}

export interface ContactInformation {
  heading: string;
  description: string;
  cards: ContactInfoCard[];
}
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface ProcessSectionData {
  heading: string;
  description: string;
  steps: ProcessStep[];
}
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionData {
  heading: string;
  description: string;
  faqs: FAQItem[];
}
