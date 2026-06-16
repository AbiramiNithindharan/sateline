"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";

const HeroBackground = () => {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-125 w-125 bg-cyan-500/10 blur-[120px]"
      ></motion.div>
      <div className="absolute top-20 right-20 h-75 w-75 rounded-full bg-cyan-500/10 blur-2xl" />

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
    </>
  );
};

export default HeroBackground;
