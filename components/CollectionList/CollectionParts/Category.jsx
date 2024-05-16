"use client";
import React, { useState } from "react";
import searchIcon from "@/public/assets/ic_outline-search.svg";
import ArrowSearch from "@/public/assets/ArrowSearch.svg";
import Image from "next/image";
import { AddToSet, Checked, Dropdown, Star12 } from "@/utils/Helpers";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Links } from "@/utils/data";
import { useGlobal } from "@/utils/GlobalContext";
const Category = ({category}) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { selectedButton, setSelectedButton } = useGlobal();
    const [dropdownStates, setDropdownStates] = useState(
        Array(Links.length).fill({ ingredients: false, notes: false })
      );
    
      const toggleDropdown = (index, type) => {
        setDropdownStates((prevStates) => {
          const newDropdownStates = [...prevStates];
          newDropdownStates[index] = {
            ...newDropdownStates[index],
            [type]: !newDropdownStates[index][type],
          };
          return newDropdownStates;
        });
      };
  return (
    <div className="">
 <div className="flex items-start gap-10 flex-wrap">
            {category.map((item, index) => (
              <div
                key={item.link}
                className={`flex px-5 2xl:w-[415px] lg:w-[372px] cursor-pointer flex-col select-none items-center gap-[25px]  rounded-[var(--md,8px)]  border ${
                  isDarkMode
                    ? "border-white"
                    : "border-[color:var(--black,#171717)]"
                } border-solid `}
              >
                <div className="flex w-full mt-[20px] justify-between items-center">
                  <div
                    className={` px-2.5 py-[5px] rounded border  justify-center items-center gap-2.5 inline-flex ${
                      isDarkMode ? "border-white" : "border-neutral-900 "
                    }`}
                  >
                    <p
                      className={`uppercase text-sm font-normal ${
                        isDarkMode ? "text-white" : "text-zinc-800 "
                      }`}
                    >
                      {item.gender}
                    </p>
                  </div>
                  <span
                    className={`text-center ${
                      isDarkMode ? "text-white" : "text-zinc-800 "
                    } text-[28px] font-medium leading-[120%]`}
                  >
                    {item.price}
                  </span>
                </div>
                <div className="px-20 pb-[40px] flex flex-col select-none items-center gap-[25px]">
                  <Image
                    src={item.link}
                    alt="Perfume"
                    className={
                      "2xl:w-[150px] 2xl:h-[231.65px] lg:w-[120px] lg:h-[180px] w-[100px] h-[150px]"
                    }
                  />
                  <div className="flex flex-col justify-center ">
                    <span
                      className={`text-center text-[20px] ${
                        isDarkMode ? "text-white" : "text-[#28282A]"
                      } lg:text-[28px] not-italic font-medium leading-[120%]`}
                    >
                      {item.scent}
                    </span>
                    <div className="flex items-end mt-[10px] justify-center">
                      <div className="flex items-center ">
                        <Star12 color={isDarkMode ? "white" : "#28282A"} />
                        <Star12 color={isDarkMode ? "white" : "#28282A"} />
                        <Star12 color={isDarkMode ? "white" : "#28282A"} />
                        <Star12 color={isDarkMode ? "white" : "#28282A"} />
                        <Star12 color={isDarkMode ? "white" : "#28282A"} />
                      </div>
                      <span
                        className={` text-center ml-[5px] text-base leading-[75%] not-italic font-medium ${
                          isDarkMode
                            ? "text-white"
                            : "text-[color:var(--Brand,#28282A)] "
                        }`}
                      >
                        (123)
                      </span>
                    </div>
                    <div className=" w-[300px] mx-auto mt-[25px] flex flex-col justify-center">
                      <h6
                        className={` text-center text-[14px] lg:text-lg not-italic font-normal leading-[120%] ${
                          isDarkMode
                            ? "text-[#FFFFFFCC]"
                            : "text-[color:var(--Brand,#28282A)]"
                        }`}
                      >
                        {item.smell}
                      </h6>
                      <div
                        className={`inline-flex mt-[10px] mx-auto flex-col justify-center items-center  px-2.5 py-[5px] rounded-[var(--sm,4px)] border  border-solid ${
                          isDarkMode
                            ? "border-[#454547] text-[#FFFFFFCC]"
                            : "text-[#28282A] border-[color:var(--Brand,#28282A)]"
                        }`}
                      >
                        {/* Ingredients Button */}

                        <button
                          className={`flex w-48  justify-between items-center ${
                            isDarkMode ? "text-[#FFFFFFCC]" : "text-[#28282A]"
                          } text-center text-[14px] lg:text-lg not-italic leading-[120%] $ `}
                          onClick={() => toggleDropdown(index, "ingredients")}
                        >
                          Ingredients{" "}
                          <Dropdown color={isDarkMode ? "white" : "#28282A"} />{" "}
                        </button>
                        {dropdownStates[index].ingredients && (
                          <div
                            className={`flex w-48 lg:text-[14px] text-[12px] mt-[10px] items-center ${
                              isDarkMode ? "text-[#FFFFFFCC]" : "text-[#28282A]"
                            } text-start`}
                          >
                            {item.ingredients}
                          </div>
                        )}
                        <div className="w-[192px] h-[1px] bg-[#28282A] mx-auto my-[10px] "></div>

                        {/* Notes Button */}
                        <button
                          className={`flex w-48   justify-between items-center ${
                            isDarkMode ? "text-[#FFFFFFCC]" : "text-[#28282A]"
                          } text-center text-[14px] lg:text-lg not-italic leading-[120%]`}
                          onClick={() => toggleDropdown(index, "notes")}
                        >
                          Notes{" "}
                          <Dropdown color={isDarkMode ? "white" : "#28282A"} />
                        </button>
                        {dropdownStates[index].notes && (
                          <div
                            className={`flex w-48 lg:text-[14px] text-[12px] mt-[10px] items-center ${
                              isDarkMode ? "text-[#FFFFFFCC]" : "text-[#28282A]"
                            } text-start`}
                          >
                            {item.notes}
                          </div>
                        )}
                      </div>
                      {/* Buy now button */}
                      <button
                        className={`w-[220px] flex $ mx-auto items-center justify-center gap-2.5  text-center text-[16px] lg:text-2xl not-italic font-medium leading-[120%] px-5 py-[10px] rounded-[var(--sm,4px)]  mt-[25px] ${
                          isDarkMode
                            ? "bg-white text-primary"
                            : "bg-primary text-white"
                        }`}
                      >
                        Buy now
                      </button>
                      {/* Add to Set button */}
                      {/* {quantities[index] === 0 ? (
                        // If quantity is 0, show Add to Set button
                        <button
                          onClick={() => handleAddToSetClick(index)}
                          className={`w-[220px] flex  mx-auto items-center justify-center gap-2.5  text-center text-[16px] border border-solid lg:text-2xl  not-italic font-medium leading-[120%] px-5 py-[10px] rounded-[var(--sm,4px)]   mt-[25px] ${
                            isDarkMode
                              ? " bg-primary text-white"
                              : "bg-transparent text-[#28282A] border-[#171717]"
                          } `}
                        >
                          Add To Set
                          <AddToSet
                            color={isDarkMode ? "white" : "#28282A"}
                            rect={isDarkMode ? "#171717" : "white"}
                          />
                        </button>
                      ) : (
                        // If quantity is greater than 0, show quantity and increment/decrement buttons
                        <div className="flex items-center gap-[20px] justify-center mt-[25px]">
                          <button
                            className={`border border-solid  text-[22px] font-semibold  px-4 py-[9px] rounded-[var(--sm,4px)] ${
                              isDarkMode
                                ? "border-white text-white"
                                : "border-primary text-primary"
                            }`}
                            onClick={() => handleDecrementChild(index)}
                          >
                            -
                          </button>
                          <span
                            className={`text-primary text-[22px] font-semibold ${
                              isDarkMode ? " text-white" : " text-primary"
                            }`}
                          >
                            {quantities[index]}
                          </span>
                          <button
                            className={`border-primary border border-solid text-primary text-[22px] font-semibold  px-4 py-[9px] rounded-[var(--sm,4px)] ${
                              isDarkMode
                                ? "border-white text-white"
                                : "border-primary text-primary"
                            }`}
                            onClick={() => handleIncrementChild(index)}
                          >
                            +
                          </button>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Category;