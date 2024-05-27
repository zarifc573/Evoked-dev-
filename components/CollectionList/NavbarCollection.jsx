"use client"
import React from 'react'
import logo from '@/public/assets/logo.svg'
import Image from 'next/image'
import { useDarkMode } from '@/utils/DarkModeContext'
import Link from 'next/link'
const NavbarCollection = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className='w-full 2xl:py-[40px] lg:py-[20px] py-[20px] lg:bg-primary lg:border-b lg:border-b-white lg:border-solid lg:static absolute top-0 left-0 z-30 '>
    <div className="lg:max-w-container w-[90%] mx-auto flex justify-between items-center">
        <Link href='/' className="inline-block">
            <Image className='2xl:w-auto 2xl:h-auto lg:w-[170px] lg:h-[50px]  w-[122px] h-[22px]' src={logo} alt='Logo' />
        </Link>
        <div className="flex items-center gap-x-[30px]">
           
        </div>
    </div>
</nav>
  )
}

export default NavbarCollection