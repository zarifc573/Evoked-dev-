"use client";
import React, { useState } from "react";
import searchIcon from "@/public/assets/ic_outline-search.svg";
import ArrowSearch from "@/public/assets/ArrowSearch.svg";
import Image from "next/image";
import { Checked } from "@/utils/Helpers";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Links, MenProducts, UnisexProducts, WomenProducts } from "@/utils/data";
import { useGlobal } from "@/utils/GlobalContext";
import Category from "./CollectionParts/Category";
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function PaginatedItems({ items, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Category category={currentItems} />
      <ReactPaginate
        nextLabel={<span className="w-10 ml-4 h-10 flex items-center justify-center bg-gray-300 rounded">
          <BsChevronRight />
        </span>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<span className="w-10 mr-4 h-10 flex items-center justify-center bg-gray-300 rounded">
          <BsChevronLeft />
        </span>}
        containerClassName="flex items-center mt-8 mb-8 justify-center"
        pageClassName="block border border-solid border-gray-300 w-10 h-10 flex items-center justify-center rounded"
        activeClassName="bg-black text-white"
      />
    </>
  );
}
const Collections = () => {
  const { isDarkMode } = useDarkMode();
  const { selectedButton, setSelectedButton } = useGlobal();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedPerfumes, setSelectedPerfumes] = useState([]);

  const handleClick = (selectedButton) => {
    setSelectedButton(selectedButton);
    setSelectedPerfumes([]); // Reset selected perfumes when a new category is selected
    setSearchQuery(''); // Clear the search query when a new category is selected
  };

  const getProductsByCategory = (category) => {
    switch (category) {
      case 1:
        return Links;
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

  return (
    <section>
      <div className="bg-collection bg-cover bg-center">
        <div className="max-w-container mx-auto">
          <div className="text-white text-base pt-[35px] font-medium inline-block cursor-pointer">
            Home / Perfumes
          </div>
          <div className="flex pt-[195px] pb-[60px] justify-center items-center">
            <div className="flex-col items-start inline-flex mx-auto justify-center">
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
        <div className="max-w-container lg:w-[90%] mx-auto">
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
                className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-semibold leading-[28.80px]`}
              >
                All
              </div>
            </div>
            <div
              onClick={() => handleClick(2)}
              className="justify-start cursor-pointer items-start gap-2.5 inline-flex"
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
                className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-semibold leading-[28.80px]`}
              >
                Men
              </div>
            </div>
            <div
              onClick={() => handleClick(3)}
              className="justify-start cursor-pointer items-start gap-2.5 inline-flex"
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
                className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-semibold leading-[28.80px]`}
              >
                Women
              </div>
            </div>
            <div
              onClick={() => handleClick(4)}
              className="justify-start cursor-pointer items-start gap-2.5 inline-flex"
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
                className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-semibold leading-[28.80px]`}
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

          {/* {selectedPerfumes.length > 0 ? (
            <Category category={selectedPerfumes} />
          ) : (
            filteredProducts.length > 0 && <Category category={filteredProducts} />
          )} */}

      <PaginatedItems items={selectedPerfumes.length > 0 ? selectedPerfumes : filteredProducts} itemsPerPage={6} />
        </div>
      </div>
    </section>
  );
};

export default Collections;
