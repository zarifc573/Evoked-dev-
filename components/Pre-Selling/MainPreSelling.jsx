"use client"
import React from 'react'
import logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import { useDarkMode } from '@/utils/DarkModeContext'
import Link from 'next/link'
import arrowRight from "@/public/assets/arrowRight.svg";
import arrowRightBlack from "@/public/assets/Arrow 2 (2).svg";
const MainPreSelling = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <section>
      <nav className='w-full lg:py-[40px] py-[20px] bg-primary lg:border-b-2 lg:border-b-white lg:border-solid lg:static absolute top-0 left-0 z-10 '>
          <div className="lg:max-w-container w-[90%] mx-auto flex justify-center items-center">
              <div className="">
                  <Image className='lg:w-auto lg:h-auto w-[122px] h-[22px]' src={logo} />
              </div>
           
          </div>
    </nav>
    <main className='bg-preSelling bg-cover bg-center lg:pt-[222px] lg:pb-[340px] pt-[100px] pb-[70px] flex flex-col justify-center'>
    <div className="lg:w-[506px] w-[90%] lg:h-[549px] mx-auto flex-col justify-start items-center gap-[50px] inline-flex">
    <h2 className="text-center"><span className="text-black lg:text-5xl text-[24px] font-normal font-['Josefin Sans'] uppercase lg:leading-[62.40px]">FInd your VIBE. <br/></span><span className="text-black lg:text-5xl text-[24px] font-bold font-['Josefin Sans'] uppercase lg:leading-[62.40px]">Make A statement.<br/></span><span className="text-black lg:text-5xl text-[24px] font-normal font-['Josefin Sans'] uppercase lg:leading-[62.40px]">Feel unstoppable.</span></h2>
    <div className="flex-col justify-start items-center gap-[30px] flex">
      <Link href='/landing-page' className='inline-block'>
      <button className="self-stretch px-[30px] py-[18px] bg-neutral-900 rounded-[var(--md,8px)] border shadow-[4px_4px_0px_0px_#171717] border-solid border-white flex-col justify-center items-start gap-[15px] flex">
            <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-white text-[16px] lg:text-[22px] font-semibold font-['Josefin Sans'] uppercase">BUILD YOUR OWN SET</div>
                <Image src={arrowRight} alt='Arrow'/>
            </div>
            <div className="lg:w-[290px] text-left text-white text-[12px] lg:text-sm font-normal font-['Josefin Sans'] leading-[16.80px]">Pick and mix 100 ml designer-like scents from our range to make your own perfume set.</div>
        </button>
      </Link>
        <div className="text-zinc-800 text-[16px] lg:text-[22px] font-semibold font-['Josefin Sans'] uppercase">OR</div>
     <Link href='/discovery-kit' className='inline-block'>
     <button className="px-[30px] py-[18px] bg-neutral-200 rounded-[var(--md,8px)] border border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] border-solid flex-col justify-center items-start gap-[15px] flex">
            <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-zinc-800 text-[16px] lg:text-[22px] font-semibold font-['Josefin Sans'] uppercase">TRY OUR discoverY SET</div>
                <Image src={arrowRightBlack} alt='Arrow'/>
            </div>
            <div className="lg:w-[290px] text-left text-zinc-700 text-[12px] lg:text-sm font-normal font-['Josefin Sans'] leading-[16.80px]">Get 5 ml samples of our entire collection. Discover iconic designer-like scents that match your vibe.</div>
        </button>
     </Link>
    </div>
</div>
    </main>
    </section>
  )
}

export default MainPreSelling