import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3 px-4 lg:px-12 dark:bg-gray-900 dark:text-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-box w-52 z-50">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold underline"
                    : "hover:text-green-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutme"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold underline"
                    : "hover:text-green-600"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold underline"
                    : "hover:text-green-600"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactme"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold underline"
                    : "hover:text-green-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="w-16 h-16">
          <img src="" className="w-full h-full rounded-full" alt="Logo" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold border-b-2 border-green-500 pb-1"
                  : "hover:text-green-500 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold border-b-2 border-green-500 pb-1"
                  : "hover:text-green-500 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold border-b-2 border-green-500 pb-1"
                  : "hover:text-green-500 transition duration-300"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactme"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold border-b-2 border-green-500 pb-1"
                  : "hover:text-green-500 transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        <Link
          to=""
          className="btn rounded-full bg-green-500 text-white font-bold shadow-md hover:bg-green-600"
        >
          Hire Me
        </Link>

        {/* Light/Dark Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-outline border-0 hover:bg-green-400"
        >
          {theme === 'light' ? <MoonIcon className="text-black" /> : <SunIcon className="text-yellow-400" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
