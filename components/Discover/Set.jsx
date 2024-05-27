'use client'
import { useDarkMode } from '@/utils/DarkModeContext';
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Navigation, Pagination, Controller  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/app/globals.css'
import kit from '@/public/assets/kit.png'
import CheckMart from '@/utils/CheckMart';
import { Car, PerfumeSpray, Piggy, Select, Unselect } from '@/utils/Helpers';
const Set = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [firstSwiper, setFirstSwiper] = useState(null);
    const Links = [
      {link:kit,id:1 },
      {link:'Men',id:2 },
      {link:'Men',id:3 },
      {link:'Men',id:4 },
      {link:'Men',id:5 },
      
  ]

  const [selectedButton, setSelectedButton] = useState(1);
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
    return (
        <section>
        <div className={`overflow-x-hidden ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'}`}>
      <div className={``}>
      <div className='2xl:max-w-container lg:w-[90%] w-[100%] mx-auto flex 2xl:flex-row flex-col lg:flex-col  items-start lg:justify-center lg:items-center 2xl:items-start justify-between lg:gap-x-[70px] '>
          <div className="lg:py-[60px] py-[30px] w-[90%] 2xl:w-[50%] lg:w-[90%] px-0  mx-auto lg:mx-auto ">

                    <Swiper
        
                    slidesPerView={1}
                    spaceBetween={20}
                        loop={true}
                        allowTouchMove={true}
                        scrollbar={{ draggable: true }}
                        mousewheel={true}
                        modules={[Navigation, Pagination, Controller ]}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={(swiper) => swiper}
                        controller={{ control: firstSwiper }}
                        onSwiper={setFirstSwiper}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                          
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        1920: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                      }}
                    >
                        {Links.map((item) => (
                            <SwiperSlide key={item.id}>
                                    <div  className={`xl:w-full w-full h-[400px] lg:h-[550px] 2xl:h-[810px] rounded-[4px] ${isDarkMode ? 'bg-[#D9D9D9]' : 'bg-[#D9D9D9]'}`}>
                                     
                                    </div>
                                </SwiperSlide>
                        ))
                        }
                    
                    
                    
                  </Swiper>
        
        </div>
                        <div className="2xl:w-[50%] w-[100%] lg:w-[100%] 2xl:block lg:flex lg:justify-center">
        <div className="lg:py-[40px] 2xl:py-[84px] ">
          <div className=" ">
          <h1 className={`${isDarkMode ? 'text-white duration-300' : 'text-[color:var(--Brand,#28282A)] duration-300'}  lg:text-[30px] 2xl:text-[48px] text-[18px]   w-auto lg:w-auto text-center  not-italic font-bold leading-[130%] capitalize lg:text-center 2xl:text-start`}>
          Evoked Perfume Discovery Set 
          </h1>
          <p className={`${isDarkMode ? 'text-[#FFFFFFCC] duration-300' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))] duration-300'} lg:text-[20px] 2xl:text-[28px] text-[14px] text-center lg:w-auto  w-[90%] not-italic font-medium leading-[normal] mt-[20px] lg:mx-0 mx-auto lg:text-center 2xl:text-start`}>Find your new signature scent from our iconic Collection 1.</p>
         </div>
