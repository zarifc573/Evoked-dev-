'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSearchParams } from 'next/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import blue from '@/public/assets/blue.png';
import brown from '@/public/assets/brown.png';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { useDarkMode } from '@/utils/DarkModeContext';
import Link from 'next/link';

const ProductSlider = () => {
    const { isDarkMode } = useDarkMode();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const searchParams = useSearchParams();
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        if (searchParams) {
            const itemString = searchParams.get('item');
            if (itemString) {
                const item = JSON.parse(decodeURIComponent(itemString));
                setProductData(item);
            }
        }
    }, [searchParams]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    const { link, gender, scent } = productData;

    const Data = [
        { id: '1', link: link, scent: 'Sauvage', gender:gender },
        { id: '2', link: blue, scent: 'Black Opium', gender:gender },
        { id: '4', link: brown, scent: 'Tom Ford', gender:gender },
        { id: '3', link: blue, scent: 'Flowerbomb', gender:gender },
    ];
    console.log(productData);
    console.log(searchParams.get('link'))
    return (
        <>
        <div className='pb-[50px] cursor-pointer'>
    <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-opacity-[0.7] text-base font-medium font-['Josefin Sans']`}>
        <Link href='/'>Home {' >'}</Link>
        <Link href='/collections'>{` Perfumes > `}</Link>
        <span>{gender + ' > '}</span>
    </span>
    <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-base font-semibold font-['Josefin Sans']`}>{scent}</span>
</div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 select-none w-full lg:h-[400px] 2xl:h-[506px] relative mb-[20px] border border-solid border-gray-500 py-[10px] rounded-[8px]"
            >
                {Data.map((item, index) => (
                    <SwiperSlide key={item.id} className='flex justify-center items-center '>
                          <div className={` px-2.5 py-[5px] absolute 2xl:top-[20px] top-[10px] left-[20px] rounded border  justify-center items-center gap-2.5 inline-flex ${isDarkMode ? "border-white" : "border-neutral-900 "}`}>
              <p className={`uppercase text-sm font-normal ${isDarkMode ? "text-white" : "text-zinc-800 "}`}>{item.gender}</p>
            </div>
                        <Image className='2xl:w-[400px] 2xl:h-[300px] lg:w-[300px] lg:h-[200px] object-contain' src={item.link} alt='Product' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper select-none"
            >
                {Data.map((item, index) => (
                    <SwiperSlide className='border border-solid border-gray-500 py-[10px] rounded-[8px]' key={item.id}>
                        <Image className='2xl:w-[100px] 2xl:h-[100px] lg:w-[70px] lg:h-[70px] object-contain mx-auto' src={item.link} alt='Product' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ProductSlider;
