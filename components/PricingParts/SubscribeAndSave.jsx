"use client";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Box1, Box2, DownArrow2, Plus, Minus, DownArrow1, Star12, Prev, Next, Dropdown, Remove } from "@/utils/Helpers";
import Image from "next/image";
import circle from "@/public/assets/circle.svg";
import checkedCircle from "@/public/assets/checkedCircle.svg";
import React, { useState, useEffect, useRef, useCallback } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '@/app/globals.css'
import perfume from '@/public/assets/perfumeCollect.png'
import blue from '@/public/assets/blue.png'
import brown from '@/public/assets/brown.png'
import darkGrey from '@/public/assets/darkNotSelected.svg'
import darkBlack from '@/public/assets/darkSelected.png'
import { usePricing } from "@/utils/PricingContext";

const SubscribeAndSave = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { show1, setShow1, selectedButton, setSelectedButton, selectedPlan, setSelectedPlan,selectedOptions, setSelectedOptions } = usePricing();
    const [selectedButtonDropdown, setSelectedButtonDropdown] = useState(null);
  
    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };
    const handleClick = (show) => {
      setShow1(show);
      
    };
    const Links = [
      {link:perfume , link2:  blue , link3: brown},
      {link:perfume , link2:  blue , link3: brown},
      {link:perfume , link2:  blue , link3: brown},
      {link:perfume , link2:  blue , link3: brown},
      {link:perfume, link2:  blue , link3: brown},
      {link:perfume, link2:  blue , link3: brown},
      {link:perfume, link2:  blue , link3: brown},
      
    ]
  

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggleDropdown1 = () => {
      setDropdownOpen1(!dropdownOpen1);
    };
    
    const toggleDropdown2 = () => {
      setDropdownOpen2(!dropdownOpen2);
    };
    const [selectedTrend, setSelectedTrend] = useState(true);
    const data = [
      { name:'1 Perfume', rate:'£40/2 months', rate50:'£20/2 months', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'1 x 100ml perfume (lasts 2 months)', firstPoint50:'1 x 50ml perfume (lasts 2 months)', lastPoint:'1 x 5ml sample (free compliment)',spray:'£0.04 per spray' },
      { name:'2 Perfumes', rate:'£60/4 months',rate50:'£30/4 months',discount50:'£40 ', discount:'£80 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'2 x 100ml perfumes (lasts 4 months)',firstPoint50:'2 x 50ml perfume (lasts 4 months)', lastPoint:'2 x 5ml samples (free compliments)',spray:'£0.03 per spray', trend: selectedTrend, trendName: 'MOST POPULAR' },
      { name:'3 Perfumes', rate:'£75/6 months', rate50:'£37/6 months',discount50:'£60 ',discount:'£120 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'3 x 100ml perfumes (lasts 6 months)', firstPoint50:'1 x 50ml perfume (lasts 6 months)', lastPoint:'3 x 5ml samples (free compliments)',spray:'£0.02 per spray', trend: selectedTrend, trendName: 'BEST VALUE' }
    ];
  
    // Ref to hold dropdown elements
    const dropdownRefs = useRef(data.map(() => React.createRef()));
  
    // State variables
    const [isOpen, setIsOpen] = useState(data.map(() => false)); 
   
    const [selectedPlanColors, setSelectedPlanColors] = useState(data.map(() => true)); // selectedPlanColor for each dropdown
  
    // Handle option change for a specific dropdown
    const handleOptionChange = (option, index) => {
      setSelectedOptions(prevOptions => prevOptions.map((value, i) => i === index ? option : value));
      setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? false : value)); 
      console.log(selectedOptions[index])
    };
  
    // Handle plan change
    const handleOptionPlanChange = (option, index) => {
      setSelectedPlan(option);
      setSelectedPlanColors(prevColors => prevColors.map((value, i) => i === index ? true : value)); // Change color for this dropdown
    };
  
    // Toggle dropdown for a specific index
    const toggleDropdown = (index) => {
      setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? !value : false)); // Close other dropdowns
    };
  
    // Close dropdown when clicking outside
    const handleClickOutside = (event, index) => {
      // Check if the ref is initialized and not null
      if (dropdownRefs.current[index] && dropdownRefs.current[index].current && !dropdownRefs.current[index].current.contains(event.target)) {
        setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? false : value));
      }
    };
  
  
    useEffect(() => {
      const handleClickOutsideForAll = (event) => {
        isOpen.forEach((value, index) => handleClickOutside(event, index));
      };
  
      document.addEventListener("click", handleClickOutsideForAll);
      return () => {
        document.removeEventListener("click", handleClickOutsideForAll);
      };
    }, [isOpen]);
  

    const [selectedImages, setSelectedImages] = useState([]);
    useEffect(() => {
      setSelectedImages([]);
    }, [selectedPlan,show1]);



  const selectedPlanData = data.find(item => item.name === selectedPlan);
