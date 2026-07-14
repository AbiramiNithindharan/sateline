import type { ProcessStep } from "@/types/ContactPage";

interface ProcessCardProps {
  step: ProcessStep;
}

export function ProcessCard({ step }: ProcessCardProps) {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <article
        className="
        relative
        rounded-2xl
        border
        flex
        flex-col
        items-stretch
        h-auto
        bg-background
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
      >
        <div className="flex-1 m-4">
          <div className="flex items-center justify-start gap-4 md:block">
            <div
              className="
          mb-3
          flex
          h-8
          w-8
          md:h-12
          md:w-12
          items-center
          justify-center
          rounded-full
          bg-primary
          text-lg
          font-bold
          text-primary-foreground
        "
            >
              {step.id}
            </div>

            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
          </div>
          <p className="text-muted-foreground leading-7">{step.description}</p>
        </div>
      </article>
    </div>
  );
}
