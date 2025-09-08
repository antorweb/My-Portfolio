import React, { useState } from "react";
import logo from "../assets/images/remeni logo.png";
import { Link } from "react-router";

const Navbar = () => {


  return (
    <nav id="navbar" className="bg-[#101010]  sticky top-0 z-50">
      <div className="container  ">
        <div id="navbar-row" className="flex  items-center justify-between">

        {/*----------- main -Logo */}
        <Link to="/"><img className="w-24 h-auto" src={logo} alt="my-logo" /> </Link>
        {/*------------- menu-items */}

        
    <div>

      <div className="cursor-target">
                <ul className="hidden md:flex gap-8 items-center">

          <li> <Link to="/about"  className="text-[15px] font-normal font-main text-[#E6E6E6]">About</Link></li>
          <li> <Link to="/portfolio"  className="text-[15px] font-normal font-main text-[#E6E6E6]">Portfolio</Link></li>
          <li> <Link to="/contact"  className="text-[15px] font-normal font-main text-[#E6E6E6]">Contact</Link></li>


        </ul>
      </div>
    </div>
      </div>
        </div>


  
    </nav>
  );
};

export default Navbar;
