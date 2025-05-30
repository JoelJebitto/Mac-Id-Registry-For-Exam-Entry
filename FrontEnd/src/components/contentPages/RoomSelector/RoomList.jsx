import RoomCard from "./RoomCard";
import { useRoomStore } from "../../../store/RoomStore";
import { useEffect } from "react";
import Loading from "../../Loading";
const RoomList = () => {
  const { data, loading, error, fetchData } = useRoomStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(data);
  return (
    <div className="flex flex-wrap bg-black/50 my-5 p-5 rounded-2xl shadow-2xl shadow-gray-900 scrollbar-hidden w-full  space-y-4 h-[calc(100vh-26.4rem)] overflow-auto">
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="w-full">{error}</p>
      ) : Array.isArray(data) ? (
        data.map((item) => <RoomCard key={item.roomNo} data={item} />)
      ) : null}
    </div>
  );
};

export default RoomList;
