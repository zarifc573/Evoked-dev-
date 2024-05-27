'use client'
import Image from 'next/image';
import banner from '@/public/assets/banner.png';
import { useDarkMode } from '@/utils/DarkModeContext';
import CheckMart from '@/utils/CheckMart';
import ArrowRight from '@/utils/ArrowRight';
import Link from 'next/link';


const Hero = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  let Lists = [
    { id:1, name: "Smell delicious, get compliments with iconic designer-like scents at wallet-friendly prices" },
    { id:2, name: "Eau De Parfum, Lasts 24h on average (2-3x longer than typical designer scents)" },
    { id:3, name: "Vegan-Friendly, Suitable for all skin types, Hand-mixed in small batches" },
    { id:4, name: "Try 100% risk-free first, then decide with our 30-day money back promise" },
  ];
  
  return (
    <section className={`relative lg:pb-0  ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'} `}>
     <div className={`lg:block hidden`}>
     <div className={` w-[100%] mx-auto flex lg:flex-row flex-col items-center gap-x-[95px] ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'} `}>
        <div className="lg:w-1/2 2xl:pl-[120px] lg:pl-[60px] lg:py-[40px] ">
          <div className=" ">
          <h1 className={`${isDarkMode ? 'lg:text-white duration-300' : 'lg:text-[color:var(--Brand,#28282A)] duration-300'} 2xl:text-[58px] lg:text-[42px] text-white lg:w-[450px] 2xl:w-auto text-center lg:text-start not-italic font-bold leading-[130%] uppercase`}>
          Your SET for<br className="lg:block hidden" />daily confidence 
          </h1>
          <p className={`${isDarkMode ? 'lg:text-[#FFFFFFCC] duration-300' : 'lg:text-zinc-800 duration-300'} lg:text-[20px] 2xl:text-[28px] text-[16px] text-[#FFFFFFCC] text-center lg:w-auto lg:text-start not-italic font-medium leading-[normal] mt-[20px] lg:mx-0 mx-auto`}>Take on the world with scents that put you in the spotlight.</p>
         </div>
<div className={`lg:w-auto w-[90%] lg:static lg:visible invisible  ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'}`}>
          <div className={`inline-flex cursor-auto flex-col items-start gap-5 p-5 rounded-md border  border-solid lg:mt-[30px] 2xl:mt-[40px] ${isDarkMode ? 'border-[#fff] duration-300' : 'border-[color:var(--Brand,#28282A)] duration-300'} `}>
      
              {Lists.map((list) => (
                 <div key={list.id} className="flex items-center gap-2.5">
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span key={list.name} className={` lg:text-[16px] 2xl:text-lg text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>{list.name}</span>
                 </div>
              ))}
            </div>
            <div className="lg:pb-0 pb-[35px]">
              <Link href='/landing-page/#Pricing' className='inline-block' >
          <button className={`mt-[40px] uppercase lg:mx-0 mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={`2xl:text-[22px] lg:text-[18px] text-[16px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>Build Your Set</span>
      
            <ArrowRight color={ isDarkMode ? '#171717' : 'white'} />
              </button>
              </Link>
              </div>
            </div>
          </div>
     
        <div className={`lg:w-[50%]  ${isDarkMode ? 'lg:border-white' : 'lg:border-[#171717]'} `}>
          <Image className=' 2xl:h-[724px] lg:h-[593px]  object-cover 2xl:w-full hidden lg:block' src={banner} alt='Hero'  />
          </div>
            
        </div>
      <div className={`h-[1px] overflow-hidden lg:mt-0 mt-[30px] w-full ${isDarkMode ? 'bg-white' : 'bg-[#171717]'}`}></div>
        </div>

        {/* Mobile device (Hero)  */}
        <div className="lg:hidden block pb-[20px]">
          <div className="bg-hero bg-cover bg-center pt-[186px] pb-[180px]">
          <div className="">
          <h1 className={`${isDarkMode ? 'text-white duration-300' : 'text-[color:var(--Brand,#28282A)] duration-300'}  text-white w-[90%] mx-auto text-center md:text-[32px] text-[24px] not-italic font-bold leading-[130%] uppercase`}>
          Your SET for daily confidence 
          </h1>
          <p className={`${isDarkMode ? 'text-[#FFFFFFCC] duration-300' : 'text-[#FFFFFFCC] duration-300'}  text-[16px] md:text-[22px] md:w-auto  text-center  w-[249px] not-italic font-medium leading-[normal] mt-[10px] mx-auto`}>Take on the world with scents that put you in the spotlight.</p>
         </div>
         

          </div>
          <div className={`w-[90%] mt-[30px] flex flex-col justify-center mx-auto  ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'}`}>
          <div className={`inline-flex cursor-auto flex-col justify-center items-start gap-5 p-5 rounded-md border  border-solid ${isDarkMode ? 'border-[#fff] duration-300' : 'border-[color:var(--Brand,#28282A)] duration-300'} `}>
              {Lists.map((list) => (
                 <div key={list.id} className="flex items-center gap-2.5">
                 {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span key={list.name} className={` md:text-[16px] text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>{list.name}</span>
                 </div>
              ))}
            </div>
            <div className="pb-0 ">
          <button className={`mt-[20px] mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={` text-[16px] md:text-[22px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>Build Your Set</span>
            {/* <Image src={arrow} alt="Arrow Right" /> */}
            <ArrowRight color={ isDarkMode ? '#171717' : 'white'} />
              </button>
              </div>
            </div>
        </div>

    </section>
  );
};

export default Hero;
