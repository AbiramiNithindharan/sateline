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
