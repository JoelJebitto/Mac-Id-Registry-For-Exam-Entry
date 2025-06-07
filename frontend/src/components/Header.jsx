import Home from "../pages/Home";
import Login from "../pages/Login";
import { usePageStore } from "../store/PageStore";
import ButtonHeader from "./ButtonHeader";

function Header({ isLoggedIn }) {
  const { setCurrentPage } = usePageStore();
  return (
    <div className="w-screen flex shadow-md mb-5 flex-row-reverse pl-2 bg-gray-200">
      {isLoggedIn ? (
        <>
          <ButtonHeader>Logout</ButtonHeader>
          <ButtonHeader>Profile</ButtonHeader>
        </>
      ) : (
        <ButtonHeader onClick={() => setCurrentPage(Login)}>Login</ButtonHeader>
      )}

      <a
        className="text-3xl  font-bold left-0 flex-1 my-auto hover:cursor-pointer"
        onClick={() => setCurrentPage(Home)}
      >
        Exam Booking
      </a>
    </div>
  );
}

export default Header;
