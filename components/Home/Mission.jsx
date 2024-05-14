'use client'
import React from 'react'
import { useDarkMode } from '@/utils/DarkModeContext'
import mission from '@/public/assets/collection.png'
import second from '@/public/assets/second.png'
import Image from 'next/image'
import Link from 'next/link'
import { Compostable, EcoFriendly, Perfume } from '@/utils/ThreeReasons'
const Mission = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <section className={`${isDarkMode ? 'bg-[#171717]' : 'bg-white'}`}>
        <div className="2xl:max-w-container w-[90%] mx-auto">
            <div className="">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-7 lg:gap-5">
                <div className=" lg:w-[40%] w-full">
                    <h3 className={` 2xl:text-5xl lg:text-[38px] text-[22px] font-bold ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Discover Collection 1</h3>
                    <p className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} font-primary mt-[10px] lg:mt-[20px] lg:text-[20px] text-[14px]  2xl:text-2xl font-normal 2xl:w-[610px]`}>Try our entire collection of perfumes Discover a scent for every mood, occasion or celebration.</p>
                    <Link href='/discovery-kit' className='inline-block' >
          <button className={`lg:mt-[40px] mt-[20px] uppercase lg:mx-0 mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={`2xl:text-[22px] lg:text-[18px] text-[16px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>TRY DISCOVERY KIT</span>
              </button>
              </Link>
                </div>
                    <Image className=' lg:w-[60%] w-full' src={mission} alt='Image'/>
            </div>
            <div className="lg:pt-[100px] pt-[50px]">
                <h2 className={`text-center ${isDarkMode ? 'text-white' : 'text-black'} 2xl:text-5xl lg:text-[38px] text-[22px] font-bold leading-[130%]`}>We’re on a mission to help <br className="lg:block hidden" /> humanity unlock confidence.</h2>
            <div className="flex lg:flex-row flex-col items-center text-start lg:mt-[50px] mt-[20px] justify-center lg:gap-[80px] gap-[20px]">
                    <Image className='2xl:w-[50%] lg:w-[60%] w-full' src={second} alt='Image'/>
                    <div className={`lg:p-[50px] px-[25px] py-[20px] 2xl:w-[30%] lg:w-[40%] w-full  rounded-lg flex-col justify-start items-start 2xl:gap-10 lg:gap-5 inline-flex ${isDarkMode ? 'bg-[#454547]' : 'bg-zinc-100 '}`}>
<div className="flex-col justify-start items-start 2xl:gap-5 lg:gap-3 flex">
<h4 className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} 2xl:text-[38px] lg:text-[28px] text-[18px] font-bold`}>Fragrance for all</h4>
<p className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} 2xl:text-xl mt-[5px] lg:mt-0 lg:text-[16px] text-[12px] font-light  leading-normal`}>We eliminate retailer markups, celebrity marketing,<br className='xxl:block hidden'/>and licensing fees to offer luxury scents for 70-90% less.</p>
</div>
<div className="justify-start lg:flex-row flex-col lg:items-center items-start  2xl:gap-[30px] lg:gap-[15px] mt-[10px] lg:mt-0 inline-flex">
<div className={` ${isDarkMode ? 'text-white' : 'text-neutral-900'} 2xl:text-xl lg:text-[16px] text-[12px] font-semibold  leading-normal`}>From £45 <br className='lg:block hidden' /> Evoked</div>
<div className={`w-10 h-[1px] lg:block hidden  rotate-90  ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
<p className={` ${isDarkMode ? 'text-white' : 'text-zinc-700'} opacity-[0.7] 2xl:text-xl lg:text-[16px] text-[12px]  font-normal  leading-normal`}>From £100 - £135 <br className='lg:block hidden' />  Luxury brand</p>
</div>
</div>
               
            </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row  items-center mt-[50px] justify-center lg:gap-[80px] gap-[30px] lg:pt-[100px]">
            <div className=" 2xl:w-[50%] lg:w-[50%] h-full w-full lg:h-[216px] rounded-lg flex-col justify-center lg:justify-start items-center lg:gap-[50px] gap-[30px] inline-flex">
    <div className="flex-col justify-center lg:justify-start items-start lg:gap-5 flex">
        <div className={`text-center ${isDarkMode ? 'text-white' : 'text-zinc-800'} lg:text-[38px] text-[22px] font-bold`}>But wait, there’s more…</div>
    </div>
    <div className="justify-start items-end 2xl:gap-[100px]  inline-flex lg:flex-row flex-col">
        <div className="justify-start lg:items-start items-center gap-[25px] 2xl:gap-[40px] flex lg:flex-row flex-col">
            <div className="flex-col justify-center lg:justify-start items-center gap-[30px] inline-flex">
            <button className={`w-[60px] h-[57.33px]   justify-center items-center gap-2.5 inline-flex  p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)]  shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white  border-neutral-900'}`}>
                      <EcoFriendly className={`2xl:h-auto 2xl:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                <p className={`text-center ${isDarkMode ? 'text-white' : 'text-zinc-800'} text-[12px] lg:text-[12px] 2xl:text-base font-normal  leading-tight`}>No harsh formulas. Vegan-Friendly.<br/>Never tested on animals.</p>
            </div>
            <div className="flex-col justify-center lg:justify-start items-center gap-[30px] inline-flex">
            <button className={`w-[60px] h-[57.33px]   justify-center items-center gap-2.5 inline-flex  p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)]  shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white  border-neutral-900'}`}>
                      <Compostable className={`2xl:h-auto 2xl:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                <p className={`text-center ${isDarkMode ? 'text-white' : 'text-zinc-800'} text-[12px] lg:text-[12px] 2xl:text-base font-normal  leading-tight`}>100% sustainably sourced <br/>ingredients and packaging.</p>
            </div>
            <div className="flex-col  justify-center lg:justify-start items-center gap-[30px] inline-flex">
            <button className={`w-[60px] h-[57.33px]   justify-center items-center gap-2.5 inline-flex  p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)]  shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white  border-neutral-900'}`}>
                      <Perfume className={`2xl:h-auto 2xl:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                <p className={`text-center ${isDarkMode ? 'text-white' : 'text-zinc-800'} text-[12px] lg:text-[12px] 2xl:text-base font-normal  leading-tight`}>Try it and love it or<br/>money back guaranteed.</p>
            </div>
        </div>
    </div>
</div>
                    <Image className='2xl:w-[50%] lg:w-[50%] w-full' src={second} alt='Image'/>
                  
               
            </div>


            </div>



        </div>
    </section>
  )
}

export default Mission