<div className={`lg:w-auto w-[100%]   `}>
          <div className={`inline-flex cursor-auto flex-col items-start gap-5 lg:p-0 p-5 rounded-md  lg:mt-[30px] 2xl:mt-[30px] `}>
          
           
                 <div className="flex items-start 2xl:mx-0 lg:mx-auto gap-2.5 lg:w-auto w-[100%]">
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span className={` lg:text-[16px] 2xl:text-lg text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>12 x 5ml perfumes - all are men, women or unisex designer-inspired best-sellers</span>
                 </div>
                 <div className="flex items-start gap-2.5 2xl:mx-0 lg:mx-auto lg:w-auto w-[100%]">
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span className={` lg:text-[16px] 2xl:text-lg text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Includes a <strong>free £30 store credit</strong>, redeemable towards future purchases</span>
                 </div>
                 <div className="flex items-start gap-2.5 2xl:mx-0 lg:mx-auto lg:w-auto w-[100%]">
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span className={` lg:text-[16px] 2xl:text-lg text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>Features notes of vanilla, sandalwood, jasmine, spices, citrus & more</span>
                 </div>
                <div className="flex flex-col gap-y-[20px] mt-[40px]">
                <button
        onClick={() => handleButtonClick(1)}
        className={`flex flex-col items-center justify-between xl:w-[668px] py-[15px] px-[15px] lg:px-[30px] rounded-[var(--md,8px)] border w-[100%]  border-solid ${isDarkMode ? 'border-white bg-primary' : 'border-[color:var(--black,#171717)]'}`}
      >
        <span className={`inline-flex items-center justify-between w-full `}>
      <span className="flex items-center gap-x-[10px]">
      {
            selectedButton === 1 ? <Select color={isDarkMode ? 'white' : '#171717'}/> : <Unselect color={isDarkMode ? 'white' : '#171717'}/> 
        }
        <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[16px] lg:text-xl not-italic font-semibold leading-[normal]`}>Subscribe & Save</span>
      </span>
      <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[18px] lg:text-2xl not-italic font-semibold leading-[normal]`}> <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[14px] lg:text-[18px] line-through not-italic font-semibold leading-[normal]`}>£30</span> £25</span>
      </span>
      {
        selectedButton === 1 && (
            <span className={`flex flex-col justify-center items-start gap-[15px] lg:gap-[30px] self-stretch p-[20px] lg:p-[30px] rounded-[var(--md,8px)] border border-solid  mt-[20px] ${isDarkMode ? 'border-white bg-brand' : 'border-black bg-white'}`}>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-x-[10px]">
                <p className={`lg:text-base text-[14px] not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--black,#171717)] '}`}>Pick your kit:</p>
                <select name="" id="" className={`px-[5px] lg:px-[10px] lg:w-auto lg:mt-0 mt-[10px] lg:text-[16px] text-[14px] w-[100%] py-[5px] bg-transparent border  rounded-[4px] outline-none ${isDarkMode ? 'border-white text-white' : 'border-[#28282A] text-[#28282A] '}`}>
                      <option className={`text-[color:var(--Brand,#28282A)] text-[12px] lg:text-[16px] not-italic font-normal leading-[normal]`}>Men’s Discovery Kit (24 x 5ml perfumes)</option>
                      <option className={`text-[color:var(--Brand,#28282A)] text-[12px] lg:text-[16px] not-italic font-normal leading-[normal]`}>Women’s Discovery Kit (24 x 5ml perfumes)</option>
                      <option className={`text-[color:var(--Brand,#28282A)] text-[12px] lg:text-[16px] not-italic font-normal leading-[normal]`}>Unisex Discovery Kit (24 x 5ml perfumes)</option>
                  
                  </select>
            </div>
            <div className="inline-flex lg:flex-row flex-row lg:w-auto w-[100%] justify-center items-center lg:gap-x-[10px]">
            <p className={`${isDarkMode ? 'text-white' : 'text-[color:var(--black,#171717)] '} lg:text-base not-italic text-[14px] lg:block flex gap-x-[4px] font-normal leading-[normal]`}>Deliver every:<span className="md:hidden font-bold block  ">1 month</span></p>
            <div className={`px-[10px] lg:block lg:mx-0 mx-auto lg:mt-0 mt-[10px] text-[14px] lg:text-[16px] py-[5px] bg-transparent border  rounded-[4px] outline-none  ${isDarkMode ? 'border-white text-white' : 'border-[#28282A] text-[#28282A] hidden'}`}>1 month</div>
            </div>
      </span>
        )
      }
    
              </button> 
              <button
        onClick={() => handleButtonClick(2)}
        className={`flex flex-col items-center justify-between xl:w-[668px] py-[15px] px-[15px] lg:px-[30px] rounded-[var(--md,8px)] border border-[color:var(--black,#171717)] border-solid ${isDarkMode ? 'border-white bg-brand' : 'border-[color:var(--black,#171717)]'}`}
      >
        <span className={`inline-flex items-center justify-between w-full `}>
      <span className="flex items-center gap-x-[10px]">
      {
            selectedButton === 2 ? <Select color={isDarkMode ? 'white' : '#171717'}/> : <Unselect color={isDarkMode ? 'white' : '#171717'}/> 
        }
        <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[16px] lg:text-xl not-italic font-semibold leading-[normal]`}>One Time Purchase</span>
      </span>
      <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[18px] lg:text-2xl not-italic font-semibold leading-[normal]`}>£30</span>
      </span>
      {
        selectedButton === 2 && (
            <span className={`flex flex-col justify-center items-start gap-[30px] self-stretch p-[20px] lg:p-[30px] rounded-[var(--md,8px)] border border-solid  mt-[20px] ${isDarkMode ? 'border-white bg-brand' : 'border-black bg-white'}`}>
            <div className="flex lg:flex-row flex-col items-center justify-start gap-x-[10px]">
                <p className={`lg:text-base text-[14px] not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--black,#171717)] '}`}>Pick your kit:</p>
                <select name="" id="" className={`px-[5px] lg:px-[10px] lg:w-auto lg:mt-0 mt-[10px] lg:text-[16px] text-[14px] w-[100%] py-[5px] bg-transparent border  rounded-[4px] outline-none ${isDarkMode ? 'border-white text-white' : 'border-[#28282A] text-[#28282A] '}`}>
                      <option className={`text-[color:var(--Brand,#28282A)] text-[12px] lg:text-[16px] not-italic font-normal leading-[normal]`}>Men’s Discovery Kit (24 x 5ml perfumes)</option>
                      <option className={`text-[color:var(--Brand,#28282A)] text-[12px] lg:text-[16px] not-italic font-normal leading-[normal]`}>Women’s Discovery Kit (24 x 5ml perfumes)</option>
                      <option className={`text-[color:var(--Brand,#28282A)] text-[12px] lg:text-[16px] not-italic font-normal leading-[normal]`}>Unisex Discovery Kit (24 x 5ml perfumes)</option>
                  
                  </select>
            </div>
           
      </span>
        )
      }
    
              </button>  
             {
                selectedButton === 1 && 
                ( <button className={`flex mt-[30px]  justify-between items-center px-[20px] lg:px-[30px] lg:py-[18px] py-[12px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#FFF] bg-white' : 'shadow-[4px_4px_0px_0px_#171717] border-white bg-primary'}`}>
                <span className={` ${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[22px] not-italic font-bold leading-[120%]`}>SUBSCRIBE NOW</span>
             
                <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[32px] not-italic font-bold leading-[120%] flex items-center`}>
           


  <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[32px] not-italic font-bold leading-[120%]`}>
     <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[10px] lg:text-[18px] not-italic font-normal leading-[120%] line-through`}>
          $30 </span>$25
  </span>

</span>
              </button>)
             }
             {
                selectedButton === 2 && 
                ( <button className={`flex mt-[30px]  justify-between items-center px-[20px] lg:px-[30px] lg:py-[18px] py-[12px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#FFF] bg-white' : 'shadow-[4px_4px_0px_0px_#171717] border-white bg-primary'}`}>
                <span className={` ${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[22px] not-italic font-bold leading-[120%]`}>BUY NOW</span>
             
                <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[32px] not-italic font-bold leading-[120%] flex items-center`}>
           


  <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[32px] not-italic font-bold leading-[120%]`}>
     $30
  </span>

</span>
              </button>)
             }

<div className={`flex lg:justify-between items-center justify-center self-stretch lg:px-10 py-5 rounded-[var(--md,8px)] bg-[#4545471a] mt-[40px]`}>
    <div className={`flex lg:flex-row flex-col items-center justify-between gap-y-[10px] lg:gap-y-0 lg:gap-x-[124.5px]`}>
            <div className="flex  gap-y-[10px] flex-col items-center">
            <Car color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`text-center text-sm not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Free shipping <br className='lg:block hidden' /> & returns</span>
            </div>
            <div className="flex gap-y-[10px] flex-col items-center">
            <PerfumeSpray color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`text-center text-sm not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Try first, then decide <br className='lg:block hidden' /> learn more</span>
            </div>
            <div className="flex gap-y-[10px] flex-col items-center">
            <Piggy color={isDarkMode ? 'white' : '#28282A'}/>
            <span className={`text-center text-sm not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Subscribe & save, <br className='lg:block hidden' />
cancel anytime</span>
            </div>
           
    </div>
</div>
            
                </div>
           
           
            </div>

      
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Set