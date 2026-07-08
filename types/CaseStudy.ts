import { PageHeroData } from "./PageHero";
import { Overview } from "./Overview";
import { Feature } from "./Feature";
import { Technology } from "./Technology";
import { CTAsectionTypes } from "./CTATypes";

export type CaseStudyCategory =
  | "Content Management"
  | "Payment Systems"
  | "E-Commerce"
  | "Booking & Reservations"
  | "Digital Asset Management"
  | "Business Automation";

export type Industry =
  | "Non-Profit"
  | "Tourism & Hospitality"
  | "Retail"
  | "Enterprise"
  | "Government"
  | "Education";

export interface Challenge {
  heading: string;
  paragraphs: string[];
}

export interface Solution {
  heading: string;
  paragraphs: string[];
}

export interface BusinessImpactItem {
  title: string;
  description: string;
}

export interface Screenshot {
  image: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;

  hero: PageHeroData;

  overview: Overview;

  challenge: Challenge;

  solution: Solution;

  features: Feature[];

  technologies: Technology[];

  businessImpact: BusinessImpactItem[];

  screenshots: Screenshot[];

  relatedProjects: string[];

  cta: CTAsectionTypes;

  category: CaseStudyCategory;

  industry: Industry;
}
