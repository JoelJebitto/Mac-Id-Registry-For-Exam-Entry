import { useState } from "react";
import Button from "./Button";
import Login from "./Login";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black/70 hover:bg-black/75 p-3 transition-all  font-mono flex shadow-2xl hover:p-4 text-gray-200 mx-auto rounded-2xl lg:rounded-4xl my-1 mt-5 hover:mt-6  w-[95%] xs:w-7/10 md:w-10/11 xl:w-[70rem]">
      <h1 className="text-2xl px-3 transition-all hover:text-gray-50 font-bold my-auto flex-1">
        Exam Entry
      </h1>
      <Button onClick={() => setIsOpen(true)}>Login</Button>
      <Login isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Header;
