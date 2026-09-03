import type { FC, ReactNode } from "react";

interface DrawerProps {
  title?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}
const Drawer: FC<DrawerProps> = ({
  title = "DrawerTitle",
  children,
  open = true,
  onClose,
}) => {
  return (
    <div
      style={{
        right: open ? 0 : "-50%",
        transition: ".3s",
      }}
      className="shadow-2xl p-6 fixed top-0 w-6/12 h-screen overflow-auto z-10000 space-y-3"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="border-b border-gray-200 -mx-6" />
      <div className="text-gray-500">{children}</div>
      <button
        className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 cursor-pointer"
        onClick={onClose}
      >
        <i className="ri-close-circle-fill text-xl"></i>
      </button>
    </div>
  );
};

export default Drawer;
