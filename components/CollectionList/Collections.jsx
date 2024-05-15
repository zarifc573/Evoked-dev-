"use client";
import React, { useState } from "react";
import searchIcon from "@/public/assets/ic_outline-search.svg";
import ArrowSearch from "@/public/assets/ArrowSearch.svg";
import Image from "next/image";
import { AddToSet, Checked, Dropdown, Star12 } from "@/utils/Helpers";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Links } from "@/utils/data";
const Collections = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [selectedButton, setSelectedButton] = useState(1);
  const [buttonActive, setButtonActive] = useState(false);
  const handleClick = (buttonActive) => {
    setButtonActive(buttonActive);
  };
  
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
              <div className="w-[464px] mt-[20px] border-b border-solid border-white justify-between gap-2.5 items-center inline-flex">
                <Image src={searchIcon} alt="Icon" className="w-[9%]" />
                <input
                  type="text"
                  className="w-[86%] outline-none bg-transparent text-white text-[24px]"
                />
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
              {buttonActive === 1 ? (
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
              {buttonActive === 2 ? (
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
              {buttonActive === 3 ? (
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
              {buttonActive === 4 ? (
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
          <div className="flex items-start gap-10 flex-wrap">
            {Links.map((item, index) => (
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
      </div>
    </section>
  );
};

export default Collections;
