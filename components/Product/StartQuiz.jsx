"use client"
import Image from 'next/image'
import React from 'react'
import arrow from "@/public/assets/ei_arrow-right.svg";
import arrowRight from "@/public/assets/ArrowForCollectionButton.svg";
import { useDarkMode } from '@/utils/DarkModeContext';

const StartQuiz = () => {
    const { isDarkMode } = useDarkMode();
  return (
    <div className={`lg:pt-[120px] lg:pb-[100px] py-[50px] ${isDarkMode ? 'bg-primary' : 'bg-white'}`}>
        <div className="2xl:max-w-container lg:w-[90%] w-full mx-auto lg:py-[92px] py-[0px] lg:pl-[100px] pl-[20px]  bg-collectionImage bg-cover bg-center after:bg-gradient-to-l after:from-neutral-900 after:to-neutral-800 after:absolute after:w-full after:h-full after:content-[''] after:z-[-10] after:top-0 after:left-0 after:opacity-[0.7] after:rotate-180 z-10 relative lg:rounded-lg lg:after:rounded-lg">
        <div className="lg:w-[634px] h-[369px] flex-col justify-center items-start gap-10 inline-flex">
    <div className="flex-col justify-start items-start gap-5 flex">
        <div className={`text-white lg:text-5xl text-[24px] font-bold font-['Josefin Sans']`}>Find your perfect scent.</div>
        <div className={`text-white lg:text-2xl text-[16px] font-normal font-['Josefin Sans'] leading-[28.80px]`}>Our perfume experts designed this short quiz to help you find your perfume soulmate!</div>
    </div>
    <div className="lg:px-[30px]  lg:py-[18px] px-[20px] py-[10px] bg-white rounded-[var(--md,8px)] border shadow-[4px_4px_0px_0px_#FFF] border-solid border-black justify-start items-center gap-2.5 inline-flex">
        <div className="text-zinc-800 flex items-center text-[16px] lg:text-xl font-semibold font-['Josefin Sans'] uppercase">START QUIZ</div>
        <Image src={arrowRight} alt='Arrow'/>
    </div>
</div>
        </div>
    </div>
  )
}

export default StartQuiz