import { Solution } from "@/types/CaseStudy";
import { CheckCircle2 } from "lucide-react";

interface SolutionSectionProps {
  solution: Solution;
}

export default function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-8 md:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Solution
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {solution.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We designed a scalable software solution focused on solving the
            client's business challenges while ensuring long-term flexibility,
            maintainability, and ease of management.
          </p>
        </div>

        {/* Solution Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-blue-200" />

          <div className="space-y-12">
            {solution.paragraphs.map((paragraph) => (
              <div key={paragraph} className="relative flex items-start gap-6">
                {/* Icon */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <p className="leading-8 text-gray-600">{paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
