import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { Download } from "lucide-react";
import arunImage from "../assets/arunAnna_image.png";
import alternateImage from "../assets/alternate.jpg";

const HeroSection = () => {
  const stats = [
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

  return (
    <section className="w-full py-8 md:py-12 lg:py-20 px-4 md:px-6 min-w-[320px]">
      <div className="max-w-7xl mx-auto min-w-[280px]">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Heading */}
          <h1
            className="mb-4 text-center"
            style={{
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: 600,
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
            }}
          >
            Expert guidance, tailored solution
          </h1>

          {/* Description */}
          <p
            className="text-gray-600 mb-6 text-center px-2"
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "1.6",
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
              <Download size={16} />
              Download Resume
            </button>
          </div>

          {/* Image Container */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={alternateImage}
                alt="Profile"
                className="rounded-2xl w-full h-full object-center"
                style={{
                  aspectRatio: "4/3",
                  maxHeight: "300px",
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
                fontFamily: "Inter",
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "1.2",
                letterSpacing: "-0.5px",
              }}
            >
              Expert guidance, tailored to your needs
            </h1>
            <p
              className="text-gray-600 mb-8"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
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
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                style={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                <Download size={18} />
                Download Resume
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
        <div className="border-t border-dashed border-gray-300 mb-8 lg:mb-16 hidden lg:block"></div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Inter",
                  fontSize: "32px",
                  fontWeight: 600,
                  lineHeight: "1",
                }}
              >
                {stat.value}
              </h3>
              <p
                className="text-gray-600"
                style={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "1.4",
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
