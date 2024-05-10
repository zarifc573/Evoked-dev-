import { useDarkMode } from "@/utils/DarkModeContext";
import { Remove } from "@/utils/Helpers";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import '@/app/globals.css'
import { usePricing } from "@/utils/PricingContext";
import CheckMart from "@/utils/CheckMart";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '@/app/globals.css'
const OneTimePurchaseBundleBox = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const {show1, setShow1,selectedPlan, selectedPlan2, count, selectedImages, setSelectedImages, selectedOneTimeItems, setSelectedOneTimeItems, rate, setRate, rate50, setRate50, discount, setDiscount, discount50, setDiscount50, shipping, setShipping, selector, setSelector, selectedOptions2, setSelectedOptions2 } = usePricing();
    const data2 = [
        { name:'Perfume Set', rate:'£45', rate50:'£23', shipping:'Add 1 more to save £20',shippingProgress:'Add 1 more to get 1 x free perfume + £20 off', includes:'What’s included:', firstPoint:' x 100ml perfume (lasts 2 months)',firstPoint50:' x 50ml perfume (lasts 2 months)', lastPoint:' x 5ml sample (free compliment)',spray:'£0.05 per spray', discount:'£60', discount50:'£30' },
      ];
  
    const PerfumeContent = {
        '1 Perfume': [{}],
        '2 Perfumes': [{}, {}],
        '3 Perfumes': [{}, {}, {}],
        'Perfume Set': Array.from({ length: count }, () => ({})), // For one-time purchase
      };
    const content = selectedPlan === 'Perfume Set' ? PerfumeContent[selectedPlan2] || [] : PerfumeContent[selectedPlan] || [];


    const handleRemoveFromSetOneTime = (boxIndex) => {
        setSelectedOneTimeItems(prevItems => {
          // Filter out the item at the specified boxIndex
          const updatedItems = prevItems.filter((item, index) => index !== boxIndex);
          return updatedItems;
        });
      
        setSelectedImages(prevImages => {
          // Filter out the image at the specified boxIndex
          const updatedImages = prevImages.filter((image, index) => index !== boxIndex);
          return updatedImages;
        });
      }
     
  return (
    <>
     {
            show1 === 2 && (
              <div className="2xl:max-w-container lg:w-[90%] md:w-full mx-auto flex md:flex-row lg:flex-row flex-col justify-between md:gap-[50px] lg:gap-x-[40px]  2xl:gap-x-[60px] items-center">
              <div className="lg:w-[33%] lg:block hidden">
                <h3 className={` ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} 2xl:text-[32px] lg:text-[28px] not-italic font-normal leading-[120%]`}>Your Evoked Scents </h3>
                <h4 className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} mt-[10px] 2xl:text-xl lg:text-[18px] not-italic font-normal leading-[120%]`}>{shipping}</h4>
                <div className="flex items-center gap-2.5 mt-[20px]">
                   {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                    <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                   <span className={`2xl:text-lg lg:text-[12px] not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Free 2-5d shipping & no questions asked returns</span>
                   </div>
                <div className="flex items-center gap-2.5 mt-[10px]">
                   {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                    <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                   <span className={`2xl:text-lg lg:text-[12px] not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Try first, then decide with 30d money-back promise <span className={` ${isDarkMode ? 'text-[#28282ACC]' : 'text-[rgba(40,40,42,0.80)]'} 2xl:text-sm lg:text-[12px] not-italic font-light leading-[120%] border-b border-b-[rgba(40,40,42,0.45)]   cursor-pointer`}>learn more.</span></span>
                   </div>
              </div>
              <div className={`lg:w-[30%] 2xl:w-[30%] md:w-[60%] w-full `}>
                  <div className="flex gap-x-[20px] justify-center">

                    <Swiper
                      className="lg:w-full md:w-[81%] w-[80%] h-full swiperPadding"
                    spaceBetween={18}
                    slidesPerView={3}
                      navigation
                      loop={false}
                    pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      modules={[Navigation]}
                      onSlideChange={(swiper) => swiper}
                      breakpoints={{
                          640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            
                        },
                        
                          768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                          1920: {
                            slidesPerView: 3,
                            spaceBetween: 18,
                          },
                        }} 
                    >

                      {Array.from({ length: count }).map((_, boxIndex) => (
                     <SwiperSlide key={boxIndex} >
          <div className={`2xl:w-[150px] 2xl:h-[150px] lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px]  border border-solid relative ${isDarkMode ? 'bg-primary border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.70)]' : 'bg-white border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_#171717]'} `}>
          {selectedImages[boxIndex] && (
        <>
          <Image className="2xl:w-[70px] 2xl:h-[108.387px] md:w-[50px] md:h-[76px] w-[25px] h-[40px] z-[100] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src={selectedImages[boxIndex]} alt={`Image ${boxIndex}`} />
              <button className="absolute lg:top-[-10px] md:top-[-7px] md:right-[-8px] top-[-7px] right-[-7px] lg:right-[-11px] z-[999]" onClick={() => handleRemoveFromSetOneTime(boxIndex)}>
                <Remove className={`lg:w-auto lg:h-auto  h-[13px] w-[13px]`}  rect={isDarkMode ? 'white' : '#171717'} color={isDarkMode ? '#171717' : 'white'}/>
          </button>
        </>
                      )}
                      
                          </div>
                          </SwiperSlide>
                  ))}
                      </Swiper>
     
    </div>
                 
              </div>
              <div className="lg:w-[35%] md:w-[40%]">
                <div className="flex items-center gap-x-[20px]">
                  <h6 className={`lg:block hidden ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} 2xl:text-base text-[14px] not-italic font-normal leading-[normal]`}>Deliver within  <span className="font-bold 2xl:text-[18px] lg:text-[16px]">2-5 days</span></h6>
                   
                </div>
                <div className="md:flex md:flex-col lg:flex-row lg:ml-0 ml-0 md:ml-[-70px]">
                <button className={`flex  lg:mt-[20px] 2xl:w-[590px] lg:w-full w-[314px] justify-between items-center lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid ${isDarkMode ? 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#FFF] bg-white' : 'shadow-[4px_4px_0px_0px_#171717] border-white bg-primary'}`}>
                  <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[20px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>BUY NOW</span>
               
               
                  {selectedOptions2.map((option, index) => (
                    selectedImages.length === count ?
  <span key={index} className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[24px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>
    <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[10px] lg:text-xl not-italic font-normal leading-[120%] line-through`}>
      {option === "50ml" ? selector ? discount50 : null : selector ? discount : null}
    </span>
    {option === "50ml" ? rate50 : rate}
  </span> : null
))}
                </button>
                <div className="lg:hidden md:block hidden">
                <h4 className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} lg:mt-[10px] mt-[30px] text-[14px] lg:text-xl not-italic font-normal leading-[120%]`}>{shipping}</h4>
                <div className="flex items-center gap-2.5 mt-[20px]">
                   {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                    <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                   <span className={`text-[10px] lg:text-lg not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Free 2-5d shipping & no questions asked returns</span>
                   </div>
                <div className="flex items-center gap-2.5 mt-[10px]">
                   {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                    <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                   <span className={`text-[10px] lg:text-lg not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Try first, then decide with 30d money-back promise <span className={` ${isDarkMode ? 'text-[#28282ACC]' : 'text-[rgba(40,40,42,0.80)]'} text-[10px] lg:text-sm not-italic font-light leading-[120%] border-b border-b-[rgba(40,40,42,0.45)] underline  cursor-pointer`}>learn more.</span></span>
                   </div>
              </div>
                </div>
              </div>

              {/* Mobile device */}
              <div className="lg:w-[35%] md:hidden lg:hidden ">
                <h4 className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} lg:mt-[10px] mt-[30px] text-[14px] lg:text-xl not-italic font-normal leading-[120%] lg:block hidden`}>{shipping}</h4>
                <div className="flex items-center gap-2.5 mt-[20px]">
                   {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                    <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                   <span className={`text-[10px] lg:text-lg not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Free 2-5d shipping & no questions asked returns</span>
                   </div>
                <div className="flex items-center gap-2.5 mt-[10px]">
                   {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                    <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                   <span className={`text-[10px] lg:text-lg not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Try first, then decide with 30d money-back promise <span className={` ${isDarkMode ? 'text-[#28282ACC]' : 'text-[rgba(40,40,42,0.80)]'} text-[10px] lg:text-sm not-italic font-light leading-[120%] border-b border-b-[rgba(40,40,42,0.45)] underline  cursor-pointer`}>learn more.</span></span>
                   </div>
              </div>
            </div>
            )
          }
    </>
  )
}

export default OneTimePurchaseBundleBox







