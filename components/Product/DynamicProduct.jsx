'use client'
import { Links } from '@/utils/data';
import ProductSlider from './ProductSlider';
import CustomerChoice from './CustomerChoice';
import SuggestedProduct from './SuggestedProduct';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductAccordion from './ProductFAQ';
import { Car, PerfumeSpray, Piggy, Select, Unselect } from '@/utils/Helpers';
import { useDarkMode } from '@/utils/DarkModeContext';
import BundleBoxForProduct from './BundleBoxForProduct';
import { useGlobal } from '@/utils/GlobalContext';

const DynamicProduct = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const searchParams = useSearchParams();
    const [productData, setProductData] = useState(null);
    const {  setButtonStates, setQuantities, clicked, setClicked, button } = useGlobal();
    const [selectedButton, setSelectedButton] = useState(1);
    const [selectedButtonForBottle, setSelectedButtonForBottle] = useState(1);
    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };
    const handleButtonClickForBottle = (button) => {
        setSelectedButtonForBottle(button);
    };
    const handleAddToSet = (index) => {
        setQuantities((prevQuantities) => {
          const newQuantities = [...prevQuantities];
          const totalItems = newQuantities.reduce((acc, curr) => acc + curr, 0); 
          const maxLimit = button === 1 ? 3 : 10;
          if (totalItems < maxLimit && newQuantities[index] < maxLimit) {
            newQuantities[index] += 1;
          } else {
            //  alert("You can only add a maximum of 3 items to your set.");
            return prevQuantities;
          }
          return newQuantities;
        });
        
      };
      const handleIncrement = (index) => {
        setQuantities((prevQuantities) => {
          const newQuantities = [...prevQuantities];
          const totalItems = newQuantities.reduce((acc, curr) => acc + curr, 0);
          const maxLimit = button === 1 ? 3 : 10;
          if (totalItems < maxLimit && newQuantities[index] < maxLimit) {
            newQuantities[index] += 1;
          } else { 
            // alert("You can only add a maximum of 3 items to your set.");
            return prevQuantities;
          }
          return newQuantities;
        });
      };
       const handleDecrement = (index) => {
    setButtonStates(prevStates => {
      const newButtonStates = [...prevStates];
      newButtonStates[index] = false; 
      return newButtonStates;
    });
    };
    const options = [
        { value: '1', label: '1 month' },
        { value: '2', label: selectedButtonForBottle === 1 ? '2 month (Recommended)' : '2 month' },
        { value: '3', label: '3 month' },
        { value: '4', label: selectedButtonForBottle === 2 ? '4 month (Recommended)' : '4 month' },
        { value: '5', label: '5 month' },
        { value: '6', label: selectedButtonForBottle === 3 ? '6 month (Recommended)' : '6 month' },
      ]
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
  return (
    <section className={`overflow-x-hidden ${isDarkMode ? 'bg-primary' : 'bg-white'}`}>
<div className="2xl:max-w-container w-[90%] mx-auto">
    <div className="flex lg:flex-row flex-col items-start justify-center 2xl:gap-[120px] lg:gap-[60px] w-full lg:px-[60px] pt-[50px]">
<div className="lg:w-[40%] w-full">
<ProductSlider/>
</div>
<div className="lg:w-[60%] w-full">
<CustomerChoice/>
<div className="">

{/* Pricing For Subscibe and One-time-purchase */}
<div className="w-full">
        <div className="lg:py-[40px] ">
       
<div className={`w-full`}>
          <div className={`flex w-full cursor-auto flex-col items-start gap-5 lg:p-0 p-5 rounded-md  2xl:mt-[30px] `}>
                <div className="flex w-full flex-col gap-y-[20px]">
                <button
        onClick={() => handleButtonClick(1)}
        className={`flex flex-col items-center  justify-between  py-[15px] px-[15px] lg:px-[30px] rounded-[var(--md,8px)] border w-[100%]  border-solid ${isDarkMode ? 'border-white bg-primary' : 'border-[color:var(--black,#171717)] bg-[#F4F4F4]'}`}
      >
        <span className={`flex items-center justify-between w-full `}>
      <span className="flex items-center gap-x-[10px]">
      {
            selectedButton === 1 ? <Select color={isDarkMode ? 'white' : '#171717'}/> : <Unselect color={isDarkMode ? 'white' : '#171717'}/> 
        }
        <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[16px] lg:text-xl not-italic font-semibold leading-[normal]`}>Subscribe & Save</span>
      </span>
   
      </span>
      {
        selectedButton === 1 && (
            <div className={`flex flex-col w-full justify-center mt-[20px] items-start  border border-solid  ${isDarkMode ? 'border-white bg-brand' : 'border-black bg-white'}`}>
<div className="  justify-between items-start w-full flex">
    <div onClick={() => handleButtonClickForBottle(1)} className={`grow shrink basis-0 p-2.5 border-r ${isDarkMode ? 'border-white' : 'border-black'}  border-b ${selectedButtonForBottle === 1 ? isDarkMode ? 'border-white bg-white' : 'border-black bg-neutral-900' : 'border-black bg-transparent'} justify-center items-start gap-2.5 flex`}>
        <div className={`${selectedButtonForBottle === 1 ? isDarkMode ? 'text-zinc-800' : 'text-white' : isDarkMode ? 'text-white' : 'text-zinc-800'}  text-base font-normal font-['Josefin Sans']`}>1 Bottle</div>
    </div>
    <div onClick={() => handleButtonClickForBottle(2)} className={`grow shrink basis-0 p-2.5 border-r ${isDarkMode ? 'border-white' : 'border-black'}  border-b ${selectedButtonForBottle === 2 ? isDarkMode ? 'border-white bg-white' : 'border-black bg-neutral-900' : 'border-black bg-transparent'} justify-center items-start gap-2.5 flex`}>
        <div className={`text-center ${selectedButtonForBottle === 2 ? isDarkMode ? 'text-zinc-800' : 'text-white' : isDarkMode ? 'text-white' : 'text-zinc-800'} text-base font-normal font-['Josefin Sans']`}>2 Bottles</div>
    </div>
    <div onClick={() => handleButtonClickForBottle(3)} className={`grow shrink basis-0 p-2.5 ${isDarkMode ? 'border-white' : 'border-black'}  border-b ${selectedButtonForBottle === 3 ? isDarkMode ? 'border-white bg-white' : 'border-black bg-neutral-900' : 'border-black bg-transparent'} justify-center items-start gap-2.5 flex`}>
        <div className={`text-center ${selectedButtonForBottle === 3 ? isDarkMode ? 'text-zinc-800' : 'text-white' : isDarkMode ? 'text-white' : 'text-zinc-800'} text-base font-normal font-['Josefin Sans']`}>3 Bottles</div>
    </div>
</div>
            <div className={`flex flex-col cursor-auto justify-center items-start gap-[15px] lg:gap-[30px] self-stretch p-[20px] lg:px-[50px] lg:py-[20px] rounded-[var(--md,8px)]`}>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-x-[10px]">
                <p className={`lg:text-base text-[14px] not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--black,#171717)] '}`}>Deliver every:</p>
                <select name="" id="" className={`px-[5px] cursor-pointer lg:px-[10px] lg:w-auto lg:mt-0 mt-[10px] lg:text-[16px] text-[14px] w-[100%] py-[5px] bg-transparent border  rounded-[4px] outline-none ${isDarkMode ? 'border-white text-white' : 'border-[#28282A] text-[#28282A] '}`}>
                     
                      {options.map(({ value, label }) => (
                    <option className={`text-[color:var(--Brand,#28282A)] text-[12px] lg:text-[16px] not-italic font-normal leading-[normal]`} key={value} value={value} selected={selectedButtonForBottle === 1 && value === '2' ||
                      selectedButtonForBottle === 2 && value === '4' ||
                      selectedButtonForBottle === 3 && value === '6' ? true : false}>{label}</option>
                  ))
                  }
                  </select>
            </div>
            <div className=" flex-col justify-start items-start gap-[15px] flex">
    <span className={`${isDarkMode ? 'text-white' : 'text-neutral-900'} text-base font-normal font-['Josefin Sans']`}>What’s included:</span>
    <div className="flex-col justify-start items-start gap-2.5 flex">
        <span className={`${isDarkMode ? 'text-white' : 'text-neutral-900'} text-sm font-normal font-['Josefin Sans']`}>{`${selectedButtonForBottle === 1 ? 1 : selectedButtonForBottle === 2 ? 2 : 3} x 100ml perfumes (lasts 4 months)`}</span>
        <span className={`${isDarkMode ? 'text-white' : 'text-neutral-900'} text-sm font-normal font-['Josefin Sans']`}>{`${selectedButtonForBottle === 1 ? 1 : selectedButtonForBottle === 2 ? 2 : 3} x 5ml samples (free compliments)`}</span>
        <span className={`${isDarkMode ? 'text-white' : 'text-neutral-900'} text-sm font-normal font-['Josefin Sans']`}>£10 store credit towards future orders</span>
    </div>
</div>
        <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} w-full text-opacity-[0.7] flex justify-end text-base font-light font-['Josefin Sans']`}>{`${selectedButtonForBottle === 1 ? '£0.04' : selectedButtonForBottle === 2 ? '£0.03' : '£0.02'} per spray`}</span>
      </div>
            </div>
            
        )
      }
    
              </button> 
              <button
        onClick={() => handleButtonClick(2)}
        className={`flex flex-col items-center justify-between  py-[15px] px-[15px] lg:px-[30px] rounded-[var(--md,8px)] border border-[color:var(--black,#171717)] border-solid ${isDarkMode ? 'border-white bg-brand' : 'border-[color:var(--black,#171717)]'}`}
      >
        <span className={`inline-flex items-center justify-between w-full `}>
      <span className="flex items-center gap-x-[10px]">
      {
            selectedButton === 2 ? <Select color={isDarkMode ? 'white' : '#171717'}/> : <Unselect color={isDarkMode ? 'white' : '#171717'}/> 
        }
        <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[16px] lg:text-xl not-italic font-semibold leading-[normal]`}>One Time Purchase</span>
      </span>
      <span className={`${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} text-[18px] lg:text-2xl not-italic font-semibold leading-[normal]`}>£45</span>
      </span>
              </button>  
             {
                selectedButton === 1 && 
                ( <button className={`flex mt-[30px]  justify-between items-center px-[20px] lg:px-[30px] lg:py-[18px] py-[12px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#FFF] bg-white' : 'shadow-[4px_4px_0px_0px_#171717] border-white bg-primary'}`}>
                <span className={` ${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[22px] not-italic font-bold leading-[120%]`}>SUBSCRIBE NOW</span>
             
                <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[32px] not-italic font-bold leading-[120%] flex items-center`}>
           


  <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[16px] lg:text-[32px] not-italic font-bold leading-[120%]`}>
     <span className={`${isDarkMode ? 'text-[#28282A]' : 'text-white'} text-[10px] lg:text-[18px] not-italic font-normal leading-[120%] line-through`}>
          {`${selectedButtonForBottle === 1 ? '$45' : selectedButtonForBottle === 2 ? '$80' : '$120'}`} </span>{`${selectedButtonForBottle === 1 ? '$40' : selectedButtonForBottle === 2 ? '$60' : '$75'}`}
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
     $45
  </span>

</span>
              </button>)
             }
                </div>
            </div>
            </div>
          </div>
        </div>

        <div className={`flex lg:justify-between items-center justify-center self-stretch lg:px-10 py-5 rounded-[var(--md,8px)] bg-[#4545471a] 2xl:mt-[40px] lg:mt-[20px]`}>
    <div className={`flex lg:flex-row w-full flex-col items-center justify-between gap-y-[10px] lg:gap-y-0 lg:gap-x-[124.5px] overflow-hidden`}>
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

    <ProductAccordion/>
</div>
</div>
</div>
<div className="pt-[100px] w-full">
<div className="flex flex-col justify-start items-start gap-2.5 mb-[50px]">
    <div className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-5xl font-bold leading-72px`}>Love {scent} ? Pair up to build your set.</div>
    <div className="flex items-center gap-1">
        <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-base font-normal leading-33px`}>Customers frequently mix </span>
        <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-base font-bold leading-33px`}>{scent}</span>
        <span className={`${isDarkMode ? 'text-white' : 'text-zinc-800'} text-base font-normal leading-33px`}> with the perfumes below to make unique combinations...</span>
    </div>
</div>

    <SuggestedProduct handleAddToSet={handleAddToSet} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
    <BundleBoxForProduct />
</div>
</div>

    </section>
  );
};

export async function getStaticPaths() {
  const paths = Links.map(product => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = Links.find(item => item.id === params.id);

  return { props: { product } };
}


export default DynamicProduct;