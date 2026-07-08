import { bookingSystem } from "./booking-system";
/* import { crmPlatform } from "./crm-platform"; */
import { donationPlatform } from "./donation-platform";
import { ecommercePlatform } from "./ecommerce-platform";
import { galleryManagement } from "./gallery-management";
import { newsManagement } from "./news-management";

export {
  newsManagement,
  galleryManagement,
  /*  crmPlatform, */
  donationPlatform,
  bookingSystem,
  ecommercePlatform,
};

export const caseStudies = [
  newsManagement,
  galleryManagement,
  /* crmPlatform, */
  donationPlatform,
  bookingSystem,
  ecommercePlatform,
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
export const caseStudyCards = caseStudies.map((study) => ({
  slug: study.slug,

  title: study.hero.title,

  image: study.hero.image,

  technologies: study.technologies.slice(0, 4),
}));
