import { bookingSystems } from "./booking";
import { aiChatbots } from "./chatbot";
import { crmSolutions } from "./crm";
import { customWeb } from "./custom-web";
import { businessDashboards } from "./dashboard";
import { ecommerceSolutions } from "./ecommerce";
import { mobileAppDevelopment } from "./mobile-app";
import { paymentIntegration } from "./payment";
import { saasPlatforms } from "./saas";

export const serviceList = [
  customWeb,
  bookingSystems,
  businessDashboards,
  crmSolutions,
  aiChatbots,
  ecommerceSolutions,
  crmSolutions,
  saasPlatforms,
  paymentIntegration,
  mobileAppDevelopment,
];
export function getService(slug: string) {
  return serviceList.find((service) => service.slug === slug);
}
