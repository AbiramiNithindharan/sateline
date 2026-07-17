"use client";

import Image from "next/image";
import { ProcessStep } from "./processTypes";
import { motion } from "framer-motion";

type Props = {
  index: number;
  step: ProcessStep;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProcessItem({ step, setActiveIndex, index }: Props) {
  return (
    <motion.div
      className="relative min-h-[65vh] md:min-h-screen flex items-center"
      onViewportEnter={() => setActiveIndex(index)}
      viewport={{
        amount: 0.5,
      }}
    >
      <div className="space-y-10">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="absolute inset-0 "
        >
          <Image
            src={step.image}
            fill
            alt={step.title}
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 z-5 bg-black/60" />
        <span className="absolute top-20 right-10 h-20 w-20 rounded-full bg-blue-500 backdrop-blur-lg m-4" />

        <div className="z-20 relative mx-auto max-w-md   p-6 shadow-xl space-y-5 md:max-w-xl md:p-10">
          <p
            className="text-xs

font-semibold

uppercase

tracking-[0.18em]

text-cyan-300"
          >
            {step.subtitle}
          </p>

          <h3
            className="text-2xl

font-bold

tracking-tight

text-white

md:text-4xl"
          >
            {step.title}
          </h3>

          <p
            className="text-base

leading-8

text-slate-200

md:text-lg"
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
