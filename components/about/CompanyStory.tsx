"use client";

import Image from "next/image";
import { leftVariants, rightVariants } from "@/lib/variants";
import { CompanyData } from "@/lib/about";
import { motion } from "framer-motion";

const CompanyStory = () => {
  return (
    <section className="py-32 bg-gray-200">
      <div className="max-w-7xl mx-auto px-8 md:px-12 pb-12">
        <div className="grid md:grid-cols-2 items-center justify-center gap-12">
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:block relative w-full h-150 overflow-hidden rounded-lg clipped-image"
          >
            <Image
              src={CompanyData.image}
              alt={CompanyData.heading}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 overflow-hidden bg-black/20" />
          </motion.div>
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            className="z-20 mt-1 md:mt-3 sm:block md:flex flex-col items-center md:items-start justify-center gap-4 md:gap-9"
          >
            <h3 className="text-4xl md:text-5xl text-gray-700 tracking-tighter">
              {CompanyData.heading}
            </h3>
            {CompanyData.paragraphs?.map((index) => {
              return (
                <p
                  key={index}
                  className="text-sm md:text-lg lg:text-xl text-gray-500 leading-8"
                >
                  {index}
                </p>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
