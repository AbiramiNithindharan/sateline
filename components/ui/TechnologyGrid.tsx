"use client";

import { motion } from "framer-motion";
import { Technology } from "@/types/Technology";

interface TechnologyGridProps {
  technologies: Technology[];
}

export default function TechnologyGrid({ technologies }: TechnologyGridProps) {
  const groupedTechnologies = technologies.reduce<Record<string, Technology[]>>(
    (groups, technology) => {
      if (!groups[technology.category]) {
        groups[technology.category] = [];
      }

      groups[technology.category].push(technology);

      return groups;
    },
    {},
  );

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Technology Stack
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Built with Modern Technologies
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We use reliable, scalable, and industry-standard technologies to
            build secure, high-performance software solutions.
          </p>
        </div>

        {/* Categories */}

        <div className="space-y-10">
          {Object.entries(groupedTechnologies).map(
            ([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <h3 className="mb-5 text-xl font-semibold text-slate-900">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {items.map((technology) => (
                    <span
                      key={technology.name}
                      className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
                    >
                      {technology.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
