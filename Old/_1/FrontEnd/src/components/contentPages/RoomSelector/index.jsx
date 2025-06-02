import RoomList from "./RoomList";
import { SearchBar } from "../SearchBar";
import { useRoomStore } from "../../../store/RoomStore";
import { useEffect } from "react";
import { useState } from "react";
export const RoomSelector = () => {
  const { data, loading, error, fetchData, filterByName, filterByNo } =
    useRoomStore();
  const [roomList, setRoomList] = useState("");
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  useEffect(() => {
    setRoomList(data);
  }, [data, setRoomList]);

  return (
    <div className="w-full flex-1">
      <h1 className="text-4xl font-bold mb-10 mt-5 flex flex-col ">
        Room Selector
      </h1>
      <SearchBar
        setList={setRoomList}
        filterByName={filterByName}
        filterByNo={filterByNo}
      />
      <RoomList data={roomList} loading={loading} error={error} />
    </div>
  );
};
