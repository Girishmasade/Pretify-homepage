import React from "react";
import Logo from "/Images/Printify.svg";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    services: false,
    products: false,
    usecases: false,
    needhelp: false,
    more: false,
  });

  const handleMouseEnter = (menu) => {
    setDropdown({ ...dropdown, [menu]: true });
  };

  // Function to handle mouseout events
  const handleMouseLeave = (menu) => {
    setDropdown({ ...dropdown, [menu]: false });
  };

  return (
    <header>
    <nav className="bg-white shadow-md h-14 p-2">
      <div className="container flex justify-evenly gap-10 mx-auto items-center fixed z-10">
        <div className="Image">
          <img src={Logo} alt="Printify Logo" className="w-25 h-10" />
        </div>
        <div className="md:hidden absolute left-10 mr-3 mt-2">
          <button
            onClick={() => setisOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-9 items-center`}
        >
          <ul
            className={`${
              isOpen
                ? "flex flex-col space-y-6 absolute left-5 mt-6"
                : "flex space-x-9"
            }`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">
                <button
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={() => handleMouseLeave("services")}
                  className="text-black hover: focus:outline-none flex"
                >
                  How it works?
                  <IoMdArrowDropdownCircle className="relative left-1 mt-1" />
                </button>
                {dropdown.services && (
                  <div className="">
                    <ul className="flex flex-col space-y-4 absolute mt-3 justify-center items-start pl-3 pt-2 w-56 bg-white shadow-md rounded">
                      <li className="hover:text-red-600">
                        <a href="#">How Printify Works</a>
                      </li>
                      <li className="hover:text-red-600">
                        <a href="#">Print On Demand</a>
                      </li>
                      <li className="hover:text-red-600">
                        <a href="#">Printify Quality Promise</a>
                      </li>
                      <li className="hover:text-red-600">
                        <a href="#">What to Sell?</a>
                      </li>
                    </ul>
                  </div>
                )}
              </a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">
                <button
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={() => handleMouseLeave("products")}
                  className="text-black hover: focus:outline-none flex servicesBtn"
                >
                  Services
                  <IoMdArrowDropdownCircle className="relative left-1 mt-1" />
                </button>
                {dropdown.products && (
                  <ul className="flex flex-col space-y-4 absolute mt-3 justify-center items-start pl-3  pt-2 w-56 bg-white shadow-md rounded">
                    <li className="hover:text-green-500">
                      <a href="#">Printify Studio</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Printify Express Delivery</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Transfer Products</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Order In Bulk</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Experts Program</a>
                    </li>
                  </ul>
                )}
              </a>
            </li>
            <li>
              <a href="#">
                <button
                  onMouseEnter={() => handleMouseEnter("usecases")}
                  onMouseLeave={() => handleMouseLeave("usecases")}
                  className="text-black hover: focus:outline-none flex servicesBtn"
                >
                  Use-cases
                  <IoMdArrowDropdownCircle className="relative left-1 mt-1" />
                </button>
                {dropdown.usecases && (
                  <ul className="flex flex-col space-y-4 absolute mt-3 justify-center items-start pl-3 pt-2 w-56 bg-white shadow-md rounded">
                    <li className="hover:text-green-500">
                      <a href="#">Merch for Fans</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Merch for eCommerce</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Merch for Enterprises</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Grow Your Store</a>
                    </li>
                  </ul>
                )}
              </a>
            </li>

            <li>
              <a href="#">
                <button
                  onMouseEnter={() => handleMouseEnter("needhelp")}
                  onMouseLeave={() => handleMouseLeave("needhelp")}
                  className="text-black hover: focus:outline-none flex servicesBtn"
                >
                  Need-help?
                  <IoMdArrowDropdownCircle className="relative left-1 mt-1" />
                </button>
                {dropdown.needhelp && (
                  <ul className="flex flex-col space-y-4 absolute mt-3 justify-center items-start pl-3 pt-2 w-56 bg-white shadow-md rounded">
                    <li className="hover:text-green-500">
                      <a href="#">Help Center</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">Contacts</a>
                    </li>
                    <li className="hover:text-green-500">
                      <a href="#">My Requests</a>
                    </li>
                  </ul>
                )}
              </a>
            </li>
          </ul>
        </div>
        <div className="buttons space-x-3">
          <button className=" border p-1 pl-2 pr-2 rounded">Login</button>
          <button className="bg-green-500 rounded p-1 pl-2 pr-2 border text-white">
            Signup
          </button>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
