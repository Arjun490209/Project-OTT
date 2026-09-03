import type { FC } from "react";

interface inputInterface {
  placeholder?: string;
  name: string;
  type?: string;
  required?: boolean;
  key?: string | number;
}
const Input: FC<inputInterface> = ({
  placeholder,
  name,
  type = "text",
  required = false,
  key = 0,
}) => {
  return (
    <input
      key={key}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="px-4 py-2 w-full border border-gray-600 focus:border-violet-600 focus:outline-none rounded-md"
    />
  );
};

export default Input;
