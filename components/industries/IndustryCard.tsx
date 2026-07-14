import React from "react";
import { Industry } from "./IndustryTypes";
import Image from "next/image";
type IndustryProps = {
  industry: Industry;
  activeIndustry: string;
  setActiveIndustry: (id: string) => void;
};

const IndustryCard = ({
  industry,
  activeIndustry,
  setActiveIndustry,
}: IndustryProps) => {
  const isActive = activeIndustry === industry.id;

  return (
    <div
      onMouseDown={() => setActiveIndustry(industry.id)}
      className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-in-out ${isActive ? "flex-6" : "flex-1"}`}
    >
      <Image
        src={industry.image}
        alt={industry.title}
        fill
        className="object-cover"
      />
      {isActive ? (
        <div
          className="absolute inset-0 bg-linear-to-t
          from-black/80
          via-black/50
         to-black/20"
        />
      ) : (
        <div className="absolute inset-0 bg-black/70" />
      )}
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h3
            className="text-white text-xl md:text-3xl font-semibold tracking-widest"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            {industry.title}
          </h3>
        </div>
      )}
      <div
        className={`absolute z-30 inset-0 flex flex-col justify-end transition-all duration-300 p-4 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-gray-300 text-xs md:text-sm uppercase tracking-[0.2em]">
          Industry Focus
        </p>

        <h3 className="mt-3 text-xl md:text-4xl font-bold text-white max-w-lg">
          {industry.headline}
        </h3>

        <p className="hidden md:block mt-4 text-sm text-white/80 max-w-lg md:max-w-xl leading-relaxed">
          {industry.description}
        </p>

        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {industry.solutions.map((solution) => (
            <li
              key={solution}
              className="
                text-white
                bg-white/10
                backdrop-blur-sm
                rounded-full
                px-1
                md:px-4
                md:py-2
                text-xs
                md:text-sm
                w-fit
              "
            >
              {solution}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndustryCard;
