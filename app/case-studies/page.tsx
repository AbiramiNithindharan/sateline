import PageHero from "@/components/ui/PageHero";
import { CaseStudyGrid } from "@/components/case-studies";
import { caseStudies } from "@/lib/case-studies";
import { createWebPageSchema } from "@/lib/seo";
import { JsonLd } from "@/lib/seo/JsonLd";

const hero = {
  label: "Case Studies",

  title: "Real Software.\nReal Challenges.\nReal Results.",
  image: "/case-studies/case-study-banner.jpg",
};

export default function CaseStudiesPage() {
  const schema = createWebPageSchema({
    title: "Case Studies",
    description:
      "Explore case studies showcasing successful web, mobile, AI, and custom software projects delivered by Sateline Software.",
    url: "https://sateline.co.in/case-studies",
    image: "https://sateline.co.in/images/case-studies-og.jpg",
  });

  return (
    <>
      <JsonLd data={schema} />
      <PageHero hero={hero} />

      <CaseStudyGrid caseStudies={caseStudies} />
    </>
  );
}
