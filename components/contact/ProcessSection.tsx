import { processData } from "@/lib/contact";

import { ProcessCard } from "./ProcessCard";

export function ProcessSection() {
  return (
    <section
      className="
       py-12 md:py-24
      "
    >
      <div className="container">
        <div
          className="
            mx-auto
            mb-16
            max-w-2xl
            md:max-w-3xl
            text-center
            px-4 md:px-8
          "
        >
          <h2 className="text-2xl md:text-4xl font-bold">
            {processData.heading}
          </h2>

          <p
            className="
              mt-6
              text-sm
              md:text-lg
              text-muted-foreground
            "
          >
            {processData.description}
          </p>
        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {processData.steps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
