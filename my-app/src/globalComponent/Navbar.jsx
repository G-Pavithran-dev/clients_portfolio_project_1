import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MobileMenuDrawer from "./MobileMenuDrawer";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blogs", path: "/blogs" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 max-w-full mx-auto rounded-lg bg-gray-bg border border-gray-bg z-50 mt-2 backdrop-blur-sm bg-opacity-95">
      <div className="w-full px-5 py-3">
        <div className="w-full flex items-center justify-between">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex w-full items-center justify-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 text-center align-middle ${
                    isActive ? "text-button-bg" : "text-[#111111] "
                  }`
                }
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "15.68px",
                  lineHeight: "22.35px",
                  letterSpacing: "-0.08px",
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <Link to="/contact" className="hidden md:block">
            <PrimaryButton
              fullWidth={false}
              className="px-8 py-2 h-11 shadow-sm"
              style={{
                fontWeight: 500,
                fontSize: "15.78px",
                lineHeight: "22.47px",
                letterSpacing: "-0.08px",
              }}
            >
              Contact
            </PrimaryButton>
          </Link>

          {/* Mobile Menu Drawer Component */}
          <MobileMenuDrawer
            isOpen={isMenuOpen}
            onToggle={toggleMenu}
            navLinks={navLinks}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
