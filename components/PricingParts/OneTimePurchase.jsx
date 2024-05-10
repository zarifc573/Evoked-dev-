"use client";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Box1, Box2, DownArrow2, Plus, Minus, DownArrow1, Star12, Prev, Next, Dropdown, Remove } from "@/utils/Helpers";
import Image from "next/image";
import circle from "@/public/assets/circle.svg";
import checkedCircle from "@/public/assets/checkedCircle.svg";
import React, { useState, useEffect, useRef, useCallback } from "react";
import darkGrey from '@/public/assets/darkNotSelected.svg'
import darkBlack from '@/public/assets/darkSelected.png'
import { usePricing } from "@/utils/PricingContext";

const OneTimePurchase = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const {show1, setShow1, selectedPlan2, setSelectedPlan2, count, setCount,rate, setRate, rate50, setRate50, discount, setDiscount, discount50, setDiscount50, shipping, setShipping, selector, setSelector, selectedOptions2, setSelectedOptions2  } = usePricing();
    const data2 = [
        { name:'Perfume Set', rate:'£45', rate50:'£23', shipping:'Add 1 more to save £20',shippingProgress:'Add 1 more to get 1 x free perfume + £20 off', includes:'What’s included:', firstPoint:' x 100ml perfume (lasts 2 months)',firstPoint50:' x 50ml perfume (lasts 2 months)', lastPoint:' x 5ml sample (free compliment)',spray:'£0.05 per spray', discount:'£60', discount50:'£30' },
      ];
      
      const [firstPoint, setFirstPoint] = useState(data2[0].firstPoint);
      const [firstPoint50, setFirstPoint50] = useState(data2[0].firstPoint50);
      const [lastPoint, setLastPoint] = useState(data2[0].lastPoint);
      const [spray, setSpray] = useState(data2[0].spray);
      const [isOpen2, setIsOpen2] = useState(data2.map(() => false)); // isOpen for each dropdown

  const dropdownRefs2 = useRef(data2.map(() => React.createRef()));
 
  const [selectedPlanColors2, setSelectedPlanColors2] = useState(data2.map(() => true)); // selectedPlanColor for each dropdown

  // Handle option change for a specific dropdown
  const handleOptionChange2 = (option, index) => {
    setSelectedOptions2(prevOptions => prevOptions.map((value, i) => i === index ? option : value));
    setIsOpen2(prevOpen => prevOpen.map((value, i) => i === index ? false : value)); // Close other dropdowns
  };

  // Handle plan change
  const handleOptionPlanChange2 = (option, index) => {
    setSelectedPlan2(option);
    setSelectedPlanColors2(prevColors => prevColors.map((value, i) => i === index ? true : value)); // Change color for this dropdown
  };
  

  const toggleDropdownOneTime = (index) => {
    setIsOpen2(prevOpen => prevOpen.map((value, i) => i === index ? !value : false)); // Close other dropdowns
  };

  // Close dropdown when clicking outside
  const handleClickOutside2 = (event, index) => {
    const ref = dropdownRefs2.current[index]?.current; // Using optional chaining to handle null values
    if (ref && !ref.contains(event.target)) {
      setIsOpen2(prevOpen => prevOpen.map((value, i) => i === index ? false : value));
    }
  };
  

  useEffect(() => {
    const handleClickOutsideForAll = (event) => {
      isOpen2.forEach((value, index) => handleClickOutside2(event, index));
    };

    document.addEventListener("click", handleClickOutsideForAll);
    return () => {
      document.removeEventListener("click", handleClickOutsideForAll);
    };
  }, [isOpen2]);
  const handleIncrement =()=> {
    //setCount(prevCount => prevCount+=1);
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
      // Update other state values based on the count
      // Your existing code for updating state values goes here...
      if (count === 1) {
        setRate('£70'); // Update rate when count increases from 1 to 2
        setSelector(true)
        setDiscount('£90 ')
        setFirstPoint('x 100ml perfume (lasts 4 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('Add 1 more to save £45')
        setSpray('£0.04 per spray')
  
      }else if(count === 2){
        setRate( '£90' )
        setSelector(true)
        setDiscount('£135 ')
        setFirstPoint('x 100ml perfume (lasts 6 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('Add 1 more to save £80')
        setSpray('£0.03 per spray')
      } else if (count === 3) {
        setRate('£100')
        setSelector(true)
        setDiscount('£180 ')
        setFirstPoint('x 100ml perfume (lasts 8 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('You’ve unlocked max savings of £80! 🎉')
        setSpray('£0.02 per spray')
      }else if (count === 4) {
        setRate('£225')
        setSelector(false)
        setFirstPoint('x 100ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('No more savings here')
        setSpray('£0.04 per spray')
      }
      else if ((count+1) > 4) {
        setRate('£'+ ((count+1) * 45 ))
        setSelector(false)
        setFirstPoint('x 100ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('No more savings here')
        setSpray('£0.04 per spray')
      } 
      // Rate for 50ml
      if (count === 1) {
        setRate50('£35');
        setSelector(true)
        setDiscount50('£45')
        setFirstPoint50('x 50ml perfume (lasts 4 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.04 per spray')
      }else if(count === 2){
        setRate50('£45')
        setSelector(true)
        setDiscount50('£67')
        setFirstPoint50('x 50ml perfume (lasts 6 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.03 per spray')
      } else if (count === 3) {
        setRate50('£50')
        setSelector(true)
        setDiscount50('£90')
        setFirstPoint50('x 50ml perfume (lasts 8 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.02 per spray')
      } else if (count === 4) {
        setRate50('£112')
        setSelector(false)
        setFirstPoint50('x 50ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.04 per spray')
      }
      else if ((count+1) > 4) {
        setRate50('£'+ Math.ceil(((count+1) * 45/2 )))
        setSelector(false)
        setFirstPoint50('x 50ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.04 per spray')
      } 
    }
  
 
  }

  const handleDecrement =()=> {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      // Update other state values based on the count
      // Your existing code for updating state values goes here...
      if (count === 2) {
        setRate('£45');
        setSelector(false)
        setFirstPoint('x 100ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('Add 1 more to save £20')
        setSpray('£0.05 per spray')
        
      }else if(count === 3){
        setRate('£70')
        setSelector(true)
        setDiscount('£90 ')
        setFirstPoint('x 100ml perfume (lasts 4 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('Add 1 more to save £45')
        setSpray('£0.04 per spray')
        
      } else if (count === 4) {
        setRate('£90'); 
        setSelector(true)
        setDiscount('£135 ')
        setFirstPoint('x 100ml perfume (lasts 6 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('Add 1 more to save £80')
        setSpray('£0.03 per spray')
      }else if (count === 5) {
        setRate('£100');
        setSelector(true)
        setDiscount('£180 ')
        setFirstPoint('x 100ml perfume (lasts 8 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('You’ve unlocked max savings of £80! 🎉')
        setSpray('£0.02 per spray')
      }
      else if ((count+1) > 5) {
        setRate('£' + Math.ceil(((count+1) - 2) * 45)); // Update rate for counts greater than 3
        setSelector(false)
        setFirstPoint('x 100ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setShipping('No more savings here')
        setSpray('£0.04 per spray')
      }
      // 50ml
      if (count === 2) {
        setRate50('£23'); // Update rate when count increases from 1 to 2
        setSelector(false)
        setFirstPoint50('x 50ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.05 per spray')
      }else if(count === 3){
        setRate50('£35')
        setSelector(true)
        setDiscount50('£45')
        setFirstPoint50('x 50ml perfume (lasts 4 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.04 per spray')
      } else if (count === 4) {
        setRate50('£45'); // Update rate for counts greater than 3
        setSelector(true)
        setDiscount50('£67')
        setFirstPoint50('x 50ml perfume (lasts 6 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.03 per spray')
      }else if (count === 5) {
        setRate50('£50'); // Update rate for counts greater than 3
        setSelector(true)
        setDiscount50('£90')
        setFirstPoint50('x 50ml perfume (lasts 8 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.02 per spray')
      }
      else if ((count+1) > 5) {
        setRate50('£' + Math.ceil(((count+1) - 2) * 45/2)); // Update rate for counts greater than 3
        setSelector(false)
        setFirstPoint50('x 50ml perfume (lasts 2 months)')
        setLastPoint('x 5ml sample (free compliment)')
        setSpray('£0.04 per spray')
      }
    }
    
  }


  return (
    <>
         {
                show1 === 2 && 
                (
                  data2.map(({ name, includes }, index) => (
                    <div className="mx-auto lg:w-auto md:w-[70%] w-full lg:mt-0 mt-[30px]">
                    <div key={index} className={`flex flex-col items-start rounded-[8px] px-5 py-[30px] border border-[color:var(--black,#171717)] border-solid  ${selectedPlan2 === name ? `${isDarkMode ? 'bg-white border-white' : 'border-white bg-primary'}` : `${isDarkMode ? 'bg-[#454547] border-white' : ' bg-white border-[color:var(--black,#171717)]'}`} `}>
                        <div className="flex justify-between items-center lg:gap-5 gap-3">
                          
                        <h6 className={` text-[26px] lg:text-[38px] not-italic font-semibold leading-[normal] ${selectedPlan2 === name ? `${isDarkMode ? 'text-[primary]' : 'text-white'}` : `${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[white]'}`}`}>{name}</h6>
                        {/* Select  */}
                        <div className="relative lg:ml-0 ml-[20px]" ref={dropdownRefs2.current[index]}>
                          <span className="rounded-md shadow-sm">
                            <button
                              onClick={() => toggleDropdownOneTime(index)}
                              type="button"
                              className={`flex items-center lg:gap-2.5 gap-1 lg:px-2.5 px-[5px] py-[5px] rounded-[var(--sm,4px)] border  border-solid text-[12px] lg:text-xl not-italic font-normal leading-[normal] ${selectedPlan2 === name ? `${isDarkMode ? 'text-primary border-primary' : 'text-white border-white'}` : `${isDarkMode ? 'text-white border-white' : 'text-[color:var(--Brand,#28282A)] border-[color:var(--Brand,#28282A)]'}`}`}
                              id={`options-menu-${index}`}
                              aria-haspopup="true"
                              aria-expanded={isOpen2[index] ? "true" : "false"}
                            >
                              {selectedOptions2[index]}
                              <DownArrow2 color={selectedPlan2 === name ? `${isDarkMode ? '#171717' : 'white'}` : '#28282A'} />
                            </button>
                          </span>
              
                          {isOpen2[index] && (
                            <div
                              className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg  ring-1  ring-opacity-5 z-[999] ${isDarkMode ? 'ring-white bg-primary' : 'ring-black bg-white'}`}
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby={`options-menu-${index}`}
                            >
                              <div className="py-1" role="none">
                                <button
                                  onClick={() => handleOptionChange2("100ml", index)}
                                  className={`${selectedOptions2[index] === "100ml" ? "" : ""} block w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-white hover:bg-gray-900 hover:text-gray-100' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} `}
                                  role="menuitem"
                                >
                                  100ml
                                </button>
                                <button
                                  onClick={() => handleOptionChange2("50ml", index)}
                                  className={`${selectedOptions2[index] === "50ml" ? `${isDarkMode ? 'bg-gray-900' :'bg-gray-100'}` : ""} block w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-white hover:bg-gray-900 hover:text-gray-100' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} `}
                                  role="menuitem"
                                >
                                  50ml
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        {/* CheckMark */}
                          <div className="lg:ml-[270px] lg:block hidden">
                          {
                              isDarkMode ? 
                                <Image onClick={() => handleOptionPlanChange2(name, index)} src={selectedPlan2 === name ? darkBlack : darkGrey} alt="Circle" />
                                : <Image onClick={() => handleOptionPlanChange2(name, index)} src={selectedPlan2 === name ? checkedCircle : circle} alt="Circle" />
                            }
                         
                        </div>
                      </div>
                        <div className="flex items-center gap-x-[20px] mt-[30px] mb-[20px]">
                        <div className="">
                        <span  className={`text-[color:var(--Brand,#28282A)] text-[22px] lg:text-[28px] not-italic font-normal leading-[normal] mt-[25px] ${selectedPlan2 === name ? `${isDarkMode ? 'text-primary' : 'text-white'}` : `${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[white]'}`}`}><span className={` text-[14px] lg:text-[22px] not-italic font-normal leading-[normal] line-through ${selectedPlan2 === name ? `${isDarkMode ? 'text-[#171717CC]' : 'text-[rgba(255,255,255,0.80)]'}` : `${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[white]'}`}`}>{selectedOptions2[index] === "50ml" ? selector ? discount50 : null : selector ? discount : null}</span> {selectedOptions2[index] === "50ml" ? rate50 : rate && rate}</span>
                        </div>
                          {/* Increment Decrement Buttons */}
                          {
                            count === 10 ? (
                              <div className={`inline-flex opacity-[0.6] items-center border  border-solid select-none ${isDarkMode ? 'border-primary' : 'border-white'}`}>
                              <button onClick={handleDecrement} className={` flex h-[25.04px] flex-col justify-center items-start gap-2.5 p-[5px]  ${isDarkMode ? 'bg-[#28282AB2]' : 'bg-white'}`}>
                                  <Minus color={ isDarkMode ? 'white' : '#28282A'}/>
                              </button>
                              <span className={`px-[9px] py-[3px] text-lg not-italic font-normal leading-[normal] ${isDarkMode ? 'text-primary' : 'text-white'}`}>{count}</span>
                              <button onClick={handleIncrement} className={`flex cursor-not-allowed h-[25.04px] flex-col justify-center items-start gap-2.5 p-[5px] ${isDarkMode ? 'bg-[#28282AB2]' : 'bg-white'}`}>
                                <Plus color={ isDarkMode ? 'white' : '#28282A'}/>
                              </button>
                            </div>
                            )
                              :

                              (
                                <div className={`inline-flex items-center border border-solid select-none ${isDarkMode ? 'border-primary' : 'border-white'}`}>
                                <button onClick={handleDecrement} className={`flex  h-[25.04px] flex-col justify-center items-start gap-2.5 p-[5px] ${isDarkMode ? 'bg-[#28282AB2]' : 'bg-white'}`}>
                                  <Minus color={ isDarkMode ? 'white' : '#28282A'}/>
                                </button>
                                <span className={`px-[9px] py-[3px] text-lg not-italic font-normal leading-[normal] ${isDarkMode ? 'text-primary' : 'text-white'}`}>{count}</span>
                                <button onClick={handleIncrement} className={`flex  h-[25.04px] flex-col justify-center items-start gap-2.5 p-[5px] ${isDarkMode ? 'bg-[#28282AB2]' : 'bg-white'}`}>
                                  <Plus color={ isDarkMode ? 'white' : '#28282A'}/>
                                </button>
                              </div>
                              )
                          }
                       
                        </div>
                        <div className="flex items-center mt-[10px] cursor-default">
                          <span className={`flex justify-center items-center gap-2.5 px-2.5 py-[5px] rounded-[var(--sm,4px)] border border-solid text-[12px] lg:text-sm not-italic font-normal leading-[120%]  ${shipping === 'You’ve unlocked max savings of £80! 🎉' ? `${isDarkMode ? 'bg-primary text-white' : 'bg-white text-primary'}` : `${isDarkMode ? 'border-primary text-primary' : 'border-white text-white'}`}`}>{shipping}</span>
                      </div>
                      <span className={`mt-[30px] text-[16px] lg:text-xl not-italic font-normal leading-[normal] ${selectedPlan2 === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{includes}</span>
                      <span className={` mt-[15px] text-[14px]  lg:text-base not-italic font-normal leading-[normal] ${selectedPlan2 === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{selectedOptions2[index] === "100ml" ? count + ' ' + firstPoint : count + ' ' + firstPoint50}</span>
                      <span className={` mt-[10px] text-[14px]  lg:text-base not-italic font-normal leading-[normal] ${selectedPlan2 === name ? `${isDarkMode ? 'text-primary' : 'text-[white]'}` : `${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}`}>{count + ' ' + lastPoint}</span>
                      <span className={`text-[16px] lg:text-xl not-italic font-light leading-[normal] mt-[30px] ml-auto ${selectedPlan2 === name && `${isDarkMode ? 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]' : 'text-[#FFFFFFCC]'}`}`}>{spray}</span>
                      </div>
                   
                    </div>
                  ))
                )
              }
    </>
  )
}

export default OneTimePurchase