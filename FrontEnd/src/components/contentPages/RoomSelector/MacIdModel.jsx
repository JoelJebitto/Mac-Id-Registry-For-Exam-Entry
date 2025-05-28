import Model from "../../Model";

export default function MacIdModel({ isOpen, onClose, data }) {
  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <div className="bg-black/60 p-5 rounded-xl shadow-2xl">
        <h1 className="text-3xl mb-3 font-bold ">Your Selection :</h1>
        <div className="flex">
          <div className="flex-1" />
          <div className="bg-black/70 p-5 rounded-2xl shadow-2xl  lg:w-9/10  ">
            <p>
              <span className="font-bold text-lg">Name: </span>
              {data.name}
            </p>
            <p>
              <span className="font-bold text-lg">No : </span>
              {data.no}
            </p>
            <p>
              <span className="font-bold text-lg">Available : </span>{" "}
              {data.available}/{data.capacity}
            </p>
            <p>
              <span className="line-clamp-2">
                <span className="font-bold text-lg">Description :</span>{" "}
                {data.description}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-7 flex-col sm:flex-row bg-black/70 p-5 rounded-2xl shadow-2xl">
        <label
          htmlFor="macid"
          className="m-auto mb-4 sm:mb-auto font-bold text-lg"
        >
          Mac Id :{" "}
        </label>
        <input
          type="text"
          name="macid"
          id="macid"
          className="flex-1 sm:ml-3 bg-black/90 focus:bg-black/70 p-4 rounded-xl border border-gray-950 outline-none focus:outline-none focus:ring-0 "
        />
      </div>
      <div className="flex my-5">
        <button className="flex-1 text-green-500 font-bold  bg-black/60 hover:bg-black/70 p-5 rounded-xl mr-2">
          Book
        </button>
        <button
          className="flex-1 text-red-500 font-bold bg-black/60 hover:bg-black/70 p-5 rounded-xl"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </Model>
  );
}
