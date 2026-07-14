import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.creator,
    },
  ],

  creator: siteConfig.creator,

  applicationName: siteConfig.name,

  category: "Technology",

  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",

    locale: siteConfig.locale,

    url: siteConfig.url,

    title: siteConfig.name,

    description: siteConfig.description,

    siteName: siteConfig.name,

    images: [
      {
        url: siteConfig.ogImage,

        width: 1200,

        height: 630,

        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },
};
