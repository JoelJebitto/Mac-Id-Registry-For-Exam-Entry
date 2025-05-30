import ApprovalStatus from "./ApprovalStatus";
import Timer from "./Timer";
import { useSelectedRoomStore } from "../../../store/SelectedRoomStore";
import { useRoomStore } from "../../../store/RoomStore";
const WaitingSection = () => {
  const { macId, roomNo, setValue } = useSelectedRoomStore();
  const { findRoom } = useRoomStore();
  const data = findRoom(roomNo);
  console.log(data);
  const handleCancalBooking = () => {
    setValue("", "");
  };
  return (
    <div className="flex flex-col my-auto">
      <h1 className="text-4xl font-bold m-auto mb-10 ">Your Exam Room</h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="bg-black/50 flex flex-col  mx-auto my-3 p-5 m-5 flex-1 h-fit shadow-2xl shadow-gray-900 border-gray-800 border rounded-2xl">
          <h1 className="text-3xl mb-5 font-bold">{data.name}</h1>
          <p>
            <span className="font-bold text-lg">No :</span>{" "}
            <span className="my-auto">{data.roomNo}</span>
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
          <p>
            <span className="font-bold text-lg">Your MacId :</span>{" "}
            <span className="my-auto">{macId}</span>
          </p>
          <div className=" h-40" />
          <button
            onClick={() => handleCancalBooking()}
            className="bg-black/80  p-5 rounded-2xl border border-gray-800 text-red-500"
          >
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

export default WaitingSection;
