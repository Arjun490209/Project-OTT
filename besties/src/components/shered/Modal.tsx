import "remixicon/fonts/remixicon.css";
import "animate.css";
import type { FC, ReactNode } from "react";

interface ModalProps {
  title?: string;
  children?: ReactNode;
  open?: boolean;
  close?: () => void;
  key?: string | number;
}

const Modal: FC<ModalProps> = ({ open, close, title, children, key = 0 }) => {
  return (
    <>
      {open && (
        <div
          key={key}
          className="h-screen w-full fixed top-0 left-0 bg-black bg-opa flex justify-center items-center animate__animated animate__fadeIn"
          style={{
            background: "rgba(0,0,0,0.9)",
          }}
        >
          <div className="w-120 px-6 py-4 bg-white rounded-lg shadow-lg border border-gray-100 space-y-3 relative animate__animated animate__bounceIn">
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            <div className="text-gray-500">{children}</div>
            <button
              onClick={close}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <i className="ri-close-circle-fill text-lg"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
