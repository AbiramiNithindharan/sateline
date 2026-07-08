"use client";

import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import { ProcessStep } from "./processTypes";
import { ContainerVariants, ItemVariants } from "@/lib/variants";

type Props = {
  currentStep: ProcessStep;
};

export default function ProcessSticky({ currentStep }: Props) {
  return (
    <div className="hidden lg:flex sticky top-32 flex-col h-fit py-12 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          variants={ContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md space-y-8"
        >
          <motion.p
            variants={ItemVariants}
            className="text-6xl font-bold text-blue-900"
          >
            {currentStep.id}
          </motion.p>

          <motion.h3
            variants={ItemVariants}
            className="text-4xl font-bold mt-6 text-gray-700"
          >
            {currentStep.stickyTitle}
          </motion.h3>

          <motion.p
            variants={ItemVariants}
            className="text-muted-foreground mt-4"
          >
            {currentStep.stickySubtitle}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
