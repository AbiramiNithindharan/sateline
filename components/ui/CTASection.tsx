"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CTAsectionTypes } from "@/types/CTATypes";
import { motion } from "framer-motion";
import { ContainerVariants, ItemVariants } from "@/lib/variants";
interface CTASectionProps {
  cta: CTAsectionTypes;
}

export default function CTASection({ cta }: CTASectionProps) {
  const { title, description, buttonText, buttonHref } = cta;

  return (
    <section className="py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-linear-to-br
            from-background
            to-muted/30
            px-8
            py-20
            text-center
            md:px-20
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          {/* Content */}
          <motion.div
            variants={ContainerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 mx-auto max-w-3xl"
          >
            <motion.h2
              variants={ItemVariants}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold tracking-tight md:text-5xl"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={ItemVariants}
              initial="hidden"
              whileInView="visible"
              className="mt-6 text-lg leading-8 text-muted-foreground"
            >
              {description}
            </motion.p>
            <motion.div
              variants={ItemVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Link
                href={buttonHref}
                className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-7
                py-3
                text-sm
                font-semibold
                text-primary-foreground
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
              "
              >
                {buttonText}

                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
