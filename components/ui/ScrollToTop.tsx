"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full shadow-lg"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
