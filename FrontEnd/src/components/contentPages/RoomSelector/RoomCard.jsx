import { useState } from "react";
import MacIdModel from "./MacIdModel";

const RoomCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black/50 mx-auto my-3 p-5 m-5 xl:max-w-3/10 shadow-2xl h-fit shadow-gray-900 border-gray-800 border lg:max-w-6/13 md:max-w-7/10 rounded-2xl">
      <h1 className="text-3xl mb-5 font-bold">{data.name}</h1>
      <p>
        <span className="font-bold text-lg">No : </span>
        {data.roomNo}
      </p>
      <p>
        <span className="font-bold text-lg">Capacity: </span>
        {data.capacity}
      </p>
      <p>
        <span className="line-clamp-2">
          <span className="font-bold text-lg">Description :</span>{" "}
          {data.description}
        </span>
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-gray-900 p-3 mt-5 rounded-xl cursor-pointer"
      >
        Select Room
      </button>

      <MacIdModel
        data={data}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default RoomCard;
