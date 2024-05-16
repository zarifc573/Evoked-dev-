"use client"
// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';
import { Links } from './data';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [buttonStates, setButtonStates] = useState(Array(Links.length).fill(false));
    const [selectedItems, setSelectedItems] = useState(Array(Links.length).fill(null));
    const [quantities, setQuantities] = useState(Array(Links.length).fill(0))
    const [clicked, setClicked] = useState(false)
    const [selectedButton, setSelectedButton] = useState(1);
  return (
    <GlobalContext.Provider value={{buttonStates, setButtonStates,selectedItems, setSelectedItems,quantities, setQuantities, clicked, setClicked, selectedButton, setSelectedButton}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
