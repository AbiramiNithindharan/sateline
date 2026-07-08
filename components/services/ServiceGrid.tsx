import ServiceCard from "./ServiceCard";
import { services } from "@/lib/Service_cards";

export default function ServiceGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
