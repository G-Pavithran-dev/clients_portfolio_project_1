import React, { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import rameshwaramImg from "@/assets/Home's_images/RameshWaram_img.png";
import seaSoftImg from "@/assets/Home's_images/seaSoft_img.png";
import container3Img from "@/assets/Home's_images/container3-img.png";
import container4Img from "@/assets/Home's_images/container4_img.png";
import mobileOpenImg from "@/assets/Home's_images/mobile's_openImg.png";
import leftArrow from "@/assets/Home's_images/leftArrow.png";
import rightArrow from "@/assets/Home's_images/rightArrow.png";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleSeeMore = () => {
    if (!showAll && scrollContainerRef.current) {
      // Scroll to the end when showing more
      setTimeout(() => {
        scrollContainerRef.current.scrollTo({
          left: scrollContainerRef.current.scrollWidth,
          behavior: "smooth",
        });
      }, 100);
      setShowAll(true);
    } else if (scrollContainerRef.current) {
      // Scroll back to start when showing less
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      // Delay hiding items until scroll animation completes
      setTimeout(() => {
        setShowAll(false);
      }, 800);
    }
  };

  const handleMobileNext = () => {
    if (currentMobileIndex === 0) {
      // Move from intro to first item
      setCurrentMobileIndex(1);
    } else if (currentMobileIndex < portfolioItems.length) {
      setCurrentMobileIndex((prev) => prev + 1);
    }
  };

  const handleMobilePrev = () => {
    if (currentMobileIndex > 0) {
      setCurrentMobileIndex((prev) => prev - 1);
    }
  };

  const portfolioItems = [
    {
      id: 1,
      title: "My Rameswaram Trip – Travel & Temple Service Platform",
      description:
        "A unified platform designed for booking Hindu temple puja services, hotels, and car rentals effortlessly in the Rameswaram region, simplifying travel and spiritual experiences.",
      tags: [
        "Seamless Booking Experience",
        "Trusted Local Services",
        "All-in-One Travel Convenience",
      ],
      bgColor: "bg-[#001024]",
      image: rameshwaramImg,
      textColor: "text-[#D4AF37]",
    },
    {
      id: 2,
      title: "Seafsoft – Seafood Inventory & Export Management System",
      description:
        "Delivered a complete digital transformation for seafood companies through a powerful inventory management platform that tracks every stage from purchase to export.",
      tags: [
        "End-to-End Inventory Tracking",
        "Export Process Automation",
        "Custom Financial & P&L Reporting",
      ],
      bgColor: "bg-[#C8E0F4]",
      image: seaSoftImg,
      textColor: "text-[#0066B3]",
    },
    {
      id: 3,
      title: "Hospitality Solutions",
      description:
        "Deployed a new CRM system that improved client engagement and satisfaction, driving seamless communication and enhancing customer retention across the hospitality sector.",
      tags: ["Operational Excellence", "Client Success", "Efficiency Boost"],
      bgColor: "bg-[#9e9f9a]",
      image: container3Img,
      textColor: "text-gray-800",
    },
    {
      id: 4,
      title: "Firefighting communication",
      description:
        "Developed robust communication protocols that reduced response times by 40 percent, ensuring timely and efficient coordination during critical emergency situations.",
      tags: ["Operational Excellence", "Client Success", "Efficiency Boost"],
      bgColor: "bg-[#776e5e]",
      image: container4Img,
      textColor: "text-gray-800",
    },
  ];

  const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 2);

  return (
    <section className="w-full py-4 md:py-16 lg:py-4  min-w-[320px]">
      <div className="w-full  rounded-lg bg-gray-bg border border-gray-bg p-6 md:p-8 lg:p-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between mb-12">
          <div className="w-full lg:w-auto">
            {/* Portfolio Badge */}
            <div className="inline-block mb-6">
              <span
                className="px-4 py-2 rounded-full border border-gray-500 text-gray-700 uppercase"
                style={{
                  // fontFamily: "Inter",
                  fontSize: "11.4px",
                  fontWeight: 500,
                  lineHeight: "13.73px",
                  letterSpacing: "1.72px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                PORTFOLIO
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-6 lg:mb-0"
              style={{
                fontSize: "33.79px",
                fontWeight: 400,
                lineHeight: "37.52px",
                letterSpacing: "-2.03px",
                color: "#111111",
              }}
            >
              <span className="lg:hidden">
                Our Success Stories Real
                <br />
                Results, Real Impact
              </span>
              <span className="hidden lg:inline">
                Real Results. Real Impact.
                <br />
                Our Success Stories.
              </span>
            </h2>
          </div>

          {/* See More Button - Both Mobile & Desktop */}
          <button
            onClick={handleSeeMore}
            className="px-6 py-3 bg-button-bg text-white rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity lg:mt-0"
            style={{
              // fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {showAll ? "Show Less" : "See More"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Portfolio Horizontal Scroll - Desktop */}
        <div
          ref={scrollContainerRef}
          className="hidden lg:flex gap-8 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="shrink-0"
              style={{
                width: "min(600px, 85vw)",
              }}
            >
              {/* Image Card */}
              <div
                className={`${item.bgColor} overflow-hidden flex items-center justify-center mb-6`}
                style={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "20.41px",
                  opacity: 1,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width:
                      item.id === 2
                        ? "min(291px, 80%)"
                        : item.id === 3 || item.id === 4
                        ? "100%"
                        : "auto",
                    height:
                      item.id === 2
                        ? "min(205px, 80%)"
                        : item.id === 3 || item.id === 4
                        ? "100%"
                        : "auto",
                    maxWidth:
                      item.id === 2
                        ? "291px"
                        : item.id === 3 || item.id === 4
                        ? "100%"
                        : "90%",
                    maxHeight:
                      item.id === 2
                        ? "205px"
                        : item.id === 3 || item.id === 4
                        ? "100%"
                        : "80%",
                  }}
                  className={
                    item.id === 3 || item.id === 4
                      ? "object-center "
                      : "object-contain"
                  }
                />
              </div>

              {/* Content Below Card */}
              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    color: "rgba(17, 17, 17, 0.8)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mb-6"
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "20px",
                    color: "rgba(17, 17, 17, 0.6)",
                  }}
                >
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs border border-gray-300"
                      style={{
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "rgba(17, 17, 17, 0.8)",
                        background: "rgba(1, 97, 254, 0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Portfolio Card View */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Mobile Card */}
            <div className="mb-6">
              {/* Image Card */}
              <div
                className={`${
                  currentMobileIndex === 0
                    ? "bg-[#B8B8B8]"
                    : portfolioItems[currentMobileIndex - 1].bgColor
                } overflow-hidden flex items-center justify-center mb-6 rounded-3xl`}
                style={{
                  height: "400px",
                }}
              >
                <img
                  src={
                    currentMobileIndex === 0
                      ? mobileOpenImg
                      : portfolioItems[currentMobileIndex - 1].image
                  }
                  alt={
                    currentMobileIndex === 0
                      ? "Our Success Stories"
                      : portfolioItems[currentMobileIndex - 1].title
                  }
                  className={
                    currentMobileIndex === 0 ||
                    portfolioItems[currentMobileIndex - 1]?.id === 3 ||
                    portfolioItems[currentMobileIndex - 1]?.id === 4
                      ? "object-cover object-center w-full h-full"
                      : "object-contain"
                  }
                  style={{
                    width:
                      currentMobileIndex === 0 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 3 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 4
                        ? "100%"
                        : portfolioItems[currentMobileIndex - 1]?.id === 2
                        ? "min(291px, 80%)"
                        : "auto",
                    height:
                      currentMobileIndex === 0 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 3 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 4
                        ? "100%"
                        : portfolioItems[currentMobileIndex - 1]?.id === 2
                        ? "min(205px, 80%)"
                        : "auto",
                    maxWidth:
                      currentMobileIndex === 0 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 3 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 4
                        ? "100%"
                        : portfolioItems[currentMobileIndex - 1]?.id === 2
                        ? "291px"
                        : "90%",
                    maxHeight:
                      currentMobileIndex === 0 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 3 ||
                      portfolioItems[currentMobileIndex - 1]?.id === 4
                        ? "100%"
                        : portfolioItems[currentMobileIndex - 1]?.id === 2
                        ? "205px"
                        : "80%",
                  }}
                />
              </div>

              {/* Content Below Card - Only show when not on intro screen */}
              {currentMobileIndex > 0 && (
                <div>
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "28px",
                      color: "rgba(17, 17, 17, 0.8)",
                    }}
                  >
                    {portfolioItems[currentMobileIndex - 1].title}
                  </h3>

                  <p
                    className="mb-6"
                    style={{
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: "20px",
                      color: "rgba(17, 17, 17, 0.6)",
                    }}
                  >
                    {portfolioItems[currentMobileIndex - 1].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {portfolioItems[currentMobileIndex - 1].tags.map(
                      (tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs border border-gray-300"
                          style={{
                            fontSize: "11px",
                            fontWeight: 400,
                            color: "rgba(17, 17, 17, 0.8)",
                            background: "rgba(1, 97, 254, 0.1)",
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Intro Screen Content */}
              {currentMobileIndex === 0 && (
                <div>
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "24px",
                      fontWeight: 400,
                      lineHeight: "32px",
                      color: "rgba(17, 17, 17, 0.8)",
                    }}
                  >
                    Operational excellence
                  </h3>

                  <p
                    className="mb-6"
                    style={{
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: "20px",
                      color: "rgba(17, 17, 17, 0.6)",
                    }}
                  >
                    Implemented streamlined processes that increased efficiency
                    by 30%, enabling smoother operations and reducing redundant
                    tasks. Our methods ensure consistency and measurable success
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span
                      className="px-3 py-1 rounded-full text-xs border border-gray-300"
                      style={{
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "rgba(17, 17, 17, 0.8)",

                        background: "rgba(1, 97, 254, 0.1)",
                      }}
                    >
                      Operational Excellence
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs border border-gray-300"
                      style={{
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "rgba(17, 17, 17, 0.8)",

                        background: "rgba(1, 97, 254, 0.1)",
                      }}
                    >
                      Client Success
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs border border-gray-300"
                      style={{
                        fontSize: "11px",
                        fontWeight: 400,
                        color: "rgba(17, 17, 17, 0.8)",
                        background: "rgba(1, 97, 254, 0.1)",
                      }}
                    >
                      Efficiency Boost
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleMobilePrev}
                disabled={currentMobileIndex === 0}
                className={`p-3 rounded-full border-2 border-button-bg transition-all group ${
                  currentMobileIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <img src={leftArrow} alt="Previous" className="w-5 h-5" />
              </button>
              <button
                onClick={handleMobileNext}
                disabled={currentMobileIndex === portfolioItems.length}
                className={`p-3 rounded-full border-2 border-button-bg transition-all group ${
                  currentMobileIndex === portfolioItems.length
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <img src={rightArrow} alt="Next" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for all browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
