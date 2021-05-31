const Button = (props) => {
  const DARK = "bg-gray-900 text-white opacity-95";
  const LIGHT = "bg-gray-50 text-grey-100 opacity-60";

  return (
    <button
      className={`${props.background === "DARK" ? DARK : LIGHT}
      font-medium text-xs py-3 px-10 rounded-full w-10/12 my-2 mx-2  md:w-64`}
    >
      {props.content}
    </button>
  );
};

export default Button;
