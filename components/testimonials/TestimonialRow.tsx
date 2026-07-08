"use client";

import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "./TestimonialTypes";

type Props = {
  testimonials: Testimonial[];
  reverse?: boolean;
};

export default function TestimonialRow({
  testimonials,
  reverse = false,
}: Props) {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <div className="group relative overflow-hidden">
      <div
        className={`
          flex
          w-max
          gap-6
          py-3
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
          group-hover:paused
        `}
      >
        {duplicated.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}
