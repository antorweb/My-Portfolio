import React, { useEffect } from "react";
import { Link } from "react-router";
import CommonHead from "../components/common/CommonHead";
import { RxCross1 } from "react-icons/rx";
import ec1 from '../assets/images/canvix (ec).png'
import ec2 from '../assets/images/comfort (ec).png'
import ec3 from '../assets/images/furniture (ec).png'
import ec4 from '../assets/images/hekto (ec).png'
import ec5 from '../assets/images/nexton (ec).png'
import ld1 from '../assets/images/m-cep (ld).png'
import ld2 from '../assets/images/portfolio (ld).png'
import ld3 from '../assets/images/silicon1 (ld).png'
import ld4 from '../assets/images/silicon2 (ld).png'
import firebase from '../assets/images/firebase copy.png'
import whether from '../assets/images/wheter(js).png'
import multi from '../assets/images/multi.png'
import todo from '../assets/images/to-do.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once
    });
  }, []);


return (

  <>


<section id="portfolio" className="bg-[#101010] min-h-screen pb-[50px] relative">
  <div className="container ">
    <div className='pt-[70px] text-center'> <CommonHead commonp={'Showcasing some of my best work'} commonh2={'Portfolio'} /></div>
    <div id="portfolio-row" className="">
    {/* <!--   Start Code --> */}
    <div className="wrap"> <div className="animated-bar"></div>  </div>
        {/* ---------------- cross button */}
            <div className="fixed top-4 right-4 lg:absolute lg:top-[30px] lg:right-[60px] z-50">
              <Link to={"/"}>
                <RxCross1 className="text-[30px] text-white" />
              </Link>{" "}
            </div>

{/* ----------- list items */}
      <div className="lg:mt-[100px] mt-[40px]">
        <ul  className="lg:flex flex-wrap mx-auto items-center justify-center gap-[30px] flex-col sm:flex-row sm:gap-[18px] sm:items-center sm:justify-center">
          <li className="w-[230px] text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300 duration-[.4s] max-sm:w-full max-sm:text-center"><Link to={'/'} >E-commerce (multiple page)</Link></li>
          <li className="w-[70px] text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300 duration-[.4s] max-sm:w-full max-sm:text-center"><Link to={'/'} >Firebase</Link></li>
          <li className="w-[80px] text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300 duration-[.4s] max-sm:w-full max-sm:text-center"><Link to={'/'} >Javascript</Link></li>
          <li className="w-[170px] text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300 duration-[.4s] max-sm:w-full max-sm:text-center"><Link to={'/'} >Landing (single) page</Link></li>
        </ul>
      </div>
{/* ------------------ portfolio part */}
<div className="mt-[100px] max-lg:mt-[50px]">

{/* ----------ecommarce page */}

  <div className="flex gap-[40px] justify-center max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="fade-right" className="w-[400px] h-[400px] overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ec5} alt="portfolio img" className="w-full h-full object-cover" /></div>
  <div data-aos="fade-left" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Nex-ton</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">This is REACT.js e-commerce website when using react.js tailwind css , venila javascript , npm plugin or packages , responsive design.</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <a href="nex-ton.vercel.app" target="_blank" >View</a>
    </div>

  </div>
</div>

  <div className="flex gap-[40px] my-[50px]  justify-center max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="zoom-in-left" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Can-Vix</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">This is another react e-commerce multiple pages website.It is mainly made targeting studios or photographers. REACT.js tailwind css javascript npm slider are mainly use.n   </p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/nex-ton.vercel.app'} >View</Link>
    </div>

  </div>
  <div data-aos="zoom-in-right" className="w-[400px] h-[350px] overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ec1} alt="portfolio img" className="w-full h-full object-cover" /></div>
