import PageHero from "@/components/ui/PageHero";
import { CaseStudyGrid } from "@/components/case-studies";
import { caseStudies } from "@/lib/case-studies";

const hero = {
  label: "Case Studies",

  title: "Real Software.\nReal Challenges.\nReal Results.",
  image: "/case-studies/case-study-banner.jpg",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero hero={hero} />

      <CaseStudyGrid caseStudies={caseStudies} />
    </>
  );
}
