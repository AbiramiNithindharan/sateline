import { testimonials } from "@/lib/TestimonialsData";
import TestimonialRow from "./TestimonialRow";

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-3">
        <div className="max-w-3xl mb-16">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              mt-3
              text-slate-900
            "
          >
            Trusted By Businesses That Value Results
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
            Real feedback from organizations that partnered with Sateline to
            modernize operations, automate workflows, and accelerate growth.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />

          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

          <div className="space-y-4 md:space-y-6">
            <TestimonialRow testimonials={firstRow} />

            <TestimonialRow testimonials={secondRow} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
