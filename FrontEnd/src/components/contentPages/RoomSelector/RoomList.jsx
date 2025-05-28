import RoomCard from "./RoomCard";

const RoomList = () => {
  const data = {
    name: "Room Name",
    no: "99",
    available: "99",
    capacity: "100",
    description:
      "Tline-clamp-2line-clamp-2line-clamp-2line-clamp-2line-clamp-2line-clamp-2his fisfsf is a room",
  };
  return (
    <div className="flex flex-wrap bg-black/50 my-5 p-5 rounded-2xl shadow-2xl shadow-gray-900 scrollbar-hidden  space-y-4 h-[calc(100vh-26.4rem)] overflow-auto">
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
      <RoomCard data={data} />
    </div>
  );
};

export default RoomList;
