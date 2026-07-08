import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ServiceGrid from "@/components/services/ServiceGrid";
import { servicesCTAData } from "@/lib/CTAsection";
import { servicesHeroData } from "@/lib/PageHeroData";
export default function ServicesPage() {
  return (
    <>
      <PageHero hero={servicesHeroData} />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Software Built Around Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every business is different, which is why we don't believe in
            one-size-fits-all software. Explore our services below and discover
            how we can help streamline operations, improve customer experiences,
            and support your long-term growth.
          </p>
        </div>
      </section>

      <ServiceGrid />

      <CTASection cta={servicesCTAData} />
    </>
  );
}
