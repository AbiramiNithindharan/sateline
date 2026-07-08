"use client";

import React from "react";
import { Button } from "../ui/button";
import HeroBackground from "./HeroBackground";
import AnimatedWords from "./AnimatedWords";
import { motion } from "framer-motion";
import { ItemVariants, ContainerVariants } from "@/lib/variants";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center p-4">
      <HeroBackground />
      <div className="relative z-10 container max-w-7xl mx-auto p-4">
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto flex flex-col text-center gap-10"
        >
          <motion.h1
            variants={ItemVariants}
            className="text-2xl sm:text-4xl md:text-6xl text-center text-slate-600"
          >
            Software Built for Business Growth
          </motion.h1>
          <motion.div variants={ItemVariants}>
            <AnimatedWords />
          </motion.div>
          <motion.p
            variants={ItemVariants}
            className="px-12 text-sm sm:text-md md:text-lg lg:text-xl text-center text-muted-foreground"
          >
            Helping businesses streamline operations, automate workflows, and
            deliver better customer experiences.
          </motion.p>
          <motion.div
            variants={ItemVariants}
            className="flex justify-center items-center gap-4 p-4"
          >
            <Button
              variant="secondary"
              className="rounded-full font-bold tracking-wider border border-black-100"
              size="xl"
            >
              Start Project
            </Button>
            <Button className="rounded-full font-bold tracking-wider" size="xl">
              View Solutions
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
