import React from "react";
import HeroSection from "./Service/HeroSection";
import ServiceCategories from "./Service/ServiceCategories";

const Service = () => {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <ServiceCategories showFilters={true} />
    </div>
  );
};

export default Service;
