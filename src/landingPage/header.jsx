import logo from "../assets/practibug_logo.webp";
const Header = () => {
  return (
    <header className="header absolute top-3 left-0 w-full z-50">
      <div className="max-w-5xl header__logo flex items-center justify-between mx-auto py-2 px-5 bg-gray-900/40 shadow-md shadow-gray-500 dark:shadow-none dark:bg-gray-900/40 backdrop-blur-2xl rounded-full shadow-md ">
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-medium text-white"
        >
          <img src={logo} alt="Practi Logo" class="w-12 h-12" />
          <span>
            Practi<span className="text-primary">&lt;Bug&gt;</span>
          </span>
        </a>
        <a
          href="/"
          className="text-xs font-medium text-white hover:text-purple-500 transition-colors duration-300 flex items-center gap-1"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20 12H4M4 12L10 6M4 12L10 18"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Back to Menu
        </a>
      </div>
    </header>
  );
};
export default Header;
