"use client";

import { missionValuesData } from "@/lib/about";
import ValueCard from "./ValueCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContainerVariants, ItemVariants } from "@/lib/variants";

export default function MissionValues() {
  const { label, heading, description, values } = missionValuesData;

  return (
    <section>
      <div className="relative w-full min-h-screen p-4 md:p-12 ">
        <Image
          src="/about/MissionValues.jpg"
          alt="mission values"
          fill
          className="overflow-hidden object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className=" relative z-20 mx-auto max-w-7xl px-8 md:px-12">
          {/* Header */}
          <motion.div
            variants={ContainerVariants}
            initial="hidden"
            animate="visible"
            className=" z-10 mx-auto max-w-3xl text-center"
          >
            <motion.span
              variants={ItemVariants}
              initial="hidden"
              whileInView="visible"
              className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-gray-200
            "
            >
              {label}
            </motion.span>

            <motion.h2
              variants={ItemVariants}
              initial="hidden"
              whileInView="visible"
              className="
              mt-4
              text-4xl
              font-bold
              tracking-tight
              md:text-5xl
              text-gray-100
            "
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={ItemVariants}
              initial="hidden"
              whileInView="visible"
              className="
              mt-6
              text-lg
              leading-8
              text-gray-200
            "
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Value Cards */}

          <div
            className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            
          "
          >
            {values.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
