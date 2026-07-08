"use client";

import Image from "next/image";
import { leftVariants, rightVariants } from "@/lib/variants";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src="/WhyChooseUs.jpg"
        alt="why-choose-us"
        fill
        className="object-cover"
      />

      <div
        className="absolute inset-0 bg-linear-to-r
from-black/80
via-black/60
to-black/20"
      ></div>
      <div
        className="
          relative
          z-20
          container
          max-w-7xl
          mx-auto
          min-h-screen
          px-6
          flex
          items-center
        "
      >
        {/* Content */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <p
            className="
              text-blue-400
              uppercase
              tracking-[0.25em]
              text-sm
              mb-6
            "
          >
            Why Choose Us
          </p>

          <h2
            className="
              text-white
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >
            Accelerating Growth Through Smart Software
          </h2>

          <p
            className="
              mt-8
              text-white/80
              text-lg
              leading-relaxed
            "
          >
            We create scalable digital solutions that streamline operations,
            automate repetitive tasks, and help businesses deliver better
            customer experiences—enabling sustainable growth at every stage.
          </p>
        </motion.div>

        {/* Vertical Brand Text */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            absolute
            right-10
            top-1/2
            -translate-y-1/2
            hidden
            lg:block
          "
        >
          <h2
            className="
              text-white/40
              font-black
              text-8xl
              xl:text-9xl
              select-none
            "
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            SATELINE
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
