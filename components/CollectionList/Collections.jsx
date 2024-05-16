"use client";
import React, { useEffect, useState } from "react";
import searchIcon from "@/public/assets/ic_outline-search.svg";
import ArrowSearch from "@/public/assets/ArrowSearch.svg";
import Image from "next/image";
import { AddToSet, Checked, Dropdown, Star12 } from "@/utils/Helpers";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Links, MenProducts, UnisexProducts, WomenProducts } from "@/utils/data";
import { useGlobal } from "@/utils/GlobalContext";
import Category from "./CollectionParts/Category";
import Pagination from "./CollectionParts/Pagination";
const Collections = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { selectedButton, setSelectedButton } = useGlobal();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (selectedButton) => {
    setSelectedButton(selectedButton);
  };
  const filteredProducts = selectedButton === 1
  ? Links.filter(product => product.scent && product.scent.toLowerCase().includes(searchQuery.toLowerCase()))
  : selectedButton === 2
  ? MenProducts.filter(product => product.scent && product.scent.toLowerCase().includes(searchQuery.toLowerCase()))
  : selectedButton === 3
  ? WomenProducts.filter(product => product.scent && product.scent.toLowerCase().includes(searchQuery.toLowerCase()))
  : selectedButton === 4
  ? UnisexProducts.filter(product => product.scent && product.scent.toLowerCase().includes(searchQuery.toLowerCase()))
  : [];
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = Links.filter(product => product.scent && product.scent.toLowerCase().includes(query.toLowerCase()));
    setSuggestions(filteredProducts);
    setSelectedIndex(-1); // Reset selected index when new search query is entered
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
      handleSearch(suggestions[selectedIndex].scent);
    }
  };

  useEffect(() => {
    // Close suggestions dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (e.target.closest(".suggestions") === null) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

console.log(searchQuery)
  return (
    <section>
      <div className="bg-collection bg-cover bg-center">
        <div className="max-w-container mx-auto">
          <div className="text-white text-base pt-[35px] font-medium inline-block cursor-pointer">
            Home / Perfumes
          </div>
          <div className="flex pt-[195px] pb-[60px] justify-center items-center">
            <div className=" flex-col items-start inline-flex mx-auto justify-center">
              <h3 className="text-white text-center text-5xl font-bold font-['Josefin Sans'] uppercase leading-[57.60px]">
                Find Your Scents
              </h3>
              <p className="text-white mt-[40px] text-2xl font-semibold font-['Josefin Sans'] leading-[28.80px]">
                Search by perfume
              </p>
              <div className="w-[464px] relative mt-[20px] border-b border-solid border-white justify-between gap-2.5 items-center inline-flex">
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
                        onClick={() => handleSearch(item.scent)}
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
      <div className={` ${isDarkMode ? "bg-primary" : "bg-white"}`}>
        <div className=" max-w-container lg:w-[90%] mx-auto">
          <div className="flex gap-[25px] py-[70px]">
            <div
              onClick={() => handleClick(1)}
              className="justify-start cursor-pointer items-start gap-2.5 inline-flex"
            >
              {selectedButton === 1 ? (
                <Checked color={isDarkMode ? "white" : "black"} />
              ) : (
                <div
                  className={`w-6 h-6 relative border ${
                    isDarkMode ? "border-white" : "border-[#28282AB2]"
                  }  rounded-[50%]`}
                />
              )}

              <div
                className={` ${
                  isDarkMode ? "text-white" : "text-black"
                } text-2xl font-semibold leading-[28.80px]`}
              >
                All
              </div>
            </div>
            <div
              onClick={() => handleClick(2)}
              className=" justify-start cursor-pointer items-start gap-2.5 inline-flex"
            >
              {selectedButton === 2 ? (
                <Checked color={isDarkMode ? "white" : "black"} />
              ) : (
                <div
                  className={`w-6 h-6 relative border ${
                    isDarkMode ? "border-white" : "border-[#28282AB2]"
                  }  rounded-[50%]`}
                />
              )}
              <div
                className={` ${
                  isDarkMode ? "text-white" : "text-black"
                } text-2xl font-semibold leading-[28.80px]`}
              >
                Men
              </div>
            </div>
            <div
              onClick={() => handleClick(3)}
              className=" justify-start cursor-pointer items-start gap-2.5 inline-flex"
            >
              {selectedButton === 3 ? (
                <Checked color={isDarkMode ? "white" : "black"} />
              ) : (
                <div
                  className={`w-6 h-6 relative border ${
                    isDarkMode ? "border-white" : "border-[#28282AB2]"
                  }  rounded-[50%]`}
                />
              )}
              <div
                className={` ${
                  isDarkMode ? "text-white" : "text-black"
                } text-2xl font-semibold leading-[28.80px]`}
              >
                Women
              </div>
            </div>
            <div
              onClick={() => handleClick(4)}
              className=" justify-start cursor-pointer items-start gap-2.5 inline-flex"
            >
              {selectedButton === 4 ? (
                <Checked color={isDarkMode ? "white" : "black"} />
              ) : (
                <div
                  className={`w-6 h-6 relative border ${
                    isDarkMode ? "border-white" : "border-[#28282AB2]"
                  }  rounded-[50%]`}
                />
              )}
              <div
                className={` ${
                  isDarkMode ? "text-white" : "text-black"
                } text-2xl font-semibold leading-[28.80px]`}
              >
                Unisex
              </div>
            </div>
          </div>
          <div>
            <span className="text-black text-5xl font-bold font-['Josefin Sans'] leading-[72px]">
              Meet Collection 1.
              <br />
            </span>
            <span className="text-black text-[32px] font-normal font-['Josefin Sans'] leading-[48px]">
              Confidence, now bottled with iconic designer-like scents.
            </span>
          </div>
         
          {selectedButton === 1 ? (
  // Display all products when selectedButton is set to 1 (All)
  <Category category={Links}/>
) : selectedButton === 2 ? (
  // Display men products when selectedButton is set to 2 (Men)
  <Category category={MenProducts}/>
) : selectedButton === 3 ? (
  // Display women products when selectedButton is set to 3 (Women)
  <Category category={WomenProducts}/>
) : selectedButton === 4 && (
  // Display unisex products when selectedButton is set to 4 (Unisex)
  <Category category={UnisexProducts}/>
)}
        </div>
      </div>
      <Pagination category={Links}/>
    </section>
  );
};

export default Collections;
