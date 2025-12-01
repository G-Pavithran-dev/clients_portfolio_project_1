import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const MobileMenuDrawer = ({ isOpen, onToggle, navLinks }) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="md:hidden ml-auto relative group text-gray-700 hover:text-button-bg transition-all duration-300 p-3 rounded-lg hover:bg-gray-100 active:scale-95"
        aria-label="Toggle menu"
      >
        <div className="relative">
          {isOpen ? (
            <X
              size={24}
              className="transition-transform duration-300 rotate-90"
            />
          ) : (
            <Menu size={24} className="transition-transform duration-300" />
          )}
        </div>
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-b-2xl border-t border-gray-200 animate-in slide-in-from-top duration-300 z-50">
          <div className="px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={onToggle}
                className={({ isActive }) =>
                  `transition-all duration-300 text-center py-3 px-4 rounded-lg hover:bg-gray-50 ${
                    isActive
                      ? "text-button-bg bg-blue-50 font-semibold"
                      : "text-gray-700 "
                  }`
                }
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "15.68px",
                  lineHeight: "22.35px",
                  letterSpacing: "-0.08px",
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Contact Button - Mobile */}
            <Link to="/contact" onClick={onToggle} className="mt-2">
              <Button
                className="w-full bg-button-bg hover:bg-blue-700 text-white rounded-full px-8 py-3 h-12 shadow-md hover:shadow-lg text-center transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
                  fontSize: "15.78px",
                  lineHeight: "22.47px",
                  letterSpacing: "-0.08px",
                }}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuDrawer;
