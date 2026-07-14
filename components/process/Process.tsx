"use client";

import ProcessSticky from "./ProcessSticky";
import ProcessContent from "./ProcessContent";
import { processData } from "@/lib/processData";
import { useState } from "react";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="container max-w-7xl mx-auto py-20 md:py-32">
      <div className="mx-auto mb-14 max-w-3xl text-center px-3">
        <p
          className="
      text-sm
      font-semibold
      uppercase
      tracking-[0.2em]
      text-blue-600
    "
        >
          Our Process
        </p>

        <h2
          className="
      mt-3
      text-3xl
      font-bold
      tracking-tight
      text-slate-900

      md:text-5xl
    "
        >
          From Idea to Launch
        </h2>

        <p
          className="
      mx-auto
      mt-6
      max-w-2xl
      text-base
      leading-6
      text-muted-foreground

      md:text-lg
    "
        >
          Every project follows a structured workflow that keeps communication
          transparent, reduces risk, and ensures high-quality software delivery.
        </p>
      </div>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="hidden lg:block">
          <ProcessSticky currentStep={processData[activeIndex]} />
        </div>

        <ProcessContent setActiveIndex={setActiveIndex} />
      </div>
    </section>
  );
}
