import React from "react";
import CommonHead from "../components/common/CommonHead";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTelegram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className=" bg-[#101010] min-h-screen relative">
      <div className="container ">
        <div className="pt-[70px] text-center">  <CommonHead  commonp={"Feel free to contact me anytimes"}  commonh2={"Get in Touch"}  /> </div>
       {/* <!--   Start Code --> */}
  <div class="wrap">
    <div class="animated-bar"></div>
  </div>
        <div id="contact-row" className=" pt-[50px] lg:pt-[150px] lg:flex justify-center">
            {/* ---------------- cross button */}
            <div className="fixed top-4 right-4 lg:absolute lg:top-[30px] lg:right-[60px] z-50">
              <Link to={"/"}>
                <RxCross1 className="text-[30px] text-white" />
              </Link>{" "}
            </div>
          {/*------------- Contact Form */}
          <div   className="w-full max-w-[900px] mx-auto px-2 sm:px-4 md:px-8">
            <h2  className="text-[22px] sm:text-[24px] font-medium font-main text-[#F0F0F0]">
              Message Me
            </h2>
            <div className="pt-[20px]">
              <form className="space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="w-full md:w-1/2">
                    <input
                      className="w-full h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input 
                      className="w-full h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/* ------------ subject */}
                <div className="w-full">
                  <input
                    className="w-full h-12 border bg-[#161616] border-none text-[15px] font-normal font-main text-[#777777] pl-[20px] outline-none "
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                {/* --------------text-area */}
                <div className="w-full">
                  <textarea
                    className="w-full h-32 border bg-[#161616] text-[15px] font-normal font-main text-[#777777] border-none pl-5 pt-4  outline-none  mb-2"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                {/* ---------------button */}
                <button className="py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border w-full sm:w-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/*------------------- Contact Info */}
          <div className="w-full max-w-[500px] mx-auto mt-[100px] pb-[50px] lg:mt-0 px-2 ">
            <h2 className="text-[22px] sm:text-[24px] font-medium font-main text-[#F0F0F0]">
              {" "}
              Contact Info{" "}
            </h2>
            <div className="w-full py-[30px]">
              {" "}
              <p className="text-[15px] font-normal font-main text-[#9F9F9F]">
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
              </p>{" "}
            </div>
            {/* -------------- contact details */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[20px] sm:gap-[40px]">
                <div>
                  <FaUserCircle className="text-[#009e66] text-[26px] sm:text-[30px]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                    Name
                  </h3>
                  <p className="text-[14px] font-normal font-main text-[#9F9F9F]">
                   Antor web-Dev
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[20px] sm:gap-[40px]">
                <div>
                  <FaMapLocationDot className="text-[#009e66] text-[26px] sm:text-[30px]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                    Location
                  </h3>
                  <p className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    Gazipur sadar,Gazipur,Dhaka Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[20px] sm:gap-[40px]">
                <div>
                  <FaPhone className="text-[#009e66] text-[26px] sm:text-[30px]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                    Call Me
                  </h3>
                  <p className="text-[14px] font-normal font-main text-[#9F9F9F]">
                    +880-176-878-0954
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[20px] sm:gap-[40px]">
                <div>
                  <IoPaperPlane className="text-[#009e66] text-[26px] sm:text-[30px]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold font-main text-[#F0F0F0]">
                    Email Me
                  </h3>
                  <a
                    href="EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTISCAEQABhDGIMBGLEDGIAEGIoFMgwIAhAAGEMYgAQYigUyDwgDEAAYQxixAxiABBiKBTIKCAQQABixAxiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPdIBCDEzMjdqMGo3qAIAsAIA"
                    className="text-[14px] hover:text-[#797979] font-normal font-main text-[#9F9F9F]"
                  >
                    antorremeni@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
