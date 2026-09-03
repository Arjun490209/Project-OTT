import type { FC } from "react";
import "remixicon/fonts/remixicon.css";

interface ButtonInterFace {
  children?: string;
  type?: keyof typeof theme;
  icon?: string;
  onClick?: () => void;
}

const theme = {
  primary:
    "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  secondary:
    "bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  dark: "bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  light:
    "bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  success:
    "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  danger:
    "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  warning:
    "bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  info: "bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  outline:
    "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  ghost:
    "bg-transparent hover:bg-gray-100 text-gray-700 px-4 py-2 rounded font-semibold cursor-pointer transition-colors duration-200",

  link: "text-blue-500 hover:text-blue-600 hover:underline font-semibold cursor-pointer transition-colors duration-200",

  disabled:
    "bg-gray-300 text-gray-500 px-4 py-2 rounded font-semibold cursor-not-allowed opacity-60",
};

const Button: FC<ButtonInterFace> = ({
  children = "Submit",
  type = "primary",
  icon,
  onClick,
}) => {
  return (
    <button
      className={`${theme[type]} flex gap-2 items-center`}
      onClick={onClick}
    >
      {icon && <i className={`ri-${icon}`}></i>}{" "}
      {children && <div>{children}</div>}
    </button>
  );
};

export default Button;
