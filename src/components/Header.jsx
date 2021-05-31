import { ReactComponent as Logo } from "../assets/teslaLogo.svg";

const Header = (props) => {
  return (
    <header className="w-screen my-2 px-4 fixed mx-auto flex justify-between inline-block font-medium">
      <Logo />
      <div className="absolute w-screen my-2 flex justify-center invisible xl:visible">
        <a href="#ModelS" className="mx-2">
          Model S
        </a>
        <a href="#Model3" className="mx-2">
          Model 3
        </a>
        <a href="#ModelX" className="mx-2">
          Model X
        </a>
        <a href="#ModelY" className="mx-2">
          Model Y
        </a>
        <a href="#SolarRoof" className="mx-2">
          Solar Roof
        </a>
        <a href="#SolarPanels" className="mx-2">
          Solar Panels
        </a>
      </div>
      <div className="my-auto flex justify-end">
        <button
          className="absolute top-1 right-3"
          onClick={(e) =>
            props.menuState === true
              ? props.setMenuState(false)
              : props.setMenuState(true)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
