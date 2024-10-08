import React from "react";

export const Badge = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold";

  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-purple-100 text-purple-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    outline: "bg-transparent border border-gray-300 text-gray-800",
  };

  const variantStyle = variants[variant] || variants.default;

  return (
    <span className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
