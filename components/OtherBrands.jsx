"use client"

import { useDarkMode } from '@/utils/DarkModeContext';
import React from 'react'
import Image from 'next/image';
import listLight from '@/public/assets/listLight.png'
import listDark from '@/public/assets/Group 8 (2).png'
import black from '@/public/assets/blackPerfume.png'
import scent from '@/public/assets/scent.png'

const OtherBrands = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
      <section className={`lg:py-[60px] py-[30px] ${isDarkMode ?  'bg-[#28282A]' : 'bg-[#F4F4F4]'}`}>
          <h2 className={`text-center 2xl:text-5xl lg:text-[38px] text-[22px] not-italic font-bold leading-[normal] uppercase ${isDarkMode ? 'text-white' : 'text-[#28282A]'}`}>EVOKED VS OTHERS</h2>
          <div className="flex items-center 2xl:justify-between lg:justify-between justify-center lg:mx-0 mx-auto mt-[20px] lg:mt-[50px] lg:w-[100%] w-[90%] 2xl:mx-auto">
          <Image className='lg:block hidden 2xl:w-[20%] lg:w-[20%]' src={black} alt='Black'/>
              <Image className='2xl:w-[40%] lg:w-[40%]' src={isDarkMode ? listDark : listLight} alt='Lists'/>
              <Image className='mr-[22px] lg:block hidden 2xl:w-[20%] lg:w-[20%]' src={scent} alt='Scent'/>
          </div>
    </section>
  )
}

export default OtherBrands