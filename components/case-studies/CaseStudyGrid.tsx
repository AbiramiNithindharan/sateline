import { CaseStudy } from "@/types/CaseStudy";
import CaseStudyCard from "./CaseStudyCard";

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Our Work
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Software Built Around Business Problems
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every business has unique challenges. Our case studies demonstrate
            how thoughtful software architecture, modern technologies, and
            scalable solutions helped our clients achieve measurable results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} caseStudy={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
