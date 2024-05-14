"use client"
import React from 'react'
import logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import { useDarkMode } from '@/utils/DarkModeContext'
import Link from 'next/link'
const Navbar = ({name, link}) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
      <nav className='w-full lg:py-[40px] py-[20px] lg:bg-primary lg:border-b-2 lg:border-b-white lg:border-solid lg:static absolute top-0 left-0 z-10 '>
          <div className="lg:max-w-container w-[90%] mx-auto flex justify-between items-center">
              <div className="">
                  <Image className='lg:w-auto lg:h-auto w-[122px] h-[22px]' src={logo} />
              </div>
              <div className="flex items-center gap-x-[30px]">
                 
                  <Link href={link}>
                  <button className='flex justify-center items-center gap-2.5 px-5 py-[12px] bg-white rounded-[var(--md,8px)] border-[color:var(--Brand,#28282A)] shadow-[2px_2px_0px_0px_#FFF] border-[1.5px] border-solid text-[color:var(--Brand,#28282A)] text-[10px] lg:text-base not-italic font-semibold leading-[normal] uppercase'>{name}</button>
                  </Link>
                  {/* <button className="flex justify-center items-center gap-10 ">
                      <span className="flex justify-center items-center gap-2.5 px-5 py-[18px] rounded-[var(--md,8px)] border-[1.5px] border-solid border-white text-white text-base not-italic font-semibold leading-[normal] uppercase shadow-[4px_4px_0px_0px_#FFF]">TRY DISCOVERY SET</span>
              </button> */}
                 
              </div>
          </div>
    </nav>
  )
}

export default Navbar