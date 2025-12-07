import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import navisLogo from "../assets/navisLogo.png";
import facebookIcon from "../assets/Footer_images/facebook_icon.png";
import linkedinIcon from "../assets/Footer_images/linkedin_icon.png";
import twitterIcon from "../assets/Footer_images/twittet_icon.png";
import instagramIcon from "../assets/Footer_images/instagram_icon.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribe email:", email);
    setEmail("");
  };

  const mobileLinks = {
    column1: [
      { name: "Home V.1", path: "/" },
      { name: "Home V.2", path: "/" },
      { name: "Home V.3", path: "/" },
      { name: "Blog", path: "/blogs" },
      { name: "Contact V.1", path: "/contact" },
      { name: "Contact V.2", path: "/contact" },
      { name: "Contact V.3", path: "/contact" },
      { name: "Services", path: "/service" },
    ],
    column2: [
      { name: "About V.1", path: "/about" },
      { name: "About V.2", path: "/about" },
      { name: "About V.3", path: "/about" },
      { name: "Case studies", path: "/portfolio" },
    ],
  };

  const footerLinks = {
    column1: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Service", path: "/service" },
      { name: "Blog", path: "/blogs" },
    ],
    column2: [
      { name: "About V.1", path: "/about" },
      { name: "About V.2", path: "/about" },
      { name: "About V.3", path: "/about" },
      { name: "Case studies", path: "/portfolio" },
    ],
    column3: [
      { name: "Contact V.1", path: "/contact" },
      { name: "Contact V.2", path: "/contact" },
      { name: "Contact V.3", path: "/contact" },
      { name: "Services", path: "/service" },
    ],
  };

  const socialLinks = [
    { icon: facebookIcon, href: "#", label: "Facebook" },
    { icon: linkedinIcon, href: "#", label: "LinkedIn" },
    { icon: twitterIcon, href: "#", label: "Twitter" },
    { icon: instagramIcon, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="w-full px-6 py-4">
      <div className="bg-blackCard-bg text-white rounded-2xl px-6 py-12 md:py-16 max-w-full mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img
              src={navisLogo}
              alt="Navis Logo"
              style={{
                width: "162.16px",
                height: "38.14px",
                opacity: 1,
              }}
            />
          </div>

          {/* Newsletter */}
          <h3
            style={{
              fontWeight: 400,
              fontSize: "22.9px",
              lineHeight: "30.5px",
              letterSpacing: "-0.92px",
              verticalAlign: "middle",

              opacity: 1,
            }}
            className="mb-4"
          >
            Subscribe to our news later
          </h3>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3 mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full bg-[#3A3A3A] text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:outline-none"
              style={{
                fontSize: "14px",
              }}
            />
            <Button
              type="submit"
              className="w-full bg-button-bg hover:bg-blue-700 text-white rounded-full py-3 font-medium"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "14px",
              }}
            >
              Subscribe
            </Button>
          </form>

          {/* Mobile Links - 2 Column Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-y-4">
              {mobileLinks.column1.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors ${
                    link.name === "Services"
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{
                    fontSize: "14px",
                    fontWeight: link.name === "Services" ? 500 : 400,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-y-4">
              {mobileLinks.column2.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition-colors"
                aria-label={label}
              >
                <img src={icon} alt={label} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div
            className="text-center text-gray-400"
            style={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "17.96px",
              letterSpacing: "-0.36px",
            }}
          >
            © 2025 Temlis. All rights reserved.
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-5 lg:gap-12 mb-14">
          {/* Newsletter Section - Left Side */}
          <div className="md:col-span-3">
            <h3
              className="text-white mb-4"
              style={{
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Subscribe to our news later
            </h3>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4  rounded-full bg-[#3A3A3A] text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:outline-none"
                style={{
                  fontSize: "14px",
                }}
              />
              <Button
                type="submit"
                className="bg-button-bg hover:bg-blue-700 text-white rounded-full px-5 py-3 font-medium"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "14px",
                }}
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className="md:col-span-2 flex gap-16 md:gap-24">
            {/* Links Column 1 */}
            <div className="flex flex-col gap-3">
              {footerLinks.column1.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Links Column 2 */}
            <div className="flex flex-col gap-3">
              {footerLinks.column2.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Links Column 3 */}
            <div className="flex flex-col gap-3">
              {footerLinks.column3.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors ${
                    index === 3
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{
                    fontSize: "14px",
                    fontWeight: index === 3 ? 600 : 400,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Bottom Section */}
        <div className="w-full hidden md:flex   md:pt-6 flex-wrap justify-between items-center gap-6">
          {/* Designer Credit */}
          <p
            className="text-gray-400 text-sm"
            style={{
              fontWeight: 400,
              fontSize: "14px",
            }}
          >
            Designed by Arunijone
          </p>

          {/* Copyright */}
          <p
            className="text-gray-400 text-sm"
            style={{
              fontWeight: 400,
              fontSize: "14px",
            }}
          >
            © 2025 Arunijone. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors"
                aria-label={label}
              >
                <img src={icon} alt={label} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
