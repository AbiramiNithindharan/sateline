import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OverviewSection from "@/components/ui/OverviewSection";
import FeatureGrid from "@/components/ui/FeatureGrid";
import TechnologyGrid from "@/components/ui/TechnologyGrid";
import FAQSection from "@/components/services/FAQSection";
import CTASection from "@/components/ui/CTASection";
import { getService, serviceList } from "@/lib/services";
export async function generateStaticParams() {
  return serviceList.map((service) => ({
    slug: service.slug,
  }));
}
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.hero.title} | Sateline Software`,
  };
}
interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero hero={service.hero} />

      <OverviewSection overview={service.overview} />

      <FeatureGrid features={service.features} />

      <TechnologyGrid technologies={service.technologies} />

      <FAQSection faqs={service.faqs} />

      <CTASection cta={service.cta} />
    </>
  );
}
