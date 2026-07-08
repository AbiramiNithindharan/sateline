import { CTAsectionTypes } from "./CTATypes";
import { PageHeroData } from "@/types/PageHero";
import { Overview } from "./Overview";
import { Feature } from "./Feature";
import { Technology } from "./Technology";

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;

  card: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };

  hero: PageHeroData;

  overview: Overview;

  features: Feature[];

  technologies: Technology[];

  faqs: FAQ[];

  cta: CTAsectionTypes;
}
