import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCards } from "@/types/serviceCard";

interface ServiceCardProps {
  service: serviceCards;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <p className="text-sm font-medium text-primary">{service.subtitle}</p>

        <h3 className="text-2xl font-semibold">{service.title}</h3>

        <p className="text-muted-foreground leading-7">{service.description}</p>

        <div className="inline-flex items-center gap-2 font-medium text-primary">
          Learn More
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
