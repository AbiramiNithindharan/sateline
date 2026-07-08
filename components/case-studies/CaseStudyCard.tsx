import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { CaseStudy } from "@/types/CaseStudy";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={caseStudy.hero.image}
          alt={caseStudy.hero.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
          {caseStudy.industry}
        </span>
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
            {caseStudy.hero.title}
          </h3>
        </div>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech.name}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* CTA */}

        <div className="flex items-center gap-2 font-medium text-blue-600 transition-all group-hover:gap-3">
          Read Case Study
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
}
