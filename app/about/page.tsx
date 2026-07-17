import React from "react";
import PageHero from "@/components/ui/PageHero";
import { aboutHeroData } from "@/lib/PageHeroData";
import CompanyStory from "@/components/about/CompanyStory";
import MissionValues from "@/components/about/MissionValues";
import CTASection from "@/components/ui/CTASection";
import { aboutCTAData } from "@/lib/CTAsection";
import { JsonLd } from "@/lib/seo/JsonLd";
import { createWebPageSchema } from "@/lib/seo";
const page = () => {
  const schema = createWebPageSchema({
    title: "About Sateline Software",
    description:
      "Learn about Sateline Software, our mission, values, expertise, and commitment to delivering modern software solutions.",
    url: "https://sateline.co.in/about",
    image: "https://sateline.co.in/images/about-og.jpg",
  });
  return (
    <>
      <JsonLd data={schema} />
      <PageHero hero={aboutHeroData} />
      <CompanyStory />
      <MissionValues />
      <CTASection cta={aboutCTAData} />
    </>
  );
};

export default page;
