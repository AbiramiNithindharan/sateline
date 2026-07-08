import React from "react";
import PageHero from "@/components/ui/PageHero";
import { aboutHeroData } from "@/lib/PageHeroData";
import CompanyStory from "@/components/about/CompanyStory";
import MissionValues from "@/components/about/MissionValues";
import CTASection from "@/components/ui/CTASection";
import { aboutCTAData } from "@/lib/CTAsection";

const page = () => {
  return (
    <>
      <PageHero hero={aboutHeroData} />
      <CompanyStory />
      <MissionValues />
      <CTASection cta={aboutCTAData} />
    </>
  );
};

export default page;