</div>

  <div className="flex gap-[40px] justify-center max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="zoom-out-right" className="w-[400px] h-[350px]  overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ec2} alt="portfolio img" className="w-full h-full object-cover" /></div>
  <div data-aos="zoom-out-left" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">E-commerce Comfort </h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]"> This is another website. this is another website.this is another website.this is another website.this is another website.  </p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

  <div className="flex gap-[40px] my-[50px]  justify-center max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">E-commerce Furniture</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"  className="w-[400px] h-[350px] overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ec3} alt="portfolio img" className="w-full h-full object-cover" /></div>
</div>


  <div className="flex gap-[40px] justify-center max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="zoom-in-left" className="w-[400px] h-[350px] overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ec4} alt="portfolio img" className="w-full h-full object-cover" /></div>
  <div data-aos="zoom-in-right" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">E-commerce Hekto</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

{/* ------------------ landing page */}

  <div className="flex gap-[40px] my-[50px] justify-center max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="fade-right" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing M-cep</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>
  </div>
  <div data-aos="fade-left" className="w-[400px] h-[350px] overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ld1} alt="portfolio img" className="w-full h-full object-cover" /></div>
</div>
  <div className="flex gap-[40px] justify-center max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-[400px] h-[350px]  overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ld2} alt="portfolio img" className="w-full h-full object-cover" /></div>
  <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing Portfolio</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>
  </div>
</div>
  <div className="flex gap-[40px] my-[50px] justify-center max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px]">
  <div  data-aos="fade-right" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing silicon</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>
    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>
  </div>
  <div data-aos="fade-left" className="w-[400px] h-[350px] overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ld3} alt="portfolio img" className="w-full h-full object-cover" /></div>
</div>
  <div className="flex gap-[40px]  justify-center max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-[400px] h-[350px]  overflow-hidden max-md:w-full max-md:h-[220px]"><img src={ld4} alt="portfolio img" className="w-full h-full object-cover" /></div>
  <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing Mobile App</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

{/* ---------- javascript */}

  <div className="flex gap-[40px] my-[50px] justify-center max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="zoom-in-left" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Js-To-do</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]"> I make a to-do list project where user add,delete,update & chnage his/him to-do.  </p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>
  </div>
  <div data-aos="zoom-in-right" className="w-[400px] h-[350px] bg-red-300 max-md:w-full max-md:h-[220px]"><img src={todo} alt="portfolio img" className="w-full h-full object-cover" /></div>
</div>
  <div className="flex gap-[40px] justify-center max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
  <div  data-aos="fade-right" className="w-[400px] h-[350px] bg-red-300 max-md:w-full max-md:h-[220px]"><img src={multi} alt="portfolio img" className="w-full h-full object-cover" /></div>
  <div  data-aos="fade-left" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Js-Multiplication</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">This is a Javascript project when I use make a simple use for loop & fatch a fake api. </p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>
  </div>
</div>
  <div className="flex gap-[40px]  my-[50px] justify-center max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Js-Whether</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]"> This is a JavaScript API Fetch project where APIs are exposed asynchronously & real-time based APIs are made by exposing APIs.  </p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-[400px] h-[350px] bg-red-300 max-md:w-full max-md:h-[220px]"><img src={whether} alt="portfolio img" className="w-full h-full object-cover" /></div>
</div>

{/* -------------- firebase */}

  <div className="flex gap-[40px] justify-center max-lg:flex-col max-lg:items-center max-lg:gap-[20px]">
  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-[400px] h-[350px] bg-red-300 max-md:w-full max-md:h-[220px]"><img src={firebase} alt="portfolio img" className="w-full h-full object-cover" /></div>
  <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="bg-[#161616] h-[280px] px-[20px] pt-[20px] max-md:w-full max-md:h-auto max-md:pb-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Firebase-Note</h2>
    <div className="w-[500px] pt-[20px] pb-[50px] max-md:w-full max-md:pb-[20px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">This is firebase note app project where user create delete update there note. </p> </div>
    <div className="w-[100px] flex justify-center py-[10px] px-[35px] hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border max-md:mx-auto">
      <Link to={'/'} >View</Link>
    </div>
  </div>
</div>
</div>
    </div>
  </div>
</section>

  </>
);
};

export default Portfolio;



