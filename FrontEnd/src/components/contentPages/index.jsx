import { RoomSelector } from "./RoomSelector";

function Content() {
  return (
    <div className="bg-black/65 p-7 font-mono transition-all shadow-2xl   text-gray-200 mx-auto rounded-2xl my-10 flex-1  w-[95%] xs:w-7/10 md:w-10/11 xl:w-[70rem]">
      <RoomSelector />
    </div>
  );
}

export default Content;
