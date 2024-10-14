import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
    // { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClassName = "bg-[#1c7636] px-2.5 lg:pb-1 text-white lg:pt-[1px] py-2 lg:py-0 font-semibold rounded-lg lg:rounded-2xl";

  return (
    <nav className="bg-white shadow-lg md:px-10 xl:px-20 2xl:px-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-[#1c7636] pb-2 pt-0.5">Tatvani</span>
          </div>

      {/* Search bar for mobile */}
          <div className="md:hidden w-1/2 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-500 w-full rounded-2xl px-2 py-1"
            />
          </div>

          {/*  Menu Button */}

          <div className="md:hidden z-50">
            <button onClick={toggleMobileMenu} className="focus:outline-none text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeClassName : "hover:bg-[#1c7636] hover:text-white px-2.5 pb-1 pt-[1px] rounded-2xl font-semibold"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu */}
        
          <div
            className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#ffffff] text-black text-lg font-semibold py-1 text-center transition-transform duration-300 ease-in-out z-40 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6 flex flex-col space-y-6">
                         <div className="flex items-center justify-center m-5">
                <span className="text-3xl font-bold text-[#007d45]">Tatvani</span>
              </div>

              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    isActive ? `text-black text-lg font-semibold ${activeClassName}` : "hover:bg-[#1c7636] text-black"
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
              className="border border-gray-500 w-full rounded-2xl px-2 py-1"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
