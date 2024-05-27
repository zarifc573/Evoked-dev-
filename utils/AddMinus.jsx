"use client"

import { useDarkMode } from "./DarkModeContext";

const Add = ({color}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
      <div className={`flex h-7 flex-col justify-center items-start gap-2.5 px-2 py-0 rounded-[var(--sm,4px)] border  border-solid  ${isDarkMode ? 'bg-[#454547] border-[color:var(--black,#fff)]' : 'bg-[#F4F4F4] border-[color:var(--black,#171717)]'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 1V15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1 8H15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  )
}
const Minus = ({color}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`flex h-7 flex-col justify-center items-start gap-2.5 px-2 py-0 rounded-[var(--sm,4px)] border  border-solid  ${isDarkMode ? 'bg-[#454547] border-[color:var(--black,#fff)]' : 'bg-[#F4F4F4] border-[color:var(--black,#171717)]'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
  <path d="M1 1H15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
  )
}

export {Add, Minus}