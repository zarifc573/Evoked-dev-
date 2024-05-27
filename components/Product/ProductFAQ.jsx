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
    <button onClick={toggle} className={`lg:flex flex md:inline-flex mb-[30px] lg:w-full w-full flex-col items-start md:items-center text-start justify-start gap-x-[15px] mx-auto lg:py-[10px] lg:px-[20px]  py-[7px] px-[14px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#fff)] bg-[#28282AB2]' : 'bg-white border-[color:var(--black,#171717)]'}`}>
      <div className="flex flex-col w-full">
      <div  className={`flex justify-between w-full gap-x-[44px] items-center cursor-pointer`}>
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
        <div className={`mt-[15px] text-start lg:w-full 2xl:text-[22px] lg:text-[16px] text-[12px] not-italic font-light leading-7 fontFeature ${isDarkMode ? 'text-[#FFFFFFB2]' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}>{desc}</div>
      </Collapse>


    </button>
  )
}


const ProductAccordion = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [open, setOpen]= useState(false)
  const toggle = (index) => {
    if (open === index) { 
      return  setOpen(null); 
    }
    setOpen(index)
  }
    const accordioData = [
        {title:'About this scent', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'Notes & Ingredients', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'Faq', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'Details', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
    ]
  return (
    <section className={`${isDarkMode ? 'bg-[#171717]' : 'bg-white'} lg:pt-[40px] pt-[30px]`}>
      <div className="2xl:max-w-container lg:w-[100%] w-[90%] mx-auto">
        <div className="pb-[50px] lg:block md:flex md:flex-col justify-center items-center">

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

export default ProductAccordion