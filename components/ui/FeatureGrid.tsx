"use client";

import { Feature } from "@/types/Feature";
import FeatureCard from "./FeatureCard";

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Everything You Need to Grow Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every solution is thoughtfully designed with powerful features that
            improve productivity, automate workflows, and deliver a seamless
            experience for both your team and your customers.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
