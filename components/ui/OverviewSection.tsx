"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Overview as OverviewType } from "@/types/Overview";

interface OverviewProps {
  overview: OverviewType;
}

export default function OverviewSection({ overview }: OverviewProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 lg:px-8">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-112 overflow-hidden rounded-2xl"
        >
          <Image
            src={overview.image}
            alt={overview.heading}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            {overview.heading}
          </h2>

          {overview.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-600">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
