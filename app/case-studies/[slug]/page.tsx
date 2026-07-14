import { notFound } from "next/navigation";
import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";

import OverviewSection from "@/components/ui/OverviewSection";
import ChallengeSection from "@/components/case-studies/challenge/ChallengeSection";
import SolutionSection from "@/components/case-studies/solution/SolutionSection";
import FeatureGrid from "@/components/ui/FeatureGrid";
import TechnologyGrid from "@/components/ui/TechnologyGrid";
import { BusinessImpact } from "@/components/case-studies/impact";
import ScreenshotGallery from "@/components/case-studies/screenshots/ScreenshotGallery";
import CTASection from "@/components/ui/CTASection";
import { siteConfig } from "@/lib/seo";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: study.hero.title,

    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },

    openGraph: {
      title: study.hero.title,

      url: `${siteConfig.url}/case-studies/${study.slug}`,

      siteName: siteConfig.name,

      images: [
        {
          url: siteConfig.ogImage,

          width: 1200,

          height: 630,

          alt: study.hero.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: study.hero.title,

      images: [siteConfig.ogImage],
    },
  };
}
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <PageHero hero={study.hero} />

      <OverviewSection overview={study.overview} />

      <ChallengeSection challenge={study.challenge} />

      <SolutionSection solution={study.solution} />

      <FeatureGrid features={study.features} />

      <TechnologyGrid technologies={study.technologies} />

      <BusinessImpact items={study.businessImpact} />

      <ScreenshotGallery screenshots={study.screenshots} />

      <CTASection
        cta={{
          ...study.cta,
          buttonHref: `/contact?ProjectType=${study.slug}`,
        }}
      />
    </>
  );
}
