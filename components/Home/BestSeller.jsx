"use client"
import { useDarkMode } from '@/utils/DarkModeContext';
import { Remove, TopBottomArrow } from '@/utils/Helpers';
import { Links } from '@/utils/data';
// import { useGlobal } from '@/utils/globalContext';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import BestSellerSlider from './BestSellerSlider';
import Link from 'next/link';
import { useGlobal } from '@/utils/GlobalContext';

const BestSeller = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const {buttonStates, setButtonStates, quantities, setQuantities} = useGlobal()
    const [totalPrice, setTotalPrice] = useState(0);
    const [actualPrice, setActualPrice] = useState(0);
    const [shipping, setShipping] = useState(null)
    const [button, setButton] = useState(1)
    const [clicked, setClicked] = useState(false)
    const handleSwitchButton = (newButton) => {
      // Reset quantities to empty boxes when switching buttons
      const newQuantities = new Array(Links.length).fill(0);
      setQuantities(newQuantities);
    
      // Update the button state
      setButton(newButton);
    };
    const handleClick = (button) => {
      handleSwitchButton(button);
      };
      
    const handlePopup = () => {
      setClicked(!clicked);
      };
      useEffect(() => {
        // Calculate actualPrice and totalPrice when quantities change
        const calculatePrices = () => {
          const totalItems = quantities.reduce((acc, curr) => acc + curr, 0);
          let newActualPrice = 0;
          let newTotalPrice = 0;
      
          // Adjust prices based on the total number of items
          if (button === 1) { // For Subscribe & Save
            if (totalItems === 1) {
              newActualPrice = '';
              newTotalPrice = 40;
            } else if (totalItems === 2) {
              newActualPrice = 80;
              newTotalPrice = 60;
            } else if (totalItems >= 3) {
              newActualPrice = 120;
              newTotalPrice = 75;
            } else {
              newTotalPrice = 0;
            }
          } else if (button === 2) { // For One Time Purchase
            // Add your conditions here for one time purchase
            if (totalItems === 1) {
              newActualPrice = '';
              newTotalPrice = 45; // Example price for one item
              setShipping('Add 1 more to save £20')
            } else if (totalItems === 2) {
              newActualPrice = 90;
              newTotalPrice = 70; // Example price for two items
              setShipping('Add 1 more to save £45')
            } else if (totalItems === 3) {
              newActualPrice = 135;
              newTotalPrice = 90; // Example price for three or more items
              setShipping('Add 1 more to save £80')
            } 
            else if (totalItems === 4) {
              newActualPrice = 180;
              newTotalPrice = 100; // Example price for three or more items
              setShipping('You’ve unlocked max savings of £80! 🎉')
            }
            else if (totalItems >= 5) {
              newActualPrice = '';
              newTotalPrice =  45 * totalItems; // Example price for three or more items
              setShipping('No more savings here')
            }
            else {
              newTotalPrice = 0; // Default price if no items
              setShipping(null)
            }
          }
      
          setActualPrice(newActualPrice);
          setTotalPrice(newTotalPrice);
        };
      
        calculatePrices();
      }, [button, quantities]);

      const handleAddToSet = (index) => {
        setClicked(true);
        setQuantities((prevQuantities) => {
          const newQuantities = [...prevQuantities];
          const totalItems = newQuantities.reduce((acc, curr) => acc + curr, 0); // Calculate total items
      
          // Check if button is 1 or 2 to determine the maximum limit
          const maxLimit = button === 1 ? 3 : 10;
      
          // Check if total items is less than the maximum limit before incrementing quantity
          if (totalItems < maxLimit && newQuantities[index] < maxLimit) {
            newQuantities[index] += 1;
          } else {
            // If the maximum limit is reached, return early to prevent further execution
            // alert("You can only add a maximum of 3 items to your set.");
            return prevQuantities;
          }
          return newQuantities;
        });
        
      };
      const handleIncrement = (index) => {
        setQuantities((prevQuantities) => {
          const newQuantities = [...prevQuantities];
          const totalItems = newQuantities.reduce((acc, curr) => acc + curr, 0); // Calculate total items
      
          // Check if button is 1 or 2 to determine the maximum limit
          const maxLimit = button === 1 ? 3 : 10;
      
          // Check if total items is less than the maximum limit before incrementing quantity
          if (totalItems < maxLimit && newQuantities[index] < maxLimit) {
            newQuantities[index] += 1;
          } else {
            // If the maximum limit is reached, return early to prevent further execution
            // alert("You can only add a maximum of 3 items to your set.");
            return prevQuantities;
          }
          return newQuantities;
        });
      };
     const handleDecrement = (index) => {
  // Update the buttonStates array to remove the item at the specified index
  setButtonStates(prevStates => {
    const newButtonStates = [...prevStates];
    newButtonStates[index] = false; // Set the state to false to remove the item
    return newButtonStates;
  });
};
const handleRemoveItem = (index) => {
  // Update quantities array to decrease the quantity of the item at the specified index
  setQuantities((prevQuantities) => {
    const newQuantities = [...prevQuantities];
    // Decrease quantity by 1
    newQuantities[index] = Math.max(newQuantities[index] - 1, 0);
    return newQuantities;
  });

  // Update buttonStates array to indicate the item at the specified index is no longer selected
  setButtonStates((prevStates) => {
    const newButtonStates = [...prevStates];
    newButtonStates[index] = false;
    return newButtonStates;
  });
};


  return (
    <section className={isDarkMode ? 'bg-primary' : 'bg-white'}>
        <div className="lg:w-[95%] w-[90%] mx-auto lg:pt-[100px] pt-[30px]">
        <div className="lg:justify-between lg:items-center items-start flex lg:flex-row flex-col mb-[50px]">
    <div className="flex-col justify-start items-start lg:gap-2.5 inline-flex">
        <div className={` ${isDarkMode ? 'text-white' : 'text-zinc-800 '} 2xl:text-5xl lg:text-[38px] text-[20px] font-bold leading-[72px]`}>Best-sellers</div>
        <div className={`${isDarkMode ? 'text-white' : 'text-zinc-800 '} 2xl:text-[22px] lg:text-[18px] text-[12px] font-normal lg:leading-[33px]`}>Shop popular designer-like scents from Collection 1.</div>
    </div>
    <div className="justify-start items-center gap-2.5 mt-[10px] lg:mt-0 flex">
      <Link href='/collections' className='inline-block'>
        <button className={`${isDarkMode ? 'text-white' : 'text-zinc-800 '}  2xl:text-[22px] lg:text-[18px] text-[12px] font-semibold underline lg:leading-[33px]`}>View Collection 1</button>
      </Link>
    </div>
</div>
{/* SLider Component */}
        <BestSellerSlider handleAddToSet={handleAddToSet} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
     
        </div>
        <div className="w-full fixed bottom-0 z-[9999] ">
        <div onClick={handlePopup} className={`w-full select-none border border-solid cursor-pointer py-[5px] ${isDarkMode ? 'bg-zinc-800 ' : 'bg-neutral-900'} ${clicked ? 'border-white' : 'border-none'}  justify-center items-center gap-[5px] inline-flex`}>
    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-white'} text-base font-medium leading-tight`}>Your Cart</div>

    <TopBottomArrow className={!clicked ? 'rotate-[180deg]' : 'rotate-0'} color={isDarkMode ? 'white' : 'white'}/>
</div>
{
  clicked ? 
  
    
    <div className={`w-full  ${isDarkMode ? 'bg-[#28282A]' : 'bg-[#F4F4F4]'} py-[30px] `}>
      {/* Subscribe & Save */}
      {
        button === 1 ?
  <div className="mx-auto w-full md:flex-row md:justify-center lg:gap-5 md:gap-10 flex lg:flex-row flex-col justify-between items-center gap-5">
  <div className="w-[20%] 2xl:ml-[80px] lg:ml-[40px] lg:block hidden">
    <h3 className={`2xl:text-[32px] lg:text-[24px] not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Your Evoked Scents </h3>
    <h4 className={`mt-[10px] 2xl:text-xl lg:text-[16px] not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>build your set by adding 3</h4>
 
  </div>
  <div className={`lg:w-[40%] `}>
    <div className="flex gap-x-[20px] justify-center">

    {quantities.map((quantity, index) => (
  Array.from({ length: quantity }).map((_, boxIndex) => (
    <div key={`${index}${boxIndex}`} className={`2xl:w-[150px] 2xl:h-[150px] lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] border border-solid relative ${isDarkMode ? 'bg-primary border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.70)]' : 'bg-white border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_#171717]'}`}>
      {/* Render the image here */}
      <Image className='2xl:w-[70px] 2xl:h-[108.387px]  md:w-[50px] md:h-[76px] w-[25px] h-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={Links[index].link} alt="Selected Item" />
      <button onClick={() => handleRemoveItem(index)} className="absolute lg:top-[-10px] top-[-6px] right-[-8px] lg:right-[-11px]">
        <Remove className={`lg:w-auto lg:h-auto  md:top-[-7px] md:right-[-8px] h-[13px] w-[13px]`} rect={isDarkMode ? 'white' : '#171717'} color={isDarkMode ? '#171717' : 'white'} />
      </button>
    </div>
  ))
))}

    </div>

  </div>
  <div className="lg:w-[40%] flex flex-col justify-end items-center gap-[20px]">
  <div className="">
      <div
    className={` mx-auto inline-flex gap-2.5 lg:px-2.5 px-2 py-2 rounded-[var(--md,8px)] border  border-solid ${
      isDarkMode
        ? "border-white"
        : "border-[color:var(--black,#171717)]"
    }`}
  >
    <button
      onClick={()=> handleClick(1)}
      className={`flex justify-center items-center px-2.5 lg:px-5 py-2.5 rounded-[var(--md,8px)]  text-[14px] lg:text-lg not-italic font-normal leading-[normal]   ${
        button === 1 && `${isDarkMode ? 'bg-white text-[#454547]' : 'bg-primary text-white'}`
      } ${button === 2 && `bg-transparent  ${isDarkMode ? 'text-[#454547]' : 'text-[#28282A66]'}`} `}
    >
      Subscribe & Save
    </button>
    <button
      onClick={()=> handleClick(2)}
      className={` flex justify-center rounded-[var(--md,8px)] items-center px-2.5 lg:px-5 py-2.5 text-[14px] lg:text-lg not-italic leading-[normal] font-normal   ${
        button === 2 && `${isDarkMode ? 'bg-white text-[#454547]' : 'bg-primary text-white'}`
      } ${button === 1 && `bg-transparent  ${isDarkMode ? 'text-[#454547]' : 'text-[#28282A66]'}`}`}
    >
      One Time Purchase
    </button>
  </div>
      </div>
    <div className="lg:flex items-center 2xl:gap-x-[20px] lg:gap-x-[10px]">
      
      <h6 className={`2xl:text-base text-[14px] lg:block hidden not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Deliver every:</h6>
      <select className="w-auto px-2.5 py-[5px] outline-none rounded border border-neutral-900 justify-start items-center gap-[5px] inline-flex">
<option className="text-zinc-800 lg:text-lg text-[12px] font-normal ">1 month</option>
<option className="text-zinc-800 lg:text-lg text-[12px] font-normal ">2 months</option>
<option className="text-zinc-800 lg:text-lg text-[12px] font-normal ">3 months</option>
<option className="text-zinc-800 lg:text-lg text-[12px] font-normal ">4 months</option>
<option className="text-zinc-800 lg:text-lg text-[12px] font-normal ">5 months</option>
<option className="text-zinc-800 lg:text-lg text-[12px] font-normal ">6 months</option>
</select>
    </div>
    <div className="md:flex md:flex-col">
    <button className={`flex  2xl:w-[590px] lg:w-[100%] lg:gap-8 gap-7 w-auto justify-between items-center px-[20px] lg:px-[24px] lg:py-[12px] 2xl:px-[30px] 2xl:py-[18px] py-[12px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#FFF] bg-white' : 'shadow-[4px_4px_0px_0px_#171717] border-white bg-primary'}`}>
      <span className={` ${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[20px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>SUBSCRIBE NOW</span>


      {totalPrice || actualPrice > 0  ? (
                    <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[24px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>
                      <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[12px] lg:text-xl not-italic font-normal leading-[120%] line-through`}>
                        {actualPrice + ' '}
                      </span>
                      ${totalPrice}
                    </span>
                  )
                    :
                    (<span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[24px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>
                      $0
                    </span>)
                  }
    </button>
   
    </div>
  </div>
  </div> : null
      }
       {
        button === 2 ?
        <div className="mx-auto w-full md:flex-row md:justify-center lg:gap-5 md:gap-10 gap-5 flex lg:flex-row flex-col justify-between items-center">
         <div className="w-[14%] 2xl:ml-[80px] lg:ml-[40px] lg:block hidden">
    <h3 className={`2xl:text-[32px] lg:text-[24px] not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Your Evoked Scents </h3>
    <h4 className={`mt-[10px] 2xl:text-xl lg:text-[16px] not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>{shipping}</h4>
 
  </div>
        <div className={`2xl:w-[50%] lg:w-[56%]`}>
          <div className="flex flex-wrap gap-[20px] justify-center">
      
          {quantities.map((quantity, index) => (
        Array.from({ length: quantity }).map((_, boxIndex) => (
          <div key={`${index}${boxIndex}`} className={`2xl:w-[150px] 2xl:h-[150px] lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] border border-solid relative ${isDarkMode ? 'bg-primary border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.70)]' : 'bg-white border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_#171717]'}`}>
            {/* Render the image here */}
            <Image className='2xl:w-[70px] 2xl:h-[108.387px]  md:w-[50px] md:h-[76px] w-[25px] h-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={Links[index].link} alt="Selected Item" />
            <button onClick={() => handleRemoveItem(index)} className="absolute lg:top-[-10px] top-[-6px] right-[-8px] lg:right-[-11px]">
              <Remove className={`lg:w-auto lg:h-auto  md:top-[-7px] md:right-[-8px] h-[13px] w-[13px]`} rect={isDarkMode ? 'white' : '#171717'} color={isDarkMode ? '#171717' : 'white'} />
            </button>
          </div>
        ))
      ))}
      
          </div>
      
        </div>
        <div className="lg:w-[40%] flex flex-col justify-end items-center gap-[20px]">
  <div className="">
      <div
    className={` mx-auto inline-flex gap-2.5 lg:px-2.5 px-2 py-2 rounded-[var(--md,8px)] border  border-solid ${
      isDarkMode
        ? "border-white"
        : "border-[color:var(--black,#171717)]"
    }`}
  >
    <button
      onClick={()=> handleClick(1)}
      className={`flex justify-center items-center px-2.5 lg:px-5 py-2.5 rounded-[var(--md,8px)]  text-[14px] lg:text-lg not-italic font-normal leading-[normal]   ${
        button === 1 && `${isDarkMode ? 'bg-white text-[#454547]' : 'bg-primary text-white'}`
      } ${button === 2 && `bg-transparent  ${isDarkMode ? 'text-[#454547]' : 'text-[#28282A66]'}`} `}
    >
      Subscribe & Save
    </button>
    <button
      onClick={()=> handleClick(2)}
      className={` flex justify-center rounded-[var(--md,8px)] items-center px-2.5 lg:px-5 py-2.5 text-[14px] lg:text-lg not-italic leading-[normal] font-normal   ${
        button === 2 && `${isDarkMode ? 'bg-white text-[#454547]' : 'bg-primary text-white'}`
      } ${button === 1 && `bg-transparent  ${isDarkMode ? 'text-[#454547]' : 'text-[#28282A66]'}`}`}
    >
      One Time Purchase
    </button>
  </div>
      </div>
    <div className="lg:flex items-center 2xl:gap-x-[20px] lg:gap-x-[10px]">
      
    <h6 className={`lg:block hidden ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} 2xl:text-base text-[14px] not-italic font-normal leading-[normal]`}>Deliver within  <span className="font-bold 2xl:text-[18px] lg:text-[16px]">2-5 days</span></h6>
      
    </div>
    <div className="md:flex md:flex-col">
    <button className={`flex  2xl:w-[590px] lg:w-[100%] lg:gap-8 gap-7 w-auto justify-between items-center px-[20px] lg:px-[24px] lg:py-[12px] 2xl:px-[30px] 2xl:py-[18px] py-[12px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#FFF] bg-white' : 'shadow-[4px_4px_0px_0px_#171717] border-white bg-primary'}`}>
      <span className={` ${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[20px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>BUY NOW</span>

      {totalPrice || actualPrice > 0  ? (
                    <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[24px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>
                      <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[12px] lg:text-xl not-italic font-normal leading-[120%] line-through`}>
                        {actualPrice + ' '}
                      </span>
                      ${totalPrice}
                    </span>
                  )
                    :
                    (<span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[24px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>
                      $0
                    </span>)
                  }
    </button>
   
    </div>
  </div>
        </div> : null
      }
  </div> 
:
 null
}
     
          </div>
    </section>
  )
}

export default BestSeller