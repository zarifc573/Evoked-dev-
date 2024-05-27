"use client"
import { useDarkMode } from "@/utils/DarkModeContext";
import { Checked } from "@/utils/Helpers";

const ToggleButton = ({ handleClick, selected, text }) => {
    const { isDarkMode } = useDarkMode();
    return (
        <div
        onClick={handleClick}
        className="justify-start cursor-pointer items-start lg:gap-2.5 gap-[5px] inline-flex"
      >
        {selected  ? (
          <Checked  color={isDarkMode ? "white" : "black"} />
        ) : (
          <div
            className={`lg:w-6 lg:h-6 w-[18px] h-[18px]  relative border ${
              isDarkMode ? "border-white" : "border-[#28282AB2]"
            }  rounded-[50%]`}
          />
        )}
        <div
          className={`${isDarkMode ? "text-white" : "text-black"} text-[18px] lg:text-2xl font-semibold leading-[28.80px]`}
        >
          {text}
        </div>
      </div>
    );
  };

  export default ToggleButton