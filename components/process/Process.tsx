"use client";

import ProcessSticky from "./ProcessSticky";
import ProcessContent from "./ProcessContent";
import { processData } from "@/lib/processData";
import { useState } from "react";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="container max-w-7xl mx-auto py-12 md:py-32">
      <div className="text-center space-y-4 mb:15 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-700">
          How We Work
        </h2>

        <p className="text-muted-foreground">
          A proven process that transforms ideas into scalable software.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <ProcessSticky currentStep={processData[activeIndex]} />

        <ProcessContent setActiveIndex={setActiveIndex} />
      </div>
    </section>
  );
}
