'use client'

import { useDarkMode } from '@/utils/DarkModeContext';
import React from 'react'
import Image from 'next/image';
import spray from '@/public/assets/spray.png'
import { EcoFriendly, Compostable, Perfume } from '@/utils/ThreeReasons';
const ThreeMore = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
      <section className={`lg:pb-[100px] lg:pt-[100px] md:pb-[80px]  pb-[40px] ${isDarkMode ? 'bg-[#171717]' : 'bg-white'}`}>
       
          {/* Second Step */}
          <div className="mx-auto lg:w-[100%] w-[90%]  relative">
              <h3 className={`text-start md:text-center md:text-[32px] 2xl:text-5xl lg:text-[38px] text-[22px] not-italic font-bold leading-[normal] uppercase ${isDarkMode ? 'text-white' : 'text-[#28282A]'}`}>But wait, there’s more…</h3>
          
                <div className="lg:flex lg:flex-row flex flex-col md:items-center items-start justify-center lg:gap-[80px] 2xl:gap-[100px] gap-[30px]  lg:mt-[100px] mt-[40px] ">
              <div className={`flex flex-col lg:items-center items-start gap-[15px] lg:gap-[30px]`}>
                  <button className={`flex items-start gap-2.5 p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)] shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white'}`}>
                      <EcoFriendly className={`2xl:h-auto 2xl:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                  <p className={`2xl:w-[348px] md:w-[200px] w-[263px] text-start lg:text-center 2xl:text-[22px] not-italic font-normal leading-[normal] text-[16px] ${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--Brand,#28282A)]'}`}>No harsh formulas. Vegan-Friendly. Never tested on animals.</p>
              </div>
              <div className={`flex flex-col lg:items-center items-start gap-[15px] lg:gap-[30px]`}>
                  <button className={`flex items-start gap-2.5 p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)] shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white'}`}>
                      <Compostable className={`2xl:h-auto 2xl:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                  <p className={`  2xl:w-[348px] md:w-[200px] w-[200px] text-start lg:text-center 2xl:text-[22px] not-italic font-normal leading-[normal] text-[16px] ${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--Brand,#28282A)]'}`}>100% sustainably sourced ingredients and packaging.</p>
              </div>
              <div className={`flex flex-col lg:items-center items-start gap-[15px] lg:gap-[30px]`}>
                  <button className={`flex items-start gap-2.5 p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)] shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white'}`}>
                      <Perfume className={`2xl:h-auto 2xl:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                  <p className={` 2xl:w-[260px] md:w-[200px] w-[185px] text-start lg:text-center 2xl:text-[22px] not-italic font-normal leading-[normal] text-[16px] ${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--Brand,#28282A)]'}`}>Try it and love it or money back guaranteed..</p>
              </div>
                  </div>
             <Image className='absolute 2xl:top-[-10px] lg:top-[30px] lg:right-0 top-[66%] lg:translate-y-0 translate-y-[-68%] xxl:right-[0px] right-[-5.5%] xxl:h-[489px] 2xl:h-[380px] lg:h-[330px] lg:w-[250px] md:w-[220px] md:h-[252px] xxl:w-[430px] 2xl:w-[310px] w-[160px] h-[172px] object-contain' src={spray} alt='Spray' />
          </div>
    </section>
  )
}

export default ThreeMore