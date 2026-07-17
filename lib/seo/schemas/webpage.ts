import { siteConfig } from "../siteConfig";
import type { WebPageSchemaOptions } from "../types";

export function createWebPageSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: WebPageSchemaOptions) {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${url}#webpage`,

    url,

    name: title,

    description,

    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },

    about: {
      "@id": `${siteConfig.url}#organization`,
    },

    primaryImageOfPage: image
      ? {
          "@type": "ImageObject",
          url: image,
        }
      : undefined,

    datePublished,

    dateModified,

    inLanguage: siteConfig.language,
  };
}
