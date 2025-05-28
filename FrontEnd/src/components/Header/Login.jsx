import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Login({ isOpen, onClose }) {
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
        className="bg-purple-950/99 p-7 flex flex-col rounded-2xl shadow-2xl my-10 w-[80%] xs:w-5/10 md:w-6/11 xl:w-[40rem] "
      >
        <h1 className="text-5xl font-bold mb-10 mt-5">Login</h1>

        <label className="font-semibold my-3" htmlFor="username">
          User Name
        </label>
        <input
          className="bg-black/45 p-5 rounded-2xl focus:bg-black/60  outline-none focus:outline-none focus:ring-0"
          type="text"
          id="username"
        />
        <label className="font-semibold my-3" htmlFor="password">
          Password
        </label>
        <input
          className="bg-black/45 p-5 rounded-2xl focus:bg-black/60 outline-none focus:outline-none focus:ring-0"
          type="password"
          id="password"
        />

        <div className="flex mt-10 ">
          <button
            onClick={onClose}
            className="flex-1 mr-5 mt-4 text-red-700 my-5 p-5 bg-black/60 hover:bg-black/70 rounded-2xl"
          >
            Close
          </button>
          <button className="flex-1 mt-4 text-blue-700 my-5 p-5 bg-black/60 hover:bg-black/70 rounded-2xl">
            Login
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("model"),
  );
}
