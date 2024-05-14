'use client'
import React from 'react'
import { useDarkMode } from '@/utils/DarkModeContext'
import Link from 'next/link'
import ArrowRight from '@/utils/ArrowRight';
const Hero = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <section>
        <div className="bg-banner relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[#0000004D] after:z-[-10] z-10 bg-cover bg-center 2xl:pt-[215px] 2xl:pb-[150px] pb-[60px] pt-[120px]  lg:pt-[150px] lg:pb-[100px]">
            <div className="max-w-container lg:w-[90%] w-[90%] mx-auto">
            <h1 className="text-white lg:text-left md:text-start text-center 2xl:text-5xl lg:text-[38px] text-[24px] not-italic font-normal leading-[130%] uppercase">FIND your vibe. <br className='lg:block hidden'/> <span className="font-bold">Make A statement.</span> <br className='lg:block hidden'/> Feel unstoppable.</h1>
            <p className="text-[rgba(255,255,255,0.80)] lg:text-left md:text-start text-center 2xl:text-[28px] lg:text-[20px] text-[16px] not-italic font-medium leading-[normal] mt-[20px]">Take on the world with scents that put you in the spotlight.</p>
            <Link href='/landing-page' className='inline-block' >
          <button className={`mt-[50px] lg:mx-0 mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] uppercase rounded-[var(--md,8px)] border border-solid border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]`}>
            <span className={`2xl:text-[22px] text-[#171717] lg:text-[18px] text-[16px] not-italic font-semibold leading-[normal]`}>Build Your Set</span>
            {/* <Image src={arrow} alt="Arrow Right" /> */}
            <ArrowRight color='#171717' />
              </button>
              </Link>
            </div>
        
        </div>
    </section>
  )
}

export default Hero