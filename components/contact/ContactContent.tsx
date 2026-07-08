"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { contentVariants } from "@/lib/variants";

const benefits = [
  "Free consultation",
  "Transparent development process",
  "Modern technology stack",
  "Long-term support",
];

export default function ContactContent() {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="bg-linear-to-bl from-gray-600 to-black rounded-lg p-4 md:p-8 lg:p-11 flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-mist-300">
          Let's Talk
        </p>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-100">
          Ready To Build Your Next Digital Solution?
        </h2>

        <p className="mt-6 text-lg text-slate-200 leading-relaxed">
          Whether you're planning a booking system, CRM platform, SaaS product,
          dashboard, e-commerce solution, or AI-powered tool, we're here to help
          transform your ideas into scalable software.
        </p>

        <div className="space-y-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-white" />

              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
