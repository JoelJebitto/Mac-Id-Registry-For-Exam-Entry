const RoomCard = () => {
  return (
    <div className="bg-black/50 mx-auto my-3 p-5 m-5 xl:max-w-3/10 shadow-2xl shadow-gray-900 border-gray-800 border lg:max-w-6/13 md:max-w-7/10 rounded-2xl">
      <h1 className="text-3xl mb-5 font-bold">Room Name</h1>
      <p>
        <span className="font-bold text-lg">No : </span>99
      </p>
      <p>
        <span className="font-bold text-lg">Available : </span> 90/100
      </p>
      <p>
        <span className="line-clamp-2">
          <span className="font-bold text-lg">Description :</span>{" "}
          Tline-clamp-2line-clamp-2line-clamp-2line-clamp-2line-clamp-2line-clamp-2his
          fisfsf is a room
        </span>
      </p>
      <button className="w-full bg-gray-900 p-3 mt-5 rounded-xl cursor-pointer">
        Select Room
      </button>
    </div>
  );
};

export default RoomCard;
