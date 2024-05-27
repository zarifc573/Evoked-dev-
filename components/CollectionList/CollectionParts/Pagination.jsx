"use client"

import { useState } from "react";
import Category from "./Category";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDarkMode } from "@/utils/DarkModeContext";

const PaginatedItems = ({ items, itemsPerPage, handleAddToSet, handleIncrement, handleDecrement }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const { isDarkMode } = useDarkMode();
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
console.log(currentItems)
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Category
        category={currentItems}
        handleAddToSet={(index, item) => handleAddToSet(index, item)}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <ReactPaginate
        nextLabel={
          <span className={`w-10 ml-4 h-10 flex items-center justify-center ${isDarkMode ? "bg-white" : "bg-gray-300"} rounded`}>
            <BsChevronRight />
          </span>
        }
        previousLabel={
          <span className={`w-10 mr-4 h-10 flex items-center justify-center ${isDarkMode ? "bg-white" : "bg-gray-300"} rounded`}>
            <BsChevronLeft />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        containerClassName="flex lg:w-auto mx-auto w-[90%] items-center lg:mt-[100px] mt-[50px] gap-[10px] mb-8 justify-center"
        pageClassName="block border border-solid border-gray-300 w-10 h-10 flex items-center justify-center rounded"
        activeClassName={`bg-black text-white`}
        disabledClassName={`${isDarkMode ? "text-white" : "text-black"} opacity-50`}
      />
    </>
  );
};

export default PaginatedItems;