let originalPrice = '';
let discountedPrice = '';
  if (selectedPlanData) {
    const rateKey = selectedOptions[data.indexOf(selectedPlanData)].includes('50ml') ? 'rate50' : 'rate';
    const discountKey = selectedOptions[data.indexOf(selectedPlanData)].includes('50ml') ? 'discount50' : 'discount';
    
    const originalPriceParts = selectedPlanData[discountKey] ? selectedPlanData[discountKey].split('/') : selectedPlanData[rateKey].split('/');
    originalPrice = originalPriceParts.length > 0 ? originalPriceParts[0].trim() : '';
    
    if (selectedPlanData[discountKey]) {
      discountedPrice = selectedPlanData[rateKey].split('/')[0].trim();
    }
    }
  
   
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.style.setProperty('--swiper-button-color', 'white');
    } else {
      root.style.setProperty('--swiper-button-color', '#171717');
    }
  }, [isDarkMode]);

  return (
                   <>
              {
                show1 === 1 && 
                (
                  data.map(({ name, rate, discount, shipping, includes, firstPoint, firstPoint50, lastPoint, spray, rate50,discount50, trend, trendName }, index) => (
                    <div onClick={() => handleOptionPlanChange(name, index)} className="lg:block hidden">
                      
                    <div key={index} className={`flex 2xl:w-[450px] flex-col items-start px-5 py-[30px] ${trend ? 'rounded-t-[var(--md,8px)] ' : 'rounded-[var(--md,8px)] '} border   border-solid  ${selectedPlan === name ? `${isDarkMode ? 'bg-white border-white' : 'border-white bg-primary'}` : `${isDarkMode ? 'bg-[#454547] border-white' : ' bg-white border-[color:var(--black,#171717)]'}`} `}>
                      <div className="flex items-center gap-5 lg:w-full">
                        <h6 className={` xxl:text-[38px] 2xl:w-auto  lg:w-[60%] 2xl:text-[30px] lg:text-[26px] not-italic font-semibold leading-[normal] ${selectedPlan === name ? `${isDarkMode ? ' text-primary' : 'text-white'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{name}</h6>
                        {/* Select  */}
                        <div className="relative 2xl:w-[10%] lg:w-[5%]" ref={dropdownRefs.current[index]}>
                          <span className="rounded-md shadow-sm">
                            <button
                              onClick={() => toggleDropdown(index)}
                              type="button"
                              className={`flex items-center gap-2.5 px-2.5 py-[5px] rounded-[var(--sm,4px)] border  border-solid  2xl:text-xl not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary border-primary' : 'text-white border-white'}` : `${isDarkMode ? 'text-white border-white' : 'text-[color:var(--Brand,#28282A)] border-[color:var(--Brand,#28282A)]'}`}`}
                              id={`options-menu-${index}`}
                              aria-haspopup="true"
                              aria-expanded={isOpen[index] ? "true" : "false"}
                            >
                              {selectedOptions[index]}
                              <DownArrow2 color={selectedPlan === name ? `${isDarkMode ? '#171717' : 'white'}` : `${isDarkMode ? 'white' : '#28282A'}`} />
                            </button>
                          </span>
              
                          {isOpen[index] && (
                            <div
                              className={`origin-top-right absolute xxl:right-0 lg:left-0 mt-2 w-56 rounded-md shadow-lg  ring-1  ring-opacity-5 ${selectedPlan === name ? `${isDarkMode ? 'ring-white bg-primary' : 'ring-black bg-white'}` : 'ring-black bg-white'}`}
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby={`options-menu-${index}`}
                            >
                              <div className="py-1" role="none">
                                <button
                                  onClick={() => handleOptionChange("100ml", index)}
                                  className={`${selectedOptions[index] === "100ml" ? "" : ""} block w-full text-left px-4 py-2 text-sm  ${selectedPlan === name ? `${isDarkMode ? 'text-white' :'text-primary hover:bg-gray-100 hover:text-gray-900'}` : `'text-gray-700 hover:bg-gray-100 hover:text-gray-900'`}`}
                                  role="menuitem"
                                >
                                  100ml
                                </button>
                                <button
                                  onClick={() => handleOptionChange("50ml", index)}
                                  className={`${selectedOptions[index] === "50ml" ? `${isDarkMode ? 'bg-transparent' :'bg-gray-100'}` : ""} block w-full text-left px-4 py-2 text-sm ${selectedPlan === name ? `${isDarkMode ? 'text-white' :'text-primary hover:bg-gray-100 hover:text-gray-900'}` : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                                  role="menuitem"
                                >
                                  50ml
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        {/* CheckMark */}
                        <div className="2xl:ml-auto lg:ml-[80px] 2xl:w-auto lg:w-[20%]">
                            
                            {
                              isDarkMode ? 
                                <Image onClick={() => handleOptionPlanChange(name, index)} src={selectedPlan === name ? darkBlack : darkGrey} alt="Circle" />
                                : <Image onClick={() => handleOptionPlanChange(name, index)} src={selectedPlan === name ? checkedCircle : circle} alt="Circle" />
                            }
                        </div>
                      </div>
                      <span  className={`2xl:text-[28px] lg:text-[22px] not-italic font-normal leading-[normal] mt-[25px] ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-white'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}><span className={` 2xl:text-[22px] lg:text-[16px] not-italic font-normal leading-[normal] line-through ${selectedPlan === name ? `${isDarkMode ? 'text-[#171717CC]' : 'text-[rgba(255,255,255,0.80)]'}` : `${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[#171717CC]'}`}`}>{selectedOptions[index] === "50ml" ? discount50 : discount}</span>{selectedOptions[index] === "50ml" ? rate50 : rate}</span>
                      <span className={`mt-[30px] 2xl:text-xl not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{includes}</span>
                      <span className={` mt-[15px] 2xl:text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{selectedOptions[index] === "50ml" ? firstPoint50 : firstPoint}</span>
                      <span className={` mt-[10px] 2xl:text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{lastPoint}</span>
                      <span className={` 2xl:text-xl not-italic font-light leading-[normal] mt-[30px] ml-auto ${selectedPlan === name ? `${isDarkMode ? 'text-[#28282ACC]' : 'text-[#FFFFFFCC]'}` : `${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}`}>{spray}</span>
                      </div>
                      {
                        trend && (
                          <div className={`flex justify-between items-center self-stretch p-5 rounded-[0px_0px_var(--md,8px)_var(--md,8px)] border-b border-l border-r  border-solid ${isDarkMode ? 'border-white ' : 'border-[color:var(--black,#171717)] '}`}>
                            <span className={` text-center mx-auto 2xl:text-3xl not-italic font-bold leading-[normal] ${isDarkMode ? 'text-white ' : 'text-[color:var(--black,#171717)]'}`}>
                            {trendName}
                            </span> 
                          </div>
                        )
                      }
                    </div>
                  ))
                )
                }
                {
                  // Mobile Device
                  show1 === 1 &&
                  <div className={`lg:hidden block md:w-[70%] mx-0 md:mx-auto w-[100%]`}>
                  <div className={`inline-flex justify-center items-center gap-x-[20px] mt-[30px] mb-[20px] py-[10px] border-b border-solid ${isDarkMode ? 'border-white' : 'border-primary'}`}>
                  { data.map(({ name }, index) => (
                     
                    <div onClick={() => handleOptionPlanChange(name, index)} className={` text-center text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-white' : 'text-primary'}` : `${isDarkMode ? 'text-[color:var(--brand2,#454547)]' : 'text-gray-500'}`}`}>
                      {name}
                      </div>
                     
                
                 
                  ))}
                    </div>
                {
                show1 === 1 && 
                (
                  data.map(({ name, rate, discount, shipping, includes, firstPoint, firstPoint50, lastPoint, spray, rate50,discount50, trend, trendName }, index) => (
                    
                    
                      
                        selectedPlan === name &&
                        <div onClick={() => handleOptionPlanChange(name, index)} className="">
                          {
                            trend && (
                              <div className={`flex justify-between items-center self-stretch lg:p-5 py-[10px] px-[20px] rounded-t-[8px] border-t border-r border-l  border-solid ${isDarkMode ? 'border-white ' : 'border-[color:var(--black,#171717)] '} `}>
                                <span className={` text-center mx-auto text-[16px] lg:text-3xl not-italic font-bold leading-[normal] ${isDarkMode ? 'text-white ' : 'text-[color:var(--black,#171717)]'}`}>
                                {trendName}
                                </span> 
                              </div>
                            )
                          }
                        <div key={index} className={`flex flex-col items-start lg:px-5 lg:py-[30px] md:p-[20px] p-[10px] rounded-b-[8px]  border border-solid ${selectedPlan === '1 Perfume' && 'rounded-[8px]'}  ${selectedPlan === name ? `${isDarkMode ? 'bg-white border-white' : 'border-primary bg-primary'}` : `${isDarkMode ? 'bg-[#454547] border-white' : ' bg-white border-[color:var(--black,#171717)]'}`} `}>
                          <div className="flex items-center justify-between w-full">
                            {/* Select  */}
                            <span  className={`lg:text-[28px] text-[20px] not-italic font-normal leading-[normal]  ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-white'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}><span className={` lg:text-[22px] text-[12px] not-italic font-normal leading-[normal] line-through ${selectedPlan === name ? `${isDarkMode ? 'text-[#171717CC]' : 'text-[rgba(255,255,255,0.80)]'}` : `${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[#171717CC]'}`}`}>{selectedOptions[index] === "50ml" ? discount50 : discount}</span>{selectedOptions[index] === "50ml" ? rate50 : rate}</span>
                           
                            {/* CheckMark */}
                            <div className="flex justify-end ml-auto lg:w-auto lg:h-auto w-[25px] h-[25px]">
                                
                                {
                                  isDarkMode ? 
                                    <Image onClick={() => handleOptionPlanChange(name, index)} src={selectedPlan === name ? darkBlack : darkGrey} alt="Circle" />
                                    : <Image onClick={() => handleOptionPlanChange(name, index)} src={selectedPlan === name ? checkedCircle : circle} alt="Circle" />
                                }
                            </div>
                          </div>
                          <div className="relative mt-[10px]" ref={dropdownRefs.current[index]}>
                              <span className="rounded-md shadow-sm">
                                <button
                                  onClick={() => toggleDropdown(index)}
                                  type="button"
                                  className={`flex items-center gap-2.5 lg:px-2.5 lg:py-[5px] p-1 rounded-[var(--sm,4px)] border  border-solid  lg:text-xl text-[12px] not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary border-primary' : 'text-white border-white'}` : `${isDarkMode ? 'text-white border-white' : 'text-[color:var(--Brand,#28282A)] border-[color:var(--Brand,#28282A)]'}`}`}
                                  id={`options-menu-${index}`}
                                  aria-haspopup="true"
                                  aria-expanded={isOpen[index] ? "true" : "false"}
                                >
                                  {selectedOptions[index]}
                                  <DownArrow2 color={selectedPlan === name ? `${isDarkMode ? '#171717' : 'white'}` : `${isDarkMode ? 'white' : '#28282A'}`} />
                                </button>
                              </span>
                  
                              {isOpen[index] && (
                                <div
                                  className={`origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg  ring-1  ring-opacity-5 ${selectedPlan === name ? `${isDarkMode ? 'ring-white bg-primary' : 'ring-black bg-white'}` : 'ring-black bg-white'}`}
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby={`options-menu-${index}`}
                                >
                                  <div className="py-1" role="none">
                                    <button
                                      onClick={() => handleOptionChange("100ml", index)}
                                      className={`${selectedOptions[index] === "100ml" ? "" : ""} block w-full text-left px-4 py-2 text-sm  ${selectedPlan === name ? `${isDarkMode ? 'text-white' :'text-primary hover:bg-gray-100 hover:text-gray-900'}` : `'text-gray-700 hover:bg-gray-100 hover:text-gray-900'`}`}
                                      role="menuitem"
                                    >
                                      100ml
                                    </button>
                                    <button
                                      onClick={() => handleOptionChange("50ml", index)}
                                      className={`${selectedOptions[index] === "50ml" ? `${isDarkMode ? 'bg-transparent' :'bg-gray-100'}` : ""} block w-full text-left px-4 py-2 text-sm ${selectedPlan === name ? `${isDarkMode ? 'text-white' :'text-primary hover:bg-gray-100 hover:text-gray-900'}` : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                                      role="menuitem"
                                    >
                                      50ml
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          <span className={`mt-[20px] text-[16px] lg:text-xl not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{includes}</span>
                          <span className={` mt-[15px] text-[14px] lg:text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{selectedOptions[index] === "50ml" ? firstPoint50 : firstPoint}</span>
                          <span className={` mt-[10px] text-[14px] lg:text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{lastPoint}</span>
                          <span className={` text-[16px] lg:text-xl not-italic font-light leading-[normal] mt-[30px] ml-auto ${selectedPlan === name ? `${isDarkMode ? 'text-[#28282ACC]' : 'text-[#FFFFFFCC]'}` : `${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}`}>{spray}</span>
                          </div>
                          
                          </div>
                    
                     
                  ))
                )
                  }
                 </div>
                }
            </>
  )
}

export default SubscribeAndSave