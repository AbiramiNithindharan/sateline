import { Testimonial } from "./TestimonialTypes";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <article
      className="
        flex
        flex-col
        justify-center
        w-65
        md:w-105
        min-h-45
        md:min-h-55
        rounded-3xl
        border
        bg-gray-100
        backdrop-blur-md
        p-2
        md:p-6
        shadow-sm
      "
    >
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
        "{testimonial.feedback}"
      </p>

      <div className="mt-8 text-right">
        <h4 className="text-sm font-semibold">{testimonial.name}</h4>

        <p className="text-xs md:text-sm text-muted-foreground">
          {testimonial.role}
        </p>
      </div>
    </article>
  );
}
