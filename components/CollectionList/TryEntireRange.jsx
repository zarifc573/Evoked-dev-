"use client"
import Image from 'next/image'
import React from 'react'
import arrow from "@/public/assets/ei_arrow-right.svg";
import arrowRight from "@/public/assets/ArrowForCollectionButton.svg";
import { useDarkMode } from '@/utils/DarkModeContext';

const TryEntireRange = () => {
    const { isDarkMode } = useDarkMode();
  return (
    <div className={`lg:pt-[120px] lg:pb-[100px] py-[30px] ${isDarkMode ? 'bg-primary' : 'bg-white'}`}>
        <div className="2xl:max-w-container lg:w-[90%] w-full mx-auto lg:py-[92px] py-[45px] lg:pl-[100px] pl-[30px]  bg-collectionImage bg-cover bg-center after:bg-gradient-to-l after:from-neutral-900 after:to-neutral-900 after:absolute after:w-full after:h-full after:content-[''] after:z-[-10] after:top-0 after:left-0 after:opacity-[0.9] z-10 relative lg:rounded-lg lg:after:rounded-lg">
        <div className="lg:w-[634px] h-[369px] flex-col justify-start items-start gap-10 inline-flex">
    <div className="flex-col justify-start items-start gap-5 flex">
        <div className={`text-white lg:text-5xl text-[26px] font-bold font-['Josefin Sans']`}>Try our entire range</div>
        <div className={`text-white lg:text-2xl text-[18px] font-normal font-['Josefin Sans'] leading-[28.80px]`}>Find your new signature scent with our ultimate fragrance <br className='lg:block hidden'/>sample kit.</div>
    </div>
    <div className="flex-col justify-start items-start gap-5 flex">
        <div className="text-white lg:text-2xl text-[18px] font-normal font-['Josefin Sans'] leading-[28.80px]">Includes</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-start gap-[5px] inline-flex">
                <Image src={arrow} alt='Arrow'  className='lg:w-auto lg:h-auto w-[20px] h-[20px]' />
                <div className="text-white text-[16px] lg:text-xl font-normal font-['Josefin Sans'] leading-normal">12 x 5ml perfumes</div>
            </div>
            <div className="justify-start items-start gap-[5px] inline-flex">
                <Image src={arrow} alt='Arrow' className='lg:w-auto lg:h-auto w-[20px] h-[20px]' />
                <div className="text-white text-[16px] lg:text-xl font-normal font-['Josefin Sans'] leading-normal">Free £30 store credit towards a future purchase</div>
            </div>
        </div>
    </div>
    <div className="lg:px-[30px]  lg:py-[18px] px-[20px] py-[10px] bg-white rounded-[var(--md,8px)] border shadow-[4px_4px_0px_0px_#FFF] border-solid border-black justify-start items-center gap-2.5 inline-flex">
        <div className="text-zinc-800 flex items-center text-[16px] lg:text-xl font-semibold font-['Josefin Sans'] uppercase">SHOP NOW</div>
        <Image src={arrowRight} alt='Arrow'/>
    </div>
</div>
        </div>
    </div>
  )
}

export default TryEntireRange