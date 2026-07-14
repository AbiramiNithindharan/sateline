import { serviceList } from "@/lib/services";

export function getInterestOptions() {
  const services = serviceList.map((service) => ({
    label: service.card.title,
    value: service.slug,
    group: "Services",
  }));

  return [...services];
}
