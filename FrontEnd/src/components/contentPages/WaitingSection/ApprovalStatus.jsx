const ApprovalStatus = () => {
  return (
    <div className="bg-black/50 flex-1 mt-5 rounded-2xl p-5">
      <h1 className="text-2xl pb-5 font-semibold">Approval Status:</h1>
      <p className="flex">
        <span className="font-bold text-lg mr-2">Status : </span>
        <StatusText status={1} />
      </p>
      <p className="flex">
        <span className="font-bold text-lg mr-2">Waiting List : </span>
        <span className="my-auto">24</span>
      </p>
    </div>
  );
};

const StatusText = ({ status }) => {
  return status == 0 ? (
    <span className="font-bold flex my-auto  text-green-500">
      Approved
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </span>
  ) : status == 1 ? (
    <span className="font-bold flex my-auto  text-yellow-500">
      Pending
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    </span>
  ) : (
    status == 2 && (
      <span className="font-bold flex my-auto  text-red-500">
        Rejected
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </span>
    )
  );
};

export default ApprovalStatus;
