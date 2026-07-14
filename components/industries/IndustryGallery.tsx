"use client";

import React, { useState } from "react";
import { industriesData } from "@/lib/IndustiresData";
import IndustryCard from "./IndustryCard";

const IndustryGallery = () => {
  const [activeIndustry, setActiveIndustry] = useState("healthcare");
  return (
    <div className="flex h-115 md:h-160 gap-2 md:gap-4 ">
      {industriesData.map((industry) => {
        return (
          <IndustryCard
            key={industry.id}
            industry={industry}
            activeIndustry={activeIndustry}
            setActiveIndustry={setActiveIndustry}
          />
        );
      })}
    </div>
  );
};

export default IndustryGallery;
