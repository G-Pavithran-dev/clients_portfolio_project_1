import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "@/globalComponent/PrimaryButton";
import arunImage from "@/assets/arunAnna_image.png";
import alternateImage from "@/assets/alternate.jpg";
import downloadIcon from "@/assets/Home's_images/download_icon.png";

const HeroSection = () => {
  const desktopStats = [
    {
      value: "95%",
      label: "Client satisfaction across multi-service projects",
    },
    {
      value: "10+",
      label: "Innovative solutions delivered in UX, marketing, and research",
    },
    {
      value: "₹5L",
      label: "Worth of strategic insights provided across industries",
    },
    {
      value: "5K+",
      label:
        "People indirectly reached through digital platforms and client networks",
    },
  ];

  const mobileStats = [
    {
      value: "95%",
      label: "Complete customer satisfaction",
    },
    {
      value: "10+",
      label: "Innovation and valuable insight",
    },
    {
      value: "$10m",
      label: "Highly efficient financial strategies",
    },
    {
      value: "50m",
      label: "Users worldwide, providing them with",
    },
  ];

  return (
    <section className="w-full py-4 md:py-12 lg:py-4 min-w-[320px]">
      <div className="w-full rounded-lg bg-gray-bg border border-gray-bg p-6 md:p-8 lg:p-12">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Heading */}
          <h1
            className="mb-4 text-center text-[#111111]"
            style={{
              // fontFamily: "Inter",
              fontSize: "57.84px",
              fontWeight: 400,
              lineHeight: "66.33px",
              letterSpacing: "-3.47px",
              verticalAlign: "middle",
            }}
          >
            Expert guidance, tailored solution
          </h1>

          {/* Description */}
          <p
            className="mb-6 text-center px-2 font-light text-[#666666] align-middle"
            style={{
              fontSize: "13.58px",
              lineHeight: "20.41px",
              letterSpacing: "0%",
            }}
          >
            Easily adapt to changes and scale your operations with our flexible
            infrastructure, designed to support your business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-6 px-2">
            <Link to="/about" className="flex-1">
              <PrimaryButton
                fullWidth={true}
                className="py-3"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                About Me
              </PrimaryButton>
            </Link>

            <button
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-medium flex-1"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Download Resume
              <img src={downloadIcon} alt="Download" className="w-4 h-4" />
            </button>
          </div>

          {/* Image Container */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-[500px]">
              <img
                src={alternateImage}
                alt="Profile"
                className="rounded-2xl w-full h-auto object-center"
                style={{
                  aspectRatio: "4/3",
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2  items-center mb-16">
          {/* Left Content */}
          <div>
            <h1
              className="mb-6"
              style={{
                // fontFamily: "Inter",
                fontSize: "57.84px",
                fontWeight: 400,
                lineHeight: "66.33px",
                letterSpacing: "-3.47px",
                verticalAlign: "middle",
                color: "#111111",
              }}
            >
              Expert guidance, tailored to your needs
            </h1>
            <p
              className="mb-8 font-light text-[#666666] align-middle"
              style={{
                // fontFamily: "Inter",
                fontSize: "13.58px",
                lineHeight: "20.41px",
                letterSpacing: "0%",
                width: "413.66px",
                height: "36.91px",
                opacity: 1,
              }}
            >
              Our flexible infrastructure empowers your business to adapt
              quickly, stay efficient, and scale seamlessly as you grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <PrimaryButton
                  fullWidth={false}
                  className="px-6 py-3"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  About Me
                </PrimaryButton>
              </Link>

              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-600 text-[#0161FE] hover:bg-blue-50 transition-colors"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "17.1px",
                  letterSpacing: "-0.06px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Download Resume
                <img
                  src={downloadIcon}
                  alt="Download"
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="flex justify-end">
            <div className="bg-gray-300 rounded-lg w-full max-w-md h-[450px]">
              <div className="relative w-full h-full">
                {/* Gradient Background */}

                <img
                  src={arunImage}
                  alt="Profile"
                  className="rounded-lg w-full h-full object-cover object-top relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider - Hidden on mobile */}
        {/* <div className="border-t border-dashed border-gray-300 mb-8 lg:mb-16 hidden lg:block"></div> */}
      </div>

      {/* Stats Section - Outside the wrapper */}
      <div className="w-full mt-8 md:mt-8 lg:mt-8">
        {/* Mobile Stats */}
        <div className="grid grid-cols-2 gap-6 px-2 lg:hidden">
          {mobileStats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3
                className="mb-4"
                style={{
                  // fontFamily: "Inter",
                  fontSize: "51.25px",
                  fontWeight: 400,
                  lineHeight: "61.52px",
                  letterSpacing: "-1.54px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {stat.value}
              </h3>
              <p
                className="text-gray-600"
                style={{
                  fontFamily: "Inter",
                  fontSize: "13.3px",
                  fontWeight: 300,
                  lineHeight: "20.02px",
                  letterSpacing: "-0.13px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  opacity: 1,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Stats */}
        <div className="hidden lg:grid grid-cols-4 gap-8 px-2">
          {desktopStats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3
                className="mb-2"
                style={{
                  // fontFamily: "Inter",
                  fontSize: "51.25px",
                  fontWeight: 400,
                  lineHeight: "61.52px",
                  letterSpacing: "-1.54px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {stat.value}
              </h3>
              <p
                className="text-gray-600"
                style={{
                  fontFamily: "Inter",
                  fontSize: "13.3px",
                  fontWeight: 300,
                  lineHeight: "20.02px",
                  letterSpacing: "-0.13px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  opacity: 1,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
