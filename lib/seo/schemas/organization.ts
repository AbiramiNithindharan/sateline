import { siteConfig } from "../siteConfig";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: siteConfig.companyName,

  alternateName: siteConfig.shortName,

  url: siteConfig.url,

  logo: `${siteConfig.url}/Logo.jpg`,

  image: `${siteConfig.url}/images/og-image.jpg`,

  description: siteConfig.description,

  email: siteConfig.email,

  telephone: siteConfig.phone,

  sameAs: [
    // Add these after creating them
    // "https://www.linkedin.com/company/sateline-software",
    // "https://github.com/...",
    // "https://x.com/...",
    // "https://facebook.com/..."
  ],
};
