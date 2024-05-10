"use client"

import { useDarkMode } from "@/utils/DarkModeContext";
import kitjack from '@/public/assets/kitjack.png'
import Image from 'next/image';
import ArrowRight from "@/utils/ArrowRight";
import { DownArrow } from "@/utils/Helpers";
const Story = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
      <section className={` ${isDarkMode ? 'bg-primary' : 'bg-white'} `}>
          <div className="lg:py-[100px] py-[80px]">
          <div className="lg:max-w-container w-[90%] mx-auto">
              <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-x-[88px]">
                  <div className="lg:pt-0 pt-[30px]">
                      <div className="flex items-start lg:gap-x-5 gap-x-[10px]">
                      <span className={`lg:text-[28px] text-[16px] not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>OUR STORY</span> <DownArrow color={isDarkMode ? 'white' : '#28282A'} className={`lg:w-auto lg:h-auto w-4 h-4`}/>
                      </div>
                      <p className={`2xl:w-[780px] lg:pb-[30px] pb-[20px] lg:text-[38px] 2xl:text-5xl text-[20px] lg:pt-[50px] pt-[30px] not-italic font-400 leading-[130%] uppercase ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)] '}`}>We’re On a mission to help HUMANS <strong>Unlock CONFIDENCE</strong></p>
                      
                      {/* Button */}
                      <button className={`2xl:mt-[50px] mt-[15px] md:mt-[30px] flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border  border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={`text-[16px] lg:text-[22px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>Build Your Evoked Set</span>
            {/* <Image src={arrow} alt="Arrow Right" /> */}
            <ArrowRight color={ isDarkMode ? '#171717' : 'white'} />
          </button>
                  </div>
                  <div className="">
                      <Image src={kitjack} alt="Image"/> 
                  </div>
              </div>
              </div>
              </div>
    </section>
  )
}

export default Story