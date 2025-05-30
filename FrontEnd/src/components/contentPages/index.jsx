import NotLogedIn from "./NotLogedIn";
import { RoomSelector } from "./RoomSelector";
import WaitingSection from "./WaitingSection";
import { useSelectedRoomStore } from "../../store/SelectedRoomStore";

function Content() {
  const { roomNo } = useSelectedRoomStore();
  return (
    <div
      className="bg-black/65 p-7 pb-0 flex  font-mono transition-all shadow-2xl mb-5   text-gray-200 mx-auto rounded-2xl my-10 flex-1  w-[95%] xs:w-7/10
      md:w-10/11 xl:w-[72rem]"
    >
      {roomNo == "" ? <RoomSelector /> : <WaitingSection />}

      {/* <NotLogedIn /> */}
    </div>
  );
}

export default Content;
