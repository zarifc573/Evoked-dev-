'use client'
import { useDarkMode } from '@/utils/DarkModeContext';
import { Love } from '@/utils/Love';
import Star from '@/utils/Star';
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/globals.css'
import video from '@/public/assets/video.png'
import videoDark from '@/public/assets/dark-video.png'
import Image from 'next/image';
const ReviewSlider = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const Links = [
      {link:video , link2:  videoDark, id: 1},
      {link:video , link2:  videoDark, id: 2},
      {link:video , link2:  videoDark, id: 3},
      {link:video , link2:  videoDark, id: 4},
      {link:video , link2:  videoDark, id: 5},
      
  ]
    return (
        <div className={`lg:py-[100px] pb-[50px] ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-white duration-300'}`}>
            <div className="lg:max-w-container w-[90%] mx-auto relative">
                <h2 className={`lg:text-5xl lg:w-auto w-[305px] text-[22px] not-italic font-bold leading-[130%] lg:leading-[normal] uppercase ${isDarkMode ? 'text-white': 'text-[color:var(--Brand,#28282A)]'}`}>They tried it, <br className="lg:hidden" /> now they are obsessed</h2>
                <div className="flex items-center gap-x-[10px] mt-[20px] lg:mt-[30px] lg:mb-[52px] mb-[40px] ">
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                    <Star className={`lg:h-auto lg:w-auto h-[24px] w-[24px]`} color={isDarkMode ? 'white' : '#28282A'}/>
                </div>
            </div>

      <div className={`${isDarkMode ? 'bg-[#28282A] duration-300' : 'bg-[#F4F4F4] duration-300'} relative z-20`}>
      <div className='lg:max-w-container w-[90%] mx-auto'>
          <div className="lg:py-[60px] py-[30px] ">
          <Swiper
        
        slidesPerView={2}
        spaceBetween={20}
            loop={true}
            allowTouchMove={true}
            scrollbar={{ draggable: true }}
            mousewheel={true}
        className="mySwiper"
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
            {Links.map((item) => (
                isDarkMode ? <SwiperSlide  key={item.id}><div ><Image className='lg:h-auto h-[208px]' src={item.link2} alt='Image'/></div></SwiperSlide>
                    :
                <SwiperSlide key={item.id}><div><Image src={item.link} alt='Image'/></div></SwiperSlide>
            ))
            }
        
        
        
      </Swiper>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSlider