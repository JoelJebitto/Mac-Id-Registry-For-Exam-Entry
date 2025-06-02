function Button({ children, className, ...props }) {
  return (
    <button
      className={
        className +
        " " +
        "p-5 hover:bg-black/70 rounded-2xl transition-all  my-auto hover:text-gray-50 font-semibold"
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
