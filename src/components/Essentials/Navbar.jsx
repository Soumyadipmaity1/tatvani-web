import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {    //toggle
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
    { name: "News", path: "/news" },
    { name: "Poetry", path: "/poetry" },
    { name: "Short Stories", path: "/stories" },
    { name: "About Us", path: "/about" },
    { name: "Submission", path: "/submission" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClassName =
    "bg-[#1c7636] px-2.5 lg:pb-1 text-white lg:pt-[1px] py-2 lg:py-0 font-semibold rounded-lg lg:rounded-2xl";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 md:px-10 xl:px-8 2xl:px-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center pr-16">
            <span className="text-3xl font-bold text-[#1c7636] dark:text-white pb-2 pt-0.5">
              Tatvani
            </span>
          </div>

          {/* Search bar for mobile */}
          <div className="md:hidden w-4/5 mr-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-500 dark:border-gray-400 w-full rounded-2xl px-2 py-1 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Mobile  bar*/}
          <div className="md:hidden z-50 flex items-center">
            <button onClick={toggleDarkMode} className="mr-4 text-xl rounded-full border border-gray-500 dark:border-gray-400 p-1.5">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button onClick={toggleMobileMenu} className="focus:outline-none dark:text-white text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-2 items-center">
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
            <button onClick={toggleDarkMode} className="text-xl hidden md:block ml-4 rounded-full border border-gray-500 dark:border-gray-400 p-2">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 text-black dark:text-white text-lg font-semibold py-1 text-center transition-transform duration-300 ease-in-out z-40 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6 flex flex-col space-y-6">
              <div className="flex items-center justify-center m-5">
                <span className="text-3xl font-bold text-[#1c7636] dark:text-white">
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
          <div className="hidden md:block w-80">
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
