import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { ContactIntro, ContactSection } from "@/components/contact";
import { contactHeroData } from "@/lib/PageHeroData";
import { contactData } from "@/lib/contact";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Sateline Software",
  description:
    "Get in touch with Sateline Software to discuss custom web applications, mobile apps, booking systems, CRM solutions, AI chatbots, and digital transformation projects.",
};
export default function ContactPage() {
  return (
    <>
      <PageHero hero={contactHeroData} />

      <ContactIntro {...contactData.intro} />
      <ContactSection information={contactData.information} />
    </>
  );
}
