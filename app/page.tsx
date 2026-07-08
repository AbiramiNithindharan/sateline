import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Industries from "@/components/industries/Industries";
import Process from "@/components/process/Process";
import ServiceCards from "@/components/service-cards/ServiceCards";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
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
