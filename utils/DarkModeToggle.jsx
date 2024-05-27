"use client"
import React from 'react';
import { useDarkMode } from './DarkModeContext';
import Image from 'next/image'
import dark from '@/public/assets/darkmode.png'
import light from '@/public/assets/lightmode.png'
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      <div className="w-[100px] h-10 shrink-0 rounded-[106.623px] bg-[#f4f4f4] py-[5px] px-[10px] flex items-center justify-between ">
        <Image src={light} alt='LightMode'/>
        <Image src={dark} alt='DarkMode'/>
      </div>
    </button>
  );
};

export default DarkModeToggle;