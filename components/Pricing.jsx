"use client";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Box1, Box2, DownArrow2, Plus, Minus, DownArrow1, Star12, Prev, Next, Dropdown, Remove } from "@/utils/Helpers";
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import '@/app/globals.css'
import SubscribeAndSave from "./PricingParts/SubscribeAndSave";
import { usePricing } from "@/utils/PricingContext";
import OneTimePurchase from "./PricingParts/OneTimePurchase";
import ProductSlider from "./PricingParts/ProductSlider";
import SubscibeAndSaveBundleBox from "./PricingParts/SubscibeAndSaveBundleBox";
import OneTimePurchaseBundleBox from "./PricingParts/OneTimePurchaseBundleBox";

const Pricing = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { show1, setShow1, selectedButton, setSelectedButton, selectedPlan, setSelectedPlan, count, setCount, selectedImages, setSelectedImages, selectedOneTimeItems, setSelectedOneTimeItems, rate, setRate, rate50, setRate50, discount, setDiscount, discount50, setDiscount50, shipping, setShipping, selector, setSelector, selectedOptions2, setSelectedOptions2  } = usePricing();
  const [selectedButtonDropdown, setSelectedButtonDropdown] = useState(null);

  const handleClick = (show) => {
    setShow1(show);
    
  };


  const [selectedTrend, setSelectedTrend] = useState(true);
  const data = [
    { name:'1 Perfume', rate:'£40/2 months', rate50:'£20/2 months', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'1 x 100ml perfume (lasts 2 months)', firstPoint50:'1 x 50ml perfume (lasts 2 months)', lastPoint:'1 x 5ml sample (free compliment)',spray:'£0.04 per spray' },
    { name:'2 Perfumes', rate:'£60/4 months',rate50:'£30/4 months',discount50:'£40 ', discount:'£80 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'2 x 100ml perfumes (lasts 4 months)',firstPoint50:'2 x 50ml perfume (lasts 4 months)', lastPoint:'2 x 5ml samples (free compliments)',spray:'£0.03 per spray', trend: selectedTrend, trendName: 'MOST POPULAR' },
    { name:'3 Perfumes', rate:'£75/6 months', rate50:'£37/6 months',discount50:'£60 ',discount:'£120 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'3 x 100ml perfumes (lasts 6 months)', firstPoint50:'1 x 50ml perfume (lasts 6 months)', lastPoint:'3 x 5ml samples (free compliments)',spray:'£0.02 per spray', trend: selectedTrend, trendName: 'BEST VALUE' }
  ];


  useEffect(() => {
    setSelectedImages([]);
  }, [selectedPlan,show1]);

  const data2 = [
    { name:'Perfume Set', rate:'£45', rate50:'£23', shipping:'Add 1 more to save £20',shippingProgress:'Add 1 more to get 1 x free perfume + £20 off', includes:'What’s included:', firstPoint:' x 100ml perfume (lasts 2 months)',firstPoint50:' x 50ml perfume (lasts 2 months)', lastPoint:' x 5ml sample (free compliment)',spray:'£0.05 per spray', discount:'£60', discount50:'£30' },
  ];


  // Ref to hold dropdown elements
  const dropdownRefs2 = useRef(data2.map(() => React.createRef()));

  // State variables
  const [isOpen2, setIsOpen2] = useState(data2.map(() => false)); 

useEffect(() => {
  // Clear state related to one-time purchase images
  setSelectedImages([]);
  setSelectedOneTimeItems([]);
}, [show1]);

useEffect(() => {
  const root = document.documentElement;
  
  if (isDarkMode) {
    root.style.setProperty('--swiper-button-color', 'white');
  } else {
    root.style.setProperty('--swiper-button-color', '#171717');
  }
}, [isDarkMode]);
const [scrollY, setScrollY] = useState(0);
const [show, setShow] = useState(false);
const [devices, setDevices] = useState(6300);

useLayoutEffect(() => {
  setDevices(getInitialDeviceSize());
}, []);
const onScroll = useCallback(() => {
  const { pageYOffset } = window;
  setScrollY(pageYOffset);
  setShow(pageYOffset > devices);
}, [devices]);

useEffect(() => {
  const handleResize = () => {
    setDevices(getInitialDeviceSize());
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("scroll", onScroll, { passive: true });
    window.removeEventListener("resize", handleResize);
  };
}, [onScroll]);



function getInitialDeviceSize() {
  const innerWidth = window.innerWidth;
  if (innerWidth <= 480) { // Mobile
    return 4300;
  } else if (innerWidth <= 768) { // Small tablet
    return 4500;
  } else if (innerWidth <= 1024) { // Large tablet
    return 4830;
  }
  else if (innerWidth <= 1224) { // Large Laptop or desktop
    return 4850;
  }
  else if (innerWidth <= 1324) { // Large Laptop or desktop
    return 5050;
  }
  else if (innerWidth <= 1424) { // Large Laptop or desktop
    return 5450;
  }
  else if (innerWidth <= 1524) { // Large Laptop or desktop
    return 5550;
  }
  else if (innerWidth <= 1624) { // Large Laptop or desktop
    return 5650;
  }
  else if (innerWidth <= 1724) { // Large Laptop or desktop
    return 5750;
  }
   else { // PC or larger devices
    return 6100;
  }
}



  return (
    <section id="Pricing">
      <div className={`${isDarkMode ? 'bg-primary' : 'bg-white'}`}>
      <div
        className={`flex justify-between lg:pt-[100px] pt-[80px] ${
          isDarkMode ? "bg-primary" : "bg-white"
        }`}
      >
        <Box1 className={`lg:block hidden`} color={isDarkMode ? "white" : "#454547"} />
        <div className="lg:max-w-container w-[90%] mx-auto lg:mt-[120px]">
          <div className="flex flex-col text-center">
            <h2
              className={`text-[22px] 2xl:text-5xl lg:text-[38px] lg:mb-[25px] mb-[15px] not-italic font-bold leading-[130%] lg:leading-[normal] uppercase ${
                isDarkMode ? "text-white" : "text-[color:var(--Brand,#28282A)] "
              }`}
            >
              Select how many BOTTLES
            </h2>
            <span
              className={`text-center text-[14px] 2xl:text-2xl lg:text-[22px] not-italic font-medium leading-[160%] ${
                isDarkMode ? "text-white" : "text-[color:var(--Brand,#28282A)] "
              }`}
            >
              Buy More, Save More. Subscribe to save most.
            </span>
            <span
              className={`text-[14px] 2xl:text-2xl lg:text-[22px] italic font-light leading-[160%] ${
                isDarkMode ? "text-white" : "text-[color:var(--Brand,#28282A)] "
              }`}
            >
              100ml per bottle (roughly 1000 sprays) = Lasts 2 months on
              average, used generously twice daily.
            </span>
            {/* Button */}
            <div
              className={`lg:mt-[80px] mt-[30px] mx-auto inline-flex gap-2.5 lg:px-2.5 px-2 py-2 rounded-[var(--md,8px)] border  border-solid ${
                isDarkMode
                  ? "border-white"
                  : "border-[color:var(--black,#171717)]"
              }`}
            >
              <button
                onClick={()=> handleClick(1)}
                className={`flex justify-center items-center px-2.5 lg:px-5 py-2.5 rounded-[var(--md,8px)]  text-[14px] lg:text-lg not-italic font-normal leading-[normal]   ${
                  show1 === 1 && `${isDarkMode ? 'bg-white text-[#454547]' : 'bg-primary text-white'}`
                } ${show1 === 2 && `bg-transparent  ${isDarkMode ? 'text-[#454547]' : 'text-[#28282A66]'}`} `}
              >
                Subscribe & Save
              </button>
              <button
                onClick={()=> handleClick(2)}
                className={` flex justify-center rounded-[var(--md,8px)] items-center px-2.5 lg:px-5 py-2.5 text-[14px] lg:text-lg not-italic leading-[normal] font-normal   ${
                  show1 === 2 && `${isDarkMode ? 'bg-white text-[#454547]' : 'bg-primary text-white'}`
                } ${show1 === 1 && `bg-transparent  ${isDarkMode ? 'text-[#454547]' : 'text-[#28282A66]'}`}`}
              >
                One Time Purchase
              </button>
            </div>

                      <div className="lg:flex items-start lg:justify-center gap-[30px] self-stretch lg:mt-[50px]">
                  {/* Pricing Plan for Subscribe and save */}
            <SubscribeAndSave/>
              {/* Pricing Plan for One time purchase */}
            <OneTimePurchase/>
            </div>
          </div>
        </div>
        <Box2 className={`lg:block hidden`} color={isDarkMode ? "white" : "#28282A"} />
      </div>
      {/* Second */}
<div className={`${isDarkMode ? 'bg-primary' : 'bg-white'}`}>
      <div className="lg:max-w-container w-[90%] mx-auto text-center lg:mt-[60px] mt-[30px]">
        <div className="flex justify-center">
        <DownArrow1 className={`lg:h-auto h-[55px] stroke-[2px] ${isDarkMode ? 'stroke-white' : 'stroke-primary'}`} color={isDarkMode ? 'white' : '#171717'}/>
        </div>
        <h2 className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} lg:mt-[58px] mt-[30px] text-[22px] 2xl:text-5xl lg:text-[38px] not-italic font-bold leading-[normal] uppercase`}>PICK YOUR SCENTS</h2>
        <h5 className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} lg:mt-[24px] mt-[15px] text-[14px] 2xl:text-2xl lg:text-[22px] not-italic font-normal leading-[150%] lg:leading-[normal] `}>Collection 1 by Evoked. <br className="lg:hidden block" /> Confidence,now bottled with iconic scents.</h5>
        </div>
        {/*Product Slider */}
      <ProductSlider/>
          {/* */}
        <div className={` ${show ? 'fixed  bottom-0 left-0 z-[999] w-full' : 'hidden'} 2xl:mt-[70px] lg:mt-0 mt-[70px] border-t-[1px]  border-opacity-[0.4] border-b-[1px] py-[10px] lg:py-[30px] ${isDarkMode ? 'bg-[#28282A] border-white' : 'bg-[#F4F4F4] border-primary'}`}>
          {/* Subscribe and save Bundle Box*/}
        <SubscibeAndSaveBundleBox/>
          {/* One-time Purchase Bundle Box */}
         <OneTimePurchaseBundleBox/>
         
        </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
