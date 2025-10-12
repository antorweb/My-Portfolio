
import React, { useEffect, useRef } from "react";
import banner2 from "../assets/images/MyImages.png";
import { FaInstagram, FaLinkedinIn,} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative overflow-hidden pt-[90px] lg:pt-[150px] min-h-screen bg-[#101010]">
      {/* ----------- icons */}
      <div className="flex lg:flex-col absolute top-[92%] right-4 lg:top-[65%] lg:right-18  gap-4 z-10">
        <a
        target="_black"
          className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full hover:bg-[#A53DFF] transition-colors"
          href="https://www.facebook.com/antor.web.dev"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
        target="_black"
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
      <div className="container">
        <div id="banner-row" className="flex flex-col-reverse lg:flex-row justify-evenly items-center  px-4 gap-[30px] lg:gap-0">
          {/* Mobile Image */}
          <div className="w-[300px] h-[300px] lg:hidden  relative rounded-full bg-[#ffffff51] overflow-hidden mb-6 md:mb-0">
            <img
              className="absolute top-[-86px] left-[30px]  w-[100%]"
              src={banner2}
              alt="Antor Karmaker portrait"
            />
          </div>
          {/*------------ Left Content */}
          <div className="flex flex-col   items-center lg:items-start text-center lg:text-left w-full max-w-xl">
            <p className="text-[16px] md:text-[18px] font-medium font-main text-[#ffffff93]">Hi, I am</p>
            <div>
              <h1 className="type text-[22px] sm:text-[26px] md:text-[32px] lg:text-[60px] font-bold">Antor Karmoker</h1>
            </div>
            {/* ----------- card loading */}
            <div className="card ">
              <div className="loader flex flex-col md:flex-row items-center md:items-end">
                <p className="text-[14px] md:text-[18px] lg:text-[32px] font-normal font-main text-[#f0f0f0] ">    I'm a  </p>
                <div className="words  lg:pb-[12px] lg:h-[40px]">
                  <span className="word">React Developer</span>
                  <span className="word">Frontend Developer</span>
                  <span className="word">jr. Frontend Developer</span>
                  <span className="word">React Expert</span>
                  <span className="word">Javascript Expert</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="hidden lg:block lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] relative rounded-full bg-[#ffffff51] overflow-hidden">
            <img
              className="absolute top-[-129px] left-[45px] w-[100%]"
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