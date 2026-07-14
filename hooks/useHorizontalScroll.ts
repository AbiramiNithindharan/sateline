// hooks/useHorizontalScroll.ts

"use client";

import { useEffect, useRef, useState } from "react";

export function useHorizontalScroll(totalItems: number) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;

      const cardWidth = container.firstElementChild?.clientWidth ?? 1;

      const gap = 24; // Tailwind gap-6 = 24px

      const index = Math.round(scrollLeft / (cardWidth + gap));

      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [totalItems]);

  return {
    containerRef,
    activeIndex,
  };
}
