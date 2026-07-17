import { siteConfig } from "../siteConfig";

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: siteConfig.name,
  "@id": `${siteConfig.url}#website`,
  shortName: siteConfig.shortName,

  url: siteConfig.url,

  description: siteConfig.description,

  inLanguage: siteConfig.language,

  publisher: {
    "@id": `${siteConfig.url}#organization`,
  },
};
