"use client";

import { PageHeroData } from "@/types/PageHero";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ContainerVariants, ItemVariants } from "@/lib/variants";

interface PageHeroProps {
  hero: PageHeroData;
}

export default function PageHero({ hero }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[40vh] items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero.image}
        alt={hero.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6 text-white"
        >
          <motion.span
            variants={ItemVariants}
            className="text-sm font-medium uppercase tracking-[0.3em] "
          >
            {hero.label}
          </motion.span>

          <motion.h1
            variants={ItemVariants}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            {hero.title}
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
