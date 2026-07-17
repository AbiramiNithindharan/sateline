import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ServiceGrid from "@/components/services/ServiceGrid";
import { servicesCTAData } from "@/lib/CTAsection";
import { servicesHeroData } from "@/lib/PageHeroData";
import { createWebPageSchema } from "@/lib/seo";
import { JsonLd } from "@/lib/seo/JsonLd";
import { createBreadcrumbSchema } from "@/lib/seo/schemas/breadcrumb";
export default function ServicesPage() {
  const schema = createWebPageSchema({
    title: "Software Development Services",
    description:
      "Explore our software development services including web applications, mobile apps, AI solutions, cloud software, UI/UX, and business automation.",
    url: "https://sateline.co.in/services",
    image: "https://sateline.co.in/images/services-og.jpg",
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Home",
      url: "https://sateline.co.in",
    },
    {
      name: "Services",
      url: "https://sateline.co.in/services",
    },
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />
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
