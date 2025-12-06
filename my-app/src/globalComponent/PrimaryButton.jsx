import React from "react";

const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = true,
  bgColor = "bg-button-bg",
  ...props
}) => {
  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${widthClass} ${bgColor} hover:bg-blue-700 flex items-center justify-center text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 500,
        fontSize: "15.78px",
        lineHeight: "22.47px",
        letterSpacing: "-0.08px",
        textAlign: "center",
        verticalAlign: "middle",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
