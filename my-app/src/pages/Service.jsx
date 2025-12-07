import React from "react";
import HeroSection from "./Service/HeroSection";
import ServiceCategories from "./Service/ServiceCategories";
import CaseStudies from "./Service/CaseStudies";

const Service = () => {
  // ===== GLOBAL STATE =====
  const [featuredServiceId, setFeaturedServiceId] = React.useState(1)
  const [activeFilter, setActiveFilter] = React.useState("All")

  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <ServiceCategories
        showFilters={true}
        featuredServiceId={featuredServiceId}
        setFeaturedServiceId={setFeaturedServiceId}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <CaseStudies
        featuredServiceId={featuredServiceId}
        activeFilter={activeFilter}
      />
    </div>
  );
};

export default Service;
