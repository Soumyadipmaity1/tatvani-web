import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Article", path: "/article" },
    { name: "Poetry", path: "/poetry" },
    { name: "Stories", path: "/stories" },
    { name: "About Us", path: "/about" },
    { name: "Submission", path: "/submission" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClassName =
    "bg-[#1c7636] px-2.5 lg:pb-1 text-white lg:pt-[1px] py-2 lg:py-0 font-semibold rounded-lg lg:rounded-2xl";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 lg:px-10 xl:px-6 2xl:px-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center pr-14">
            <img
              src="./tatvani_logo.jpg"
              alt="logo"
              className="sm:w-10 w-8 mr-2 rounded-full"
              border="0"
            />

            <span className="sm:text-3xl text-2xl font-bold text-[#1c7636] dark:text-white lg:pb-2 pb-1 pt-0.5">
              Tatvani
            </span>
          </div>

          {/* Search bar for mobile */}
          <div className="lg:hidden w-3/5 sm:pl-6 mr-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-500 dark:border-gray-400 w-full rounded-2xl px-2 py-1 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Mobile  bar */}
          <div className="lg:hidden z-50 flex items-center">
            <button
              onClick={toggleDarkMode}
              className="mr-4 text-xl rounded-full border border-gray-500 dark:border-gray-400 p-1.5"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none dark:text-white text-2xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-2 items-center">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "hover:bg-[#1c7636] hover:text-white px-2.5 pb-1 pt-[1px] rounded-2xl font-semibold dark:text-white dark:hover:bg-gray-700"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Dark Mode Toggle for Desktop */}
          <button
            onClick={toggleDarkMode}
            className="text-xl hidden lg:block ml-2 rounded-full border border-gray-500 dark:border-gray-400 p-2"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 text-black dark:text-white text-lg font-semibold py-1 text-center transition-transform duration-300 ease-in-out z-40 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6 flex flex-col space-y-6">
              <div className="flex-col flex items-center justify-center m-5">
                <img
                  src="./tatvani_logo.jpg"
                  alt="logo"
                  className=" mb-5 mt-4 rounded-full w-16"
                  border="0"
                />
                <span className="text-4xl font-bold text-[#1c7636] dark:text-white">
                  Tatvani
                </span>
              </div>

              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    isActive
                      ? `text-black dark:text-white text-lg font-semibold ${activeClassName}`
                      : "hover:bg-[#1c7636] hover:text-white text-black dark:text-white dark:hover:bg-gray-700"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Search Bar for Desktop */}
          <div className="hidden lg:block w-[300px]">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-500 dark:border-gray-400 w-full rounded-2xl px-2 py-1 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
