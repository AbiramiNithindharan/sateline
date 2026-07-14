"use client";

import React, { Fragment } from "react";
import { services } from "@/lib/Service_cards";
import Image from "next/image";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import ScrollIndicator from "@/components/ui/scrollIndicator";

const ServiceCards = () => {
  const featuredServices = services.filter((service) => service.featured);
  const { containerRef, activeIndex } = useHorizontalScroll(
    featuredServices.length,
  );
  return (
    <section className="container max-w-7xl mx-auto m-4 px-5">
      <div
        ref={containerRef}
        className="no-scrollbar flex
    gap-6
    overflow-x-auto
    snap-x
    snap-mandatory
    touch-pan-x
    px-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4   md:gap-8  md:px-0 md:overflow-visible"
      >
        {featuredServices.map((service) => {
          return (
            <div key={service.title}>
              <div
                className="h-115  group
    relative

    min-w-[320px]
    max-w-[320px]
    snap-center
    shrink-0
    p-4
    md:p-6
    md:min-w-0
    md:max-w-none

    rounded-xl
    overflow-hidden hover:bg-linear-to-b from-blue-800 via-violet-400 to-black"
              >
                <div className="relative z-10 ">
                  <h2 className=" text-lg md:text-xl lg:text-2xl mt-5 bg-linear-to-bl from-white to-gray-200 bg-clip-text text-transparent font-semibold">
                    {service.title}
                  </h2>
                  <p className=" text-md md:text-lg mt-3 bg-linear-to-bl from-white to-gray-200 bg-clip-text text-transparent">
                    {service.subtitle}
                  </p>
                </div>

                <div className="absolute inset-0 overflow-hidden transition-all duration-400 group-hover:opacity-0 group-hover:translate-y-20 ease-in-out">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover

transition-all
duration-500

md:group-hover:opacity-0
md:group-hover:translate-y-20"
                  />
                </div>
                <div className="absolute inset-0 z-5 bg-black/60 overflow-hidden rounded-xl  " />

                <div
                  className="absolute
                             inset-0

flex
items-center

px-6

opacity-100
top-1/2
md:opacity-0
md:translate-y-20
md:group-hover:opacity-100
md:group-hover:translate-y-0
z-10
transition-all
duration-500 overflow-hidden ease-in-out"
                >
                  <p className="leading-relaxed text-lg  cursor-pointer mt-4 text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ScrollIndicator total={featuredServices.length} active={activeIndex} />
    </section>
  );
};

export default ServiceCards;
