'use client'
import React from 'react'
import { useDarkMode } from '@/utils/DarkModeContext'
import mission from '@/public/assets/collection.png'
import Image from 'next/image'
import Link from 'next/link'
import { DisCover } from '@/utils/Helpers'
const ProductDiscover = () => {
    const { isDarkMode } = useDarkMode();
  return (
    <section className={`${isDarkMode ? 'bg-[#171717]' : 'bg-white'} lg:py-[100px] overflow-x-hidden py-[80px]`}>
        <div className="2xl:max-w-container w-[90%] mx-auto">
            <div className="">
            <div className={`flex lg:flex-row flex-col-reverse lg:border lg:border-opacity-[0.4] rounded-[8px] lg:border-solid ${isDarkMode ? 'border-white' : 'border-[#28282A]'} items-center justify-between gap-7 lg:gap-5`}>
                <div className=" lg:w-[45%] lg:ml-[60px] w-full flex flex-col">
                    <h3 className={` 2xl:text-5xl lg:text-[32px] lg:text-start text-center text-[22px] font-bold ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>Discover our entire range</h3>
                    <p className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} font-primary mt-[10px] lg:mt-[20px] lg:text-[16px] text-[14px] lg:text-start text-center  2xl:text-2xl font-normal 2xl:w-[610px]`}>Find your new signature scent with our ultimate fragrance sample kit.</p>
                    <div className="lg:w-[459px]  flex-col justify-start items-start gap-2.5 lg:gap-5 inline-flex">
    <div className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} lg:mt-[30px] mt-[20px] lg:text-[18px] 2xl:text-2xl text-[16px] lg:text-start text-center font-normal font-['Josefin Sans'] leading-[28.80px]`}>Includes</div>
    <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="justify-start items-start gap-[5px] inline-flex">
        <DisCover color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-[16px] lg:text-[16px] 2xl:text-xl font-normal font-['Josefin Sans'] leading-normal`}>12 x 5ml </span>
        </div>
        <div className="justify-start items-start gap-[5px] inline-flex">
        <DisCover color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-[16px] lg:text-[16px] 2xl:text-xl font-normal font-['Josefin Sans'] leading-normal`}>Free £30 store credit towards a future purchase</span>
        </div>
    </div>
</div>
                    <Link href='/discovery-kit' className='inline-block mr-auto' >
          <button className={`lg:mt-[30px] mt-[20px] uppercase lg:mx-0 mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={`2xl:text-[22px] lg:text-[16px] text-[16px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>TRY DISCOVERY KIT</span>
              </button>
              </Link>
                </div>
                <div className=" 2xl:w-[55%] lg:w-[50%] w-full">
                    <Image className='' src={mission} alt='Image'/>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDiscover