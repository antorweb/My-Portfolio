import React from "react";
import logo from "../../assets/images/remelogo.png";
import { Link } from "react-router";


const Navbar = () => {



  return (
    <>
    
    <nav id="navbar" className="bg-[#101010] sticky top-0 z-50">
      <div className="container">
        <div id="navbar-row" className="flex items-center px-[20px] lg:px-0  justify-between">
        
        {/* ------------ main-logo */}
          <Link to="/">
            <img className="w-24 h-auto" src={logo} alt="my-logo" />
          </Link>
          <div>    


            {/* --------------- mobile menubar */}
            <div className="md:hidden  flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>


            {/* --------------- navbar-items */}
            <div className="cursor-target">
              <ul className={`hidden md:flex gap-8  items-center navbar-menu ${isOpen ? "active" : ""}`}>
                <li> 
                  
                  <Link
                    to="/about"
                    className="text-[20px] font-normal font-main text-[#E6E6E6]"
                  >
                    About
                  </Link>
                </li>
                <li>
                 
                  <Link
                    to="/portfolio"
                    className="text-[20px] font-normal font-main text-[#E6E6E6]"
                  >
                    Portfolio
                  </Link>
                </li>
                <li >
                 
                  <Link
                    to="/contact"
                    className="text-[20px] font-normal font-main text-[#E6E6E6]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* ------------------ mobile-menu */}
              <ul
                className={`${
                  isOpen ? "flex" : "hidden"
                } flex-col gap-6 items-start absolute top-20 right-4 bg-[#101010] p-6 rounded-lg shadow-lg md:hidden transition-all duration-300`}
              >
                <li>
                  <Link
                  
                    to="/about"
                    className="text-[15px] font-normal font-main text-[#E6E6E6]"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-[15px] font-normal font-main text-[#E6E6E6]"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[15px] font-normal font-main text-[#E6E6E6]"
                    onClick={() => setIsOpen(false)} >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};


export default Navbar;





