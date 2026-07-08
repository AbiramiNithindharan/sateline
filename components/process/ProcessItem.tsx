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
      className="relative min-h-screen flex items-center"
      onViewportEnter={() => setActiveIndex(index)}
      viewport={{
        amount: 0.5,
      }}
    >
      <div className=" space-y-10">
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

        <div className="absolute z-10 p-4  space-y-8">
          <p className="text-gray-300 font-semibold">{step.subtitle}</p>

          <h3 className="text-slate-100 text-lg md:text-2xl font-bold">
            {step.title}
          </h3>

          <p className="text-gray-200 text-lg leading-8">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
