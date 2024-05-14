"use client"
import { useDarkMode } from '@/utils/DarkModeContext';
import { Remove, TopBottomArrow } from '@/utils/Helpers';
import { Links } from '@/utils/data';
import { useGlobal } from '@/utils/globalContext';
import Image from 'next/image';
import React, { useState } from 'react'
import BestSellerSlider from './BestSellerSlider';

const BestSeller = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const {buttonStates, setButtonStates} = useGlobal()
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToSet = (index) => {
      const clickedItem = Links[index];
    
      // Determine the maximum limit based on the selected button
      const maxLimit = button === 1 ? 3 : 10;
    
      // Check if the maximum limit has been reached
      if (buttonStates.filter(state => state).length < maxLimit) {
        setButtonStates(prevStates => {
          const newButtonStates = [...prevStates];
          newButtonStates[index] = !newButtonStates[index]; // Correct usage of index
          return newButtonStates;
        });
    
        // Add the clicked item to the selected items array
        setSelectedItems(prevItems => {
          const newItems = [...prevItems];
          newItems[index] = clickedItem; // Set the selected item at the correct index
          return newItems;
        });
    
        setClicked(true);
      } else {
        // Display a message indicating that the maximum limit has been reached
        alert(`Maximum limit of ${maxLimit} boxes reached.`);
      }
    };
  
    const [button, setButton] = useState(1)
    const [clicked, setClicked] = useState(false)
    const handleClick = (button) => {
        setButton(button);
      };
    const handlePopup = () => {
      setClicked(!clicked);
      };
      const handleIncrement = (index) => {
        // Determine the maximum limit based on the selected button
        const maxLimit = button === 1 ? 3 : 10;
      
        // Check if the maximum limit has been reached
        if (buttonStates.filter(state => state).length < maxLimit) {
          // Add the item to the selected items array
          const clickedItem = Links[index];
          setSelectedItems(prevItems => [...prevItems, clickedItem]);
      
          // Update the button state to indicate that the item is selected
          setButtonStates(prevStates => {
            const newButtonStates = [...prevStates];
            newButtonStates[index] = true;
            return newButtonStates;
          });
      
          setClicked(true);
        } else {
          // Display a message indicating that the maximum limit has been reached
          alert(`Maximum limit of ${maxLimit} boxes reached.`);
        }
      };
     const handleDecrement = (index) => {
  // Update the buttonStates array to remove the item at the specified index
  setButtonStates(prevStates => {
    const newButtonStates = [...prevStates];
    newButtonStates[index] = false; // Set the state to false to remove the item
    return newButtonStates;
  });
};
 const handleIncrementData = (itemData) => {
    // Handle the received data as needed
    console.log("Item Data:", itemData);
    // You can perform additional actions here, such as updating state with the received data
  };
    
  return (
    <section className={isDarkMode ? 'bg-primary' : 'bg-white'}>
        <div className="w-[95%] mx-auto pt-[100px]">
        <div className="justify-between items-center flex mb-[50px]">
    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
        <div className={` ${isDarkMode ? 'text-white' : 'text-zinc-800 '} text-5xl font-bold leading-[72px]`}>Best-sellers</div>
        <div className={`${isDarkMode ? 'text-white' : 'text-zinc-800 '} text-[22px] font-normal leading-[33px]`}>Shop popular designer-like scents from Collection 1.</div>
    </div>
    <div className="justify-start items-center gap-2.5 flex">
        <button className={`${isDarkMode ? 'text-white' : 'text-zinc-800 '} text-[22px] font-semibold underline leading-[33px]`}>View Collection 1</button>
    </div>
</div>
        <BestSellerSlider handleAddToSet={handleAddToSet} handleIncrement={handleIncrement} handleDecrement={handleDecrement}  handleIncrementData={handleIncrementData}/>
     
        </div>
        <div className="w-full fixed bottom-0 z-[9999] ">
        <div onClick={handlePopup} className={`w-full select-none cursor-pointer py-[5px] bg-neutral-900 justify-center items-center gap-[5px] inline-flex`}>
    <div className="text-center text-white text-base font-medium font-['Josefin Sans'] leading-tight">Your Cart</div>

    <TopBottomArrow className={!clicked ? 'rotate-[180deg]' : 'rotate-0'} color={isDarkMode ? '' : 'white'}/>
</div>
{
  clicked ? 
     <div className="w-full bg-[#F4F4F4] py-[30px] mx-auto md:flex-row md:justify-center lg:gap-5 md:gap-10 flex lg:flex-row flex-col justify-between items-center">
  <div className="w-[20%] 2xl:ml-[80px] lg:block hidden">
    <h3 className={`2xl:text-[32px] lg:text-[28px] not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Your Evoked Scents </h3>
    <h4 className={`mt-[10px] 2xl:text-xl lg:text-[18px] not-italic font-normal leading-[120%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>build your set by adding 3</h4>
 
  </div>
  <div className={`lg:w-[40%] `}>
    <div className="flex gap-x-[20px] justify-center">

    {buttonStates.map((state, index) => (
  state && (
    <div key={index} className={`2xl:w-[150px] 2xl:h-[150px] lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] border border-solid relative ${isDarkMode ? 'bg-primary border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.70)]' : 'bg-white border-[color:var(--black,#171717)] shadow-[2px_2px_0px_0px_#171717]'}`}>
      {/* Render the image here */}
      {selectedItems[index] && <Image src={selectedItems[index].link} alt="Selected Item" />}
      <button className="absolute lg:top-[-10px] top-[-6px] right-[-8px] lg:right-[-11px]">
        <Remove className={`lg:w-auto lg:h-auto  md:top-[-7px] md:right-[-8px] h-[13px] w-[13px]`} rect={isDarkMode ? 'white' : '#171717'} color={isDarkMode ? '#171717' : 'white'} />
      </button>
    </div>
  )
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
      <select className="w-auto px-2.5 py-[5px] rounded border border-neutral-900 justify-start items-center gap-[5px] inline-flex">
<option className="text-zinc-800 text-lg font-normal font-['Josefin Sans']">1 month</option>
<option className="text-zinc-800 text-lg font-normal font-['Josefin Sans']">2 months</option>
<option className="text-zinc-800 text-lg font-normal font-['Josefin Sans']">3 months</option>
<option className="text-zinc-800 text-lg font-normal font-['Josefin Sans']">4 months</option>
<option className="text-zinc-800 text-lg font-normal font-['Josefin Sans']">5 months</option>
<option className="text-zinc-800 text-lg font-normal font-['Josefin Sans']">6 months</option>
</select>
    </div>
    <div className="md:flex md:flex-col">
    <button className={`flex  2xl:w-[590px] lg:w-[100%] w-auto justify-between items-center px-[20px] lg:px-[24px] lg:py-[12px] 2xl:px-[30px] 2xl:py-[18px] py-[12px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#FFF] bg-white' : 'shadow-[4px_4px_0px_0px_#171717] border-white bg-primary'}`}>
      <span className={` ${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[20px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>SUBSCRIBE NOW</span>

      <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[24px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>
       

          <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[24px] 2xl:text-[32px] not-italic font-bold leading-[120%]`}>
            <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[10px] lg:text-xl not-italic font-normal leading-[120%] line-through`}>
            </span>
            $45
          </span>
      </span>
    </button>
   
    </div>
  </div>

</div>
:
 null
}
     
          </div>
    </section>
  )
}

export default BestSeller