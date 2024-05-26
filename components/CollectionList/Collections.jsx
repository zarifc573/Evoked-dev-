"use client";
import React, { useState } from "react";
import searchIcon from "@/public/assets/ic_outline-search.svg";
import ArrowSearch from "@/public/assets/ArrowSearch.svg";
import Image from "next/image";
import { useDarkMode } from "@/utils/DarkModeContext";
import { AllProducts, Links, MenProducts, UnisexProducts, WomenProducts } from "@/utils/data";
import { useGlobal } from "@/utils/GlobalContext";
import PaginatedItems from "./CollectionParts/Pagination";
import ToggleButton from "./CollectionParts/ToggleButton";
import BundleBox from "./CollectionParts/BundleBox";
import Link from "next/link";

const Collections = () => {
  const { isDarkMode } = useDarkMode();
  const { setButtonStates, setQuantities, setClicked, selectedButton, setSelectedButton, button, setButton } = useGlobal();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedPerfumes, setSelectedPerfumes] = useState([]);
  const handleClick = (selectedButton) => {
    setSelectedButton(selectedButton);
    setSelectedPerfumes([]); // Reset selected perfumes when a new category is selected
    setSearchQuery(''); // Clear the search query when a new category is selected
  };
  const getProductsByCategory = (selectedButton) => {
    switch (selectedButton) {
      case 1:
        return AllProducts;
      case 2:
        return MenProducts;
      case 3:
        return WomenProducts;
      case 4:
        return UnisexProducts;
      default:
        return [];
    }
  };

  const filteredProducts = getProductsByCategory(selectedButton).filter(product =>
    product.scent && product.scent.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setSelectedPerfumes([]); // Reset selected perfumes when search query is cleared
    }
    setSuggestions(filteredProducts);
    setSelectedIndex(-1); // Reset selected index when a new search query is entered
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      handleSelectSuggestion(suggestions[selectedIndex]);
    }
  };

  const handleSelectSuggestion = (perfume) => {
    setSearchQuery(perfume.scent);
    setSuggestions([]);
    setSelectedPerfumes([perfume]); // Only display the selected perfume
  };

  const handleMouseEnter = (index) => {
    setSelectedIndex(index);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(-1);
  };
  const handleAddToSet = (index, item) => {
    setClicked(true); // Assuming this is for some UI state change
    
    // Example logic to add item to set
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      const maxLimit = button === 1 ? 3 : 10; // Adjust based on your logic for max items in set
      
      if (newQuantities[index] < maxLimit) {
        newQuantities[index] += 1; // Increment quantity for the selected item
      } else {
        // Handle max limit reached scenario
        // alert("You can only add a maximum of 3 items to your set.");
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

  return (
    <section className={`${isDarkMode ? 'bg-primary' : 'bg-white'} pb-[10px] overflow-x-hidden
    `}>
      <div className="bg-collection bg-cover bg-center">
        <div className="lg:max-w-container w-[90%]  mx-auto">
          <div className="text-white text-base lg:mt-[35px] mt-[80px] font-medium inline-block cursor-pointer">
            <Link href='/' className="inline-block">Home</Link>/ Perfumes
          </div>
          <div className="flex lg:pt-[195px] pb-[60px] justify-center items-center">
            <div className="flex-col items-start inline-flex mx-auto justify-center">
              <h3 className="text-white text-center lg:text-5xl text-[26px] font-bold font-['Josefin Sans'] uppercase leading-[57.60px]">
                Find Your Scents
              </h3>
              <p className="text-white mt-[40px] lg:text-2xl text-[18px] font-semibold font-['Josefin Sans'] leading-[28.80px]">
                Search by perfume
              </p>
              <div className="lg:w-[464px] relative lg:mt-[20px] border-b border-solid border-white justify-between gap-2.5 items-center inline-flex">
                <Image src={searchIcon} alt="Icon" className="w-[9%]" />
                <input
                  type="text"
                  className="w-[86%] outline-none bg-transparent text-white text-[24px]"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                {searchQuery && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {suggestions.map((item, index) => (
                      <div
                        key={index}
                        className={`p-2 cursor-pointer ${
                          selectedIndex === index
                            ? "bg-gray-200"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => handleSelectSuggestion(item)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.scent}
                      </div>
                    ))}
                  </div>
                )}
                <Image src={ArrowSearch} alt="Arrow" className="w-[9%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isDarkMode ? "bg-primary" : "bg-white"}`}>
        <div className="2xl:max-w-container w-[90%]  mx-auto">
          <div className="flex flex-wrap items-center lg:justify-start justify-center lg:gap-[25px] gap-[20px] lg:py-[70px] py-[35px] ">
            <ToggleButton handleClick={() => handleClick(1)} selected={selectedButton === 1}  text="All"/>
            <ToggleButton handleClick={() => handleClick(2)} selected={selectedButton === 2}  text="Men"/>
            <ToggleButton handleClick={() => handleClick(3)} selected={selectedButton === 3}  text="Women"/>
            <ToggleButton handleClick={() => handleClick(4)} selected={selectedButton === 4}  text="Unisex"/>
          </div>
          <div className="flex flex-col lg:justify-start">
            <span className={` ${isDarkMode ? 'text-white' : 'text-black'} lg:text-5xl text-[24px] font-bold font-['Josefin Sans'] lg:leading-[72px] lg:text-start text-center`}>
              Meet Collection 1.
              <br />
            </span>
            <span className={`${isDarkMode ? 'text-white' : 'text-black'} lg:text-[32px] text-[18px] font-normal font-['Josefin Sans'] lg:leading-[48px] lg:text-start text-center`}>
              Confidence, now bottled with iconic designer-like scents.
            </span>
          </div>
<div className="lg:mt-[50px] mt-[30px]">
      <PaginatedItems items={selectedPerfumes.length > 0 ? selectedPerfumes : filteredProducts} itemsPerPage={8} handleAddToSet={handleAddToSet} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      </div>
        </div>
      </div>
     <BundleBox/>
    </section>
  );
};
export default Collections;
