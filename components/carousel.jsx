'use client'
import { useDarkMode } from '@/utils/DarkModeContext';
import { Love } from '@/utils/Love';
import Slider from '@/utils/Slider'
import Star from '@/utils/Star';
import React from 'react'
const Carousel = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={`lg:py-[100px] py-[50px] ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-white duration-300'}`}>
            <div className="lg:max-w-container w-[90%] mx-auto relative">
                <h2 className={`2xl:text-5xl lg:text-[38px]  md:text-[32px] md:w-auto w-[305px] text-[22px] not-italic font-bold leading-[130%] lg:leading-[normal] uppercase ${isDarkMode ? 'text-white': 'text-[color:var(--Brand,#28282A)]'}`}>They tried it, <br className="md:hidden" /> now they are obsessed</h2>
                <div className="flex items-center gap-x-[10px] mt-[20px] lg:mt-[30px] lg:mb-[52px] mb-[40px] ">
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                </div>
                <div className="lg:inline-block absolute top-0 right-0 z-10  hidden">
                <Love color={isDarkMode ? 'white' : '#28282A'}/>
                </div>
            </div>

      <div className={`${isDarkMode ? 'bg-[#28282A] duration-300' : 'bg-[#F4F4F4] duration-300'} relative z-20`}>
      <div className='lg:max-w-container w-[90%] mx-auto'>
          <div className="lg:py-[60px] py-[30px] ">
          <Slider/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel