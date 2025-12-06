import React from "react";

const StatCard = ({
  heading,
  description,
  bgColor = "bg-black",
  textColor = "text-white",
  headingSize = "text-4xl md:text-6xl lg:text-6xl",
  rounded = "rounded-2xl",
  padding = "p-2",
  className = "",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${rounded} ${padding} flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      {/* Heading */}
      {heading && (
        <h3
          className={`${headingSize}`}
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
  );
};

export default StatCard;
