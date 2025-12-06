import React from "react";

const TextCard = ({
  heading,
  description,
  bgColor = "bg-black",
  textColor = "text-white",
  headingSize = "text-5xl md:text-6xl lg:text-7xl",
  rounded = "rounded-2xl",
  padding = "p-4",
  className = "",
  icon,
  minHeight = "",
  iconCircle = false,
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${rounded} ${padding} ${minHeight} font-medium flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      {/* Content */}
      <div className="flex flex-col justify-between h-full">
        {/* Top Section: Icon */}
        <div>
          {/* Icon with optional circle background */}
          {icon && (
            <div className="mb-4">
              {iconCircle ? (
                <div className="w-12 h-12 rounded-full bg-[#4d90fe] border- border-opacity-20 flex items-center justify-center">
                  {icon}
                </div>
              ) : (
                icon
              )}
            </div>
          )}
        </div>

        {/* Bottom Section: Heading and Description */}
        <div>
          {/* Heading */}
          {heading && (
            <h3
              className={`${headingSize} mb-2`}
              style={{
                // fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "1",
              }}
            >
              {heading}
            </h3>
          )}

          {/* Description */}
          {description && (
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "13.16px",
                lineHeight: "18.65px",
                letterSpacing: "-0.1px",
                verticalAlign: "middle",
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextCard;
