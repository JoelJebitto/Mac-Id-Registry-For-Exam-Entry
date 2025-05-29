import RoomCard from "../RoomSelector/RoomCard";
import ApprovalStatus from "./ApprovalStatus";
import Timer from "./Timer";
const index = () => {
  const data = {
    name: "Room Name",
    no: "99",
    available: "99",
    capacity: "100",
    description:
      "Tline-clamp-2line-clamp-2line-clamp-2line-clamp-2line-clamp-2line-clamp-2his fisfsf is a room",
  };
  return (
    <div className="flex flex-col my-auto">
      <h1 className="text-4xl font-bold m-auto mb-10 ">Your Exam Room</h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="bg-black/50 flex flex-col  mx-auto my-3 p-5 m-5 flex-1 h-[50vh] shadow-2xl shadow-gray-900 border-gray-800 border rounded-2xl">
          <h1 className="text-3xl mb-5 font-bold">{data.name}</h1>
          <p>
            <span className="font-bold text-lg">No :</span>{" "}
            <span className="my-auto">{data.no}</span>
          </p>
          <p>
            <span className="font-bold text-lg">Available :</span>{" "}
            <span className="my-auto">
              {data.available}/{data.capacity}
            </span>
          </p>
          <p>
            <span className="font-bold text-lg">Description :</span>{" "}
            <span className="my-auto">{data.description}</span>
          </p>

          <div className="flex-1 p-6" />
          <button className="bg-black/80 p-5 rounded-2xl border border-gray-800 text-red-500">
            Cancal Booking
          </button>
        </div>

        <div className="flex-1 flex flex-col mx-auto my-3  m-5 w-full md:ml-5">
          <Timer />
          <ApprovalStatus />
        </div>
      </div>
    </div>
  );
};

export default index;
