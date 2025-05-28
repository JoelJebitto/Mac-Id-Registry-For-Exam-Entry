import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Model({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className=" inset-0 text-gray-200 fixed bg-black/40 flex transition-opacity items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-purple-950/99 p-7 flex flex-col rounded-2xl shadow-2xl my-10 w-[80%] xs:w-6/10 md:w-7/11 xl:w-[40rem] "
      >
        {children}
      </div>
    </div>,
    document.getElementById("model"),
  );
}
