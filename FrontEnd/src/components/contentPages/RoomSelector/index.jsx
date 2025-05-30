import RoomList from "./RoomList";
import { SearchBar } from "../SearchBar";

export const RoomSelector = () => {
  return (
    <div className="w-full flex-1">
      <h1 className="text-4xl font-bold mb-10 mt-5 flex flex-col ">
        Room Selector
      </h1>
      <SearchBar />
      <RoomList />
    </div>
  );
};
