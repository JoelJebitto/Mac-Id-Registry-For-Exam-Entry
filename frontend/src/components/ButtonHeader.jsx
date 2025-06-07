function ButtonHeader({ children, ...props }) {
  return (
    <button
      className="p-3 m-2 transition-all rounded-xl hover:bg-gray-300 hover:cursor-pointer text-lg font-semibold"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonHeader;
