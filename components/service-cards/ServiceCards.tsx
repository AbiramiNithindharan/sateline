import React, { Fragment } from "react";
import { services } from "@/lib/Service_cards";
import Image from "next/image";

const ServiceCards = () => {
  const featuredServices = services.filter((service) => service.featured);
  return (
    <section className="container max-w-7xl mx-auto m-4 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5">
        {featuredServices.map((service) => {
          return (
            <div key={service.title}>
              <div className="h-115 group relative overflow-hidden p-6 rounded-xl hover:bg-linear-to-b from-blue-800 via-violet-400 to-black">
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
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 z-5 bg-black/60 overflow-hidden rounded-xl  " />

                <div className="absolute z-7 top-1/2 opacity-0  translate-y-20 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 overflow-hidden ease-in-out ">
                  <p className="leading-relaxed text-lg  cursor-pointer mt-4 text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceCards;
