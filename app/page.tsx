import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Industries from "@/components/industries/Industries";
import Process from "@/components/process/Process";
import ServiceCards from "@/components/service-cards/ServiceCards";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import React from "react";
import { createWebPageSchema } from "@/lib/seo";
import { JsonLd } from "@/lib/seo/JsonLd";

const page = () => {
  const schema = createWebPageSchema({
    title: "Sateline Software",

    description:
      "Custom software development company delivering web applications, AI solutions, mobile apps and cloud software.",

    url: "https://sateline.co.in",

    image: "https://satelines.co.in/images/og-image.jpg",
  });

  return (
    <>
      <JsonLd data={schema} />
      <Hero />
      <ServiceCards />
      <Process />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
};

export default page;
