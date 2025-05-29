import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(2);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [selectedItem]);

  return (
    <div className="flex flex-row mx-auto">
      <div className="relative inline-block pr-3 text-left" ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          className="bg-black/50 flex  transition-all text-white p-5 rounded-2xl shadow-2xl"
        >
          {open && <p className="transition-all hidden sm:block">Search By</p>}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={"size-6" + (open ? " sm:ml-3" : " ")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute mt-2 w-40 bg-black/95 p-3 border border-gray-900 rounded-2xl shadow-2xl z-10">
            <ul className="rounded-2xl">
              <li
                className="px-4 py-2 hover:bg-black/50  cursor-pointer"
                onClick={() => setSelectedItem(1)}
              >
                Room Name
              </li>
              <li
                className="px-4 py-2 hover:bg-black/50  cursor-pointer"
                onClick={() => setSelectedItem(2)}
              >
                Room No
              </li>
              {/* <li className="px-4 py-2 hover:bg-black/50  cursor-pointer"> */}
              {/*   Option 3 */}
              {/* </li> */}
            </ul>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder={
          selectedItem == 1
            ? "Search by Name"
            : selectedItem == 2
              ? "Search by Room No"
              : "Seclect Category "
        }
        disabled={selectedItem == 0}
        className={
          "outline-none px-7 focus:outline-none focus:ring-0 w-full  p-5 rounded-4xl shadow-2xl disabled:cursor-not-allowed bg-black/50"
        }
      />
    </div>
  );
};
