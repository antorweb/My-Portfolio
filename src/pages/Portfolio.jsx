import React from "react";
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

const Portfolio = () => {



return (

  <>

<section id="portfolio" className="bg-[#101010] min-h-screen pb-[50px] relative">
  <div className="container ">
    <div className='pt-[70px] text-center'> <CommonHead commonp={'Showcasing some of my best work'} commonh2={'Portfolio'} /></div>
    <div id="portfolio-row" className="">
    {/* <!--   Start Code --> */}
    <div class="wrap"> <div class="animated-bar"></div>  </div>
      {/* ---------------- cross button */}
      <div className=' absolute top-[30px] right-[60px]'>  <Link to={'/'}> <RxCross1 className='text-[30px] text-white' />  </Link>  </div>

{/* ----------- list items */}
      <div className=" lg:mt-[100px]">
        <ul  className=" lg:flex flex-wrap  items-center justify-center gap-[30px]">
          <li className="w-[230px]  text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300  duration-[.4s]"><Link to={'/'} >E-commerce (multiple page)</Link></li>
          <li className="w-[230px] text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300 duration-[.4s] "><Link to={'/'} >Firebase</Link></li>
          <li className="w-[230px] text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300 duration-[.4s] "><Link to={'/'} >Javascript</Link></li>
          <li className="w-[230px] text-[15px] font-normal font-main text-[#fff] hover:border-b pb-[5px] hover:text-green-300 duration-[.4s]"><Link to={'/'} >Landing (single) page</Link></li>
        </ul>
      </div>
{/* ------------------ portfolio part */}
<div className="mt-[100px] ">

{/* ----------ecommarce page */}

  <div className="flex gap-[40px] justify-center">
  <div className="w-[400px] h-[400px] overflow-hidden"><img src={ec5} alt="portfolio img" /></div>
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Nex-ton</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

  <div className="flex gap-[40px]  justify-center">
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Can-Vix</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div className="w-[400px] h-[350px] overflow-hidden"><img src={ec1} alt="portfolio img" /></div>
</div>

  <div className="flex gap-[40px] justify-center">
  <div className="w-[400px] h-[350px]  overflow-hidden"><img src={ec2} alt="portfolio img" /></div>
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">E-commerce Comfort </h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

  <div className="flex gap-[40px] justify-center">
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">E-commerce Furniture</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div className="w-[400px] h-[350px] overflow-hidden"><img src={ec3} alt="portfolio img" /></div>
</div>


  <div className="flex gap-[40px] justify-center">
  <div className="w-[400px] h-[350px] overflow-hidden"><img src={ec4} alt="portfolio img" /></div>
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">E-commerce Hekto</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

{/* ------------------ landing page */}

  <div className="flex gap-[40px] justify-center">
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing M-cep</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div className="w-[400px] h-[350px] overflow-hidden"><img src={ld1} alt="portfolio img" /></div>
</div>

  <div className="flex gap-[40px] justify-center">
  <div className="w-[400px] h-[350px]  overflow-hidden"><img src={ld2} alt="portfolio img" /></div>
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing Portfolio</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>


  <div className="flex gap-[40px] justify-center">
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing silicon</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div className="w-[400px] h-[350px] overflow-hidden"><img src={ld3} alt="portfolio img" /></div>
</div>


  <div className="flex gap-[40px] justify-center">
  <div className="w-[400px] h-[350px]  overflow-hidden"><img src={ld4} alt="portfolio img" /></div>
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Landing Mobile App</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

{/* ---------- javascript */}

  <div className="flex gap-[40px] justify-center">
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Nex-ton</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div className="w-[400px] h-[350px] bg-red-300"><img src="#" alt="portfolio img" /></div>
</div>


  <div className="flex gap-[40px] justify-center">
  <div className="w-[400px] h-[350px] bg-red-300"><img src="#" alt="portfolio img" /></div>
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Nex-ton</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
</div>

  <div className="flex gap-[40px] justify-center">
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Nex-ton</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
      <Link to={'/'} >View</Link>
    </div>

  </div>
  <div className="w-[400px] h-[350px] bg-red-300"><img src="#" alt="portfolio img" /></div>
</div>

{/* -------------- firebase */}

  <div className="flex gap-[40px] justify-center">
  <div className="w-[400px] h-[350px] bg-red-300"><img src="#" alt="portfolio img" /></div>
  <div className="bg-[#161616] h-[280px] px-[20px] pt-[20px]">
    <h2 className="text-[21px] font-medium font-main text-[#fff]">Nex-ton</h2>
    <div className="w-[500px] pt-[20px] pb-[50px]">
    <p className="text-[16px] font-normal font-main text-[#9F9F9F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque aperiam placeat vitae ab suscipit labore consectetur natus soluta hic quo, nesciunt saepe praesentium corporis doloribus adipisci commodi harum?</p> </div>

    <div className="w-[100px] flex justify-center py-[10px] px-[35px]  hover:text-[#009e66] duration-[.4s] hover:bg-transparent text-base font-semibold font-main text-[#fff] bg-[#009e66] border-[#009e66] rounded-full border">
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