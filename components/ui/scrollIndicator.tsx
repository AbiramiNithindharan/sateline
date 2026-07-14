"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  total: number;
  active: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

export default function ScrollIndicator({
  total,
  active,
  onDotClick,
  className,
}: ScrollIndicatorProps) {
  return (
    <div className={cn("mt-6 flex justify-center gap-2 md:hidden", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          type="button"
          onClick={() => onDotClick?.(index)}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: active === index ? 1.2 : 1,
            opacity: active === index ? 1 : 0.4,
          }}
          transition={{
            duration: 0.25,
          }}
          aria-label={`Go to card ${index + 1}`}
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-blue-600
            transition-colors
          "
        />
      ))}
    </div>
  );
}
