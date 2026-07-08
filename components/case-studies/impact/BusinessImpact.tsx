import { BusinessImpactItem } from "@/types/CaseStudy";
import ImpactCard from "./ImpactCard";

interface BusinessImpactProps {
  items: BusinessImpactItem[];
}

export default function BusinessImpact({ items }: BusinessImpactProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
            Business Impact
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Results That Matter
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every software solution should create measurable value. Here's how
            this project improved efficiency, streamlined operations, and helped
            the client achieve better business outcomes.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <ImpactCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
