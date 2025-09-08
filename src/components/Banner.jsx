import React, { useEffect, useRef } from "react";
import banner3 from "../assets/images/banner3.png";
import banner2 from "../assets/images/banner2.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative overflow-hidden  pt-[150px] h-screen bg-[#101010]"
    >
      {/* ----------- icons */}
      <div className="flex flex-col absolute top-[560px] right-[60px] gap-4  ">
        <a
   
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://www.facebook.com/antor.web.dev"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
   
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://www.instagram.com/antor_web_dev/"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
    
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://www.linkedin.com/in/antor94/"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://github.com/antor94"
          aria-label="Github"
        >
          <TbBrandGithub />
        </a>
      </div>

      <div className="container ">
        <div id="banner-row" className="flex justify-around items-center">
          {/*------------ Left Content */}
          <div  className="flex flex-col">

       
           <p className="text-[18px] font-medium font-main text-[#ffffff93]"> Hi, I am</p>

  <div>
    <h1 class="type">Antor Karmoker</h1>
  </div>
            
            {/* ----------- card loading */}
            <div class="card">
              <div class="loader">
                <p className="text-[32px] font-normal font-main text-[#f0f0f0]">
                  I'm a
                </p>
                <div class="words">
                  <span class="word">React Developer</span>
                  <span class="word">Frontend Developer</span>
                  <span class="word">jr. Frontend Developer</span>
                  <span class="word">React Expert</span>
                  <span class="word">Javascript Expert</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div
         
            className="w-[450px] h-[450px] flex justify-center items-center relative rounded-full bg-[#ffffffdf]  overflow-hidden"
          >
            <img

              className=" "
              src={banner2}
              alt="Antor Karmaker portrait"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
