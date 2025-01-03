import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className="navbar sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3 px-4 lg:px-12 dark:bg-gray-900 dark:text-white">
        {/* Navbar Start */}
        <div className="navbar-start ">
          <div className="dropdown z-50">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <Link to="/" className="w-16 h-16 flex ml-8 flex-col justify-center items-center">
            {/* <img src='' className="w-full h-full " alt="Logo" /> */}
            <h2 className="text-3xl font-bold font-mono">SANT
            <span className="text-green-500">ANU</span></h2>
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
          <button
            onClick={toggleModal}
            className="btn rounded-full bg-green-500 text-white font-bold shadow-md hover:bg-green-600"
          >
            Hire Me
          </button>

          {/* Light/Dark Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-outline border-0 hover:bg-green-400"
          >
            {theme === "light" ? (
              <MoonIcon className="text-black" />
            ) : (
              <SunIcon className="text-yellow-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg w-full max-w-md p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">What project are you looking for?</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
              >
                ✕
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Project Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Project Description</label>
                <textarea
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="btn btn-outline hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn bg-green-500 text-white hover:bg-green-600"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
