import { useEffect, useState } from "react";
import NotLogedIn from "./NotLogedIn";
import { RoomSelector } from "./RoomSelector";
import WaitingSection from "./WaitingSection";
import { useSelectedRoomStore } from "../../store/SelectedRoomStore";
import { useUserStore } from "../../store/UserStore";

function Content() {
  const { roomNo } = useSelectedRoomStore();
  const { isTokenExpired, role, username } = useUserStore();

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1); // Trigger remount
  }, [username]);

  return (
    <div
      key={key}
      className="bg-black/65 p-7 pb-0 flex font-mono transition-all shadow-2xl mb-5 text-gray-200 mx-auto rounded-2xl my-10 flex-1 w-[95%] xs:w-7/10 md:w-10/11 xl:w-[72rem]"
    >
      {!isTokenExpired() && role === "STUDENT" ? (
        roomNo === "" ? (
          <RoomSelector />
        ) : (
          <WaitingSection />
        )
      ) : (
        <NotLogedIn />
      )}
    </div>
  );
}

export default Content;
