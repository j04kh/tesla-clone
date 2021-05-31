const Menu = (props) => {
  const items = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Test Drive",
    "Charging",
    "Find Us",
    "Support",
    "Careers",
    "Shop",
    "Account",
    "More",
  ];

  return (
    <div
      className={`h-screen overflow-scroll w-10/12 sm:w-3/12 z-40 absolute right-0 bg-gray-200 ${
        props.visible
          ? "visible transition duration-500 ease-in-out filter drop-shadow-2xl"
          : "hidden"
      }`}
    >
      <button
        className="visible absolute right-4 top-4 h-6 w-6"
        onClick={(e) =>
          props.menuState === true
            ? props.setMenuState(false)
            : props.setMenuState(true)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="pt-16 pl-6 pr-6">
        {items.map((item) => {
          return (
            <p className="m-1 rounded-lg font-medium text-gray-700 transition duration-500 ease-in-out hover:bg-gray-300 p-2">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
