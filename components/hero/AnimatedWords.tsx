"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
const words = [
  "Booking Systems",
  "CRM Platforms",
  "SaaS Applications",
  "Payment Solutions",
  "Business Dashboards",
  "E-Commerce Stores",
];

const AnimatedWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % words.length;
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-16 flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-xl sm:text-3xl md:text-4xl tracking-tight uppercase bg-linear-to-r from-cyan-800 to-violet-600 bg-clip-text text-transparent font-semibold"
        >
          {words[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedWords;
