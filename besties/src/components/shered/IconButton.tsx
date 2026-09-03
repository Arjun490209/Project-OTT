import type { FC } from "react";
import "remixicon/fonts/remixicon.css";

interface IconButtonInterface {
  icon: string;
  type?: keyof typeof theme;
  onClick?: () => void;
  key?: string | number;
  label?: string;
  size?: "sm" | "md" | "lg";
  children?: string;
}

const theme = {
  primary:
    "bg-blue-50 text-blue-600 hover:bg-blue-100 rounded font-semibold cursor-pointer transition-colors duration-200",

  secondary:
    "bg-purple-50 text-purple-600 hover:bg-purple-100 rounded font-semibold cursor-pointer transition-colors duration-200",

  dark: "bg-gray-100 text-gray-900 hover:bg-gray-200 rounded font-semibold cursor-pointer transition-colors duration-200",

  light:
    "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded font-semibold cursor-pointer transition-colors duration-200 shadow-sm",

  success:
    "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded font-semibold cursor-pointer transition-colors duration-200",

  danger:
    "bg-rose-50 text-rose-600 hover:bg-rose-100 rounded font-semibold cursor-pointer transition-colors duration-200",

  warning:
    "bg-amber-50 text-amber-600 hover:bg-amber-100 rounded font-semibold cursor-pointer transition-colors duration-200",

  info: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 rounded font-semibold cursor-pointer transition-colors duration-200",

  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-100 rounded font-semibold cursor-pointer transition-colors duration-200",

  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-600 rounded font-semibold cursor-pointer transition-colors duration-200",

  disabled:
    "bg-gray-100 text-gray-400 rounded font-semibold cursor-not-allowed opacity-60",
};

const sizes = {
  sm: "p-1.5 text-sm",
  md: "p-2.5 text-base",
  lg: "p-3.5 text-lg",
};

const IconButton: FC<IconButtonInterface> = ({
  icon,
  type = "primary",
  onClick,
  key = 0,
  label,
  size = "md",
  children = null,
}) => {
  return (
    <button
      key={key}
      className={`${theme[type]} ${sizes[size]} flex items-center justify-center gap-2`}
      onClick={onClick}
      aria-label={label}
    >
      <i className={`ri-${icon}`}></i>
      {label && <span>{label}</span>}
      {children && children}
    </button>
  );
};

export default IconButton;
