"use client"

import { useDarkMode } from "@/utils/DarkModeContext";
import '@/app/globals.css'
import useEmblaCarousel from 'embla-carousel-react'
import transform from '@/public/assets/bottleReview.png'
import star from '@/public/assets/blackStar.svg'
import Image from 'next/image';
import { Love2, Love3 } from "@/utils/Love";
import { Star1, ThreeDot } from "@/utils/Helpers";
import Star from "@/utils/Star";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/globals.css'
const Review = () => {
  
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
    const slides = [
        {link:'video' , link2:  'videoDark'},
        {link:'video' , link2:  'videoDark'},
        {link:'video' , link2:  'videoDark'},
        {link:'video' , link2:  'videoDark'},
        
  ]


  return (
    <section className={`${isDarkMode ? 'bg-primary' : 'bg-white'}`} >
      <div className={`lg:pt-[100px] pt-[70px] `}>
      <h2 className={`2xl:text-5xl lg:text-[38px] md:text-[32px] text-[22px] w-[90%] not-italic font-bold leading-[130%] lg:leading-[normal] uppercase text-center lg:mb-[50px] mb-[40px] mx-auto ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Hear from our <br className="md:hidden block" /> customers</h2>
      <div className="2xl:max-w-container lg:w-[90%] mx-auto flex lg:flex-row flex-col justify-between items-center  mb-[30px]">
        <div className="flex items-center gap-x-[15px]">
          <div className="flex items-center">
          <Star1 color={isDarkMode ? 'white' : '#28282A'}/>
          <Star1 color={isDarkMode ? 'white' : '#28282A'}/>
          <Star1 color={isDarkMode ? 'white' : '#28282A'}/>
          <Star1 color={isDarkMode ? 'white' : '#28282A'}/>
          <Star1 color={isDarkMode ? 'white' : '#28282A'}/>
          </div>
          <span className={`lg:text-2xl text-[20px] not-italic font-medium leading-[27px] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)] '}`}>(36 Reviews)</span>
        </div>
        <div className="flex items-center gap-x-[20px] lg:mt-0 mt-[20px]">
        <button className={`flex justify-center items-center gap-2.5 px-4 py-2 rounded-[var(--sm,4px)] border  border-solid text-[20px] lg:text-2xl not-italic font-semibold leading-[27px] ${isDarkMode ? 'text-white border-white' : 'text-[color:var(--Brand,#28282A)] border-[color:var(--black,#171717)]'}`}>
        Write a Review 
          </button>
          <div className={`rounded-[var(--sm,4px)] border  border-solid flex items-start gap-2.5 px-3 py-[11px] ${isDarkMode ? 'border-white' : 'border-[color:var(--black,#171717)]'}`}>
        <ThreeDot color={isDarkMode ?  '#fff' : '#28282A'}/>
          </div>
       </div>
      </div>
          <div className="lg:max-w-container w-[90%] mx-auto">
          <Swiper
        
        slidesPerView={3}
        spaceBetween={60}
            loop={true}
            allowTouchMove={true}
            centeredSlides={true}
            scrollbar={{ draggable: true }}
            mousewheel={true}
        className="mySwiper"
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              loop:true,
              allowTouchMove:true,
            centeredSlides: true,
            scrollbar:{ draggable: true }
          },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              
          },
          
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
              {slides.map((index) => (
               <SwiperSlide className={`border overflow-hidden select-none w-[508px] border-solid rounded-[12px] ${isDarkMode ? 'bg-[#171717] border-white border border-solid' : 'bg-white border-[#171717] border-solid'}`}>
          <div className={``} key={index}>
            <div className="flex flex-col  gap-10">
             <div className="select-none">
                <Image src={transform} className="object-cover w-full" alt="Image" />
                </div>
              <div className="flex flex-col justify-center items-start 2xl:gap-[52px] lg:gap-[35px] self-stretch px-[50px] pb-[50px]">
                <span className={`text-5xl not-italic flex lg:gap-0 gap-x-[6px] font-bold leading-[normal] uppercase ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>
                <Star className={`2xl:w-auto 2xl:h-auto lg:w-[40px]  w-[25px] h-[25px]`} color={isDarkMode ? 'white'  : '#2A2A28'} />
                <Star className={`2xl:w-auto 2xl:h-auto lg:w-[40px]  w-[25px] h-[25px]`} color={isDarkMode ? 'white'  : '#2A2A28'} />
                <Star className={`2xl:w-auto 2xl:h-auto lg:w-[40px]  w-[25px] h-[25px]`} color={isDarkMode ? 'white'  : '#2A2A28'} />
                <Star className={`2xl:w-auto 2xl:h-auto lg:w-[40px]  w-[25px] h-[25px]`} color={isDarkMode ? 'white'  : '#2A2A28'} />
                <Star className={`2xl:w-auto 2xl:h-auto lg:w-[40px]  w-[25px] h-[25px]`} color={isDarkMode ? 'white'  : '#2A2A28'} />
            
                </span>
                <span className={`text-[18px] lg:text-[32px] lg:mt-0 mt-[20px] not-italic font-bold leading-[18px] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Patricia O'Keefe</span>
                <span className={`2xl:w-[408px] w-[182px] lg:w-[100%]  text-[12px] lg:text-[20px] 2xl:text-[24px] not-italic lg:mt-0 mt-[10px] font-normal leading-[150%] ${isDarkMode ? 'text-white' : 'text-[#28282A]'}`}>Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.</span>
             
               
              </div>
            </div>
                  </div>
                  </SwiperSlide>
        ))}
        
        
        
      </Swiper>
       
      </div>
        <button className={`flex justify-center items-center gap-2.5 px-3 py-2 rounded-[var(--sm,4px)] border  border-solid  text-[16px] lg:text-xl not-italic font-medium leading-[normal] mt-[58px] mx-auto ${isDarkMode ? 'text-white border-[#fff]' : 'text-[color:var(--Primary-Text,#313131)] border-[color:var(--black,#171717)]'}`}>Show more reviews</button>
        </div>
      </section>
  )
}

export default Review