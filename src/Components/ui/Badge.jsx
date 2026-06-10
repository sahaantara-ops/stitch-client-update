import React from "react";

const badgeVariants = {
  default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  primary: "bg-[#FF62BB] text-white",
  secondary: "bg-[#B331F1] text-white",
  accent: "bg-[#FF97D0] text-gray-900",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-400 text-black",
  error: "bg-red-500 text-white",
};

const Badge = ({ children, variant = "accent" }) => {
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-xl inline-block ${badgeVariants[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;