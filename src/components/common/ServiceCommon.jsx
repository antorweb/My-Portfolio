import React from 'react'
import { MdOutlineWeb } from 'react-icons/md'

const ServiceCommon = ({serH2 ,serLogo , serP }) => {
  return (
    <>
    
    
    <div className='w-[380px] h-[270px] p-[30px] hover:border-b-2  border-[#009e66] duration-[.3s] bg-[#161616]'>
        <div>{serLogo}</div>
        <div>
            <h2 className='text-[20px] py-[20px] font-medium font-main text-[#F3F3F3]'>{serH2}</h2>
             <p className="text-[15px] mb-[17px] font-normal font-main leading-[27px] text-[#9F9F9F]">{serP}</p>
        </div>

    </div>
    
    
    
    
    </>
  )
}

export default ServiceCommon