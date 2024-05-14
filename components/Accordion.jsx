"use client"

import { useDarkMode } from '@/utils/DarkModeContext';
import React, { useState } from 'react'
import { Collapse } from 'react-collapse';
import lightMinus from '@/public/assets/lightMinus.svg'
import lightPlus from '@/public/assets/lightPlus.svg'
import darkMinus from '@/public/assets/darkMinus.svg'
import darkPlus from '@/public/assets/darkPlus.svg'
import Image from 'next/image';
const AccordionItem = ({open, toggle, title, desc}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggle} className={`lg:flex flex md:inline-flex mb-[30px] md:w-[70%] lg:w-[690px] w-full flex-col items-start md:items-center text-start justify-start gap-x-[15px] mx-auto lg:p-[20px]  py-[15px] px-[20px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#fff)] bg-[#28282AB2]' : 'bg-white border-[color:var(--black,#171717)]'}`}>
      <div className="flex flex-col">
      <div  className={`flex justify-center gap-x-[44px] items-center cursor-pointer`}>
        <p className={` fontFeature lg:text-[22px] text-start text-[16px] not-italic font-medium leading-[120%] lg:leading-7 ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>{title}</p>
        <div className="">
            {
              open ? isDarkMode ? <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={darkMinus} alt='Minus'/> : <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={lightMinus} alt='Minus'/>  : isDarkMode ? <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={darkPlus} alt='Plus'/> : <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={lightPlus} alt='Minus'/>
            }
        </div>
        </div>
        
{open !== null && (
          <div className={`h-[1px] text-start bg-[rgba(168,168,175,0.7)] transition-height duration-500 ${open ? ' mt-[10px]' : 'opacity-0 '}`}></div>
        )}
        
       
      
      </div>
      <Collapse isOpened={open}>
        <div className={`mt-[15px] text-start md:w-[70%] lg:w-auto 2xl:text-[22px] lg:text-[16px] text-[12px] not-italic font-light leading-7 fontFeature ${isDarkMode ? 'text-[#FFFFFFB2]' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}>{desc}</div>
      </Collapse>


    </button>
  )
}


const Accordion = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [open, setOpen]= useState(false)
  const toggle = (index) => {
    if (open === index) { 
      return  setOpen(null); 
    }
    setOpen(index)
  }
    const accordioData = [
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
    ]
  return (
    <section className={`lg:pt-[100px] lg:pb-[100px] pt-[80px] pb-[40px]  ${isDarkMode ? 'bg-[#171717]' : 'bg-white'}`}>
      <div className="lg:max-w-container w-[90%] mx-auto">
        <div className="pb-[50px] lg:block md:flex md:flex-col justify-center items-center">

        
        <h2 className={` text-center 2xl:text-5xl lg:text-[38px] not-italic font-bold leading-[130%] uppercase mb-[30px] lg:mb-[80px] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>FAQ</h2>
      {accordioData.map((item, index) => (
        <AccordionItem
          key={index}
          open={index === open}
          title={item.title}
          desc={item.desc}
          toggle={()=>toggle(index)}
        />
        
      ))
          }
        </div>
      </div>
      
    </section>
  )
}

export default Accordion