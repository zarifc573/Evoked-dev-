"use client"

import { useDarkMode } from '@/utils/DarkModeContext';
import React from 'react'
import whiteLogo from '@/public/assets/whiteLogo.svg'
import dark from '@/public/assets/darkmode.png'
import light from '@/public/assets/lightmode.png'
import Image from 'next/image';


const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
 
  return (
    <section className={` lg:pb-[300px] pb-[300px] py-[30px]  bg-[#171717]`}>
      <div className="lg:max-w-container w-[90%] mx-auto">
        <div className="">
        <div className={`2xl:w-[1398px]  mx-auto h-[1px] bg-white`}>
        </div>
        <div className="flex 2xl:w-[1398px] mx-auto lg:flex-row flex-col items-center justify-between pt-[15px] lg:pt-[20px]">

        <div className="lg:hidden block">
            <Image className=' lg:w-auto lg:h-auto w-[150px] h-[55px]' src={whiteLogo} alt='Logo' /> 
              </div>

            <span className={`fontVariant flex items-center gap-x-[20px] text-[14px] lg:text-xl not-italic font-bold leading-[140%] text-white`}>2024 BE EVOKED
          
            <button className='lg:block hidden' onClick={toggleDarkMode}>
                      <div className={`border border-solid ${isDarkMode ? 'w-[100px] border-white transition duration-300 h-10 shrink-0 rounded-[106.623px] bg-[#454547] py-[5px] px-[10px] flex items-center justify-between relative' : 'border-primary w-[100px] h-10 shrink-0 rounded-[106.623px] bg-[#f4f4f4] transition duration-500 py-[5px] px-[10px] flex items-center justify-between relative'}`} >
                           {isDarkMode ?  <Image className='absolute transition duration-300 top-[50%] translate-y-[-50%] right-[10px]' src={light}/> : <Image className='absolute top-[50%] transition duration-500 translate-y-[-50%] left-[10px]' src={dark}/>}
       
        
      </div>
     
    </button>
            
            </span>
            <button className='lg:hidden block lg:my-0 py-[15px]' onClick={toggleDarkMode}>
                      <div className={isDarkMode ? 'lg:w-[100px] w-[60px] border border-solid border-white transition duration-300 lg:h-10 h-[30px] shrink-0 bg-[#454547] lg:rounded-[106.623px] rounded-[40px] py-[3px] lg:py-[5px] px-[10px] flex items-center justify-between relative' : 'lg:w-[100px] w-[60px] border border-solid border-primary lg:h-10 h-[30px] shrink-0 lg:rounded-[106.623px] rounded-[40px] py-[3px] lg:py-[5px] bg-[#f4f4f4] transition duration-500 px-[10px] flex items-center justify-between relative'} >
                           {isDarkMode ?  <Image className='absolute transition duration-300 top-[50%] translate-y-[-50%] right-[5px] lg:h-auto lg:w-auto w-[20px] h-[20px]' src={light}/> : <Image className='absolute transition duration-300 top-[50%] translate-y-[-50%] left-[5px] lg:h-auto lg:w-auto w-[20px] h-[20px]' src={dark}/>}
       
        
      </div>
     
    </button>
            <div className="lg:block hidden">
        <Image className='ml-[50px]' src={whiteLogo} alt='Logo' /> 
              </div>
            
            <span className={`fontVariant text-[14px] lg:mt-0 mt-[10px] lg:text-xl not-italic font-bold leading-[140%] text-white`}>Terms & Conditions | Privacy Policy</span>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer