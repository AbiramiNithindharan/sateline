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
        justify-between
        w-[320px]
        md:w-105
        min-h-55
        rounded-3xl
        border
        bg-gray-100
        backdrop-blur-md
        p-6
        shadow-sm
        
      "
    >
      <p className="text-muted-foreground leading-relaxed">
        "{testimonial.feedback}"
      </p>

      <div className="mt-8 text-right">
        <h4 className="font-semibold">{testimonial.name}</h4>

        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </article>
  );
}
